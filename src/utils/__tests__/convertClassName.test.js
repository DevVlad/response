import { convertClassName } from '../convertClassName.js';

describe('convertClassName for properly set', () => {
	const className = "col-xs-6 col-xs-offset-3 col-sm-6 col-md-5 col-md-push-3 col-md-offset-2 col-lg-6 col-lg-offset-0";
	it('xs', () => {
		expect(convertClassName('xs', 'xs', className)).toEqual('col-xs-6 col-xs-offset-3');
	});

	it('sm', () => {
		expect(convertClassName('sm', 'sm', className)).toEqual('col-xs-6');
	});

	it('md', () => {
		expect(convertClassName('md', 'md', className)).toEqual('col-xs-5 col-xs-push-3 col-xs-offset-2');
	});

	it('lg', () => {
		expect(convertClassName('lg', 'lg', className)).toEqual('col-xs-6 col-xs-offset-0');
	});

	it('combination with other className params', () => {
		expect(convertClassName('lg', 'lg', className + ' something other')).toEqual('col-xs-6 col-xs-offset-0 something other');
	});

});

// describe('convertClassName for generic set', () => {
// 	const className = "col-xs-6 col-xs-offset-3 visible-xs-block col-md-5 col-md-push-3 col-md-offset-2 visible-md-block something other";
// 	it('poor', () => {
// 		expect(convertClassName('xs', className)).toEqual('col-xs-6 col-xs-offset-3 visible-xs-block something other');
// 		expect(convertClassName('sm', className)).toEqual('col-xs-6 col-xs-offset-3 visible-xs-block something other');
// 		expect(convertClassName('md', className)).toEqual('col-xs-5 col-xs-push-3 col-xs-offset-2 visible-xs-block something other');
// 		expect(convertClassName('lg', className)).toEqual('col-xs-5 col-xs-push-3 col-xs-offset-2 visible-xs-block something other');
// 	});
// });

describe('convertClassName', () => {
	const className = "col-xs-6 col-xs-offset-3 visible-xs-block col-md-5 col-md-push-3 col-md-offset-2 visible-md-block something other";
	it('result', () => {
		expect(convertClassName('xs', 'xs', className)).toEqual('col-xs-6 col-xs-offset-3 visible-xs-block something other');
		expect(convertClassName('sm', 'sm', className)).toEqual('col-xs-6 col-xs-offset-3 something other');
		expect(convertClassName('md', 'md', className)).toEqual('col-xs-5 col-xs-push-3 col-xs-offset-2 visible-xs-block something other');
		expect(convertClassName('lg', 'lg', className)).toEqual('col-xs-5 col-xs-push-3 col-xs-offset-2 something other');
	});
});
