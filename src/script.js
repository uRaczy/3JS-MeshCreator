import * as THREE from '../node_modules/three/build/three.module.js';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';

// SCENE,  RENDERER, CAMERA, CONTROLS - for moving camera
const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

let camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );

camera.position.set(0, 2, 20);

// OrbitControls settings
const controls = new OrbitControls( camera, renderer.domElement);


// ======
// CREATE CANVAS
const canvas = document.getElementById('CanvasContainer').appendChild( renderer.domElement );

document.body.appendChild(renderer.domElement);

console.log(canvas);
// Fixes problem with canvas element putting line before and after thus making scrollbars apear
canvas.style.display = 'block';

// ======
// ADDITIONAL
// Listener that resizes camera and renderer accordin to window size
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    controls.update();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

// Right menu functionalities (Creating new geometries)
// new Cube
let objects = [];



const geometryParameters = (type) => {
    const popupWindow = document.getElementById("props-popup");

    const parametersObject = {
        cube: {length: 10, width: 10, height: 10},
        sphere: {radius: 10},
        cylinder: {radiusTop: 5, radiusBottom: 5, height: 5, radialSegments: 4},
        cone: {radius: 5, height: 5, radialSegments: 5}
    }

    if (type === 'cube') {
        let inputLength = document.createElement('input');
        inputLength.type = 'range';
        popupWindow.appendChild(inputLength);
        let inputWidth = document.createElement('input');
        let inputHeight = document.createElement('input');
    }
    else if (type === 'sphere') {
        let inputRadius = document.createElement('input');
    }
    else if (type === 'cylinder') {

    }
    else if (type === 'cone') {

    }
    let submitButton = document.createElement('input');
    submitButton.type = 'button';
    submitButton.value = 'Confirm';
    popupWindow.appendChild(submitButton);

    // submitButton.addEventListener('click', function(){

    // })
    
}

const geometryCreator = (type) => {
    if (type === 'cube') {
        geometryParameters(type);
    }
    else if (type === 'sphere') {

    }
    else if (type === 'cylinder') {

    }
    else if (type === 'cone') {

    }
}


const addCube = document.getElementById("addCube");

addCube.addEventListener('click', function(){
    geometryCreator('cube');
    // let geometry = new THREE.CubeGeometry(10,10,10);
    // let material = new THREE.MeshBasicMaterial( { color: 0xff4000 } );
    // let cube = new THREE.Mesh(geometry, material);
    // objects.push(cube);
});
// new Sphere
const addSphere = document.getElementById("addSphere");

addSphere.addEventListener('click', function(){
    let geometry = new THREE.SphereGeometry(10, 50, 50);
    let material = new THREE.MeshBasicMaterial( { color: 0xff4000 } );
    let sphere = new THREE.Mesh(geometry, material);
    objects.push(sphere);
});
// new Cylinder
const addCylinder = document.getElementById("addCylinder");

addCylinder.addEventListener('click', function(){
    let geometry = new THREE.CylinderGeometry();
    let material = new THREE.MeshBasicMaterial( { color: 0xff4000 } );
    let cylinder = new THREE.Mesh(geometry, material);
    objects.push(cylinder);
});
// new Cone
const addCone = document.getElementById("addCone");

addCone.addEventListener('click', function(){
    let geometry = new THREE.ConeGeometry();
    let material = new THREE.MeshBasicMaterial( { color: 0xff4000 } );
    let cone = new THREE.Mesh(geometry, material);
    objects.push(cone);
});

// Bottom menu functionalities (Camera options)
// Switch to Perespective Camera
const pereCamera = document.getElementById("pereCamera"); 

pereCamera.addEventListener('click', function(){
    console.log("viewSize: ", camera.viewSize);
    console.log("canvasWidth: ", canvasWidth);
});

// Switch to Ortographic Camera
const ortoCamera = document.getElementById("ortoCamera"); 

ortoCamera.addEventListener('click', function(){
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
// ======



// ANIMATE Function
const animate = () => {
    controls.update();
    scene.add( ...objects )
	requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();
// ======