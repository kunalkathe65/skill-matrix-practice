const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const axios = require('axios');

class MyClass {
  constructor() {
    console.log('Class initiated');
  }

  sayHello() {
    console.log('Hello');
  }

  add(arg1, arg2) {
    const result = arg1 + arg2;
    return result;
  }

  returnArray() {
    return [1, 2, 3, 4, 5];
  }

  returnObject() {
    return { name: 'Kunal', age: 21, city: 'Mumbai', isEngineer: true };
  }

  callAnotherFunction(arg1, arg2) {
    this.sayHello();
    const res = this.add(arg1, arg2);
    return res;
  }

  callTheCallbackFunc(callback) {
    callback();
  }

  testPromise() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(2);
      }, 10000);
    }).then((res) => {
      return res * 3;
    });
  }

  testXhrCall() {
    return new Promise(async (res, rej) => {
      const response = await axios.get(
        'https://api.github.com/repos/atom/atom/license'
      );
      res(response.data);
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }

  //With XHR NOT WORKING

  // testXhrCall() {
  //   return new Promise((res, rej) => {
  //     let xhr = new XMLHttpRequest();
  //     xhr.open('get', 'https://api.github.com/repos/atom/atom/license', true);

  //     xhr.onreadystatechange = function () {
  //       if (xhr.readyState == 4) {
  //         if (xhr.status == 200) {
  //           console.log(xhr.responseText);
  //           res(JSON.parse(xhr.responseText));
  //         } else {
  //           rej(xhr.status);
  //         }
  //       }
  //       xhr.send();
  //     };
  //   })
  //     .then((res) => {
  //       return res;
  //     })
  //     .catch((err) => {
  //       return err;
  //     });
  // }
}
module.exports = MyClass;
