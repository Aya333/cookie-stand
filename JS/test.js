// 'use strict'
// //To do:
// // 1.Stores the min/max hourly customers
// // 2.Average cookie per customer
// // 3.Uses a method of that object to generate a random number of customers per hour
// // 4.Store the results for each location in a separate array
// // 5.Display the values of each array as unordered lists in the browser
// // perhaps as a property of the object representing that location
// // 6.Calculating the sum of these hourly totals

// const Seattle = {
// HourlyCustomers:0,
// avgerageCookies:0,
// NumberOfHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
// getNumberOfCustomers: function(min, max) {
//   this.HourlyCustomers = generateRandomNumber(min, max);
// },
// ResultForSeattle:function (avgerageCookies,generateRandomNumber) {
//  this.avgerageCookies = getAverageCookies(avgerageCookies,generateRandomNumber); 
// },

// render: function(){
// const parentElement = doecument.getelementbyid('Resturant1');
// const ulElement = document.createElement('ul');
// parentElement.appendChild(ulElement);
// ulElement.textContent('Seattle')
// for(let i = 0; i < this.ResultForSeattle.length; i++) {
//     const liElement = document.createElement('li');
//     ulElement.appendChild(liElement);
//     liElement.textContent = this.ResultForSeattle[i];
//   }
// },
// getAverage: function(){
//   this.avgerageCookies = getAverageCookies();
// }

// }
// // const Tokyo = {
// //     HourlyCustomers:0,
// //     avgerageCookies:0,
    
// // }
// // const Dubai = {
// //    HourlyCustomers:0,
// //    avgerageCookies:0,
        
// // }

// // const Paris = {
// //     HourlyCustomers:0,
// //     AvgerageCookies:0,
    
// // }

// // const Lima = {
// //     HourlyCustomers:0,
// //     AvgerageCookies:0,
    
// // }

// function generateRandomNumber(min,max){
//  return Math.floor(Math.random() * (max - min + 1) + min);   
// }

// function getAverageCookies(avgerageCookies,generateRandomNumber){
// let sum =0;
// let generateRandomNumber = generateRandomNumber();
// sum = sum + generateRandomNumber;
// avgerageCookies = sum/generateRandomNumber;
// return avgerageCookies;
// }

// function storeResult(){
//   let array =[];
//   for (let index = 0; index < array.length; index++) {
//     array[index] = getAverageCookies();
//   }
//   return array;
// }
// Seattle.render();