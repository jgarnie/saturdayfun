'use strict'
const btn = document.querySelector('#calc');


const calculation = () => {
const hourElm = document.querySelector('.payhour');
const dayElm = document.querySelector('.dayhour');
const monthElm = document.querySelector('.daymonth');
const totalElm = document.querySelector('#display');
const taxElm = document.querySelector('#tax');
const taxesElm = document.querySelector('#display1');


    let hour = Number(hourElm.value);
    let day = Number(dayElm.value);
    let month = Number(monthElm.value);
    const tax = Number(taxElm.value/100)
    const beforeTax = (hour*day)*month;
    const taxed = ((hour*day)*month)*tax;
    const afterTax = beforeTax-taxed;
    totalElm.value = afterTax;
    taxesElm.value = taxed;


    console.log(afterTax);
    console.log(hour);
    console.log(day);
    console.log(month);
    console.log(taxed);

};


btn.addEventListener('click', calculation)