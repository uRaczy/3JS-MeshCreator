const moveContainer = document.getElementById('props-popup');

// X Axis
const title = document.createElement('h2');
title.innerHTML = "Move";

const axisX = document.createElement('span');
const titleX = document.createElement('h3');
titleX.innerHTML = "Axis X";

const moveX = document.createElement('input');
moveX.type = "number";

axisX.className = "moveInput";
axisX.append(titleX, moveX);

// Y Axis
const axisY = document.createElement('span');
const titleY = document.createElement('h3');
titleY.innerHTML = "Axis Y";

const moveY = document.createElement('input');
moveY.type = "number";

axisY.className = "moveInput";
axisY.append(titleY, moveY);

// Z Axis
const axisZ = document.createElement('span');
const titleZ = document.createElement('h3');
titleZ.innerHTML = "Axis Z";

const moveZ = document.createElement('input');
moveZ.type = "number";

axisZ.className = "moveInput";
axisZ.append(titleZ, moveZ);


const hideBtn = document.createElement('input');
hideBtn.type = "button";
hideBtn.value = "Hide";
hideBtn.onclick = hide;

moveContainer.append(title, axisX, axisY, axisZ, hideBtn);

function hide() {
    moveContainer.hidden = true;
}

let currentObj;

export const moveObj = (object) => {
    currentObj = object;
    moveX.value = object.position.x;       
    moveY.value = object.position.y;
    moveZ.value = object.position.z;
    
    object.position.y = moveY.value;
    object.position.z = moveZ.value;
}

moveX.addEventListener('input', ()=> {
    currentObj.position.x = moveX.value;
})

moveY.addEventListener('input', ()=> {
    currentObj.position.y = moveY.value;
})

moveZ.addEventListener('input', ()=> {
    currentObj.position.z = moveZ.value;
})