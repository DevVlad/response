import { getBrPoint, respClassHandler, defaultRespState } from '../respClassHandler.js';

describe('getBrPoint', () => {
	it ('xs', () => {
		expect(getBrPoint(10)).toEqual('xs');
		expect(getBrPoint(50)).toEqual('xs');
		expect(getBrPoint(90)).toEqual('xs');
		expect(getBrPoint(99)).toEqual('xs');
		expect(getBrPoint(100)).toEqual('xs');
	});

	it ('sm', () => {
		expect(getBrPoint(110)).toEqual('sm');
		expect(getBrPoint(150)).toEqual('sm');
		expect(getBrPoint(190)).toEqual('sm');
		expect(getBrPoint(199)).toEqual('sm');
		expect(getBrPoint(200)).toEqual('sm');
	});

	it ('md', () => {
		expect(getBrPoint(210)).toEqual('md');
		expect(getBrPoint(250)).toEqual('md');
		expect(getBrPoint(290)).toEqual('md');
		expect(getBrPoint(299)).toEqual('md');
		expect(getBrPoint(300)).toEqual('md');
	});

	it ('lg', () => {
		expect(getBrPoint(310)).toEqual('lg');
		expect(getBrPoint(350)).toEqual('lg');
		expect(getBrPoint(390)).toEqual('lg');
		expect(getBrPoint(399)).toEqual('lg');
		expect(getBrPoint(400)).toEqual('lg');
		expect(getBrPoint(750)).toEqual('lg');
		expect(getBrPoint(999)).toEqual('lg');
		expect(getBrPoint(1000)).toEqual('lg');
		expect(getBrPoint(1150)).toEqual('lg');
	});
});

describe('respClassHandler', () => {
	it ('col-md-6 col-sm-2, 100', () => {
		expect(respClassHandler("col-md-6 col-sm-2", getBrPoint(100))).toEqual(defaultRespState);
	});

	it ('col-xs-6 col-sm-2, 100', () => {
		expect(respClassHandler("col-xs-6 col-sm-2", getBrPoint(100))).toEqual('col-xs-6');
	});

	it ('col-xs-6 col-sm-2 col-lg-2, 700', () => {
		expect(respClassHandler("col-xs-6 col-sm-2 col-lg-2", getBrPoint(700))).toEqual('col-lg-2');
	});

	it ('col-xs-6 col-sm-2 col-lg-2, 50', () => {
		expect(respClassHandler("col-xs-6 col-sm-2 col-lg-2", getBrPoint(50))).toEqual('col-xs-6');
	});

	it ('col-xs-6 col-sm-2 col-lg-2, 220', () => {
		expect(respClassHandler("col-xs-6 col-sm-2 col-lg-2", getBrPoint(220))).toEqual('col-sm-2');
	});

	it ('col-md-6 col-sm-2, 350', () => {
		expect(respClassHandler("col-md-6 col-sm-2", getBrPoint(350))).toEqual('col-md-6');
	});

	it ('col-md-6 col-sm-2, 750', () => {
		expect(respClassHandler("col-md-6 col-sm-2 col-lg-2", getBrPoint(750))).toEqual('col-lg-2');
	});


});
