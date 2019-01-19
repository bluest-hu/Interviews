
## JavaScript 基础

### JavaScript 基本数据类型
 - 6 种原始类型:
	- Boolean
	- Null
	- Undefined
	- Number
	- String
	- Symbol (ECMAScript 6 新定义)
- 和 Object

### 判断数据类型

```javascript
function getType(obj) {
	// IE 6
	// IE6中，却会出现以下问题：通过Object.prototype.toString.call获取的 字符串,undefined,null均为Object
	if ( null === value) {
		return 'null';
	}
	var type = typeof value;
	
	if ('undefined' === type || 'string' === type) {
			return type;
	}
	return Object.prototype.toString.call(obj).slice(8, -1);
	// [Object Array]
}
```

### 深度克隆

```javascript
function getType(obj) {
	// IE 6
	// IE6中，却会出现以下问题：通过Object.prototype.toString.call获取的 字符串,undefined,null均为Object
	if (null === value) {
		return 'null';
	}
	var type = typeof value;
	
	if ('undefined' === type || 'string' === type) {
			return type;
	}
	return Object.prototype.toString.call(obj).slice(8, -1);
	// [Object Array]
}

function cloneDeep(target) {
	var res;
	var type = getType(target);

	if (type === 'Array') {
		res = [];
		target.forEach((item, index) => {
			res.push(cloneDeep(item));
		}):
	} else if (type) === 'Object') {
		res = {};
		for (var i in target) {
			if (target.hasOwnProperty(i)) {
				res[i] = cloneDeep[target[i]]
			}
		}
	} else {
		return target;
	}
}
```

## 原型链



