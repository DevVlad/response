export const defaultRespState = "col-xs-12";

export const breakPoints = {
	xs: 100,
	sm: 200,
	md: 300,
	lg: 1000
};

export const getBrPoint = (width) => {
	let res;
	Object.keys(breakPoints).forEach( bp => {
		if (width <= breakPoints[bp] && !res) {
			res = bp;
		}
	});
	return width/breakPoints.lg > 1 ? 'lg' : res;
};

const getNearBp = (classNames, respState) => {
	const bpKeys = Object.keys(breakPoints);
	const respStateI = bpKeys.indexOf(respState);
	let res;
	if (respStateI > 0) {
		classNames.forEach(cln => {
			if (new RegExp(bpKeys[respStateI - 1]).test(cln)) res = cln;
		});
	}
	return res;
};

export const respClassHandler = (className, respState) => {
	const isRespState = new RegExp(`(col-${respState}-(\\d{1,2}))`).exec(className);
	//	respState is inClassName or not
	if (isRespState) {
		return isRespState[1];
	} else {
		const near = getNearBp(className.match(/col-(\w+)-(\d{1,2})/g), respState);
		if (near) {
			return near;
		} else {
			return defaultRespState;
		}
	}
};
