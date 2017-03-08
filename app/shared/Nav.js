import React,{Component} from 'react';
import { Link, browserHistory } from 'react-router';

import { appbaseService } from '../service/AppbaseService';
import { eventEmitter, appListHelper } from './helper';
import { AppOwner } from './SharedComponents';

export default class Nav extends Component {

	constructor(props) {
		super(props);
		this.state = {
			activeApp: null,
			currentView: null,
			apps: appbaseService.userInfo && appbaseService.userInfo.body && appbaseService.userInfo.body.apps ? appListHelper.normalizaApps(appbaseService.userInfo.body.apps) : []
		};
		this.appLink = {
			label: 'Apps',
			link: 'apps',
			type: 'internal'
		};
		this.links = [{
			label: 'Document',
			link: 'https://opensource.appbase.io/reactivemaps-manual',
			type: 'external'
		}, {
			label: 'Tutorial',
			link: 'tutorial',
			type: 'internal'
		}, {
			label: 'Billing',
			link: 'billing',
			type: 'internal'
		}];
		this.currentActiveApp = null;
	}

	componentWillMount() {
		if(appbaseService.extra.nav) {
			this.setState(appbaseService.extra.nav, this.checkApps.bind(this));
		}
		this.listenEvent = eventEmitter.addListener('activeApp', (activeApp) => {
			this.setState(activeApp, this.checkApps.bind(this));
		});
	}

	componentWillUnmount() {
		if (this.listenEvent) {
			this.listenEvent.remove();
		}
	}

	checkApps() {
		if(this.state.activeApp && this.state.activeApp !== this.currentActiveApp) {
			this.currentActiveApp = this.state.activeApp;
			let apps = this.state.apps;
			appListHelper.getAll(apps, false, false, true).then((apps) => {
				this.setState({
					apps
				});
			}).catch((e) => {
				console.log(e);
			});
		}
	}

	renderElement(ele) {
		let generatedEle = null;
		switch (ele) {
			case 'appLink':
				const tempLink = this.state.activeApp ? '/'+this.appLink.link : this.appLink.link;
				generatedEle = (
					<li>
						<Link to={tempLink}>
							<i className="fa fa-cubes"></i>&nbsp;
							{this.appLink.label}
						</Link>
					</li>
				);
			break;
			case 'apps':
				if(this.state.apps && this.state.activeApp) {
					generatedEle = [];
					this.state.apps.forEach((app, index) => {
						let appLink = (
							<li key ={index}>
								<Link to={`/${this.state.currentView}/${app.name}`}>
									{app.name}
									<AppOwner app={app} />
								</Link>
							</li>
						);
						if(app !== this.state.activeApp) {
							generatedEle.push(appLink);
						}
					});
				}
			break;
			case 'currentApp': 
				if(this.state.activeApp) {
					generatedEle = (
						<li role="presentation" className="dropdown">
							<a className="dropdown-toggle apps-dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
								<i className="fa fa-chevron-right"></i>&nbsp;
								{this.state.activeApp}
							</a>
							<ul className="dropdown-menu pull-right">
								{this.renderElement('apps')}
							</ul>
						</li>
					);
				}
			break;
			case 'links':
				generatedEle = this.links.map((item, index) => {
					let anchor = (<a href={item.link} target="_blank">{item.label}</a>);
					if(item.type === 'internal') {
						const tempLink = this.state.activeApp ? '/'+item.link : item.link;
						anchor = (<Link to={tempLink}>{item.label}</Link>);
					}
					return (
						<li key={index}>
							{anchor}
						</li>
					);
				})
			break;
			case 'userImg':
				if(appbaseService.userInfo && appbaseService.userInfo.body && appbaseService.userInfo.body.details) {
					generatedEle = (
						<li>
							<button className="user-img" onClick={()=>this.logout()}>
								<span className="img-container">
									<img src={appbaseService.userInfo.body.details.picture} className="img-responsive" alt={appbaseService.userInfo.body.details.name} />
									<div className="close"><i className="fa fa-times"></i></div>
								</span>
							</button>
						</li>
					);
				}
			break;
		}
		return generatedEle;
	}

	logout() {
		appbaseService.logout();
	}

	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<Link to="/apps" className="navbar-brand" >
							<img src="../../../assets/images/logo.png" alt="" className="img-responsive"/>
							<span>Reactive Maps</span>
						</Link>
					</div>
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav pull-left">
							{this.renderElement('appLink')}
							{this.renderElement('currentApp')}
						</ul>
						<ul className="nav navbar-nav pull-right">
							{this.renderElement('links')}
							{this.renderElement('userImg')}
						</ul>
					</div>
				</div>
			</nav>
		);
	}

}