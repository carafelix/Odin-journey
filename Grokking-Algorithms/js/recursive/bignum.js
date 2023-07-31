const numArr = [2,8,9,10,20,5,40,50,100];

function findHighest(arr){
    let copy = arr.slice(0);

    if (arr.length === 1){
        return arr[0]
    } else if (arr[1]>arr[0]){
        return findHighest(copy.slice(1))
    } else if (arr[0]>arr[1]){
        copy.shift()
        return findHighest(copy)
    }
}

console.log(findHighest(numArr))