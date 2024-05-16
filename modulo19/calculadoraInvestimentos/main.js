import { generateReturnsArray } from "./src/investmentGoals";

// const calculateButton = document.getElementById('calculate-results');
const form = document.getElementById('investment-form');
const clearFormButton = document.getElementById('clear-form');
//border-2 border-red-500 rounded-lg 

function renderProgression(evt) {
  evt.preventDefault();
  if (
    document.querySelector('.error') &&
    document.querySelector('.border-2') && 
    document.querySelector('.border-red-500') && 
    document.querySelector('.rounded-lg')
  ) {
    return;
  }

  //const startingAmount = Number(form['startingAmount'].value);
  const startingAmount = Number(document.getElementById('starting-amount').value.replace(",","."));
  const additionalContribution = Number(document.getElementById('additional-contribution').value.replace(',', '.'));
  const timeAmount = Number(document.getElementById('time-amount').value);
  const timeAmountPeriod = document.getElementById('time-amount-period').value;
  const returnRatePeriod = document.getElementById('evaluation-period').value;
  const returnRate = Number(document.getElementById('return-rate').value.replace(',', '.'));
  const taxRate = Number(document.getElementById('tax-rate').value.replace(',', '.'));

  const returnArrays = generateReturnsArray(
    startingAmount,
    timeAmount, 
    timeAmountPeriod, 
    additionalContribution, 
    returnRate, 
    returnRatePeriod
  )

  console.log(returnArrays);
}

function clearForm() {
  form['starting-amount'].value = '';
  form['additional-contribution'].value = '';
  form['time-amount'].value = '';
  form['return-rate'].value = '';
  form['tax-rate'].value = '';

  const errorInputContainers = document.querySelectorAll('.border-2, .border-red-500, .rounded-lg');

  for (const errorInputContainer of errorInputContainers) {
    errorInputContainer.classList.remove('border-2', 'border-red-500', 'rounded-lg');
    errorInputContainer.parentElement.querySelector('p').remove();
  }
}

function validateInput(evt) {
  if (evt.target.value === '') {
    return;
  }

  // const parentElement = evt.target.parentElement; 
  const { parentElement } = evt.target;
  const grandParentElement = evt.target.parentElement.parentElement;
  // const {grandParentElement} = evt.target;
  const inputValue = evt.target.value.replace(',', '.');

  if (
    !parentElement.classList.contains('border-2') && !parentElement.classList.contains('border-red-500') &&
    !parentElement.classList.contains('rounded-lg') &&
    !parentElement.classList.contains('error') &&
    (isNaN(inputValue) || Number(inputValue) <= 0) 
  ) {
    const errorTextElement = document.createElement('p');
    errorTextElement.classList.add('text-red-500');
    errorTextElement.innerText = 'Insira um valor numérico e maior que zero.';

    parentElement.classList.add('error');
    parentElement.classList.add('border-2');
    parentElement.classList.add('border-red-500');
    parentElement.classList.add('rounded-lg');
    grandParentElement.appendChild(errorTextElement);

    console.log('parentElement:', parentElement);
    console.log('grandParentElement:', grandParentElement);
  } else if (
    parentElement.classList.contains('error') && 
    parentElement.classList.contains('border-2') && 
    parentElement.classList.contains('border-red-500') &&
    parentElement.classList.contains('rounded-lg') &&
    !isNaN(inputValue) && Number(inputValue) > 0
  ) {
    parentElement.classList.remove('border-2');
    parentElement.classList.remove('border-red-500');
    parentElement.classList.remove('rounded-lg');
    parentElement.classList.remove('error');
    grandParentElement.querySelector('p').remove();
  }
}

for (const formElement of form) {
  if (formElement.tagName === 'INPUT' && formElement.hasAttribute('name')) {
    formElement.addEventListener('blur', validateInput);
  }
}

form.addEventListener('submit', renderProgression);
clearFormButton.addEventListener('click', clearForm);