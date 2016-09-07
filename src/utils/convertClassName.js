const breakPoints = ['xs', 'sm', 'md', 'lg'];

const getNearPossibleBreakPoint = (className, breakPoint) => {
	if (new RegExp(breakPoint).test(className)) {
		return breakPoint;
	} else {
		const breakPointI = breakPoints.indexOf(breakPoint);
		let res;
		if (breakPointI > 0) {
			className.split(' ').forEach(cln => {
				const isThereAnyLower = new RegExp(`${breakPoints.slice(0, breakPointI).join('|')}`).test(cln);
				if (!res && isThereAnyLower) {
					res = /col-(\w+)/.exec(cln)[1];
				}
			});
		} else {
			res = breakPoints[0];
		}
		return res;
	}
};

export const convertClassName = (breakPoint, className) => {
	const nearBP = getNearPossibleBreakPoint(className, breakPoint);
	let bpClassesArr = [];
	let restClassesArr = [];
	className.split(' ').forEach(cn => {
		if (new RegExp(`col-${nearBP}`).test(cn)) {
			bpClassesArr.push(cn);
		} else {
			if (!/col-/.test(cn)) restClassesArr.push(cn);
		}
	});
	if (bpClassesArr.length > 0) {
		return [ ...bpClassesArr, ...restClassesArr].join(' ');
	} else {
		return restClassesArr.join(' ');
	}
};
