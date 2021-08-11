function getTotalX(a, b) {
    const last_elemnt_a = a[a.length - 1];
    let i = last_elemnt_a;
    let count = 0;
    for(i; i<=b[0]; i+=last_elemnt_a){
        let j = 0;
        for(j; j<a.length; j++){
            if(i % a[j] != 0){
                console.log("hi");
                break;
            }
        }
        if(j === a.length){
            j = 0;
            for(j; j<b.length; j++){
                if(b[j] % i != 0){
                    console.log(i, "hiii");
                    break;
                }
            }
            if(j===b.length){
                console.log(i);
                count+=1;
            }
        }
    }
    return count
}

const a = [2, 4];
const b = [16, 32, 96];
console.log(getTotalX(a, b), "-: total");