var list = {
    value: 1,
    rest: {
        value:2,
        rest: {
            value: 3,
            rest: null
        }
    }
}

function arrayToList(arr){
    var i = 0;
    function chk(){
        getEl = arr[i];
        if(i==(arr.length - 1)){
            return{
                value: getEl,
                rest: null,
            } 
        } else {
            i++;
            return{
                value: getEl,
                rest: chk(),
            }
        }
    }
    return chk();
}

console.log(arrayToList([1,2,3]));

function listToArray(list){
    var arr = [];
    while(list){
        arr.push(list.value);
        list = list.rest;
    }
    return arr;
}

console.log(listToArray(list));

function prepend(value, list){
    var newList = {value: value, rest: list};
    return newList;
}

console.log(prepend(4, list));
//Node.js вместо содержимого последнего элемента выводит [Object],
//а в песочнице все нормально. 

function nth(list, pos){
    var count = 0;
    while(list){
        if(pos == count){
            return list.value;
        }
        if(list.rest == null){
            return "UNDEFINED";
        }
        list = list.rest;
        count++;
    }
}

console.log(nth(list,2));
