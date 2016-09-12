export const breakPoints = ['xs', 'sm', 'md', 'lg'];
const colAppendixs = ['offset', 'push', 'pull'];
const colReplacers = ['visible', 'hidden'];
const colReplacersAppendixs = ['block', 'inline', 'inline-block'];

const regCols = new RegExp(`col-(${breakPoints.join('|')})-((${colAppendixs.join('|')})-(\\d{1,2}))?(\\d{1,2})?`);
const regColReplacers = new RegExp(`(${colReplacers.join('|')})-(${breakPoints.join('|')})-(${colReplacersAppendixs.join('|')})`);
const regBreakPoints = new RegExp(`(${breakPoints.join('|')})`);

const smallestBreakPoint = breakPoints[0];

const getNearPossibleBreakPoint = (breakPoint, className) => {
	if (new RegExp(breakPoint).test(className)) {
		return breakPoint;
	} else {
		const breakPointI = breakPoints.indexOf(breakPoint);
		const prevBreakPoints = new RegExp(`${breakPoints.slice(0, breakPointI).join('|')}`);
		let res;
		if (breakPointI > 0) {
			className.split(' ').forEach(cn => {
				const isThereAnyLower = prevBreakPoints.test(cn);
				const lowerBP = /col-(\w+)/.exec(cn);
				if (isThereAnyLower && lowerBP) res = lowerBP[1];
			});
		} else {
			res = smallestBreakPoint;
		}
		return res;
	}
};

export const convertClassName = (breakPoint, browserBreakPoint, className) => {
	const nearBP = getNearPossibleBreakPoint(breakPoint, className);
	const regBp = new RegExp(`col-${nearBP}-((${colAppendixs.join('|')})-(\\d{1,2}))?(\\d{1,2})?`);
	let bpClassesArr = [];
	let restClassesArr = [];
	className.split(' ').forEach(cn => {
		if (regBp.test(cn)) {
			//	all cn for PB
			// if (nearBP === breakPoint) {
			// 	// replace all classNames depending to current BR
			// 	bpClassesArr.push(cn.replace(nearBP, smallestBreakPoint));
			// } else {
			// 	// replace only format col-"something"-number
			// 	if (regNearBpReplace.test(cn)) {
			// 		bpClassesArr.push(cn.replace(nearBP, smallestBreakPoint));
			// 	}
			// }
			bpClassesArr.push(cn.replace(nearBP, smallestBreakPoint));
		} else {
			if (regColReplacers.test(cn)) {
				//	visible or hidden found
				if (new RegExp(nearBP).test(cn)) {
					//	if vis/hid option is for this BP
					bpClassesArr.push(cn.replace(nearBP, browserBreakPoint));
				} else {
					const currentBreakPoint = regBreakPoints.exec(cn)[1];
					let fakeBreakPoint;
					if (currentBreakPoint === browserBreakPoint) {
						const browserBPIndex = breakPoints.indexOf(browserBreakPoint);
						fakeBreakPoint = breakPoints[browserBPIndex + 1] || breakPoints[browserBPIndex - 1];
						restClassesArr.push(
							cn.replace(currentBreakPoint, fakeBreakPoint)
						);
					} else {
						restClassesArr.push(cn);
					}
				}
			} else {
				if (!regCols.test(cn)) {
					restClassesArr.push(cn);
				}
			}
		}
	});
	return [ ...bpClassesArr, ...restClassesArr].join(' ').trim();
};
