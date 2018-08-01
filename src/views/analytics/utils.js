import React from 'react';
import { css } from 'emotion';
import { ACC_API } from './../../../config';
import logs from './logsData';

const requestOpt = css`
	color: #252525;
	text-transform: uppercase;
	font-weight: 500;
	background-color: #00ff88;
	padding: 5px 10px;
	border-radius: 5px;
`;

export const popularFiltersCol = [
	{
		title: 'Polpular Filters',
		dataIndex: 'key',
		key: 'key',
	},
	{
		title: 'Impressions',
		dataIndex: 'count',
		key: 'count',
	},
	{
		title: 'Click Rate',
		dataIndex: 'clickrate',
		key: 'clickrate',
	},
];
export const popularResultsCol = [
	{
		title: 'Polpular Results',
		dataIndex: 'key',
		key: 'key',
	},
	{
		title: 'Impressions',
		dataIndex: 'count',
		key: 'count',
	},
	{
		title: 'Click Rate',
		dataIndex: 'clickrate',
		key: 'clickrate',
	},
];
export const defaultColumns = [
	{
		title: 'Search Terms',
		dataIndex: 'key',
		key: 'key',
	},
	{
		title: 'Total Queries',
		dataIndex: 'count',
		key: 'count',
	},
	{
		title: 'Click Rate',
		dataIndex: 'clickrate',
		key: 'clickrate',
	},
];
export const popularSearchesFull = [
	...defaultColumns,
	{
		title: 'Clicks',
		dataIndex: 'clicks',
		key: 'clicks',
	},
	{
		title: 'Click Position',
		dataIndex: 'clickposition',
		key: 'clickposition',
	},
	{
		title: 'Conversion Rate',
		dataIndex: 'conversionrate',
		key: 'conversionrate',
	},
];
const data = {
	body: {
		popularsearches: [
			{
				key: 'Iphone X',
				count: 23,
				clicks: 25,
				clickposition: 1.82, // won't be present in popularResults
				clickrate: 12.5,
				conversionrate: 1.35,
			},
			{
				key: 'Oculus VR',
				count: 12,
				clicks: 25,
				clickposition: 1.82, // won't be present in popularResults
				clickrate: 12.5,
				conversionrate: 1.35,
			},
			{
				key: 'One Plus',
				count: 5,
				clicks: 25,
				clickposition: 1.82, // won't be present in popularResults
				clickrate: 12.5,
				conversionrate: 1.35,
			},
		],
		noresults: [
			{
				key: 'Iphone 10',
				count: 15,
				clicks: 25,
				clickposition: 1.82, // won't be present in popularResults
				clickrate: 12.5,
				conversionrate: 1.35,
			},
			{
				key: 'Oclus VR',
				count: 5,
				clicks: 25,
				clickposition: 1.82, // won't be present in popularResults
				clickrate: 12.5,
				conversionrate: 1.35,
			},
			{
				key: 'One Plus',
				count: 12,
				clicks: 25,
				clickposition: 1.82, // won't be present in popularResults
				clickrate: 12.5,
				conversionrate: 1.35,
			},
		],
		searchvolume: [
			{
				key: 1531333800000,
				key_as_string: '2018-07-12T00:00:00.000Z',
				count: 101,
				clicks: 25,
				clickposition: 1.82, // won't be present in popularResults
				clickrate: 12.5,
				conversionrate: 1.35,
			},
			{
				key: 1531420200000,
				key_as_string: '2018-07-13T00:00:00.000Z',
				count: 89,
				clicks: 25,
				clickposition: 1.82, // won't be present in popularResults
				clickrate: 12.5,
				conversionrate: 1.35,
			},
			{
				key: 1531506600000,
				key_as_string: '2018-07-14T00:00:00.000Z',
				count: 115,
				clicks: 25,
				clickposition: 1.82, // won't be present in popularResults
				clickrate: 12.5,
				conversionrate: 1.35,
			},
			{
				key: 1531593000000,
				key_as_string: '2018-07-15T00:00:00.000Z',
				count: 55,
				clicks: 25,
				clickposition: 1.82, // won't be present in popularResults
				clickrate: 12.5,
				conversionrate: 1.35,
			},
			{
				key: 1531679400000,
				key_as_string: '2018-07-16T00:00:00.000Z',
				count: 76,
				clicks: 25,
				clickposition: 1.82, // won't be present in popularResults
				clickrate: 12.5,
				conversionrate: 1.35,
			},
			{
				key: 1531765800000,
				key_as_string: '2018-07-17T00:00:00.000Z',
				count: 110,
				clicks: 25,
				clickposition: 1.82, // won't be present in popularResults
				clickrate: 12.5,
				conversionrate: 1.35,
			},
			{
				key: 1531852200000,
				key_as_string: '2018-07-18T00:00:00.000Z',
				count: 125,
				clicks: 25,
				clickposition: 1.82, // won't be present in popularResults
				clickrate: 12.5,
				conversionrate: 1.35,
			},
		],
		popularFilters: [
			{
				key: 'category',
				value: 'apple',
				count: 3,
				clicks: 25,
				clickposition: 1.82, // won't be present in popularResults
				clickrate: 12.5,
				conversionrate: 1.35,
			},
			{
				key: 'since',
				value: '2016-2018',
				count: 2,
				clicks: 25,
				clickposition: 1.82, // won't be present in popularResults
				clickrate: 12.5,
				conversionrate: 1.35,
			},
		],
		popularResults: [
			{
				key: 'abcxyz',
				source: JSON.stringify({
					random: 'a',
					stuff: 'b',
				}),
				count: 35,
				clicks: 25,
				clickrate: 12.5,
				conversionrate: 1.35,
			},
			{
				key: '12341',
				source: JSON.stringify({
					random: 'a',
					stuff: 'b',
				}),
				count: 14,
				clicks: 25,
				clickrate: 12.5,
				conversionrate: 1.35,
			},
		],
	},
};
export const popularResultsFull = [
	...defaultColumns,
	{
		title: 'Clicks',
		dataIndex: 'clicks',
		key: 'clicks',
	},
	{
		title: 'Source',
		dataIndex: 'source',
		key: 'source',
	},
	{
		title: 'Conversion Rate',
		dataIndex: 'conversionrate',
		key: 'conversionrate',
	},
];
export const requestLogs = [
	{
		title: 'Operation',
		dataIndex: 'operation',
		key: 'operation',
		render: operation => (
			<div>
				<span css={requestOpt}>{operation.classifier}</span>
				<span css="color: #74A2FF;margin-left: 10px">{operation.uri}</span>
			</div>
		),
	},
	{
		title: 'Time',
		dataIndex: 'timeTaken',
		key: 'timeTaken',
	},
	{
		title: 'Status',
		dataIndex: 'status',
		key: 'status',
	},
];
/**
 * Get the analytics
 * @param {string} appName
 */
export function getAnalytics(appName) {
	return new Promise((resolve, reject) => {
		fetch(`${ACC_API}/${appName}/analytics/overview`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			// Comment out this line
			// .then(res => res.json())
			.then(() => {
				// resolve the promise with response
				resolve(data.body);
			})
			.catch((e) => {
				reject(e);
			});
	});
}
/**
 * Get the popular seraches
 * @param {string} appName
 */
export function getPopularSearches(appName) {
	return new Promise((resolve, reject) => {
		fetch(`${ACC_API}/${appName}/analytics/popularsearches`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			// Comment out this line
			// .then(res => res.json())
			.then(() => {
				// resolve the promise with response
				resolve(data.body.noresults);
			})
			.catch((e) => {
				reject(e);
			});
	});
}
/**
 * Get the no results seraches
 * @param {string} appName
 */
export function getNoResultSearches(appName) {
	return new Promise((resolve, reject) => {
		fetch(`${ACC_API}/${appName}/analytics/noresultsearches`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			// Comment out this line
			// .then(res => res.json())
			.then(() => {
				// resolve the promise with response
				resolve(data.body.noresults);
			})
			.catch((e) => {
				reject(e);
			});
	});
}
export function getPopularResults(appName) {
	return new Promise((resolve, reject) => {
		fetch(`${ACC_API}/${appName}/analytics/popularResults`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			// Comment out this line
			// .then(res => res.json())
			.then(() => {
				// resolve the promise with response
				resolve(data.body.popularResults);
			})
			.catch((e) => {
				reject(e);
			});
	});
}
export function getPopularFilters(appName) {
	return new Promise((resolve, reject) => {
		fetch(`${ACC_API}/${appName}/analytics/popularFilters`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			// Comment out this line
			// .then(res => res.json())
			.then(() => {
				// resolve the promise with response
				resolve(data.body.popularFilters);
			})
			.catch((e) => {
				reject(e);
			});
	});
}
// To fetch request logs
export function getRequestLogs(appName) {
	return new Promise((resolve, reject) => {
		fetch(`${ACC_API}/app/${appName}/logs`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			// Comment out this line
			// .then(res => res.json())
			.then(() => {
				// resolve the promise with response
				resolve(logs);
			})
			.catch((e) => {
				reject(e);
			});
	});
}
