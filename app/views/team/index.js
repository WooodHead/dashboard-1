import React, { Component } from 'react';
import classNames from 'classnames';
import { appbaseService } from '../../service/AppbaseService';
import ShareCard from './ShareCard';
import NewShare from './NewShare';
import AppPage from '../../shared/AppPage';

const InitialShare = (props) => {
	return (
		<p className="col-xs-12 ad-initial-share">
			You don't have team members yet.
			{
				appbaseService.isMyApp(props.info) ? (
					<a onClick={props.newShareInit}> <i className="fa fa-plus"></i> Add</a>
				) : null
			}
		</p>
	);
}

const ShareOwner = (props) => {
	return (
		<p>
			This app has been shared by {props.owner}.
		</p>
	);
}

export default class Team extends Component {
	constructor(props, context) {
		super(props);
		this.state = {
			info: null,
			newShareExpand: false
		};
		this.getInfo = this.getInfo.bind(this);
		this.newShare = this.newShare.bind(this);
		this.newShareInit = this.newShareInit.bind(this);
	}

	componentWillMount() {
		this.stopUpdate = false;
		this.initialize(this.props);
	}

	componentWillUnmount() {
		this.stopUpdate = true;
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.params.appId != this.appName) {
			this.initialize(nextProps);
		}
	}

	initialize(props) {
		this.appName = props.params.appId;
		this.appId = appbaseService.userInfo.body.apps[this.appName];
		this.getInfo();
	}

	getInfo() {
		this.info = {};
		appbaseService.getShare(this.appId).then((data) => {
			this.info.share = data;
			if(!this.stopUpdate) {
				this.setState({ info: this.info });
			}
		});
		appbaseService.getAppInfo(this.appId).then((data) => {
			this.info.appInfo = data.body;
			if (!this.stopUpdate) {
				this.setState({ info: this.info });
			}
		});
	}

	newShareInit() {
		this.setState({
			newShareExpand: true
		});
	}

	newShare(request) {
		appbaseService.newShare(this.appId, request).then((data) => {
			this.getInfo();
		});
	}

	renderElement(method) {
		let element = null;
		switch(method) {
			case 'share':
				if(this.state.info && this.state.info.share) {
					if(this.state.info.share.body.length) {
						element = this.state.info.share.body.map((shareInfo, index) => {
							return (
								<ShareCard
									appId={this.appId}
									key={index}
									shareInfo={shareInfo}
									getInfo={this.getInfo}
								/>
							);
						})
					} else {
						element = (<InitialShare info={this.state.info} newShareInit={this.newShareInit}></InitialShare>);
					}
				}
			break;
		}
		return element;
	}

	render() {
		const cx = classNames({
			"col-sm-4 col-md-6 col-lg-6": this.state.info && this.state.info.appInfo && this.state.info.appInfo.owner === appbaseService.userInfo.body.email
		});
		return (
			<AppPage
				pageInfo={{
					currentView: 'team',
					appName: this.appName,
					appId: this.appId
				}}
			>
				<div className="ad-detail-page row" id="team-page">
					<header className="ad-detail-page-header header-inline-summary col-xs-12">
						<div className={`col-xs-12 p-0 ${cx}`}>
							<h2 className="ad-detail-page-title">Team</h2>
							{
								this.state.info && this.state.info.appInfo && this.state.info.appInfo.owner !== appbaseService.userInfo.body.email ? (
									<ShareOwner owner={this.state.info.appInfo.owner}></ShareOwner>
								) : (<p>Manage who can access your app data.</p>)
							}
						</div>
						<aside className="ad-detail-page-header-sidebar col-xs-12 col-sm-8 col-md-6 col-lg-6">
							{
								appbaseService.isMyApp(this.state.info) ? (
									<NewShare newShare={this.newShare} newShareExpand={this.state.newShareExpand} />
								) : null
							}
						</aside>
					</header>
					<main className="ad-detail-page-body col-xs-12">
						<div className="page-body col-xs-12">
						{
							this.state.info && this.state.info.appInfo && this.state.info.appInfo.owner === appbaseService.userInfo.body.email ? (
								<section className="ad-detail-page-body-card col-xs-12 p-0">
									<header className="ad-detail-page-body-card-title with-border">
										Team Members
									</header>
									<main className="ad-detail-page-body-card-body col-xs-12 p-0">
										{this.renderElement('share')}
									</main>
								</section>
							) : null
						}
						</div>
					</main>
				</div>
			</AppPage>
		);
	}
}
