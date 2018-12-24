var Q = require('q');
var fs = require('fs');
var defer = Q.defer();

// console.log(defer);

/* function getPromise() {
  return defer.promise;
}

getPromise().then(function(success) {
  console.log(success);
}, function(error){
  console.log(error);
}, function(progress){
  console.log(progress);
});

defer.notify('in progress');
defer.reject('error');
defer.resolve('success'); */

/* function getInputPromise() {
  return defer.promise;
}

var OutputPromise = getInputPromise().then(function(success){
  return 'success';
}, function(err){
  return 'err';
});

OutputPromise.then(function(fulfilled) {
  console.log('fulfilled:' + fulfilled);
}, function(rejected){
  console.log('rejected:' + rejected);
});

defer.reject(); */

/* function getInputPromise() {
  return defer.promise;
}

var outputPromise = getInputPromise().then(function(resolve){
  var myDefer = Q.defer();
  fs.readFile('./app.js', 'UTF-8', function(err, data){
    if(!err && data) {
      myDefer.resolve(data);
    }
  });
  return myDefer.promise;
}, function(rejected){
  throw new Error('rejected');
});

outputPromise.then(function(fulfilled){
  console.log(fulfilled);
}, function(rejected){
  console.log(rejected);
});

// defer.reject();
defer.resolve(); */