let prevNum = '';
let currNum = '';
let selectedOp ='';
let result = '';

let dispCurr = document.querySelector('.currOp');
let dispPrev = document.querySelector('.prevOp');

//click a button and add value to currNum
const addNum = document.querySelectorAll('.btn');
addNum.forEach(button => {
    button.addEventListener('click', appendNum);
});

function appendNum(e){
    let current = `${currNum}`+ e.target.textContent;
    dispCurr.append(current);
    console.log(current);
};

// when click an operator, change curNum to prevNum and 
// enter new currNum
const operator = document.querySelectorAll('.op');
operator.forEach(button => {
    button.addEventListener('click', selectOp);
});

function selectOp(e){
    let prevNum = dispCurr.textContent;
    selectedOp = e.target.outerText;
    console.log(selectedOp);
    dispPrev.append(prevNum, selectedOp);
    dispCurr.textContent= '';
    return (selectedOp,prevNum);
}


//add = functionality and display total
let equal = document.getElementById('equal');
equal.addEventListener('click', operate);


// assign nums from display and do the math, rounding to 2 decimals
function operate(){
    let num1 = parseFloat(dispPrev.textContent.slice(0,-1))
    let num2 = parseFloat(dispCurr.textContent)
    let prevNum = dispCurr.textContent;
    dispCurr.textContent = '';
    dispPrev.append(prevNum)

    if (selectedOp === '+'){
        add(num1,num2);
    } else if (selectedOp === '-'){
        sub(num1,num2);
    } else if (selectedOp === '*'){
        mult(num1,num2);
    } else if (selectedOp === '/'){
        divide(num1,num2);
    }
};

function add(num1,num2){
    result = num1+num2;
    result = (Math.round((result+Number.EPSILON) * 100) / 100);
    dispPrev.textContent = '';
    dispCurr.append(result);
};

function sub(num1,num2){
    result = num1-num2;
    result = (Math.round((result+Number.EPSILON) * 100) / 100);
    dispPrev.textContent = '';
    dispCurr.append(result);
};

function mult(num1,num2){
    result = num1*num2;
    result = (Math.round((result+Number.EPSILON) * 100) / 100);
    dispPrev.textContent = '';
    dispCurr.append(result);
};

function divide(num1,num2){
        result = num1/num2;
        result = (Math.round((result+Number.EPSILON) * 100) / 100);
        dispPrev.textContent = '';
        dispCurr.append(result);
    };

//clears the screen
let clear = document.getElementById('clear');
clear.addEventListener('click', clearScreen);

function clearScreen(){
    dispCurr.textContent = '';
    dispPrev.textContent = '';

}

// deletes previous entry
let deleteBtn = document.getElementById('delete')
deleteBtn.addEventListener('click', deleteIt)

function deleteIt(){
    let newDisp = dispCurr.textContent.slice(0,-1);
    dispCurr.textContent=''
    dispCurr.append(newDisp);
}