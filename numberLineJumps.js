function kangaroo(x1, v1, x2, v2) {
    if(v1>v2){
        var count = 0;
        for(count; count<x2; count++){
            x1 = x1 + v1;
            x2 = x2 + v2;
            if(x1===x2){
                return "YES";
            }
        }
    }else{
        return "NO";
    }
}

console.log(kangaroo(0, 2, 5, 3));