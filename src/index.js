const assert = require('assert')

// 乘法
function mutiply(num1, num2) {
	const { num1Arr, num2Arr, len1, len2, mutiplyTempNum } = splitNumber(num1, num2)

	const num1Integer = parseInt(num1Arr[0]) // num1整数部分
	const num1Dot = isNegative(num1) ? parseInt(-num1Arr[1] || -0) : parseInt(num1Arr[1] || 0) // num1小数部分
	const num2Integer = parseInt(num2Arr[0]) // num2整数部分
    const num2Dot = isNegative(num2) ? parseInt(-num2Arr[1] || -0) : parseInt(num2Arr[1] || 0) // num2小数部分

  // 整数小数部分分别乘以mutiplyTempNum
	const num1IntegerMutiplied = num1Integer * mutiplyTempNum
	const num2IntegerMutiplied = num2Integer * mutiplyTempNum
	const num1DotMutiplied = num1Dot * (mutiplyTempNum / 10 ** len1)
	const num2DotMutiplied = num2Dot * (mutiplyTempNum / 10 ** len2)

  // 把相乘之后的结果整数小数部分相加
	const bigiNum1 = num1IntegerMutiplied + num1DotMutiplied
	const bigiNum2 = num2IntegerMutiplied + num2DotMutiplied

	const mutipliedRes = bigiNum1 * bigiNum2
	const res = mutipliedRes / (mutiplyTempNum ** 2)

	return res
}

// 除法
function divide(num1, num2) {
	const { mutiplyTempNum } = splitNumber(num1, num2)

	const mutipliedNum1 = mutiply(num1, mutiplyTempNum)
	const mutipliedNum2 = mutiply(num2, mutiplyTempNum)

	return mutipliedNum1 / mutipliedNum2
}

// 加法
function add(num1, num2) {
	const { mutiplyTempNum } = splitNumber(num1, num2)

	const mutipliedNum1 = mutiply(num1, mutiplyTempNum)
	const mutipliedNum2 = mutiply(num2, mutiplyTempNum)

	return 	divide(mutipliedNum1 + mutipliedNum2, mutiplyTempNum)
}

// 减法
function minus(num1, num2) {
	return add(num1, -num2)
}

// 拆分数字
function splitNumber(num1, num2) {
	const num1Arr = num1.toString().split('.')
	const num2Arr = num2.toString().split('.')
	const len1 = num1Arr[1] ? num1Arr[1].length : 0
  const len2 = num2Arr[1] ? num2Arr[1].length : 0
	const maxLen = Math.max(len1, len2)
	const mutiplyTempNum = 10 ** maxLen

	return { num1Arr, num2Arr, len1, len2, mutiplyTempNum }
}

// 判断是否是负数
function isNegative(num) {
	return num.toString().indexOf('-') === 0
}

function test() {
	assert.equal(isNegative(-2), true, '是负数')
	assert.equal(isNegative(12), false, '不是负数')
	assert.equal(mutiply(-1.1, 10), -11, '负数相乘')
	assert.equal(mutiply(5.53111, 10), 55.3111, '数字相乘')
	assert.equal(divide(0.3, 0.1), 3, '数字相除')
	assert.equal(divide(-0.3, 0.1), -3, '负数除法')
	assert.equal(add(0.1, 0.2), 0.3, '加法运算')
	assert.equal(add(-0.1, -0.2), -0.3, '负数加法')
	assert.equal(minus(0.3, 0.1), 0.2, '减法运算')
}

test()

const sg_calc = {
	add: add,
	minus: minus,
	mutiply: mutiply,
	divide: divide
}

module.exports = sg_calc 
