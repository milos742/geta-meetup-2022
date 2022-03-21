/**
 * Get passed value, and convert it to Number
 * 
 * If there is prefix, apply Multiplier
 * 
 * @param {String} hit 
 * @returns 
 */
export const parseHitValue = (hit) => {

	switch(hit.charAt(0)) {
		case "D":
			return Number(hit.substring(1) * 2);
		case "T":
			return Number(hit.substring(1) * 3);
		default:
			return Number(hit);
	}
};
