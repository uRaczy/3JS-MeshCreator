import { objectSetup } from './changeObjects.js';

const objsArray = [];
const listContainer = document.getElementById('objects-list');
// 2. ADD OBJECT TO LIST TO THE LEFT
const btnSetup = (newObj) => {
    const newElement = document.createElement('span');
    newElement.className = "listElement";
    
    const objBtn = document.createElement('input');
    objBtn.type = "button";
    objBtn.value = String(newObj.type);
    
    const deleteObj = document.createElement('input');
    deleteObj.type = "button";
    deleteObj.value = "X";

    newElement.appendChild(objBtn);
    newElement.appendChild(deleteObj);

    listContainer.appendChild(newElement);
}



export const objToArray = (newObj) => {
    objsArray.push(newObj);

    btnSetup(newObj);

    objectSetup(newObj);
}