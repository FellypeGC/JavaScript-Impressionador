import { generateReturnsArray } from "./src/investmentGoals";
import { Chart } from "chart.js/auto";
import { createTable } from "./src/table";

//border-2 border-red-500 rounded-lg 
// const calculateButton = document.getElementById('calculate-results');
const finalMoneyChart = document.getElementById('final-money-distribution');
const progressionChart = document.getElementById('progresssion');
const form = document.getElementById('investment-form');
const clearFormButton = document.getElementById('clear-form');
let doughnutChartReference = {};
let progressionChartReference = {};

const columnsArray = [
  { columnLabel: "Mês", accessor: "month" },
  {
    columnLabel: "Total Investido",
    accessor: "investedAmount",
    format: (numberInfo) => formatCurrencyToTable(numberInfo),
  },
  {
    columnLabel: "Rendimento Mensal",
    accessor: "interestReturns",
    format: (numberInfo) => formatCurrencyToTable(numberInfo),
  },
  {
    columnLabel: "Rendimento Total",
    accessor: "totalInterestReturns",
    format: (numberInfo) => formatCurrencyToTable(numberInfo),
  },
  {
    columnLabel: "Quantia Total",
    accessor: "totalAmount",
    format: (numberInfo) => formatCurrencyToTable(numberInfo),
  },
];

function formatCurrencyToTable(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function formatCurrencyToGraph(value) {
  return value.toFixed(2);
}

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
  
  resetCharts();

  //const startingAmount = Number(form['startingAmount'].value);
  const startingAmount = Number(document.getElementById('starting-amount').value.replace(",","."));
  const additionalContribution = Number(document.getElementById('additional-contribution').value.replace(',', '.'));
  const timeAmount = Number(document.getElementById('time-amount').value);
  const timeAmountPeriod = document.getElementById('time-amount-period').value;
  const returnRatePeriod = document.getElementById('evaluation-period').value;
  const returnRate = Number(document.getElementById('return-rate').value.replace(',', '.'));
  const taxRate = Number(document.getElementById('tax-rate').value.replace(',', '.'));

  const returnsArray = generateReturnsArray(
    startingAmount,
    timeAmount, 
    timeAmountPeriod, 
    additionalContribution, 
    returnRate, 
    returnRatePeriod
  )

  const finalInvestmentObject = returnsArray[returnsArray.length - 1];

  doughnutChartReference = new Chart(finalMoneyChart, {
    type: 'doughnut',
    data: {
      labels: [
        'Total investido',
        'Rendimento',
        'Imposto'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [
          formatCurrencyToGraph(finalInvestmentObject.investedAmount), 
          formatCurrencyToGraph(finalInvestmentObject.totalInterestReturns * (1 - taxRate/100)), 
          formatCurrencyToGraph(finalInvestmentObject.totalInterestReturns * (taxRate/100))
        ],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    },
  });

  progressionChartReference = new Chart(progressionChart, {
    type: 'bar',
    data: {
      labels: returnsArray.map(investmentObject => investmentObject.month),
      datasets: [{
        label: 'Total Investido',
        data: returnsArray.map(investmentObject => formatCurrencyToGraph(investmentObject.investedAmount)),
        backgroundColor: 'rgb(255, 99, 132)'
      }, {
        label: 'Retorno do Investimento',
        data: returnsArray.map(investmentObject => formatCurrencyToGraph(investmentObject.interestReturns)),
        backgroundColor: 'rgb(54, 162, 235)'
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
      }
    }
  });

  createTable(columnsArray, returnsArray, 'results-table');
}

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function resetCharts() {
  if (
    !isObjectEmpty(doughnutChartReference) && 
    !isObjectEmpty(progressionChartReference)
  ) {
    doughnutChartReference.destroy();
    progressionChartReference.destroy();
  }
}

function clearForm() {
  form['starting-amount'].value = '';
  form['additional-contribution'].value = '';
  form['time-amount'].value = '';
  form['return-rate'].value = '';
  form['tax-rate'].value = '';

  resetCharts();

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

const mainEl = document.querySelector('main');
const carouselEl = document.getElementById('carousel');
const nextButton = document.getElementById('slide-arrow-next');
const previousButton = document.getElementById('slide-arrow-previous');

nextButton.addEventListener('click', () => {
  carouselEl.scrollLeft += mainEl.clientWidth;
});

previousButton.addEventListener('click', () => {
  carouselEl.scrollLeft -= mainEl.clientWidth;
});

form.addEventListener('submit', renderProgression);
clearFormButton.addEventListener('click', clearForm);