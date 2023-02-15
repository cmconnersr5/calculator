let prevNum = ''
let currNum = ''
let selectedOp = ''

//when click a button add to currOP
let dispCurr = document.querySelector('.currOp');
let currentNum = document.createTextNode(`${currNum}`);
let dispPrev = document.querySelector('.prevOp');

const addNum = document.querySelectorAll('.btn');
addNum.forEach(button => {
    button.addEventListener('click', appendNum);
});

function appendNum(e){
    dispCurr.append(`${currNum}`+ e.target.textContent);
};

// when click an operator, change curNum to prevNum and 
// enter new currNum
const operator = document.querySelectorAll('.op');
operator.forEach(button => {
    button.addEventListener('click', selectOp);
});

function selectOp(e){
    let prevNum = dispCurr.textContent
    let selectedOp = e.target.textContent;
    dispPrev.append(prevNum, selectedOp);
    dispCurr.textContent= '';
    return selectedOp;
}









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

function operate(selectedOp, num1,num2){
    if (selectedOp === '+'){
        return add(num1,num2);
    } else if (selectedOp === '-'){
        return sub(num1,num2);
    } else if (selectedOp === '*'){
        return mult(num1,num2);
    } else if (selectedOp === '/'){
        return divide(num1,num2);
    }

}

operate(5,2);