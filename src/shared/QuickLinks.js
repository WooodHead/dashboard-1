import React from 'react';

export const AppbaseQuickLinks = () => (
	<ul className="quick-links-list" style={{ fontSize: '1.1rem' }}>
		<li>
			<i className="fas fa-external-link-alt" />
			<a
				href="http://docs.appbase.io/javascript/quickstart.html"
				target="_blank"
				rel="noopener noreferrer"
			>
				JS Quick Start
			</a>
		</li>
		<li>
			<i className="fas fa-external-link-alt" />
			<a
				href="http://docs.appbase.io/rest-quickstart.html"
				target="_blank"
				rel="noopener noreferrer"
			>
				REST Quick Start
			</a>
		</li>
		<li>
			<i className="fas fa-external-link-alt" />
			<a
				href="https://docs.appbase.io/interactive/javascript.html"
				target="_blank"
				rel="noopener noreferrer"
			>
				Interactive Examples
			</a>
		</li>
	</ul>
);

export const AppbaseDashboardGettingStarted = () => (
	<div className="ad-dashboard-getting-started-container row">
		<div className="col-xs-12 col-sm-6">
			<section className="ad-detail-page-body-card getting-started col-xs-12 p-0">
				<header className="ad-detail-page-body-card-title col-xs-12">Tutorial</header>
				<div className="ad-detail-page-body-card-body col-xs-12">
					<p>
						Try out the{' '}
						<a href="/tutorial">
							<i className="fas fa-external-link-square-alt" />&nbsp;interactive
							tutorial
						</a>{' '}
						for adding your first data to the app.
					</p>
				</div>
			</section>
		</div>
		<div className="col-xs-12 col-sm-6">
			<section className="ad-detail-page-body-card getting-started col-xs-12 p-0">
				<header className="ad-detail-page-body-card-title col-xs-12">
					Getting Started
				</header>
				<div className="ad-detail-page-body-card-body col-xs-12">
					<p>
						Check out our onboarding guides for how to use the APIs for adding data.
						<ul>
							<li>
								<a
									href="http://docs.appbase.io/javascript/quickstart.html"
									target="_blank"
								>
									JS Quick Start
								</a>
							</li>
							<li>
								<a
									href="http://docs.appbase.io/rest-quickstart.html"
									target="_blank"
								>
									REST Quick Start
								</a>
							</li>
							<li>
								<a href="/browser">Try databrowser</a>
							</li>
						</ul>
					</p>
				</div>
			</section>
		</div>
	</div>
);
