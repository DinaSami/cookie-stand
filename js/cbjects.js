'use strict';
let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// let totalLocationPerHour = ['Seattle','Tokyo','Dubai','Paris','Lima'],

function Location(location, minCusterPerHour, maxCusterPerHour, avrCookiePerSale, numberOfCustmerPerHour, amountPurchEachHour) {
  this.location = location;
  this.minCusterPerHour = minCusterPerHour;
  this.maxCusterPerHour = maxCusterPerHour;
  this.avrCookiePerSale = avrCookiePerSale;
  this.numberOfCustmerPerHour = numberOfCustmerPerHour;
  this.amountPurchEachHour = amountPurchEachHour;
  this.totalCookiePerDay = 0;
}

Location.prototype.getCustmerNumber = function () {

  for (let i = 0; i < workingHours.length; i++) {
    let randomFinal = getRandomCus(this.minCusterPerHour, this.maxCusterPerHour);
    this.numberOfCustmerPerHour.push(randomFinal);
  }
};

Location.prototype.calcAmountPurchPerHour = function () {
  for (let i = 0; i < workingHours.length; i++) {
    const perHour = Math.ceil(this.numberOfCustmerPerHour[i] * this.avrCookiePerSale);
    this.amountPurchEachHour.push(perHour);
    this.totalCookiePerDay = this.totalCookiePerDay + perHour;
  }
};

Location.prototype.render = function () {
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
};

// const container = document.getElementById('salesSection');
// const articlEl = document.createElement('article');
// container.appendChild(articlEl);
// const tableEl = document.createElement('table');
// articlEl.appendChild(tableEl);
// const headerEl = document.createElement('tr');
// tableEl.appendChild(headerEl);

// for(let i=0 ; i<workingHours.length; i++){
//   const thEl = document.createElement('th');
//   headerEl.appendChild(thEl);
//   thEl.textContent = workingHours[i];
// }
// const lastHeaderCell = document.createElement('th');
// headerEl.appendChild(lastHeaderCell);
// lastHeaderCell.textContent = 'Daily Location Total';


let headerTable = function () {
  const container = document.getElementById('salesSection');
  const articlEl = document.createElement('article');
  container.appendChild(articlEl);
  const tableEl = document.createElement('table');
  articlEl.appendChild(tableEl);
  const headerEl = document.createElement('tr');
  tableEl.appendChild(headerEl);

  const firstHeaderCell = document.createElement('th');
  headerEl.appendChild(firstHeaderCell);
  firstHeaderCell.textContent = 'Location';

  for (let i = 0; i < workingHours.length; i++) {
    const thEl = document.createElement('th');
    headerEl.appendChild(thEl);
    thEl.textContent = workingHours[i];
  }
  const lastHeaderCell = document.createElement('th');
  headerEl.appendChild(lastHeaderCell);
  lastHeaderCell.textContent = 'Daily Location Total';
};
headerTable();

// const tableData = document.createElement('tr');
// tableEl.appendChild(tableData);
// const tdEl = document.createElement('td');
// tableData.appendChild(tdEl);

// for (let i = 0; i < workingHours; i++) {
//   const tdEl = document.createElement('td');
//   tableData.appendChild(tdEl);
//   tdEl.textContent = `${this.amountPurchEachHour[i]} cookies`;
// }


// const tableEl = document.createElement('table');
//   articlEl.appendChild(tableEl);

//   const tableData = document.createElement('tr');
//   tableEl.appendChild(tableData);
//   // const tdEl = document.createElement('td');
//   // tableData.appendChild(tdEl);

//   for (let i = 0; i < workingHours; i++) {
//     const tdEl = document.createElement('td');
//     tableData.appendChild(tdEl);
//     tdEl.textContent = `${this.totalCookiePerDay[i]}`;
//   }









const seattle = new Location('Seattle', 23, 65, 6.3, [], []);
const tokyo = new Location('Tokyo', 3, 24, 1.2, [], []);
const dubai = new Location('Dubai', 11, 38, 3.7, [], []);
const Paris = new Location('Paris', 20, 38, 2.3, [], []);
const lima = new Location('Lima', 2, 16, 4.6, [], []);


seattle.getCustmerNumber();
seattle.calcAmountPurchPerHour();
seattle.render();


tokyo.getCustmerNumber();
tokyo.calcAmountPurchPerHour();
tokyo.render();


dubai.getCustmerNumber();
dubai.calcAmountPurchPerHour();
dubai.render();


Paris.getCustmerNumber();
Paris.calcAmountPurchPerHour();
Paris.render();


lima.getCustmerNumber();
lima.calcAmountPurchPerHour();
lima.render();

function getRandomCus(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
