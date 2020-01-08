const assert = require('assert')

let numString = '2.0000000000000004e-7'

function formatNumString(numString) {
	let eIndex = numString.indexOf('e')

	if (eIndex > -1 && numString.indexOf('-') > 0) {
		let pureNumString = numString.slice(0, eIndex)
		console.log(pureNumString, 'pureNumString')
		let power = parseInt(numString.slice(eIndex + 2))
		console.log(power)
		let noDotString = pureNumString.replace('.', '')
		let zeroString = '0.' + '0'.repeat(power - 1)
		let resString = zeroString + noDotString
		console.log(resString, 'resString')

		return resString
	}

	return numString
}

assert.equal(+formatNumString(numString), +numString, '数的值不相同')