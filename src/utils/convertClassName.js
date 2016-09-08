export const breakPoints = ['xs', 'sm', 'md', 'lg'];
const colAppendixs = ['offset', 'push', 'pull'];
const colReplacers = ['visible', 'hidden'];
const colReplacersAppendixs = ['block', 'inline', 'inline-block'];

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
				if (isThereAnyLower) res = /-(\w+)/.exec(cn)[1];
			});
		} else {
			res = smallestBreakPoint;
		}
		return res;
	}
};

const regCols = new RegExp(`col-(${breakPoints.join('|')})-((${colAppendixs.join('|')})-(\d{1,2}))?(\d{1,2})?`);
const regVisHid = new RegExp(`(${colReplacers.join('|')})-(${breakPoints.join('|')})-(${colReplacersAppendixs.join('|')})`);
const regBreakPoints = new RegExp(`(${breakPoints.join('|')})`);

export const convertClassName = (breakPoint, browserBreakPoint, className) => {
	const nearBP = getNearPossibleBreakPoint(breakPoint, className);
	const regBp = new RegExp(`col-${nearBP}-((${colAppendixs.join('|')})-(\d{1,2}))?(\d{1,2})?`);
	let bpClassesArr = [];
	let restClassesArr = [];
	className.split(' ').forEach(cn => {
		if (regBp.test(cn)) {
			//	all cn for PB
			bpClassesArr.push(cn.replace(nearBP, smallestBreakPoint));
		} else {
			if (regVisHid.test(cn)) {
				//	visible or hidden found
				if (new RegExp(nearBP).test(cn)) {
					//	if vis/hid option is for this BP
					console.log('y---', cn, 'BP: ',breakPoint, nearBP, "brows: ",browserBreakPoint);
					bpClassesArr.push(cn.replace(nearBP, browserBreakPoint));
				} else {
					const currentColRepl = regBreakPoints.exec(cn)[1];
					let fakeBreakPoint = breakPoints[breakPoints.indexOf(browserBreakPoint) + 1] || breakPoints[breakPoints.indexOf(browserBreakPoint) - 1];
					console.log('n---', cn,'BP: ', breakPoint, nearBP,"brows: ", browserBreakPoint,'fake', fakeBreakPoint);
					restClassesArr.push(
						cn.replace(currentColRepl, fakeBreakPoint)
					);
				}
			} else {
				if (!regCols.test(cn)) {
					console.log('else', cn);
					restClassesArr.push(cn);
				}
			}
		}
	});
	console.log('totalOutput', [ ...bpClassesArr, ...restClassesArr].join(' ').trim());
	return [ ...bpClassesArr, ...restClassesArr].join(' ').trim();


	// const nearBP = getNearPossibleBreakPoint(breakPoint, className);
	// const regCn = new RegExp(`.*-${nearBP}-.*`);
	// const regCnElse = new RegExp(`.*-${breakPoints.join('|')}-.*`);
	// let bpClassesArr = [];
	// let restClassesArr = [];
	// className.split(' ').forEach(cn => {
	// 	if (regCn.test(cn)) {
	// 		bpClassesArr.push(nearBP === smallestBreakPoint ? cn : cn.replace(nearBP, smallestBreakPoint));
	// 		// bpClassesArr.push(cn);
	// 	} else {
	// 		if (!regCnElse.test(cn)) restClassesArr.push(cn);
	// 	}
	// });
	// if (bpClassesArr.length > 0) {
	// 	return [ ...bpClassesArr, ...restClassesArr].join(' ').trim();
	// } else {
	// 	return restClassesArr.join(' ').trim();
	// }
};
