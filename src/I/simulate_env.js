const each = (elements, cb) => {
    // based off http://underscorejs.org/#each
    // Will only work with arrays
    const returnArr = [];
    for (let i = 0; i < elements.length; i++) {
        returnArr.push(cb(elements[i], i));
    }
    return returnArr;
};

const map = (elements, cb) => {
    // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
    // Return the new array.
    const returnArr = [];
    for (let i = 0; i < elements.length; i++) {
        returnArr.push(cb(elements[i], i));
    }
    return returnArr;
};

const myArr = [1, 2, 3, 4, 5];

const kallbk = (x) => { return x * 2; };

console.log(each(myArr, kallbk));

console.log(map(myArr, kallbk));