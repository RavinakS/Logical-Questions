function gradingStudents(grades) {
    var index = 0;
    for(index; index<grades.length; index++){
        if(grades[index] < 38){
            continue;
        }
        var num = 2;
        for(num; num<grades[index]; num++){
            if(num*5 > grades[index]){
                if((num*5)-grades[index] < 3){
                    grades[index] = num*5;
                    break;
                }
                break;
            }
        }
    }
    return grades;
}

const grades = [73, 67, 38, 33]
