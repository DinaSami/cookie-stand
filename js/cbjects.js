'use strict';
let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let tOt = 0;
let totalEach = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
// let totalEachHour = 0;
let mainContaier = [];
function Location(location, minCusterPerHour, maxCusterPerHour, avrCookiePerSale, numberOfCustmerPerHour, amountPurchEachHour) {
  this.location = location;
  this.minCusterPerHour = minCusterPerHour;
  this.maxCusterPerHour = maxCusterPerHour;
  this.avrCookiePerSale = avrCookiePerSale;
  this.numberOfCustmerPerHour = numberOfCustmerPerHour;
  this.amountPurchEachHour = amountPurchEachHour;
  this.totalCookiePerDay = 0;
  // this.totalEachHour = 0;
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
    totalEach[i]=totalEach[i]+perHour;
    // tOt = this.totalCookiePerDay + tOt;
  }
};
// Location.prototype.totalEachHourLocation = function () {
//   for (let i = 0; i < this.location.length; i++) {
//     this.amountTotalEachHour.push(this.amountPurchEachHour[i]);
    
//   }
//   totalEachHour = this.amountTotalEachHour + totalEachHour;
// };

Location.prototype.render = function () {
  const container = document.getElementById('salesSection');
  const articlEl = document.createElement('article');
  container.appendChild(articlEl);
  const tableEl = document.createElement('table');
  articlEl.appendChild(tableEl);

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
  lastHeaderCell.textContent = 'Total';
};
headerTable();

let footerRow = function (){

  const container = document.getElementById('salesSection');
  const articlEl = document.createElement('article');
  container.appendChild(articlEl);
  const tableEl = document.createElement('table');
  articlEl.appendChild(tableEl);
  const FooterEl = document.createElement('tr');
  tableEl.appendChild(FooterEl);

  const firstfooterCell = document.createElement('td');
  FooterEl.appendChild(firstfooterCell);
  firstfooterCell.textContent = 'Totals';


  for (let i = 0; i < workingHours.length; i++) {

    const td2El = document.createElement('td');
    FooterEl.appendChild(td2El);
    td2El.textContent = totalEach[i];
  }
  const td2El = document.createElement('td');
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
// seattle.totalEachHourLocation();

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
for (let i = 0; i < mainContaier.length; i++) {
  tOt=tOt+mainContaier[i].totalCookiePerDay;
  console.log(mainContaier[i].totalCookiePerDay);
}
console.log(tOt);
footerRow();



function getRandomCus(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// console.log(mainContaier);
// for(let i=0 ; i<mainContaier.length; i++){
//   console.log(mainContaier[i].location);
// }
// console.log(tOt);

// console.log(totalEachHour);
console.log(totalEach);
