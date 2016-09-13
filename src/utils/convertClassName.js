export const breakPoints = ['xs', 'sm', 'md', 'lg'];
const smallestBreakPoint = breakPoints[0];
const regBreakPoints = new RegExp(`(${breakPoints.join('|')})`);

const getNearPossibleBreakPoint = (breakPoint, className) => {
	if (new RegExp('col-' + breakPoint).test(className)) {
		return breakPoint;
	} else {
		const breakPointI = breakPoints.indexOf(breakPoint);
		const prevBreakPoints = new RegExp(`col-${breakPoints.slice(0, breakPointI).join('|')}`);
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

/*
*	Flexboxgrid version
*/
const colAppendixsFBG = ['offset'];
const colReplacersFBG = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between', 'first', 'last'];
const regColsFBG = new RegExp(`(?:col|${colReplacersFBG.join('|')})-${breakPoints.join('|')}-((${colAppendixsFBG.join('|')})-(\\d{1,2}))?(\\d{1,2})?`);

export const convertClassNameFBG = (breakPoint, browserBreakPoint, className) => {
	const nearBP = getNearPossibleBreakPoint(breakPoint, className);
	const regBp = new RegExp(`(?:col|${colReplacersFBG.join('|')})-${nearBP}(-(${colAppendixsFBG.join('|')})-(\\d{1,2}))?(-\\d{1,2})?`);
	const isShown = /visible|hidden/;
	const classNames = className.split(' ');
	let bpClassesArr = [];
	let restClassesArr = [];
	classNames.forEach(cn => {
		if (regBp.test(cn)) {
			bpClassesArr.push(cn.replace(nearBP, smallestBreakPoint));
		} else {
			if (isShown.test(cn)) {
				//	visible or hidden found
				const visHid = isShown.exec(cn)[0];
				if (new RegExp(breakPoint).test(cn)) {
					//	if vis/hid option is for this BP
					if (visHid === 'hidden') {
						bpClassesArr.push('no-render');
					} else {
						bpClassesArr.push(cn.replace(breakPoint, browserBreakPoint));
					}
				} else {
					if (visHid === 'visible' && classNames.indexOf(`visible-${breakPoint}`) === -1) {
						bpClassesArr.push('no-render');
					}
				}
			} else {
				// other classNames
				if (!regColsFBG.test(cn)) {
					restClassesArr.push(cn);
				}
			}
		}
	});
	const res = [ ...bpClassesArr, ...restClassesArr].join(' ').trim() || 'no-render';
	return res.match('no-render') ? 'no-render' : res;
};

/*
*	bootstrap version
*/
const colAppendixsB = ['offset', 'push', 'pull'];
const colReplacersB = ['visible', 'hidden'];
const colReplacersAppendixsB = ['block', 'inline', 'inline-block'];

const regColsB = new RegExp(`col-(${breakPoints.join('|')})-((${colAppendixsB.join('|')})-(\\d{1,2}))?(\\d{1,2})?`);
const regColReplacersB = new RegExp(`(${colReplacersB.join('|')})-(${breakPoints.join('|')})-(${colReplacersAppendixsB.join('|')})`);

export const convertClassNameB = (breakPoint, browserBreakPoint, className) => {
	const nearBP = getNearPossibleBreakPoint(breakPoint, className);
	const regBp = new RegExp(`col-${nearBP}-((${colAppendixsB.join('|')})-(\\d{1,2}))?(\\d{1,2})?`);
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
			if (regColReplacersB.test(cn)) {
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
				if (!regColsB.test(cn)) {
					restClassesArr.push(cn);
				}
			}
		}
	});
	return [ ...bpClassesArr, ...restClassesArr].join(' ').trim();
};
