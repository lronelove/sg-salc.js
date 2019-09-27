说明：在js计算过程中小数计算很容易出现精度问题，比如典型的0.1 + 0.2。 在之前的包里面，他们很多都是将小数乘以一定的倍数，比如555.30乘以100，然后再进行计算，但是大家可以尝试一下555.30 乘以 100也会出现精度问题，所以，一些包在这种情况下会出错。这个包规避了这个问题。

## 使用方法

安装
```
npm i sg-calc --save -dev 
或者
yarn add sg-calc
```

引入
```javascript
const sg_calc = require('sg-calc')
```

或者
```javascript
import sg_calc from 'sg-calc'
```


1、 加法
```javascript
const res1 = sg_calc.add(0.1, 0.2) // 0.3
```

2、 减法
```javascript
const res2 = sg_calc.minus(0.3, 0.1) // 0.2
```

3、 乘法
```javascript
const res3 = sg_calc.multiply(55.551, 100) // 5555.1
```

4、 除法
```javascript
const res4 = sg_calc.divide(0.3, 0.1) // 3
```

5、链式调用
如果存在多次计算的话，那么可能会形成多层嵌套的结构如：sg_calc.divide(sg_calc.multiply(55.551, 100), 0.1)，
这样在层级过深的情况下显得不太好阅读和使用，因此可以尝试一下链式调用
开始调用链式结构去计算需先使用sg_calc.start(num)去初始化，当你要获取结果得时候，使用end()函数去获取结果:
```javascript
const res5 = sg_calc.start(0.1).add(0.2).multiply(3).end() // 0.9
```

