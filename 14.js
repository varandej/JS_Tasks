function every(array, check){
    for(i=0; i<array.length; i++){
        if(check!= array[i]){
            return false;
        }
    }
    return true;
}

function some(array, check){
    for(i=0; i<array.length; i++){
        if(check == array[i]){
            return true;
        }
    }
	return false;
}

console.log(every([1, 1, 1], 1));
console.log(every([1, 2, 4], 1));
console.log(some([1, 3, 4], 1));
console.log(some([2, 3, 4], 1));
