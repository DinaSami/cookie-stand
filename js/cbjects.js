'use strict';
let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// let totalLocationPerHour = ['Seattle','Tokyo','Dubai','Paris','Lima'],
// let total = 0;

const seattle = {
  location: 'Seattle',
  minCusterPerHour: 23,
  maxCusterPerHour: 65,
  avrCookiePerSale: 6.3,
  numberOfCustmerPerHour: [],
  amountPurchEachHour: [],
  totalCookiePerDay: 0,
  getCustmerNumber: function () {


    for (let i = 0; i < workingHours.length; i++) {
      let randomFinal = getRandomCus(this.minCusterPerHour, this.maxCusterPerHour);
      this.numberOfCustmerPerHour.push(randomFinal);
    }
  },
  calcAmountPurchPerHour: function () {
    for (let i = 0; i < workingHours.length; i++) {
      const perHour = Math.ceil(this.numberOfCustmerPerHour[i] * this.avrCookiePerSale);
      this.amountPurchEachHour.push(perHour);
      this.totalCookiePerDay = this.totalCookiePerDay + perHour;
    }
  },
  render: function () {
    const container = document.getElementById('salesSection');
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
      liEl.textContent = `${workingHours[i]} : ${this.amountPurchEachHour[i]} cookies`;
    }
    const p2El = document.createElement('p');
    articlEl.appendChild(p2El);
    p2El.textContent = `Total : ${this.totalCookiePerDay}`;
  }
};

function getRandomCus(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
seattle.getCustmerNumber();
seattle.calcAmountPurchPerHour();
seattle.render();

//second location

const tokyo = {
  location: 'Tokyo',
  minCusterPerHour: 3,
  maxCusterPerHour: 24,
  avrCookiePerSale: 1.2,
  numberOfCustmerPerHour: [],
  amountPurchEachHour: [],
  totalCookiePerDay: 0,
  getCustmerNumber: function () {


    for (let i = 0; i < workingHours.length; i++) {
      let randomFinal = getRandomCus(this.minCusterPerHour, this.maxCusterPerHour);
      this.numberOfCustmerPerHour.push(randomFinal);
    }
  },
  calcAmountPurchPerHour: function () {
    for (let i = 0; i < workingHours.length; i++) {
      const perHour = Math.ceil(this.numberOfCustmerPerHour[i] * this.avrCookiePerSale);
      this.amountPurchEachHour.push(perHour);
      this.totalCookiePerDay = this.totalCookiePerDay + perHour;
    }
  },

  render: function () {
    const container = document.getElementById('salesSection');
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
      liEl.textContent = `${workingHours[i]} : ${this.amountPurchEachHour[i]} cookies`;
    }
    const p2El = document.createElement('p');
    articlEl.appendChild(p2El);
    p2El.textContent = `Total : ${this.totalCookiePerDay}`;
  }
};

tokyo.getCustmerNumber();
tokyo.calcAmountPurchPerHour();
tokyo.render();

//Third location

const dubai = {
  location: 'Dubai',
  minCusterPerHour: 11,
  maxCusterPerHour: 38,
  avrCookiePerSale: 3.7,
  numberOfCustmerPerHour: [],
  amountPurchEachHour: [],
  totalCookiePerDay: 0,
  getCustmerNumber: function () {


    for (let i = 0; i < workingHours.length; i++) {
      let randomFinal = getRandomCus(this.minCusterPerHour, this.maxCusterPerHour);
      this.numberOfCustmerPerHour.push(randomFinal);
    }
  },
  calcAmountPurchPerHour: function () {
    for (let i = 0; i < workingHours.length; i++) {
      const perHour = Math.ceil(this.numberOfCustmerPerHour[i] * this.avrCookiePerSale);
      this.amountPurchEachHour.push(perHour);
      this.totalCookiePerDay = this.totalCookiePerDay + perHour;
    }
  },

  render: function () {
    const container = document.getElementById('salesSection');
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
      liEl.textContent = `${workingHours[i]} : ${this.amountPurchEachHour[i]} cookies`;
    }
    const p2El = document.createElement('p');
    articlEl.appendChild(p2El);
    p2El.textContent = `Total : ${this.totalCookiePerDay}`;
  }
};

dubai.getCustmerNumber();
dubai.calcAmountPurchPerHour();
dubai.render();

//Forth location

const paris = {
  location: 'Paris',
  minCusterPerHour: 20,
  maxCusterPerHour: 38,
  avrCookiePerSale: 2.3,
  numberOfCustmerPerHour: [],
  amountPurchEachHour: [],
  totalCookiePerDay: 0,
  getCustmerNumber: function () {


    for (let i = 0; i < workingHours.length; i++) {
      let randomFinal = getRandomCus(this.minCusterPerHour, this.maxCusterPerHour);
      this.numberOfCustmerPerHour.push(randomFinal);
    }
  },
  calcAmountPurchPerHour: function () {
    for (let i = 0; i < workingHours.length; i++) {
      const perHour = Math.ceil(this.numberOfCustmerPerHour[i] * this.avrCookiePerSale);
      this.amountPurchEachHour.push(perHour);
      this.totalCookiePerDay = this.totalCookiePerDay + perHour;
    }
  },

  render: function () {
    const container = document.getElementById('salesSection');
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
      liEl.textContent = `${workingHours[i]} : ${this.amountPurchEachHour[i]} cookies`;
    }
    const p2El = document.createElement('p');
    articlEl.appendChild(p2El);
    p2El.textContent = `Total : ${this.totalCookiePerDay}`;
  }
};

paris.getCustmerNumber();
paris.calcAmountPurchPerHour();
paris.render();

//Fifth location

const lima = {
  location: 'Lima',
  minCusterPerHour: 2,
  maxCusterPerHour: 16,
  avrCookiePerSale: 4.6,
  numberOfCustmerPerHour: [],
  amountPurchEachHour: [],
  totalCookiePerDay: 0,
  getCustmerNumber: function () {


    for (let i = 0; i < workingHours.length; i++) {
      let randomFinal = getRandomCus(this.minCusterPerHour, this.maxCusterPerHour);
      this.numberOfCustmerPerHour.push(randomFinal);
    }
  },
  calcAmountPurchPerHour: function () {
    for (let i = 0; i < workingHours.length; i++) {
      const perHour = Math.ceil(this.numberOfCustmerPerHour[i] * this.avrCookiePerSale);
      this.amountPurchEachHour.push(perHour);
      this.totalCookiePerDay = this.totalCookiePerDay + perHour;
    }
  },

  render: function () {
    const container = document.getElementById('salesSection');
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
      liEl.textContent = `${workingHours[i]} : ${this.amountPurchEachHour[i]} cookies`;
    }
    const p2El = document.createElement('p');
    articlEl.appendChild(p2El);
    p2El.textContent = `Total : ${this.totalCookiePerDay}`;
  }
};

lima.getCustmerNumber();
lima.calcAmountPurchPerHour();
lima.render();
