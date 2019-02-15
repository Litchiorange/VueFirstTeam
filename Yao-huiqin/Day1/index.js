let arr = ['item1', 'item2', 'item3', 'item4', 'item5'];
let brr = [{
    content: 'section1',
    index: 0
}, {
    content: 'section2',
    index: 2
}];

for (let val of brr) {
    injectSections(arr, val.index, val.content);
}

function injectSections(arr, ind, val) {
    if (arr[ind]) {
        arr[ind] = [val, arr[ind]];
    } else {
        arr[ind] = val;
    }
    return arr.flat(Infinity);
};


//2.
const initArray = (m, n) => {
    let arr = Array(m);
    return arr.fill(n)
}

const initArray = (m, n) => {
    return Array.from({
        length: m
    }, () => {
        return n
    })
}
console.log(initArray(3, 5)) //initArray(m, n)[m个n]