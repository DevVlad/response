const breakPoints = ['xs', 'sm', 'md', 'lg'];

const getNearPossibleBreakPoint = (breakPoint, className) => {
	if (new RegExp(breakPoint).test(className)) {
		return breakPoint;
	} else {
		const breakPointI = breakPoints.indexOf(breakPoint);
		const reg = new RegExp(`${breakPoints.slice(0, breakPointI).join('|')}`);
		let res;
		if (breakPointI > 0) {
			className.split(' ').forEach(cn => {
				const isThereAnyLower = reg.test(cn);
				if (isThereAnyLower) res = /-(\w+)/.exec(cn)[1];
			});
		} else {
			res = breakPoints[0];
		}
		return res;
	}
};

export const convertClassName = (breakPoint, className) => {
	const nearBP = getNearPossibleBreakPoint(breakPoint, className);
	const regCn = new RegExp(`.*-${nearBP}-.*`);
	const regCnElse = new RegExp(`.*-${breakPoints.join('|')}-.*`);
	let bpClassesArr = [];
	let restClassesArr = [];
	className.split(' ').forEach(cn => {
		if (regCn.test(cn)) {
			bpClassesArr.push(cn);
		} else {
			if (!regCnElse.test(cn)) restClassesArr.push(cn);
		}
	});
	if (bpClassesArr.length > 0) {
		return [ ...bpClassesArr, ...restClassesArr].join(' ').trim();
	} else {
		return restClassesArr.join(' ').trim();
	}
};
