/**
 ** Example: Displays a Tarot Card with textures
 ***/

import ThreeJSWrapper from "three-js-wrapper";
import TarotCard from "./entities/TarotCard.js";
import TextCanvas from "./entities/TextCanvas.js";
import AmbientAndSpotLight from "./entities/AmbientAndSpotLight.js";
import CardData from "./data/cards.json";

let canvas = document.getElementById("canvas");
let wrapper = new ThreeJSWrapper(canvas);

//random card
let cardNumber = Math.floor(Math.random() * 78);
let card = CardData[cardNumber];

let lights = new AmbientAndSpotLight({ spot: 3 });
let tarotCard = new TarotCard({ 
    z: -3,  
    suit: card.suit, 
    number: card.number 
});
let cardTitle = new TextCanvas({z:-3,y:.50,text:card.title,color:"white",size:"36"});

wrapper.addEntity(lights);
wrapper.addEntity(tarotCard);
wrapper.addEntity(cardTitle);

//better lights
wrapper.renderer.physicallyCorrectLights = true;

//transparent background
wrapper.renderer.setClearColor("#121212");

//position controls
wrapper.controls.target.set(0, 0, -3);

//load model
wrapper.start();

//add event listener for pointer
window.addEventListener('mousemove', onMouseMove, false);
//window.addEventListener('click', onMouseClick, false);

var raycaster = new ThreeJSWrapper.THREE.Raycaster();
var mouse = new ThreeJSWrapper.THREE.Vector2();

function updateMouseVector(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
}

function raycast(object3d) {
  raycaster.setFromCamera(mouse, wrapper.camera);
  intersects = raycaster.intersectObject(object3d);
  if ( intersects.length > 0) {
    return true;
  } else {
    return false;
  }
}

function onMouseMove(event) {
  updateMouseVector(event);
  if (raycast(tarotCard.object3d)) {
    tarotCard.object3d.material[2].color.set(0xffffff);
    tarotCard.object3d.material[3].color.set(0xffffff);
  } else {
    tarotCard.object3d.material[2].color.set(0xb0b0b0);
    tarotCard.object3d.material[3].color.set(0xb0b0b0);
  }
}



