function miniMaxSum(arr) {
    var count = 0;
    var mini_num_index;
    var mini;
    var max;
    var mini_num;
    [7, 69, 2, 221, 8974]
    // shorting "Selection Short"
    for(count; count<arr.length; count++){
        mini = count+1;
        mini_num_index = count;
        for(mini; mini<arr.length; mini++){
            if(arr[mini_num_index]>arr[mini]){
                mini_num_index = mini;
            }
        };
        mini_num = arr[mini_num_index];
        arr[mini_num_index] = arr[count];
        arr[count] = mini_num;
        console.log(arr);
    }
    
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

const arr = [7, 69, 2, 221, 8974];
miniMaxSum(arr);