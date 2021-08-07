function pageCount(n, p) {
    var starting = 0;
    var count = 0;
    for(count; count<n; count+=2){
        starting+=1;
        if(count>=p){
            break
        }
    }
    var ending = 0;
    for(n; n>p; n-=2){
        ending+=1;
        if(n<=p){
            break;
        }
    }
    if(starting>ending){
        return ending;
    }
    return starting;
}

const n = 5;
const p = 4;
console.log(pageCount(n, p));
