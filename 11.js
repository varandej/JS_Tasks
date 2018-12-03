var arrays = [[1, 2, 3], [4, 5], [6]];

function reduced(arrays){
    arrays = arrays.reduce(function(previousValue, currentItem){
        return previousValue.concat(currentItem);
    }, []);
   return arrays;
}   

console.log(reduced(arrays));
