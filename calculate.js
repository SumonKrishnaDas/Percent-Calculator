document.getElementById('btn-calculate').addEventListener('click',discounted);

function discounted(){




const inputField= document.getElementById('input-field');
const inputAmountString=inputField.value
inputAmount=parseFloat(inputAmountString);
inputField.value='';


const percentField=document.getElementById('percent-field');
const percentAmountString = percentField.value;
const percentAmount=parseFloat(percentAmountString);
const calculate= (percentAmount*inputAmount)/100;
console.log(calculate);
percentField.value='';

const setup = document.getElementById('result');
setup.innerText=calculate;



}
