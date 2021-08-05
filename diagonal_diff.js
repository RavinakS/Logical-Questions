const arr = [[1, 2, 7],
             [4, 5, 6],
             [7, 8, 9]]

function diagonal_diff(arr){
    let count = 0; // indexing
    let lr_diagonal_sum = 0; // sum of left_to_right_diagonal elements 
    let rl_diagonal_sum = 0; // sum of right_to_left_diagonal elements

    for(count; count<arr.length; count++){
        let count2 = arr.length - (count+1); // this is for left diagonal elements

        lr_diagonal_sum = lr_diagonal_sum + arr[count][count];
        rl_diagonal_sum = rl_diagonal_sum + arr[count][count2];

    }

    if(lr_diagonal_sum >= rl_diagonal_sum){
        let absl_diff = lr_diagonal_sum - rl_diagonal_sum; // absolute difference
        return absl_diff;
    }else{
        let absl_diff = rl_diagonal_sum - lr_diagonal_sum;
        return absl_diff;
    }
}

console.log(diagonal_diff(arr));