// number of factors between two array
// 1. The elements of the first array are all factors of the integer being considered
// 2. The integer being considered is a factor of all elements of the second array

function getTotalX(a, b) {
    const last_elemnt_a = a[a.length - 1];
    let i = last_elemnt_a;
    let count = 0;
    for(i; i<=b[0]; i+=last_elemnt_a){
        let j = 0;
        for(j; j<b.length; j++){
            if(j<a.length){
                if(i % a[j] != 0 || b[j] % i != 0){
                    break;
                }
            }else{
                if(b[j] % i != 0){
                    break;
                }
            }
        }
        if(j===b.length){
            console.log(i);
            count+=1;
        }
        // if(j === a.length){
        //     j = 0;
        //     for(j; j<b.length; j++){
        //         if(b[j] % i != 0){
        //             break;
        //         }
        //     }
        //     if(j===b.length){
        //         console.log(i);
        //         count+=1;
        //     }
        // }
    }
    return count;
}

const a = [2, 4];
const b = [16, 32, 96];
console.log(getTotalX(a, b), "-: total");