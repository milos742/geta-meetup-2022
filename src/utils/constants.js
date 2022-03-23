export const games = {
	301: "301",
	501: "501",
};

export const winRule = {
	straightOut: "Straight Out",
	doubleOut: "Double Out",
	tripleOut: "Triple Out",
};

export const targets = [
    ...Array.from({length:20}).map((_, idx) => idx + 1),
    25,
    0
]
