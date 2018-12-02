function countChar(str, char) {
    var count = 0;
    for(i = 0; i < str.length; i++){
        if(str.charAt(i) == char){
            count += 1;
        }
    }
    return count;
  }
console.log(countChar("Bommmmb", "m"));

