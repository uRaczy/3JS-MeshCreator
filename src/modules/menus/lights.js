import * as THREE from '../../../node_modules/three/build/three.module.js';
import { scene } from '../setup.js';

const iconsContainer = document.getElementById('mid-menu-top');
const popupsContainer = document.getElementById('light-popups');


let red = 255;
let green = 255;
let blue = 255;

let color = new THREE.Color(`rgb(${red}, ${green}, ${blue})`);

// AMBIENT LIGHT
const ambientLight = new THREE.AmbientLight( color, 1, 100);
scene.add(ambientLight);
// ===

// POINT LIGHT
// const lightRGB = new THREE.PointLight( color, 1.5, 200);
// lightRGB.position.set( 0, 50, 0 );
// lightRGB.castShadow = true;
// scene.add(lightRGB);

const rgbIcon = document.getElementById('rgb-icon');
const rgbPopup = document.getElementById('light-popup');
rgbIcon.addEventListener('click', () => {
    rgbPopup.style.display == 'none' ? rgbPopup.style.display = 'block' : rgbPopup.style.display = 'none';
})

const redRange = document.getElementById('red-range');
redRange.value = red;
redRange.addEventListener('input', ()=> {
    red = redRange.value;
    ambientLight.color.setStyle(`rgb(${red}, ${green}, ${blue})`);
})

const greenRange = document.getElementById('green-range');
greenRange.value = green;
greenRange.addEventListener('input', ()=> {
    green = greenRange.value;
    ambientLight.color.setStyle(`rgb(${red}, ${green}, ${blue})`);
})
const blueRange = document.getElementById('blue-range');
blueRange.value = blue;
blueRange.addEventListener('input', ()=> {
    blue = blueRange.value;
    ambientLight.color.setStyle(`rgb(${red}, ${green}, ${blue})`);
})