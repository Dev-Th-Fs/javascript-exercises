const removeFromArray = function (array, ...args) {

    let newArr = []
    array.forEach((item) => {
        if(!args.includes(item)){
            newArr.push(item)
        }
    })
    return newArr;
};

console.log(removeFromArray([1, 2,2,2, 3, 4], 3 ,2));





// console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
