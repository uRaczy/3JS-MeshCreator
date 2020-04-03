// import * as THREE from '../../../node_modules/three/build/three.module.js';

// 3. CHANGE OBJECT PROPERTIES
// ========== CUBE ==========
const cubePropsMenu = document.getElementById("cubePropsMenu");

let currentObject;

export const resizeObj = (object) => {
    currentObject = object;

    if (object.geometry.type === 'BoxGeometry') {
        cubePropsMenu.hidden = false;
        spherePropsMenu.hidden = true;
        cylinderPropsMenu.hidden = true;
        conePropsMenu.hidden = true;
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
// Length - size X
const cubeValuesCounters = [
    document.getElementsByClassName("rangeValue")[0],
    document.getElementsByClassName("rangeValue")[1],
    document.getElementsByClassName("rangeValue")[2]];
const setCubeLength = document.getElementById("cubeLength");


cubeValuesCounters[0].value = cubeLength.value;

setCubeLength.addEventListener('input', function(){
    cubeValuesCounters[0].value = cubeLength.value;
    currentObject.scale.x = cubeLength.value;
})

// Height - size Y
const cubeHeight = document.getElementById("cubeHeight");


cubeValuesCounters[1].value = cubeHeight.value;

cubeHeight.addEventListener('input', function(){
    cubeValuesCounters[1].value = cubeHeight.value;
    currentObject.scale.y = cubeHeight.value;
})

// Width - size Z
const cubeWidth = document.getElementById("cubeWidth");

cubeValuesCounters[2].value = cubeWidth.value;

cubeWidth.addEventListener('input', function(){
    cubeValuesCounters[2].value = cubeWidth.value;
    currentObject.scale.z = cubeWidth.value;
})
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