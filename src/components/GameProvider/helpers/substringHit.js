/**
 * Get passed value, and convert it to Number
 * 
 * If there is prefix, apply Multiplier
 * 
 * @param {String} hit 
 * @returns 
 */
export const getSubstringHit = (hit) => {

	let calculatedValue = Number(hit);

	if (hit.charAt(0) === "D") {
		let removeChar = hit.substring(1);
		console.log(removeChar)
		calculatedValue = Number(removeChar * 2);
	} else if (hit.charAt(0) === "T") {
		let removeChar = hit.substring(1);
		calculatedValue = Number(removeChar * 3);
	}

	return calculatedValue;
};
