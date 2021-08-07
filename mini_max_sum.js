function miniMaxSum(arr) {
    var count = 0;
    var mini_num;
    var mini;
    var max;
    // shorting
    for(count; count<arr.length; count++){
        mini = count+1;
        mini_num = count;
        for(mini; mini<arr.length; mini++){
            if(arr[mini_num]>arr[mini]){
                mini_num = mini;
            }
        };
        arr[count]=arr[mini_num];
    }
    console.log(arr);
    
    // adding mini and max elements
    max = 0;
    mini = 0;
    count = 0;
    for(count; count<arr.length-1; count++){
        mini = mini + arr[count];
        max = max + arr[count+1];
    }
    console.log(`${mini} ${max}`);

}

const arr = [1, 2, 3, 4, 5];
miniMaxSum(arr);