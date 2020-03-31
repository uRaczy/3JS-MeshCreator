import * as THREE from '../../../node_modules/three/build/three.module.js';

// 3. CHANGE OBJECT PROPERTIES
// ========== CUBE ==========
const cubePropsMenu = document.getElementById("cubePropsMenu");

const confirmButtons = [];

let currentObject;

export const objectSetup = (object) => {
    currentObject = object;

    if (object.type === 'cube') cubePropsMenu.hidden = false;
    else if (object.type === 'sphere') spherePropsMenu.hidden = false;
    else if (object.type === 'cylinder') cylinderPropsMenu.hidden = false;
    else if (object.type === 'cone') conePropsMenu.hidden = false;
    
}

// ======= CUBE PROPERTIES =======
// Length - size X
const cubeValuesCounters = [document.getElementsByClassName("rangeValue")[0], document.getElementsByClassName("rangeValue")[1], document.getElementsByClassName("rangeValue")[2]];
const setCubeLength = document.getElementById("cubeLength");


cubeValuesCounters[0].value = cubeLength.value;

setCubeLength.addEventListener('input', function(){
    cubeValuesCounters[0].value = cubeLength.value;
    currentObject.mesh.scale.x = cubeLength.value;
})

// Height - size Y
const cubeHeight = document.getElementById("cubeHeight");


cubeValuesCounters[1].value = cubeHeight.value;

cubeHeight.addEventListener('input', function(){
    cubeValuesCounters[1].value = cubeHeight.value;
    currentObject.mesh.scale.y = cubeHeight.value;
})

// Width - size Z
const cubeWidth = document.getElementById("cubeWidth");


cubeValuesCounters[2].value = cubeWidth.value;

cubeWidth.addEventListener('input', function(){
    cubeValuesCounters[2].value = cubeWidth.value;
    currentObject.mesh.scale.z = cubeWidth.value;
})

// Cube hide button
confirmButtons.push(document.getElementsByClassName("confirmButton")[0]);
confirmButtons[0].addEventListener('click', () =>{
    cubePropsMenu.hidden = true;
})
// ======= ======= =======

// ========== SPHERE PROPERTIES ==========
const spherePropsMenu = document.getElementById("spherePropsMenu");
const sphereValuesCounters = [document.getElementsByClassName("rangeValue")[3]];

const sphereSize = document.getElementById('sphereSize');

sphereValuesCounters[0].value = sphereSize.value;

sphereSize.addEventListener('input', () => {
    sphereValuesCounters[0].value = sphereSize.value;
    currentObject.mesh.scale.x = sphereSize.value;
    currentObject.mesh.scale.y = sphereSize.value;
    currentObject.mesh.scale.z = sphereSize.value;
});

// Sphere hide button
confirmButtons.push(document.getElementsByClassName("confirmButton")[1]);
confirmButtons[1].addEventListener('click', () =>{
    spherePropsMenu.hidden = true;
})
// ======= ======= =======

// ========== CYLINDER PROPERTIES ==========
const cylinderPropsMenu = document.getElementById("cylinderPropsMenu");

const cylinderValuesCounters = [document.getElementsByClassName("rangeValue")[4], document.getElementsByClassName("rangeValue")[5]];


// Height
const cylinderHeight = document.getElementById('cylinderHeight');
cylinderValuesCounters[0].value = cylinderHeight.value;

cylinderHeight.addEventListener('input', () => {
    cylinderValuesCounters[0].value = cylinderHeight.value;
    currentObject.mesh.scale.y = cylinderHeight.value;
})

// Width
const cylinderWidth = document.getElementById('cylinderWidth');
cylinderValuesCounters[1].value = cylinderWidth.value;

cylinderWidth.addEventListener('input', ()=> {
    cylinderValuesCounters[1].value = cylinderWidth.value;
    currentObject.mesh.scale.x = cylinderWidth.value;
    currentObject.mesh.scale.z = cylinderWidth.value;
})

// Cylinder hide button
confirmButtons.push(document.getElementsByClassName("confirmButton")[2]);
confirmButtons[2].addEventListener('click', () =>{
    cylinderPropsMenu.hidden = true;
})
// ======= ======= =======

// ========== CONE PROPERTIES ==========
const conePropsMenu = document.getElementById("conePropsMenu");

const coneValuesCounters = [document.getElementsByClassName("rangeValue")[6], document.getElementsByClassName("rangeValue")[7]];

// Height
const coneHeight = document.getElementById('coneHeight');
coneValuesCounters[0].value = coneHeight.value;
coneHeight.addEventListener('input', () => {
    coneValuesCounters[0].value = coneHeight.value;
    currentObject.mesh.scale.y = coneHeight.value;
})

//Width
const coneWidth = document.getElementById('coneWidth');
coneValuesCounters[1].value = coneWidth.value;
coneWidth.addEventListener('input', () => {
    coneValuesCounters[0].value = coneWidth.value;
    currentObject.mesh.scale.x = coneWidth.value;
    currentObject.mesh.scale.z = coneWidth.value;
})

// Cone hide button
confirmButtons.push(document.getElementsByClassName("confirmButton")[3]);
confirmButtons[3].addEventListener('click', () =>{
    conePropsMenu.hidden = true;
})
// ======= ======= =======