function pageCount(n, p) {
    var starting = 0;
    var count = 1;
    while(count<n){
        starting+=1;
        if(count>p){
            starting-=1;
            break;
        }else if(count === p){
            starting-=1;
            break;
        }
        count+=2
    }
    var ending = 0;
    while(n>p){
        n-=2
        ending+=1;
        if(n<p){
            ending-=1;
            break;
        }else if(n==p){
            break;
        }
    }

    if(starting>ending){
        return ending;
    }
    return starting;
}

const n = 6;
const p = 4;
console.log(pageCount(n, p));
