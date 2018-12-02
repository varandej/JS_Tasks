function reverseArray(arr){
    var reverse = [];
    for(i=(arr.length-1); i>=0; i--)
        reverse.push(arr[i]);
    return reverse;
  }
  
function reverseArrayInPlace(arr){
    var temp = "";
    for(i=0; i<(arr.length/2); i++){
        temp = arr[i];
        arr[i] = arr[(arr.length-1)-i];
        arr[(arr.length-1)-i] = temp;
    }
    return arr;
  }
  

console.log(reverseArray(["A","B","C"]));
var arrayValue = [1,2,3,4,5,6];
console.log(reverseArrayInPlace(arrayValue));