'use strict';
//To do:
// 1.Stores the min/max hourly customers
// 2.Average cookie per customer
// 3.Uses a method of that object to generate a random number of customers per hour
// 4.Store the results for each location in a separate array
// 5.Display the values of each array as unordered lists in the browser
// perhaps as a property of the object representing that location
// 6.Calculating the sum of these hourly totals

//-------- Seattle --------
const Seattle = {
  heading:'Sales of Seattle',
  minHourlyCookies:23,
  maxHourlyCookies:65,
  avgerageCookies:6.3,
  NumberOfHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  CookieForLocation:[],
  totalSales:0,
  generateRandomNumber:function (min,max,avg){
    return Math.ceil((Math.random() * (max - min + 1) + min)*avg);
  },


  render: function(){
    for(let i = 0; i < this.NumberOfHours.length; i++) {
      this.CookieForLocation[i] = this.generateRandomNumber(this.minHourlyCookies,this.maxHourlyCookies,this.avgerageCookies);
      this.totalSales = this.totalSales + this.CookieForLocation[i];
    }

    const parentElement = document.getElementById('Resturant');
    const h1Element = document.createElement('h1');
    parentElement.appendChild(h1Element);
    h1Element.textContent = this.heading;

    const h2Element = document.createElement('h2');
    parentElement.appendChild(h2Element);
    h2Element.textContent = this.city;

    const tableElement = document.createElement('table');
    parentElement.appendChild(tableElement);

    for (let index = 0; index < this.NumberOfHours.length; index++) {
      const trElement = document.createElement('tr');
      tableElement.appendChild(trElement);
      const thElement = document.createElement('th');
      trElement.appendChild(thElement);
      thElement.scope = HTMLTableRowElement;
      //this.thElement = this.city;
      thElement.textContent ('Seattle');
      const tdElement = document.createElement('td');
      trElement.appendChild(tdElement);
      tdElement.textContent = this.CookieForLocation[index];

      //  liElement.textContent = `${this.NumberOfHours[index]} : ${this.CookieForLocation[index]}`;
      const trElement1 = document.createElement('tr');
      tableElement.appendChild(trElement1);
      const thElement1 = document.createElement('th');
      trElement1.appendChild(thElement1);
      thElement1.scope = HTMLTableColElement;
      //this.thElement = this.city;
      thElement1.textContent `${this.NumberOfHours[index]}`;
      const tdElement1 = document.createElement('td');
      trElement1.appendChild(tdElement1);
      tdElement1.textContent = `${this.CookieForLocation[index]} COOKIES`;

    }
    //NOTE TO SELF ---> ADD FOOT TO THE TABLE
    // const TotalElement = document.createElement ('tr');
    // tableElement.appendChild(TotalElement);
    // TotalElement.textContent = `Total : ${this.totalSales}`;


  }
};

Seattle.render();


//  //-------- Tokyo --------

// const Tokyo = {
//   heading: 'Sales of',
//   city: 'Tokyo' ,
//   minHourlyCookies:3,
//   maxHourlyCookies:24,
//   avgerageCookies:1.2,
//   NumberOfHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   CookieForLocation:[],
//   CustomerPerHour:[],
//   totalSales:0,
//   generateRandomNumber:function (min,max,avg){
//     return Math.floor((Math.random() * (max - min + 1) + min)*avg);
//   },


//   render: function(){
//     for(let i = 0; i < this.NumberOfHours.length; i++) {
//       this.CookieForLocation[i] = this.generateRandomNumber(this.minHourlyCookies,this.maxHourlyCookies,this.avgerageCookies);
//       this.totalSales = this.totalSales + this.CookieForLocation[i];
//     }

//     const parentElement = document.getElementById('Resturant');
//     const h1Element = document.createElement('h1');
//     parentElement.appendChild(h1Element);
//     h1Element.textContent = this.heading;

//     const h2Element = document.createElement('h2');
//     parentElement.appendChild(h2Element);
//     h2Element.textContent = this.city;

//     const ulElement = document.createElement('ul');
//     parentElement.appendChild(ulElement);

//     for (let index = 0; index < this.NumberOfHours.length; index++) {
//       const liElement = document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent = `${this.NumberOfHours[index]} : ${this.CookieForLocation[index]}`;

//     }

//     const liTotalElement = document.createElement ('li');
//     ulElement.appendChild(liTotalElement);
//     liTotalElement.textContent = `Total : ${this.totalSales}`;


//   }
// };
// Tokyo.render();

// //-------- Dubai --------

// const Dubai = {
//   heading: 'Sales of',
//   city: 'Dubai' ,
//   minHourlyCookies:11,
//   maxHourlyCookies:38,
//   avgerageCookies:3.7,
//   NumberOfHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   CookieForLocation:[],
//   totalSales:0,
//   generateRandomNumber:function (min,max,avg){
//     return Math.floor((Math.random() * (max - min + 1) + min)*avg);
//   },


//   render: function(){
//     for(let i = 0; i < this.NumberOfHours.length; i++) {
//       this.CookieForLocation[i] = this.generateRandomNumber(this.minHourlyCookies,this.maxHourlyCookies,this.avgerageCookies);
//       this.totalSales = this.totalSales + this.CookieForLocation[i];
//     }

//     const parentElement = document.getElementById('Resturant');
//     const h1Element = document.createElement('h1');
//     parentElement.appendChild(h1Element);
//     h1Element.textContent = this.heading;

//     const h2Element = document.createElement('h2');
//     parentElement.appendChild(h2Element);
//     h2Element.textContent = this.city;

//     const ulElement = document.createElement('ul');
//     parentElement.appendChild(ulElement);

//     for (let index = 0; index < this.NumberOfHours.length; index++) {
//       const liElement = document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent = `${this.NumberOfHours[index]} : ${this.CookieForLocation[index]}`;

//     }

//     const liTotalElement = document.createElement ('li');
//     ulElement.appendChild(liTotalElement);
//     liTotalElement.textContent = `Total : ${this.totalSales}`;


//   }
// };



// Dubai.render();


// //-------- Paris --------

// const Paris = {
//   heading: 'Sales of',
//   city: 'Paris' ,
//   minHourlyCookies:20,
//   maxHourlyCookies:38,
//   avgerageCookies:2.3,
//   NumberOfHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   CookieForLocation:[],
//   totalSales:0,
//   generateRandomNumber:function (min,max,avg){
//     return Math.floor((Math.random() * (max - min + 1) + min)*avg);
//   },


//   render: function(){
//     for(let i = 0; i < this.NumberOfHours.length; i++) {
//       this.CookieForLocation[i] = this.generateRandomNumber(this.minHourlyCookies,this.maxHourlyCookies,this.avgerageCookies);
//       this.totalSales = this.totalSales + this.CookieForLocation[i];
//     }

//     const parentElement = document.getElementById('Resturant');
//     const h1Element = document.createElement('h1');
//     parentElement.appendChild(h1Element);
//     h1Element.textContent = this.heading;

//     const h2Element = document.createElement('h2');
//     parentElement.appendChild(h2Element);
//     h2Element.textContent = this.city;

//     const ulElement = document.createElement('ul');
//     parentElement.appendChild(ulElement);

//     for (let index = 0; index < this.NumberOfHours.length; index++) {
//       const liElement = document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent = `${this.NumberOfHours[index]} : ${this.CookieForLocation[index]}`;

//     }

//     const liTotalElement = document.createElement ('li');
//     ulElement.appendChild(liTotalElement);
//     liTotalElement.textContent = `Total : ${this.totalSales}`;


//   }
// };
// Paris.render();


// //-------- Lima --------

// const Lima = {
//   heading: 'Sales of',
//   city: 'Lima' ,
//   minHourlyCookies:2,
//   maxHourlyCookies:16,
//   avgerageCookies:4.6,
//   NumberOfHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   CookieForLocation:[],
//   totalSales:0,
//   generateRandomNumber:function (min,max,avg){
//     return Math.floor((Math.random() * (max - min + 1) + min)*avg);
//   },


//   render: function(){
//     for(let i = 0; i < this.NumberOfHours.length; i++) {
//       this.CookieForLocation[i] = this.generateRandomNumber(this.minHourlyCookies,this.maxHourlyCookies,this.avgerageCookies);
//       this.totalSales = this.totalSales + this.CookieForLocation[i];
//     }

//     const parentElement = document.getElementById('Resturant');
//     const h1Element = document.createElement('h1');
//     parentElement.appendChild(h1Element);
//     h1Element.textContent = this.heading;

//     const h2Element = document.createElement('h2');
//     parentElement.appendChild(h2Element);
//     h2Element.textContent = this.city;

//     const ulElement = document.createElement('ul');
//     parentElement.appendChild(ulElement);

//     for (let index = 0; index < this.NumberOfHours.length; index++) {
//       const liElement = document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent = `${this.NumberOfHours[index]} : ${this.CookieForLocation[index]}`;

//     }

//     const liTotalElement = document.createElement ('li');
//     ulElement.appendChild(liTotalElement);
//     liTotalElement.textContent = `Total : ${this.totalSales}`;


//   }
// };
// Lima.render();




