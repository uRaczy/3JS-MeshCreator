import * as THREE from '../../../node_modules/three/build/three.module.js';
import { scene } from '../setup.js';

const iconsContainer = document.getElementById('mid-menu-top');
const popupsContainer = document.getElementById('light-popups');

const ambientLight = new THREE.AmbientLight( 0x404040, 1, 100);
scene.add(ambientLight);

let red = 200;
let green = 200;
let blue = 200;

let color = new THREE.Color(`rgb(${red}, ${green}, ${blue})`);

const lightRGB = new THREE.PointLight( color, 1.5, 200);
lightRGB.position.set( 0, 50, 0 );
lightRGB.castShadow = true;
scene.add(lightRGB);

const rgbIcon = document.getElementById('rgb-icon');
const rgbPopup = document.getElementById('light-popup');
rgbIcon.addEventListener('click', () => {
    rgbPopup.style.display == 'none' ? rgbPopup.style.display = 'block' : rgbPopup.style.display = 'none';
})

const redRange = document.getElementById('red-range');
redRange.value = red;
redRange.addEventListener('input', ()=> {
    red = redRange.value;
    lightRGB.color.setStyle(`rgb(${red}, ${green}, ${blue})`);
})

const greenRange = document.getElementById('green-range');
greenRange.value = green;
greenRange.addEventListener('input', ()=> {
    green = greenRange.value;
    lightRGB.color.setStyle(`rgb(${red}, ${green}, ${blue})`);
})
const blueRange = document.getElementById('blue-range');
blueRange.value = blue;
blueRange.addEventListener('input', ()=> {
    blue = blueRange.value;
    lightRGB.color.setStyle(`rgb(${red}, ${green}, ${blue})`);
})