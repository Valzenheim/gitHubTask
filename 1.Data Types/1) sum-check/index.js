function sumCheck(a, b) {
	try {
		let sum = a + b;
		if (
			typeof a !== 'number' ||
			typeof b !== 'number'
		) {
			throw new Error('Wrong arguments type!')
		}
		return sum
	} catch (e) {
		throw new Error('Wrong arguments type!')
	}

}

window.sumCheck = sumCheck;

export default sumCheck;
