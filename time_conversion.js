function timeConversion(s) {

    let hours = [0, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    let hour = parseInt(s[0]+s[1]);
    let time = s[s.length-2];

    if(time==="P"){
        if(hour === 12){
            return (`${hour}:${s[3]}${s[4]}:${s[6]}${s[7]}`);
        }else{
            return (`${hours[hour]}:${s[3]}${s[4]}:${s[6]}${s[7]}`);
        }
    }else{
        if(hour === 12){
            return (`00:${s[3]}${s[4]}:${s[6]}${s[7]}`);
        }else if(9<hour && hour<12){
            return (`${hour}:${s[3]}${s[4]}:${s[6]}${s[7]}`);
        }else{
            return (`0${hour}:${s[3]}${s[4]}:${s[6]}${s[7]}`)
        }
    }
}

s = "12:45:54PM"
console.log(timeConversion(s));