// question 1 
function sumArr(arr){
    let sum = 0;
    arr.map((num) => {
        sum += num;
    });
    return sum;
}

// question 2
function findLargest(arr){
    let largest = arr[0];
    arr.forEach((num) => {
        if(num > largest){
            largest = num;
        }
    });
    return largest;
}

// question 3
function countCharacters(str, char){
    let count = 0;
    str.split('').forEach((c) => {
        if(c === char){
            count++;
        }
    });
    return count;
}
