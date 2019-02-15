let arr = Array.of(10, 20, 30, 40);
console.log(arr);

//copyWithin 
let arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr1.copyWithin(2))


let arr2 = [1, 2, 3, 4];
let arr2Ttem = arr2.values();
// let arr2Ttem = arr2.keys();
// let arr2Ttem = arr2.entries();
// console.log(arr2Ttem.next())
// console.log(arr2Ttem.next())
// console.log(arr2Ttem.next())
// console.log(arr2Ttem.next())
// console.log(arr2Ttem.next())

for (let val of arr2Ttem) {
    console.log(val)
}