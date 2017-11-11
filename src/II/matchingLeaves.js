/* Extra Credit */
const checkMatchingLeaves = (obj) => {
    // return true if every property on `obj` is the same
    // otherwise return false
    let val;
    let flag = true; // setup to automatically return true
    const checkLeaves = (tree) => {
        Object.keys(tree).forEach((key) => {
            if (val === undefined && typeof key !== 'object') {
                val = tree[key];
                return undefined;
            }
            if (typeof tree[key] === 'object') return checkLeaves(tree[key]);
            if (tree[key] !== val) {
                flag = false;
                return undefined;
            }
            return undefined;
        });
    }
    checkLeaves(obj); // Initial call to recursive function, passing the original object from checkMatchingLeaves.
    return flag;
};

const checkMatchingLeaves2 = (obj) => {
    // return true if every property on `obj` is the same
    // otherwise return false
    let val;
    let flag = true; // setup to automatically return true
    const checkLeaves = (tree) => { // Function to iterate and check every single leaf
        Object.values(tree).forEach((value) => {
            if (val === undefined && typeof value !== 'object') { // Ensure that the leaf is not an object, and it is not undefined.
                val = value; // Obtain the value of the first leaf for future comparison.
                return undefined; // Break out of this Iteration and into the next call!
            }
            if (typeof value === 'object') return checkLeaves(value); // If the leaf turns out to be an object, then recursively check it inside.
            if (value !== val) { // Once the value inside has been obtained check it against the initial leaf's value.
                flag = false; // If the case that the values don't match then turn the return flag to false, not all leafs in the tree match.
                return undefined; // get out of this code.
            }
            return undefined;
        });
    }
    checkLeaves(obj); // Initial call to recursive function, passing the original object from checkMatchingLeaves.
    return flag; // Return the result of the matching leaves comparison
};

const tree1 = {
    x: 1,
    y: 1,
    z: 1,
    xa: {
        xx: 1,
        xy: 1,
        xz: 1,
        zz: {
            a: {
                b: {
                    z: 1,
                },
            },
        },
    },
};
const tree2 = {
    x: 1,
    y: 1,
    z: 1,
    xa: {
        xx: 1,
        xy: 1,
        xz: 1,
        zz: {
            a: {
                b: {
                    z: 2,
                },
            },
        },
    },
    r: 1,
};

console.log(checkMatchingLeaves2(tree2));