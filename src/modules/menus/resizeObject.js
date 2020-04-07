// import * as THREE from '../../../node_modules/three/build/three.module.js';

// 3. CHANGE OBJECT PROPERTIES
// ========== CUBE ==========


let currentObject;

export const resizeObj = (object) => {
    currentObject = object;

    const popupMenu = document.getElementById('props-popup');
    popupMenu.hidden = false;
    
    if (object.geometry.type === 'BoxGeometry') {
        setupCube();
    }    
    else if (object.geometry.type === 'SphereGeometry') {
        setupSphere();
    }
    else if (object.geometry.type === 'CylinderGeometry') {
        setupCylinder();
    }
    else if (object.geometry.type === 'ConeGeometry') {
        setupCone();  
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
cubeNumInput[0].addEventListener('input', () => {
    currentObject.scale.x = cubeNumInput[0].value;
})

// Height - size Y
cubeNumInput[1].addEventListener('input', function() {
    currentObject.scale.y = cubeNumInput[1].value;
})

// Width - size Z
cubeNumInput[2].addEventListener('input', function() {
    currentObject.scale.z = cubeNumInput[2].value;
})


function setupCube() {
    cubePropsMenu.hidden = false;
    spherePropsMenu.hidden = true;
    cylinderPropsMenu.hidden = true;
    conePropsMenu.hidden = true;

    cubeNumInput[0].value = currentObject.scale.x;
    cubeNumInput[1].value = currentObject.scale.y;
    cubeNumInput[2].value = currentObject.scale.z;
}
// ======= ======= =======

// ========== SPHERE PROPERTIES ==========
const spherePropsMenu = document.getElementById("spherePropsMenu");
const sphereNumInput = [document.getElementsByClassName("rangeValue")[3]];

sphereNumInput[0].addEventListener('input', () => {
    currentObject.scale.x = sphereNumInput[0].value;
    currentObject.scale.y = sphereNumInput[0].value;
    currentObject.scale.z = sphereNumInput[0].value;
});

function setupSphere() {
    cubePropsMenu.hidden = true;
    spherePropsMenu.hidden = false;
    cylinderPropsMenu.hidden = true;
    conePropsMenu.hidden = true;

    sphereNumInput[0].value = currentObject.scale.x;
}
// ======= ======= =======

// ========== CYLINDER PROPERTIES ==========
const cylinderPropsMenu = document.getElementById("cylinderPropsMenu");

const cylinderNumInput = [document.getElementsByClassName("rangeValue")[4], document.getElementsByClassName("rangeValue")[5]];


// Height
cylinderNumInput[0].addEventListener('input', () => {
    currentObject.scale.y = cylinderNumInput[0].value;
})

// Width
cylinderNumInput[1].addEventListener('input', ()=> {
    currentObject.scale.x = cylinderNumInput[1].value;
    currentObject.scale.z = cylinderNumInput[1].value;
})

function setupCylinder() {
    cubePropsMenu.hidden = true;
    spherePropsMenu.hidden = true;
    cylinderPropsMenu.hidden = false;
    conePropsMenu.hidden = true;

    cylinderNumInput[0].value = currentObject.scale.y;
    cylinderNumInput[1].value = currentObject.scale.x;
}
// ======= ======= =======

// ========== CONE PROPERTIES ==========
const conePropsMenu = document.getElementById("conePropsMenu");

const coneNumInput = [document.getElementsByClassName("rangeValue")[6], document.getElementsByClassName("rangeValue")[7]];

// Height
coneNumInput[0].addEventListener('input', () => {
    currentObject.scale.y = coneNumInput[0].value;
})

//Width
coneNumInput[1].addEventListener('input', () => {
    currentObject.scale.x = coneNumInput[1].value;
    currentObject.scale.z = coneNumInput[1].value;
})

function setupCone() {
    cubePropsMenu.hidden = true;
    spherePropsMenu.hidden = true;
    cylinderPropsMenu.hidden = true;
    conePropsMenu.hidden = false;

    coneNumInput[0].value = currentObject.scale.y;
    coneNumInput[1].value = currentObject.scale.x;
}
// ======= ======= =======