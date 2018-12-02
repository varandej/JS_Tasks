function deepEqual(a,b){
    if(a===b){
        return true;
    } else {
        if(a==null || b==null){
            return false;
        } else {
            if(typeof(a) == "object" && typeof(b) == "object"){
                var propA = 0;
                var propB = 0;
                for(prop in a){
                    propA++;
                }
                for(prop in b){
                    propB++;
                }
                if(propA!=propB){
                    return false;
                } else {
                    for(prop in b){
                        if(deepEqual(a[prop], b[prop])){
                            return true;
                        } else {
                            return false;
                        }
                    }
                }
            }
        }
    }
}

var obj = {here:{is: "an"}, object: 2};
console.log(deepEqual(obj,obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
