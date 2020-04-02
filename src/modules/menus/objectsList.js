import { objectSetup } from './changeObjects.js';
import { scene } from '../setup.js';

const listContainer = document.getElementById('objects-list');


// Removing object from the list and from the scene
function rmObj() {
    const uid = this.parentElement.id;
    const object = scene.getObjectByProperty('uuid', uid);

    object.geometry.dispose();
    object.material.dispose();
    scene.remove(object);

    this.parentElement.remove(this);
}
// 2. ADD OBJECT TO LIST TO THE LEFT
const btnSetup = (newObj) => {
    const newElement = document.createElement('span');
    newElement.className = "listElement";
    
    // span element gets id name based on uuid of object that's refering to on list
    newElement.id = newObj.mesh.uuid;
    const objBtn = document.createElement('input');
    objBtn.type = "button";
    objBtn.value = String(newObj.type);
    
    const deleteObj = document.createElement('input');
    deleteObj.type = "button";
    deleteObj.onclick = rmObj;
    deleteObj.value = "X";

    newElement.appendChild(objBtn);
    newElement.appendChild(deleteObj);

    listContainer.appendChild(newElement);
}



export const objToArray = (newObj) => {
    btnSetup(newObj);

    objectSetup(newObj);
}