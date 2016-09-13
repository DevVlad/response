import { convertClassNameB, convertClassNameFBG } from '../convertClassName.js';

describe('convertClassNameB for properly set', () => {
	const className = "col-xs-6 col-xs-offset-3 col-sm-6 col-md-5 col-md-push-3 col-md-offset-2 col-lg-6 col-lg-offset-0";
	it('xs', () => {
		expect(convertClassNameB('xs', 'xs', className)).toEqual('col-xs-6 col-xs-offset-3');
	});

	it('sm', () => {
		expect(convertClassNameB('sm', 'sm', className)).toEqual('col-xs-6');
	});

	it('md', () => {
		expect(convertClassNameB('md', 'md', className)).toEqual('col-xs-5 col-xs-push-3 col-xs-offset-2');
	});

	it('lg', () => {
		expect(convertClassNameB('lg', 'lg', className)).toEqual('col-xs-6 col-xs-offset-0');
	});

	it('combination with other className params', () => {
		expect(convertClassNameB('lg', 'lg', className + ' something other')).toEqual('col-xs-6 col-xs-offset-0 something other');
	});

});

describe('convertClassNameB', () => {
	const className = "col-xs-6 col-xs-offset-3 visible-xs-block col-md-5 col-md-push-3 col-md-offset-2 visible-md-block something other";
	it('result', () => {
		expect(convertClassNameB('xs', 'xs', className)).toEqual('col-xs-6 col-xs-offset-3 visible-xs-block visible-md-block something other');
		expect(convertClassNameB('sm', 'sm', className)).toEqual('col-xs-6 col-xs-offset-3 visible-sm-block visible-md-block something other');
		expect(convertClassNameB('md', 'md', className)).toEqual('col-xs-5 col-xs-push-3 col-xs-offset-2 visible-md-block visible-xs-block something other');
		expect(convertClassNameB('lg', 'lg', className)).toEqual('col-xs-5 col-xs-push-3 col-xs-offset-2 visible-lg-block visible-xs-block something other');
		expect(convertClassNameB('xs', 'md', className)).toEqual('col-xs-6 col-xs-offset-3 visible-md-block visible-lg-block something other');
		expect(convertClassNameB('xs', 'lg', className)).toEqual('col-xs-6 col-xs-offset-3 visible-lg-block visible-md-block something other');
	});
});

describe('convertClassNameFBG for properly set', () => {
	const className = "col-xs-12 hidden-xs around-xs col-sm-4 middle-sm col-md-4 col-lg-12";
	it('xs', () => {
		expect(convertClassNameFBG('xs', 'xs', className)).toEqual('no-render');
	});

	it('sm', () => {
		expect(convertClassNameFBG('sm', 'sm', className)).toEqual('col-xs-4 middle-xs');
	});

	it('md', () => {
		expect(convertClassNameFBG('md', 'md', className)).toEqual('col-xs-4');
	});

	it('lg', () => {
		expect(convertClassNameFBG('lg', 'lg', className)).toEqual('col-xs-12');
	});

	it('combination with other className params', () => {
		expect(convertClassNameFBG('lg', 'lg', className + ' something other')).toEqual('col-xs-12 something other');
	});
});

describe('convertClassNameFBG', () => {
	const className = "col-xs-6 col-xs-offset-3 visible-xs col-md-5 col-md-push-3 col-md-offset-2 visible-md visible-sm col-sm-4 col-lg-12 hidden-lg something other";
	it('result', () => {
		expect(convertClassNameFBG('xs', 'xs', className)).toEqual('col-xs-6 col-xs-offset-3 visible-xs something other');
		expect(convertClassNameFBG('sm', 'sm', className)).toEqual('visible-sm col-xs-4 something other');
		expect(convertClassNameFBG('md', 'md', className)).toEqual('col-xs-5 col-xs-push-3 col-xs-offset-2 visible-md something other');
		expect(convertClassNameFBG('lg', 'lg', className)).toEqual('no-render');
		expect(convertClassNameFBG('xs', 'md', className)).toEqual('col-xs-6 col-xs-offset-3 visible-md something other');
		expect(convertClassNameFBG('xs', 'lg', className)).toEqual('col-xs-6 col-xs-offset-3 visible-lg something other');
	});
});
