// var fun = function() {
//   value = 'hello';
// }
// fun();
// console.log(value);
// console.log(global.value);

// var myObject = {value: 100};
// myObject.getValue = function () {
//   var foo = function () {
//     console.log(this.value) // => undefined
//     console.log(this);// 输出全局对象 global
//   };

//   foo();

//   return this.value;
// };

// console.log(myObject.getValue());

var myObject = {value: 100};

var foo = function(){
  console.log(this);
};

// foo();
// foo.apply(myObject); // { value: 100 }
// foo.call(myObject); // { value: 100 }

var newFoo = foo.bind(myObject);
newFoo(); // { value: 100 }