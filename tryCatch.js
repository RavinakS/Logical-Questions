// Checking if there are any numbers in a string

const readline = require('readline-sync')

const user = readline.question("type a string: ");

checker = 0;
for(index=0; index<user.length; index++){
    try{
        num = parseInt(user[index], 10);
        if(num === 'NaN'){
            console.log("In");
            checker++;
        }else{
            console.log('Out');
        }
    }
    catch{
        continue;
    }
};

console.log(checker);
if(checker > 0){
    console.log('Approved');
}else{
    console.log('Not Approved');
}