import { breakPoints } from './convertClassName.js';

export const getBreakPoint = (width) => {
	//	values from bootstrap: http://getbootstrap.com/css/#grid
	if (width >= 1200) {
		return breakPoints[3];
	} else if (width >= 992) {
		return breakPoints[2];
	} else if (width >= 768) {
		return breakPoints[1];
	} else if (width < 768) {
		return breakPoints[0];
	}
 };
