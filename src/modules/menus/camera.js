import * as THREE from '../../../node_modules/three/build/three.module.js';

// Switch to Perespective Camera [Left Button]
const pereCamera = document.getElementById("pereCamera"); 

pereCamera.addEventListener('click', () => {
    console.log("viewSize: ", camera.viewSize);
    console.log("canvasWidth: ", canvasWidth);
});

// Switch to Ortographic Camera [Right Button]
const ortoCamera = document.getElementById("ortoCamera"); 

ortoCamera.addEventListener('click', () => {
console.log(camera.rotation);
    const currentCameraPosition = { ...camera.position }; 
    const currentCameraRotation = { ...camera.rotation };

    console.log(currentCameraPosition);
    console.log(currentCameraRotation);

    camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );

    camera.viewSize.
    aspectRatio = canvasWidth
    // camera.position.set(currentCameraPosition.x, currentCameraPosition.y, currentCameraPosition.z);
    camera.position.set(0, 20, 100);
});