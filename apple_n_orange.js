function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let total_apples = 0;
    let total_orranges = 0;
    let fruit_a;
    let fruit_b;
    let all_apples = apples.length;
    let all_oranges = oranges.length;
    let count;
    if(all_apples>all_oranges){
        count = 0;
        for(count; count<all_apples; count++){
            fruit_a = a + apples[count];
            if(fruit_a>=s && fruit_a<=t){
                total_apples = total_apples + 1;
            }
            if(count<all_oranges){
                fruit_b = b + oranges[count];
                if(fruit_b>=s && fruit_b<=t){
                    total_orranges = total_orranges + 1;
                }
            }
        }
        console.log(total_apples);
        console.log(total_orranges);
    }else{
        count = 0;
        for(count; count<all_apples; count++){
            fruit_b = b + oranges[count];
            if(fruit_b>=s && fruit_b<=t){
                total_orranges = total_orranges + 1;
            }
            if(count<all_apples){
                fruit_a = a + apples[count];
                if(fruit_a>=s && fruit_a<=t){
                    total_apples = total_apples + 1;
                }
            }
        }
        console.log(total_apples);
        console.log(total_orranges);
    }

}