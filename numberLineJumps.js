function kangaroo(x1, v1, x2, v2) {
    if(v1>v2){
        var count = 0;
        var end_time = x2;
        for(count; count<=end_time; count++){
            x1 = x1 + v1;
            x2 = x2 + v2;
            if(x1===x2){
                return "YES";
            }
        }
        return "NO";
    }else{
        return "NO";
    }
}

console.log(kangaroo(21, 6, 47, 3));