'use strict';

const container = document.getElementById('salesSection');
console.log(container);
const articlEl = document.createElement('article');
container.appendChild(articlEl);
const tableEl = document.createElement('table');
articlEl.appendChild(tableEl);

let workingHours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];
let tOt = 0;
let totalEach = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let mainContaier = [];
function Location(location, minCusterPerHour, maxCusterPerHour, avrCookiePerSale, numberOfCustmerPerHour, amountPurchEachHour) {
  this.location = location;
  this.minCusterPerHour = minCusterPerHour;
  this.maxCusterPerHour = maxCusterPerHour;
  this.avrCookiePerSale = avrCookiePerSale;
  this.numberOfCustmerPerHour = numberOfCustmerPerHour;
  this.amountPurchEachHour = amountPurchEachHour;
  this.totalCookiePerDay = 0;
  mainContaier.push(this);

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
    totalEach[i] = totalEach[i] + perHour;
  }
};


Location.prototype.render = function () {
  let tr1 = document.createElement('tr');
  tableEl.appendChild(tr1);
  tr1.textContent = this.location;

  for (let i = 0; i < workingHours.length; i++) {
    let td1 = document.createElement('td');
    tr1.appendChild(td1);
    td1.textContent = this.amountPurchEachHour[i];
  }
  let td2 = document.createElement('td');
  tr1.appendChild(td2);
  td2.textContent = this.totalCookiePerDay;
};


let headerTable = function () {
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
  lastHeaderCell.textContent = 'Total';
};
headerTable();

let footerRow = function () {

  const FooterEl = document.createElement('tr');
  FooterEl.setAttribute('id', 'footerTr');
  tableEl.appendChild(FooterEl);


  const firstfooterCell = document.createElement('th');
  FooterEl.appendChild(firstfooterCell);
  firstfooterCell.textContent = 'Totals';


  for (let i = 0; i < workingHours.length; i++) {

    const td2El = document.createElement('th');
    FooterEl.appendChild(td2El);
    td2El.textContent = totalEach[i];
  }

  for (let i = 0; i < mainContaier.length; i++) {
    tOt = tOt + mainContaier[i].totalCookiePerDay;
  }

  const td2El = document.createElement('th');
  FooterEl.appendChild(td2El);
  td2El.textContent = tOt;
};


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

footerRow();


let myForm = document.getElementById('salesForm');

myForm.addEventListener('submit', addNewLocation);

function addNewLocation(event) {
  event.preventDefault();


  let myLocation = event.target.location.value;
  let minNumber = event.target.minCusterPerHour.value;
  minNumber = parseInt(minNumber);

  let maxNumber = event.target.maxCusterPerHour.value;
  maxNumber = parseInt(maxNumber);

  let avrNumber = event.target.avrCookiePerSale.value;
  avrNumber = parseFloat(avrNumber);

  let newLocation = new Location(myLocation, minNumber, maxNumber, avrNumber, [], []);

  newLocation.getCustmerNumber();
  newLocation.calcAmountPurchPerHour();
  newLocation.render();
  let footerDelete = document.getElementById('footerTr');
  tableEl.removeChild(footerDelete);
  footerRow();
}
