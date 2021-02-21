'use strict'
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
minHourlyCookies:23,
maxHourlyCookies:65,
avgerageCookies:6.3,
NumberOfHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
CookieForLocation:[],
totalSales:0,
generateRandomNumber:function (min,max,avg){
  return Math.floor((Math.random() * (max - min + 1) + min)*avg);   
},


render: function(){
for(let i = 0; i < this.NumberOfHours.length; i++) {
   this.CookieForLocation[i] = this.generateRandomNumber(this.minHourlyCookies,this.maxHourlyCookies,this.avgerageCookies);
  this.totalSales = this.totalSales + this.CookieForLocation[i];
  }



const parentElement = document.getelementbyid('Resturant1');
const h1Element = document.createElement('h2');
parentElement.appendChild(h1Element);
h1Element.textContent('Seattle sales');


const ulElement = document.createElement('ul');
parentElement.appendChild(ulElement);


for(let index = 0; index < this.ResultForSeattle.length; index++) {
 const liElement = document.createElement('li');
  ulElement.appendChild(liElement);
   liElement.textContent = `${this.NumberOfHours[index]} : ${this.CookieForLocation} cookies`;
  }
  const liTotalElement = document.createElement('li');
  ulElement.appendChild(liTotalElement);
   liTotalElement.textContent = ` Total : ${this.totalSales[index]};`
  }
};

Seattle.render();


//-------- Tokyo --------

 const Tokyo = {
minHourlyCookies:3,
maxHourlyCookies:24,
avgerageCookies:1.2,
NumberOfHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
CookieForLocation:[],
totalSales:0,
generateRandomNumber:function (min,max,avg){
  return Math.floor((Math.random() * (max - min + 1) + min)*avg);   
},


render: function(){
for(let i = 0; i < this.NumberOfHours.length; i++) {
   this.CookieForLocation[i] = this.generateRandomNumber(this.minHourlyCookies,this.maxHourlyCookies,this.avgerageCookies);
  this.totalSales = this.totalSales + this.CookieForLocation[i];
  }



const parentElement = document.getelementbyid('Resturant1');
const h1Element = document.createElement('h2');
parentElement.appendChild(h1Element);
h1Element.textContent('Tokyo sales');


const ulElement = document.createElement('ul');
parentElement.appendChild(ulElement);


for(let index = 0; index < this.ResultForSeattle.length; index++) {
 const liElement = document.createElement('li');
  ulElement.appendChild(liElement);
   liElement.textContent = `${this.NumberOfHours[index]} : ${this.CookieForLocation} cookies`;
  }
  const liTotalElement = document.createElement('li');
  ulElement.appendChild(liTotalElement);
   liTotalElement.textContent = ` Total : ${this.totalSales[index]};`
  }
};

Tokyo.render();   

//-------- Dubai --------

const Dubai = {
  minHourlyCookies:11,
  maxHourlyCookies:38,
  avgerageCookies:3.7,
  NumberOfHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  CookieForLocation:[],
  totalSales:0,
  generateRandomNumber:function (min,max,avg){
    return Math.floor((Math.random() * (max - min + 1) + min)*avg);   
  },
  
  
  render: function(){
  for(let i = 0; i < this.NumberOfHours.length; i++) {
     this.CookieForLocation[i] = this.generateRandomNumber(this.minHourlyCookies,this.maxHourlyCookies,this.avgerageCookies);
    this.totalSales = this.totalSales + this.CookieForLocation[i];
    }
  
  

  const parentElement = document.getelementbyid('Resturant1');
  const h1Element = document.createElement('h2');
  parentElement.appendChild(h1Element);
  h1Element.textContent('Dubai sales');
  
  
  const ulElement = document.createElement('ul');
  parentElement.appendChild(ulElement);
  
  
  for(let index = 0; index < this.ResultForSeattle.length; index++) {
   const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
     liElement.textContent = `${this.NumberOfHours[index]} : ${this.CookieForLocation} cookies`;
    }
    const liTotalElement = document.createElement('li');
    ulElement.appendChild(liTotalElement);
     liTotalElement.textContent = ` Total : ${this.totalSales[index]};`
    }
  };
        

  
Dubai.render();


//-------- Paris --------

const Paris = {
  minHourlyCookies:20,
  maxHourlyCookies:38,
  avgerageCookies:2.3,
  NumberOfHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  CookieForLocation:[],
  totalSales:0,
  generateRandomNumber:function (min,max,avg){
    return Math.floor((Math.random() * (max - min + 1) + min)*avg);   
  },
  
  
  render: function(){
  for(let i = 0; i < this.NumberOfHours.length; i++) {
     this.CookieForLocation[i] = this.generateRandomNumber(this.minHourlyCookies,this.maxHourlyCookies,this.avgerageCookies);
    this.totalSales = this.totalSales + this.CookieForLocation[i];
    }
  
  
  
  const parentElement = document.getelementbyid('Resturant1');
  const h1Element = document.createElement('h2');
  parentElement.appendChild(h1Element);
  h1Element.textContent('Paris sales');
  
  
  const ulElement = document.createElement('ul');
  parentElement.appendChild(ulElement);
  
  
  for(let index = 0; index < this.ResultForSeattle.length; index++) {
   const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
     liElement.textContent = `${this.NumberOfHours[index]} : ${this.CookieForLocation} cookies`;
    }
    const liTotalElement = document.createElement('li');
    ulElement.appendChild(liTotalElement);
     liTotalElement.textContent = ` Total : ${this.totalSales[index]};`
    }
  };

  Paris.render();


//-------- Lima --------

const Lima = {
  minHourlyCookies:2,
  maxHourlyCookies:16,
  avgerageCookies:4.6,
  NumberOfHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  CookieForLocation:[],
  totalSales:0,
  generateRandomNumber:function (min,max,avg){
    return Math.floor((Math.random() * (max - min + 1) + min)*avg);   
  },
  
  
  render: function(){
  for(let i = 0; i < this.NumberOfHours.length; i++) {
     this.CookieForLocation[i] = this.generateRandomNumber(this.minHourlyCookies,this.maxHourlyCookies,this.avgerageCookies);
    this.totalSales = this.totalSales + this.CookieForLocation[i];
    }
  
  
  
  const parentElement = document.getelementbyid('Resturant1');
  const h1Element = document.createElement('h2');
  parentElement.appendChild(h1Element);
  h1Element.textContent('Lima sales');
  
  
  const ulElement = document.createElement('ul');
  parentElement.appendChild(ulElement);
  
  
  for(let index = 0; index < this.ResultForSeattle.length; index++) {
   const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
     liElement.textContent = `${this.NumberOfHours[index]} : ${this.CookieForLocation} cookies`;
    }
    const liTotalElement = document.createElement('li');
    ulElement.appendChild(liTotalElement);
     liTotalElement.textContent = ` Total : ${this.totalSales[index]};`
    }
  };
  Lima.render();




