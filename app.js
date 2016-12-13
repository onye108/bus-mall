'use strict';
var clickCounter = 0;
var productCatalog = [];
var left = document.getElementsByClassName('left')[0];
var middle = document.getElementsByClassName('middle')[0];
var right  = document.getElementsByClassName('right')[0];
var holder = document.getElementsByClassName('container')[0];

console.log(productCatalog);
//****************Construtor*******************

function Product (filepath, nickname){

  this.itemName = nickname;
  this.location = filepath;
  this.timesListed = 0;
  this.timesClicked = 0;

  productCatalog.push(this);
};
//****************random fucntion *************



function random3Items(){

  var lefty = productCatalog[Math.floor(Math.random() * 20)];
  var center = productCatalog[Math.floor(Math.random() * 20)];
  var righty = productCatalog[Math.floor(Math.random() * 20)];

  left.src = lefty.location;
  middle.src = center.location;
  right.src = righty.location;

  while(lefty === center || lefty === righty){
    lefty = productCatalog[Math.floor(Math.random() * 20)];
  }
  while(righty === center || righty === lefty){
    righty = productCatalog[Math.floor(Math.random() * 20)];
  }
  while(center === lefty || center === righty){
    center = productCatalog[Math.floor(Math.random() * 20)];
  }
}




//*******************Objects****************


new Product('img/bag.jpg','R2D2 Travel Bag');
new Product('img/banana.jpg','banana');
new Product('img/bathroom.jpg' ,'Ipad');
new Product('img/boots.jpg' ,'boots');
new Product('img/bubblegum.jpg' ,'gum');
new Product('img/chair.jpg','Red Chair');
new Product('img/cthulhu .jpg','Alien');
new Product('img/dog-duck.jpg','Duck bill');
new Product('img/dragon.jpg ','Dragon Meat');
new Product('img/pen.jpg ','Pen Cutlary');
new Product('img/pet-sweep.jpg ','Sweeper');
new Product('img/scissors.jpg','Pizza Cutter');
new Product('img/shark.jpg','Sleeping Bag');
new Product('img/sweep.jpg ','Baby Onecy');
new Product('img/tauntaun.jpg ','Star Wars');
new Product('img/unicorn.jpg ','Magic Meat');
new Product('img/usb.jpg ','USB');
new Product('img/water-can.jpg ','Watering Pot');
new Product('img/wine-glass.jpg','Wine Glass');

random3Items();
