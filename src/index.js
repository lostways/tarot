/**
 ** Example: Displays a Tarot Card with textures
 ***/

import ThreeJSWrapper from "three-js-wrapper";
import TarotCard from "./entities/TarotCard.js";
import TextCanvas from "./entities/TextCanvas.js";
import AmbientAndSpotLight from "./entities/AmbientAndSpotLight.js";
import CardData from "./data/cards.json";

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

let canvas = document.getElementById("canvas");
let wrapper = new ThreeJSWrapper(canvas);

wrapper.addEntity(lights);
wrapper.addEntity(tarotCard);
wrapper.addEntity(cardTitle);

//better lights
wrapper.renderer.physicallyCorrectLights = true;

//transparent background
wrapper.renderer.setClearColor("#121212");

//position controls
wrapper.controls.target.set(0, 0, -2);

//load model
wrapper.start();
