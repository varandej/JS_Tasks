function range(first,last,step){
    if(step==null){
        step=1;
    }
    var arr=[];
    if(step>0){
        for(i=first; i<=last; i+=step){
            arr.push(i);
        }
    } else {
        for(i=first; i>=last; i+=step){
            arr.push(i);
        }
    }
    return arr;
}
  
function sum(arr) {
    var sum=0;
    for(i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}

console.log(sum(range(5,2,-1)));

