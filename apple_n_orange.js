function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let total_apples = 0;
    let total_orranges = 0;
    let fruit_a;
    let fruit_b;
    let count;
    if(apples.length>oranges.length){
        count = 0;
        for(count; count<apples.length; count++){
            fruit_a = a + apples[count];
            if(fruit_a>=s && fruit_a<=t){
                total_apples = total_apples + 1;
            }
            if(count<oranges.length){
                fruit_b = b + oranges[count];
                if(fruit_b>=s && fruit_b<=t){
                    total_orranges = total_orranges + 1;
                }
            }
        }
        console.log(total_apples);
        console.log(total_orranges);
    }else if(oranges.length>=apples.length){
        count = 0;
        for(count; count<apples.length; count++){
            fruit_b = b + oranges[count];
            if(fruit_b>=s && fruit_b<=t){
                total_orranges = total_orranges + 1;
            }
            if(count<apples.length){
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

const s = 7;
const t = 11;
const a = 5
const b = 15;
const apples = [-2, 2, 1];
const oranges = [5, -6];
countApplesAndOranges(s, t, a, b, apples, oranges);