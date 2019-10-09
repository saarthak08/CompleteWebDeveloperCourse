/* Class Definition in JavaScript */
var Mobile=function(model_no){
    //Instance member               //Classes can also be defined like this.
    this.model_no=model_no;        /*All functions are function objects, classes are functions in turn function objects. Everything is either primitive or an object. */
    this.price=3000;
    this.a=10;
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



//Prototype Inheritance  (Prototype Object is always inherited.)
Mobile.prototype.z=30;
//Child Class
var Xperia=function(){
    Mobile.call(this);  //In order to make available the parameters of class Mobilw
    this.b='I am b';
};

var s=new Xperia();
console.log(s.a);
console.log(s.z);
//Prototype Inheritance
Xperia.prototype=Object.create(Mobile.prototype);
Xperia.prototype.constructor=Xperia; //rebuilding constructor
var k=new Xperia();
console.log(k.z);



//Method Overriding
Mobile.prototype.show=function(){
    return "Superclass Method";
}

Xperia.prototype.show=function(){
    return "ChildClass Method";
}
var q=new Mobile("q");
console.log(k.show());
console.log(q.show());
console.log(q);
console.log(k);



//Promises in JavaScript
let promiseToCleanTheRoom=new Promise(function(resolve, reject){

    //cleaning the room
    let isClean=false;
    if(isClean){
        resolve('Clean');
    }else{
        reject('not Clean');
    }
});

promiseToCleanTheRoom.then(function(fromResolve){
    console.log(`The room is ` +fromResolve);
}).catch(function(fromReject){
    console.log(`The room is `+fromReject);
});




//Call, Apply & Bind
var obj={num:2};
var addToThis=function(a,b,c){
    return this.num+a+b+c;
}

console.log(addToThis.call(obj,1,2,3));   //functionname.call(obj,functionarguments);

var arr=[1,3,3];
console.log(addToThis.apply(obj,arr));

var bound=addToThis.bind(obj);
console.dir(bound);
console.log(bound(1,4,5));



//This in JS
class abc{
    constructor(a){
        this.a=a;
        abc.prototype.example=()=>{
            console.log(this.a);
        }
    }
    
    myFunc(){
        console.log(this.a);
    }
   
}
var temp=new abc(20);
temp.myFunc();
temp.example();




//Async Await in JavaScript
function scaryClown() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('🤡');
      }, 2000);
    });
  }
  
  async function msg() {
    const msg = await scaryClown();
    console.log('Message:', msg);
  }
  
  msg(); // Message: 🤡 <-- after 2 seconds
  
