import { resizeObj } from './resizeObject.js';
import { moveObj } from './moveObject.js';
import { scene } from '../setup.js';

const listContainer = document.getElementById('objects-list');
const container = document.getElementById('props-popup');

// 2. ADD OBJECT TO LIST TO THE LEFT
// Select object from the list to modify its values
function modObj() {
    container.hidden = false;
    const uid = this.parentElement.id;
    const object = scene.getObjectByProperty('uuid', uid);

    resizeObj(object);
    moveObj(object);
}

// Removing object from the list and from the scene
function rmObj() {
    const uid = this.parentElement.id;
    const object = scene.getObjectByProperty('uuid', uid);

    object.geometry.dispose();
    object.material.dispose();
    scene.remove(object);

    this.parentElement.remove(this);
}

const btnSetup = (newObj) => {
    const newElement = document.createElement('span');
    newElement.className = "listElement";
    
    // span element gets id name based on uuid of object that's refering to on list
    newElement.id = newObj.uuid;
    const objBtn = document.createElement('input');
    objBtn.type = "button";
    objBtn.onclick = modObj;
    objBtn.value = String(newObj.geometry.type) + '-' + String(newObj.id);
    
    const deleteObj = document.createElement('input');
    deleteObj.type = "button";
    deleteObj.onclick = rmObj;
    deleteObj.value = "X";

    newElement.appendChild(objBtn);
    newElement.appendChild(deleteObj);

    listContainer.appendChild(newElement);
}



export const objToList = (newObj) => {
    btnSetup(newObj);

    resizeObj(newObj);
    moveObj(newObj);
}