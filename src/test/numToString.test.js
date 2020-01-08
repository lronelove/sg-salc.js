/*
* 监测数字转字符串的科学计数问题
* */


let num = 0.2

let str = num.toString()

while (!str.includes('e')) {
	num = num / 10
	str = num.toString()
	console.log('num', num)
	console.log('str', str)
}

console.log('`````````````````````````')

num = 1

str = num.toString()

while (!str.includes('e')) {
	num = num * 10
	str = num.toString()
	console.log('num', num)
	console.log('str', str)
}