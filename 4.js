function min(a,b){
    if(a==b){
        var str = "It's not funny"
        return str;
    } else {
        if(a<b){
            return a;
        } else {
            return b;
        }
    }
}
console.log(min(2,4));