let prevNum = '';
let currNum = '';
let selectedOp ='';

let dispCurr = document.querySelector('.currOp');
let dispPrev = document.querySelector('.prevOp');

//when click a button add to currNum
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
    console.log(selectedOp)
    dispPrev.append(prevNum, selectedOp);
    dispCurr.textContent= '';
    return (selectedOp,prevNum)
}


//add = functionality and dislpay total
let equal = document.getElementById('equal');
equal.addEventListener('click', operate);


function add(num1,num2){
    return num1+num2;
};

function sub(num1,num2){
    return num1-num2;
};

function mult(num1,num2){
  return num1*num2;
};

function divide(num1,num2){
  return num1/num2;
};

// assign nums from display and do the math
function operate(){
    let num1 = parseFloat(dispPrev.textContent.slice(0,-1))
    let num2 = parseFloat(dispCurr.textContent)
    
    if (selectedOp === '+'){
        console.log( add(num1,num2));
    } else if (selectedOp === '-'){
        console.log( sub(num1,num2));
    } else if (selectedOp === '*'){
        console.log( mult(num1,num2));
    } else if (selectedOp === '/'){
        console.log( divide(num1,num2));
    }

}
