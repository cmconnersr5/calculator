function add(){
    num1+num2
}

function sub(){
    num1-num2
}

function mult(){
    num1*num2
}

function divide(){
    num1/num2
};

function operate(operator, num1,num2){
    if (operator === '+'){
        return add(num1,num2);
    } else if (operator === '-'){
        return sub(num1,num2);
    } else if (operator === '*'){
        return mult(num1,num2);
    } else if (operator === '/'){
        return divide(num1,num2);
    }

}

operate(5,2);