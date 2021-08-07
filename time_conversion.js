function timeConversion(s) {
    let hours = [0, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    let hour = parseInt(s[0]+s[1]);
    let time = s[s.length-2];
    if(time==="P"){
        if(hour===0){
            console.log(`00:${s[3]}${s[4]}:${s[6]}${s[7]}`)
        }else{
            console.log(`${hours[hour]}:${s[3]}${s[4]}:${s[6]}${s[7]}`);
        }
    }
}
s = "07:05:45PM"
timeConversion(s);