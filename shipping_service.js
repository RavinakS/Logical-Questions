const readline = require('readline-sync');

// inputs
const country_code = readline.question('Country Code:- ');
const product_code = readline.questionInt('Product Code:- ');
const weight_in_kg = readline.questionInt('Weight of the product in kg:- ');

// Product Code
function isProductCodeValid(code){
    let codeStr = code.toString();
    if(codeStr.length>=2 && codeStr.length<=7){
        let firstThree = codeStr[0]+codeStr[1]+codeStr[2];
        if(firstThree==='123'){
            return 1.2;
        }
        else if(firstThree==='234'){
            return 1.5;
        }else{
            return 1;
        }
    }else{
        return 0;
    }
}

// UK
function uk(sp, w_kg){
    // let ccStr = cc.toLowerCase();
    let cost = 0;
    if (w_kg<5){
        cost = 5*sp
        gst = cost*18/100;
        return cost+gst;
    }else if(w_kg>=5){
        cost = 15*sp;
        gst = cost*18/100;
        return cost+gst;
    }
}

//US
function us(sp, w_kg){
    let cost = 0;
    if(w_kg<10){
        cost = 5*sp;
        gst = cost*18/100;
        return cost+gst;
    }else{
        cost = 15*sp;
        gst = cost*18/100;
        return cost+gst;
    }
}

let ccStr = country_code.toLowerCase();
sp = isProductCodeValid(product_code);
if(ccStr==='uk'){
    console.log(uk(sp, weight_in_kg), 'INR');
}else if(ccStr === 'us'){
    console.log(us(sp, weight_in_kg), 'INR');
}else{
    console.log("Not Applicable!");
}

