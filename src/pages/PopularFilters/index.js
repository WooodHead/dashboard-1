import React from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PopularFilters from '../../batteries/components/analytics/components/PopularFilters';

const PopularFiltersWrapper = ({ appName, plan }) => (
	<PopularFilters appName={appName} plan={plan} />
);

PopularFiltersWrapper.propTypes = {
	appName: PropTypes.string.isRequired,
	plan: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
	appName: get(state, '$getCurrentApp.name'),
	plan: get(state, '$getAppPlan.plan'),
});
export default connect(mapStateToProps)(PopularFiltersWrapper);
