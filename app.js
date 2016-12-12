'use strict';
var clickCounter = 0;
var productCatalog = [];

console.log(productCatalog);
//****************construtor****************

function Product (filepath, nickname){

  this.itemName = nickname;
  this.location = filepath;
  this.timesListed = 0;
  this.timesClicked = 0;

  productCatalog.push(this);
};
//****************random fucntion *************

function randomizer(min, max) {
  min = Math.ceil(0);
  max = Math.floor(19);
  return Math.floor(Math.random() * (max - min + 1 )) + min;
}

randomizer();



//*******************Objects****************


new Product('img / bag.jpg','R2D2 Travel Bag');
new Product('img / banana.jpg','banana');
new Product('img / bathroom.jpg' ,'Ipad');
new Product('img / boots.jpg' ,'boots');
new Product('img / bubblegum.jpg' ,'gum');
new Product('img/ chair.jpg','Red Chair');
new Product('img/cthulhu .jpg','Alien');
new Product('img/ dog-duck.jpg','Duck bill');
new Product('img/ dragon.jpg ','Dragon Meat');
new Product('img/ pen.jpg ','Pen Cutlary');
new Product('img/ pet-sweep.jpg ','Sweeper');
new Product('img/ scissors','Pizza Cutter');
new Product('img/ shark.jpg','Sleeping Bag');
new Product('img/ sweep.jpg ','Baby Onecy');
new Product('img/ tauntaun.jpg ','Star Wars');
new Product('img/ unicorn.jpg ','Magic Meat');
new Product('img/usb.jpg ','USB');
new Product('img/ water-can.jpg ','Watering Pot');
new Product('img/ wine-glass.jpg','Wine Glass');
