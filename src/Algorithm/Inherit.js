function Person() {
	this.name = "";
}

Person.prototype.getName = function () {
	return this.name;
}

function Teacher() {
	this.position = 'teacher'; 
}

Teacher.prototype = new Person();

Teacher.prototype.constructor = Teacher;

function Person() {
	this.name = "";
}

Person.prototype.getName = function () {
	return this.name;
}

function Teacher() {
	this.position = 'teacher'; 
}

Teacher.prototype = Object.create()

Teacher.prototype.constructor = Teacher;


//原型式继承
function inheritObject (o){
	//声明一个过渡函数对象
	function F (){ }
	//过渡对象的原型继承父对象
	F.prototype = o;
	//返回过渡对象的一个实例，该实例的原型继承了父对象
	return new F();
}
