'use strict';

var clickCounter = 0;
var productCatalog = [];
var chartDrawn = false;
var names = ['bag','banana','bathroom','boots','bubblegum','chair','cthulhu','dog-duck', 'dragon','pen','pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var newArray = [];
var oldArray = [];

var left = document.getElementById('left');
var middle = document.getElementById('middle');
var right  = document.getElementById('right');
var holder = document.getElementById('holder');


//****************Construtor*******************

function Product (name){

  this.name = name;
  this.filepath = 'img/' + name + '.jpg';
  this.views = 0;
  this.timesClicked = 0;


  productCatalog.push(this);
};



for(var i = 0; i < names.length; i++) {
  new Product(names[i]);
}

function rand(){
  return Math.floor(Math.random() * names.length);
}

function makeArrayOfThreeNumbers(){
  oldArray[0] = newArray[0];
  oldArray[1] = newArray[1];
  oldArray[2] = newArray[2];


  newArray[0] = rand();
  while(newArray[0] === oldArray[0] || newArray[0] === oldArray[1] || newArray[0] === oldArray[2]){
    newArray[0] = rand();
  }
  newArray[1] = rand();
  while (newArray[0] === newArray[1]){
    newArray[1] = rand();
  }
  newArray[2] = rand();
  while(newArray[2] === newArray[0] || newArray[2] === newArray[1] || newArray[2] === oldArray[0] || newArray[2] === oldArray[1] || newArray[2] === oldArray[2]){
    newArray[2] = rand();
  }
}



function showThreePics(){

  makeArrayOfThreeNumbers();

  left.src = productCatalog[newArray[0]].filepath;
  productCatalog[newArray[0]].views += 1;

  middle.src = productCatalog[newArray[1]].filepath;
  productCatalog[newArray[1]].views += 1;

  right.src = productCatalog[newArray[2]].filepath;
  productCatalog[newArray[2]].views += 1;
}


function handleClick(){
  event.preventDefault();
  clickCount();
  clickCounter += 1;
  console.log(clickCounter, 'total click so far');
  if(clickCounter === 15){
    holder.removeEventListener('click',showThreePics);
    alert('You are out of clicks');
    renderResults();

  }
  showThreePics();
}

// timesClicked working *******************
function clickCount() {

  if(event.target.id === 'holder'){
    alert('Click a picture please!');
  }
  if(event.target.id === 'left'){
    productCatalog[newArray[0]].timesClicked += 1;
  }

  if(event.target.id === 'middle'){
    productCatalog[newArray[1]].timesClicked += 1;

  }
  if(event.target.id === 'right'){
    productCatalog[newArray[2]].timesClicked += 1;
  }

}

// clickCount(event);


//*****************print results to document*********************
function renderResults(){


  var resultsList = document.getElementById('results');
  for (var i = 0; i < productCatalog.length; i++) {

    var surveyResults = document.createElement('li');
    surveyResults.textContent = 'Name: ' + productCatalog[i].name + '  ' + 'Views: ' + productCatalog[i].views + ' ' + 'Clicked: ' + productCatalog[i].timesClicked;
    resultsList.appendChild(surveyResults);

  }
}




showThreePics();
holder.addEventListener('click', handleClick);








//***********Kill event listener******************
//************************************************
// console.log(clickCounter);
// var votes = [];
// var items = [];
//
// function addingDataToChart(){
//   for (var i = 0; i < names.length; i++) {
//     votes[i] = productCatalog[i].votes;
//     items[i] = productCatalog[i].items;
//   }
// }
// function productList() {
//   var inventory = document.getElementById('product-list');
//   inventory.innerHTML = '';
//   inventory.hidden = false;
//   inventory.textContent = 'CLICK ON THIS LIST TO HIDE IT';
//   for (var i = 0; i < productCatalog.length; i++){
//     var liEl = document.createElement('li');
//     liEl.textContent = productCatalog[i].title + ', ' + productCatalog[i].votes + ' votes';
//     inventory.appendChild(liEl);
//   };
// };


// function tallyVote(thisItem) {
//   for (var i = 0; i < productCatalog.length; i++) {
//     if (thisItem === productCatalog[i].identifier) {
//       productCatalog[i].votes++;
//       addingDataToChart();
//     }
//   }
// };

// var canvas = document.getElementById('myChart').getContext('2d');
// var myBarChart = new Chart(canvas,{
//     type: 'bar',
//     data: data,
//
// });
//   chartDrawn = true;
//
//
// var data = {
//   labels: ['bag','banana','bathroom','boots','bubblegum','chair','cthulhu','dog-duck', 'dragon','pen','pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'],
//   datasets: [
//     {
//
//       label: 'My First dataset',
//       backgroundColor: '#D692E1',
//       borderColor: '#DAFA6F',
//       borderWidth: 1,
//       data: [votes],
//       //  yAxisID: '# of Clicks',
//       //  xAxisID: 'Product',
//
//
//     }
//   ]
// };
//
// document.getElementById('left').addEventListener('click', function(event){
//   if (event.target.id === 'left') {
//     tallyVote(event.target.id);
//   };
//
//   if (chartDrawn) {
//     myBarChart.update();
//   }
// });
