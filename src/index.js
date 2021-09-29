/**
 ** Example: Displays a Tarot Card with textures
 ***/

import ThreeJSWrapper from "three-js-wrapper";
import TarotCard from "./entities/TarotCard.js";
import AmbientAndSpotLight from "./entities/AmbientAndSpotLight.js";
import CardData from "./data/cards.json";

//random card
let cardNumber = Math.floor(Math.random() * 78);
let card = CardData[cardNumber];

//card title
let cardTitle = document.getElementById("card-title");
cardTitle.innerHTML = card.title;

let canvas = document.getElementById("canvas");
let wrapper = new ThreeJSWrapper(canvas);

let lights = new AmbientAndSpotLight({ spot: 3 });
wrapper.addEntity(lights);

let tarotCard = new TarotCard({ 
    z: -2, 
    suit: card.suit, 
    number: card.number 
});
wrapper.addEntity(tarotCard);

//better lights
wrapper.renderer.physicallyCorrectLights = true;

//transparent background
wrapper.renderer.setClearColor("#121212");

//position controls
wrapper.controls.target.set(0, 0, -2);

//load model
wrapper.start();
