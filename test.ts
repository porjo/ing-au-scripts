// replace with your account details
const CLIENT_NUMBER = '12341234'
const ACCESS_CODE = '1234'
const ACCOUNT_NUMBER = '12341234'

const axios = require('axios')
const qs = require('qs')
const moment = require('moment')
const puppeteer = require('puppeteer')
const { login } = require('ing-au-login')

;(async () => {
	var browser
	var page
	try {
		browser = await puppeteer.connect({ browserWSEndpoint: 'ws://puppeteer:3000' });
		page = await browser.newPage()
	} catch (err) {
		console.log(err)
	}
	const authToken = await login(page, CLIENT_NUMBER, ACCESS_CODE)

	const csv = await fetchLast30Days(ACCOUNT_NUMBER, authToken)

	console.log(csv)

	await browser.close()
})()

function fetchLast30Days(accountNumber, authToken) {
	const url =
		'https://www.ing.com.au/api/ExportTransactions/Service/ExportTransactionsService.svc/json/ExportTransactions/ExportTransactions'
	const data = {
		'X-AuthToken': authToken,
		AccountNumber: accountNumber,
		Format: 'csv',
		FilterStartDate: moment()
		.subtract(30, 'days')
		.format('YYYY-MM-DDTHH:mm:ssZZ'),
		FilterEndDate: moment()
		.add(1, 'days')
		.format('YYYY-MM-DDTHH:mmssZZ'),
		IsSpecific: 'false',
	}
	return axios.post(url, qs.stringify(data)).then(response => response.data)
}
