 //数组的方法
 //  let arr = ['zx', 'ls', 'zs'];
 //  console.log(Object.keys(arr))
 //  let arr = ['zx', 'ls', 'zs'];
 //  console.log(Object.values(arr))
 //   let arr = ['zx', 'ls', 'zs'];
 //   console.log(Object.entries(arr));

 let obj = {
     name: "zx",
     age: 11
 }

 function format(options) {
     return Object.entries(options).map(function(item) {
         return item.join('=')
     }).join('&')
 }
 console.log(format(obj));