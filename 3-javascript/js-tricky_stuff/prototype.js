/* Class Definition in JavaScript */
var Mobile=function(model_no){
    //Instance member               //Classes can also be defined like this.
    this.model_no=model_no;        /*All functions are function objects, classes are functions in turn function objects. Everything is either primitive or an object. */
    this.price=3000;
};
class Mobile_Class_Via_Class_Keyword{
    constructor(model){
        this.model=model;
        this.price=3000;
    }
};
var Samsung_With_ClassKeyword=new Mobile_Class_Via_Class_Keyword('Galaxy M30s');
console.log(typeof(Mobile_Class_Via_Class_Keyword));
console.log(Samsung_With_ClassKeyword);
console.log(typeof(Mobile));
console.log(typeof(Samsung));




/*Prototypes in JavaScript */
var Samsung=new Mobile('Galaxy');       //__proto__ of a class contains constructor and constructor has a property 'Prototype' which is equal to the prototype object created with the class. That is whenever an object is created its prototype object is created which contains a property of constructor function & this constructor function has a prototype property which points back to the prototype object.
var Nokia=new Mobile('3310');           // ObjectClass.__proto_= Class's info => Class's info.__proto__ = Object.prototype => Object.prototype.__proto__ = null.
//classname.prototype.key='value';
Mobile.prototype.color='white';  //Prototype Member
console.log(Samsung);
console.log('Color of Samsung:'+Samsung.color);
console.log(Nokia);
console.log('Color of Nokia:'+Nokia.color);
//Every function has a property of prototype which is equal to a prototype object which is created when a function is created. 
console.log(Mobile.prototype);
console.log((Object.getPrototypeOf(Samsung)));
document.write(Samsung.color);




//Closures in JavaScript
var a="main func outer"
function show(){
    var i="in main func";
    function innerFun(){
        var k="inner func";
        document.write("<br>"+a+"<br>");       //Closure is formed by accessing outer variables.
        document.write(i+"<br>");
        document.write(k+"<br>");
    }
    innerFun();
}

show();