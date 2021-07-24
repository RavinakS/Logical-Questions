const readline = require('readline-sync');

const password = readline.question('Enter the password: ');
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var index = 0;
var checker = 0
for(index; index<password.length; index++){
    try{
        var paswrdNum = parseInt(password[index], 10);
        if(numbers.includes(paswrdNum)){
            checker ++;
        }
    }catch{
        continue;
    }
}

if(checker > 0){
    console.log("Valid");
}else{
    console.log("Unvalid");
}