// import * as THREE from '../../../node_modules/three/build/three.module.js';

// 3. CHANGE OBJECT PROPERTIES
// ========== CUBE ==========


let currentObject;

export const resizeObj = (object) => {
    currentObject = object;

    
    if (object.geometry.type === 'BoxGeometry') {
        setupCube();
    }
    
    else if (object.geometry.type === 'SphereGeometry') {
        cubePropsMenu.hidden = true;
        spherePropsMenu.hidden = false;
        cylinderPropsMenu.hidden = true;
        conePropsMenu.hidden = true;
    }
    else if (object.geometry.type === 'CylinderGeometry') {
        cubePropsMenu.hidden = true;
        spherePropsMenu.hidden = true;
        cylinderPropsMenu.hidden = false;
        conePropsMenu.hidden = true;
    }
    else if (object.geometry.type === 'ConeGeometry') {
        cubePropsMenu.hidden = true;
        spherePropsMenu.hidden = true;
        cylinderPropsMenu.hidden = true;
        conePropsMenu.hidden = false;  
    }  
}

// ======= CUBE PROPERTIES =======
const cubePropsMenu = document.getElementById("cubePropsMenu");

const cubeNumInput = [
    document.getElementsByClassName("rangeValue")[0],
    document.getElementsByClassName("rangeValue")[1],
    document.getElementsByClassName("rangeValue")[2]
];

// Length - size X
const setCubeLength = document.getElementById("cubeLength");

cubeNumInput[0].addEventListener('input', () => {
    currentObject.scale.x = cubeNumInput[0].value;
    setCubeLength.value = cubeNumInput[0].value;
})

setCubeLength.addEventListener('input', () => {
    currentObject.scale.x = setCubeLength.value;
    cubeNumInput[0].value = setCubeLength.value;
})

// Height - size Y
const setCubeHeight = document.getElementById("cubeHeight");

cubeNumInput[1].addEventListener('input', function() {
    currentObject.scale.y = cubeNumInput[1].value;
    setCubeHeight.value = cubeNumInput[1].value;
})

setCubeLength.addEventListener('input', function() {
    cubeNumInput[1].value = setCubeHeight.value;
    currentObject.scale.x = setCubeHeight.value;
})

// Width - size Z
const setCubeWidth = document.getElementById("cubeWidth");

cubeNumInput[2].value = setCubeWidth.value;

cubeWidth.addEventListener('input', function() {
    cubeNumInput[2].value = setCubeWidth.value;
    currentObject.scale.z = setCubeWidth.value;
})


function setupCube() {
    cubePropsMenu.hidden = false;
    spherePropsMenu.hidden = true;
    cylinderPropsMenu.hidden = true;
    conePropsMenu.hidden = true;

    cubeNumInput[0].value = currentObject.scale.x;
    cubeNumInput[1].value = currentObject.scale.y;
    cubeNumInput[2].value = currentObject.scale.z;
    setCubeLength.value = currentObject.scale.x;
    setCubeHeight.value = currentObject.scale.y;
    setCubeWidth.value = currentObject.scale.z;
}
// ======= ======= =======

// ========== SPHERE PROPERTIES ==========
const spherePropsMenu = document.getElementById("spherePropsMenu");
const sphereValuesCounters = [document.getElementsByClassName("rangeValue")[3]];

const sphereSize = document.getElementById('sphereSize');

sphereValuesCounters[0].value = sphereSize.value;

sphereSize.addEventListener('input', () => {
    sphereValuesCounters[0].value = sphereSize.value;
    currentObject.scale.x = sphereSize.value;
    currentObject.scale.y = sphereSize.value;
    currentObject.scale.z = sphereSize.value;
});
// ======= ======= =======

// ========== CYLINDER PROPERTIES ==========
const cylinderPropsMenu = document.getElementById("cylinderPropsMenu");

const cylinderValuesCounters = [document.getElementsByClassName("rangeValue")[4], document.getElementsByClassName("rangeValue")[5]];


// Height
const cylinderHeight = document.getElementById('cylinderHeight');
cylinderValuesCounters[0].value = cylinderHeight.value;

cylinderHeight.addEventListener('input', () => {
    cylinderValuesCounters[0].value = cylinderHeight.value;
    currentObject.scale.y = cylinderHeight.value;
})

// Width
const cylinderWidth = document.getElementById('cylinderWidth');
cylinderValuesCounters[1].value = cylinderWidth.value;

cylinderWidth.addEventListener('input', ()=> {
    cylinderValuesCounters[1].value = cylinderWidth.value;
    currentObject.scale.x = cylinderWidth.value;
    currentObject.scale.z = cylinderWidth.value;
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
    currentObject.scale.y = coneHeight.value;
})

//Width
const coneWidth = document.getElementById('coneWidth');
coneValuesCounters[1].value = coneWidth.value;
coneWidth.addEventListener('input', () => {
    coneValuesCounters[0].value = coneWidth.value;
    currentObject.scale.x = coneWidth.value;
    currentObject.scale.z = coneWidth.value;
})
// ======= ======= =======