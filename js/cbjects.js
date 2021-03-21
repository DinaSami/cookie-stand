'use strict';
let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let total = 0;

const Seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  amountPurchEachHour: [],
  getCustmerNumber: function () {


    for (let i = 0; i < workingHours.length; i++) {
      let randomFinal = getRandomCus(this.minCust, this.maxCust);
      this.amountPurchEachHour.push(randomFinal);
      total = total + randomFinal;
      console.log(randomFinal);
    }
    console.log(this.amountPurchEachHour);

    console.log(total);
    return this.amountPurchEachHour;
  },
  render: function () {
    const container = document.getElementById('select');
    const articlEl = document.createElement('article');
    container.appendChild(articlEl);
    const pEL = document.createElement('p');
    articlEl.appendChild(pEL);
    pEL.textContent = this.location;
    const ulEl = document.createElement('ul');
    articlEl.appendChild(ulEl);
    for (let i = 0; i < workingHours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${workingHours[i]}:${this.amountPurchEachHour[i]}`;
    }
    const p2El = document.createElement('p');
    articlEl.appendChild(p2El);
    p2El.textContent = `Total: ${total}`;
  }

};

function getRandomCus(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
Seattle.getCustmerNumber();
Seattle.render();

//second location
total = 0;
const Tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  amountPurchEachHour: [],
  getCustmerNumber: function () {


    for (let i = 0; i < workingHours.length; i++) {
      let randomFinal = getRandomCus(this.minCust, this.maxCust);
      this.amountPurchEachHour.push(randomFinal);
      total = total + randomFinal;
    }
    console.log(this.amountPurchEachHour);
    console.log(total);
    return this.amountPurchEachHour;
  },
  render: function () {
    const container = document.getElementById('select');
    const articlEl = document.createElement('article');
    container.appendChild(articlEl);
    const pEL = document.createElement('p');
    articlEl.appendChild(pEL);
    pEL.textContent = this.location;
    const ulEl = document.createElement('ul');
    articlEl.appendChild(ulEl);
    for (let i = 0; i < workingHours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${workingHours[i]}:${this.amountPurchEachHour[i]}`;
    }
    const p2El = document.createElement('p');
    articlEl.appendChild(p2El);
    p2El.textContent = `Total: ${total}`;
  }

};

Tokyo.getCustmerNumber();
Tokyo.render();

//Third location
total = 0;
const Dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  amountPurchEachHour: [],
  getCustmerNumber: function () {


    for (let i = 0; i < workingHours.length; i++) {
      let randomFinal = getRandomCus(this.minCust, this.maxCust);
      this.amountPurchEachHour.push(randomFinal);
      total = total + randomFinal;
    }
    console.log(this.amountPurchEachHour);
    console.log(total);
    return this.amountPurchEachHour;
  },
  render: function () {
    const container = document.getElementById('select');
    const articlEl = document.createElement('article');
    container.appendChild(articlEl);
    const pEL = document.createElement('p');
    articlEl.appendChild(pEL);
    pEL.textContent = this.location;
    const ulEl = document.createElement('ul');
    articlEl.appendChild(ulEl);
    for (let i = 0; i < workingHours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${workingHours[i]}:${this.amountPurchEachHour[i]}`;
    }
    const p2El = document.createElement('p');
    articlEl.appendChild(p2El);
    p2El.textContent = `Total: ${total}`;
  }

};

Dubai.getCustmerNumber();
Dubai.render();

//Forth location
total = 0;
const Paris = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  amountPurchEachHour: [],
  getCustmerNumber: function () {


    for (let i = 0; i < workingHours.length; i++) {
      let randomFinal = getRandomCus(this.minCust, this.maxCust);
      this.amountPurchEachHour.push(randomFinal);
      total = total + randomFinal;
    }
    console.log(this.amountPurchEachHour);
    console.log(total);
    return this.amountPurchEachHour;
  },
  render: function () {
    const container = document.getElementById('select');
    const articlEl = document.createElement('article');
    container.appendChild(articlEl);
    const pEL = document.createElement('p');
    articlEl.appendChild(pEL);
    pEL.textContent = this.location;
    const ulEl = document.createElement('ul');
    articlEl.appendChild(ulEl);
    for (let i = 0; i < workingHours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${workingHours[i]}:${this.amountPurchEachHour[i]}`;
    }
    const p2El = document.createElement('p');
    articlEl.appendChild(p2El);
    p2El.textContent = `Total: ${total}`;
  }

};

Paris.getCustmerNumber();
Paris.render();

//Fifth location
total = 0;
const Lima = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  amountPurchEachHour: [],
  getCustmerNumber: function () {


    for (let i = 0; i < workingHours.length; i++) {
      let randomFinal = getRandomCus(this.minCust, this.maxCust);
      this.amountPurchEachHour.push(randomFinal);
      total = total + randomFinal;
    }
    console.log(this.amountPurchEachHour);
    console.log(total);
    return this.amountPurchEachHour;
  },
  render: function () {
    const container = document.getElementById('select');
    const articlEl = document.createElement('article');
    container.appendChild(articlEl);
    const pEL = document.createElement('p');
    articlEl.appendChild(pEL);
    pEL.textContent = this.location;
    const ulEl = document.createElement('ul');
    articlEl.appendChild(ulEl);
    for (let i = 0; i < workingHours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${workingHours[i]}:${this.amountPurchEachHour[i]}`;
    }
    const p2El = document.createElement('p');
    articlEl.appendChild(p2El);
    p2El.textContent = `Total: ${total}`;
  }

};

Lima.getCustmerNumber();
Lima.render();
