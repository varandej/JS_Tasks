var a = "";
for(i=0; i<8; i++){
    for(j=0; j<8; j++){
        if( i % 2 == j % 2){
            a += "#";
        } else {
            a += " ";
        }
    }
    a += "\n";
}
console.log(a);
