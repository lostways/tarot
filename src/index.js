/**
 ** Example: Displays a Tarot Card with textures
 ***/


import ThreeJSWrapper from 'three-js-wrapper';
import TarotCard from "./entities/TarotCard.js";
import AmbientAndSpotLight from "./entities/AmbientAndSpotLight.js";

let canvas = document.getElementById("canvas");
let wrapper = new ThreeJSWrapper(canvas);

let lights = new AmbientAndSpotLight({spot: 3});
wrapper.addEntity(lights);

let tarotCard = new TarotCard({z : -2.5});
wrapper.addEntity(tarotCard);

//better lights
wrapper.renderer.physicallyCorrectLights = true;

//position controls
wrapper.controls.target.set(0, 0, -2.5);

//load model
wrapper.start();
