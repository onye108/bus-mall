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

hideChart(myChart);
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
    // renderResults();
    makeNewChart();
    drawChart();
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
showThreePics();
holder.addEventListener('click', handleClick);

var canvas = document.getElementById('myChart').getContext('2d');
var itemName = [];
var clicked = [];
function makeNewChart (){
  for (var i = 0; i < productCatalog.length; i++) {
    itemName[i] = productCatalog[i].name;
    clicked[i] = productCatalog[i].timesClicked;
  }
  console.log(itemName + ' ' + clicked);
}

var data = {
  labels: itemName,
  datasets: [
    {
      data: clicked,
      label: 'Number of Clicks',
      backgroundColor: '#4242EA',
      borderColor: '#91EA42',
    }
  ]
};
function hideChart(myChart){
  document.getElementById('myChart').hidden = true;
}
function drawChart(){
  var myChart = new Chart(canvas,{
    type: 'bar',
    data: data,
    options: {
      responsive: false
    },
    scales:[{
      ticks:{
        beginAtZero: true
      }
    }]
  });
  chartDrawn = true;
  console.log(myChart);
}
