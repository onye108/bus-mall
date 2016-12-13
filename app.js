'use strict';

var clickCounter = 0;
var productCatalog = [];
var names = ['bag','banana','bathroom','boots','bubblegum','chair','cthulhu','dog-duck', 'dragon','pen','pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var newArray = [];
var oldArray = [];

var left = document.getElementsByClassName('left')[0];
var middle = document.getElementsByClassName('middle')[0];
var right  = document.getElementsByClassName('right')[0];
var holder = document.getElementsByClassName('container')[0];

console.log(productCatalog);
//****************Construtor*******************

function Product (name){

  this.name = name;
  this.filepath = 'img/' + name + '.jpg';
  this.timesListed = 0;
  this.timesClicked = 0;

  productCatalog.push(this);
};
//****************random fucntion *************



function randomizer(){

  var lefty = productCatalog[Math.floor(Math.random() * 20)];
  var center = productCatalog[Math.floor(Math.random() * 20)];
  var righty = productCatalog[Math.floor(Math.random() * 20)];


  left.src = lefty.filepath;
  middle.src = center.filepath;
  right.src = righty.filepath;



  if(lefty === center || lefty === righty){
    left.randomizer();
  }
  if(righty === center || righty === lefty){
    right.randomizer();
  }
  if(center === lefty || center === righty){
    middle.randomizer();
  }
}




//*******************Objects****************


for(var i = 0; i < names.length; i++) {
  new Product(names[i]);
}



new Product('img/bag.jpg','R2D2 Travel Bag');
new Product('img/banana.jpg','banana');
new Product('img/bathroom.jpg' ,'Ipad');
new Product('img/boots.jpg' ,'boots');
new Product('img/bubblegum.jpg' ,'gum');
new Product('img/chair.jpg','Red Chair');
new Product('img/cthulhu.jpg','Alien');
new Product('img/dog-duck.jpg','Duck bill');
new Product('img/dragon.jpg','Dragon Meat');
new Product('img/pen.jpg','Pen Cutlary');
new Product('img/pet-sweep.jpg','Sweeper');
new Product('img/scissors','Pizza Cutter');
new Product('img/shark.jpg','Sleeping Bag');
new Product('img/sweep.jpg','Baby Onecy');
new Product('img/tauntaun.jpg','Star Wars');
new Product('img/unicorn.jpg','Magic Meat');
new Product('img/usb.jpg','USB');
new Product('img/water-can.jpg' ,'Watering Pot');
new Product('img/wine-glass.jpg','Wine Glass');
=======


randomizer();

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
function handleClick(event) {
  event.preventDefault();
  console.log(event.target, 'was clicked');
  if( event.target.id === 'container'){
    return alert('Click a picture please!');
  }
  if(event.target.id === 'left'){
    productCatalog[newArray[0]].clicks += 1;
    console.log(productCatalog[newArray[0]]);
  }

  if(event.target.id === 'middle'){
    productCatalog[newArray[1]].clicks += 1;
    console.log(productCatalog[newArray[1]]);
  }
  if(event.target.id === 'right'){
    productCatalog[newArray[2]].clicks += 1;
    console.log(productCatalog[newArray[2]]);
  }
  clickCounter += 1;
  console.log(clickCounter, 'total click so far');
  if(clickCounter > 5){
    alert('You are out of clicks');
  }
}
showThreePics();
holder.addEventListener('click', handleClick);
