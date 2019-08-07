// 乘法
function multiply(num1, num2) {
    const { num1Arr, num2Arr, len1, len2, multiplyTempNum } = splitNumber(num1, num2)

    const num1Integer = parseInt(num1Arr[0]) // num1整数部分
    const num1Dot = isNegative(num1) ? parseInt(-num1Arr[1] || -0) : parseInt(num1Arr[1] || 0) // num1小数部分
    const num2Integer = parseInt(num2Arr[0]) // num2整数部分
    const num2Dot = isNegative(num2) ? parseInt(-num2Arr[1] || -0) : parseInt(num2Arr[1] || 0) // num2小数部分

    // 整数小数部分分别乘以multiplyTempNum
    const num1IntegerMultiplied= num1Integer * multiplyTempNum
    const num2IntegerMultiplied= num2Integer * multiplyTempNum
    const num1DotMultiplied= num1Dot * (multiplyTempNum / 10 ** len1)
    const num2DotMultiplied= num2Dot * (multiplyTempNum / 10 ** len2)

    // 把相乘之后的结果整数小数部分相加
    const bigNum1 = num1IntegerMultiplied+ num1DotMultiplied
    const bigNum2 = num2IntegerMultiplied+ num2DotMultiplied

    const multipliedRes = bigNum1 * bigNum2
    const res = multipliedRes / (multiplyTempNum ** 2)

    return res
}

// 除法
function divide(num1, num2) {
    const { multiplyTempNum } = splitNumber(num1, num2)

    const multipliedNum1 = multiply(num1, multiplyTempNum)
    const multipliedNum2 = multiply(num2, multiplyTempNum)

    return multipliedNum1 / multipliedNum2
}

// 加法
function add(num1, num2) {
    const { multiplyTempNum } = splitNumber(num1, num2)

    const multipliedNum1 = multiply(num1, multiplyTempNum)
    const multipliedNum2 = multiply(num2, multiplyTempNum)

    return 	divide(multipliedNum1 + multipliedNum2, multiplyTempNum)
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
    const multiplyTempNum = 10 ** maxLen

    return { num1Arr, num2Arr, len1, len2, multiplyTempNum }
}

// 判断是否是负数
function isNegative(num) {
    return num.toString().indexOf('-') === 0
}

const sg_calc = {
    add: add,
    minus: minus,
    multiply: multiply,
    divide: divide
}

window.sg_calc = sg_calc