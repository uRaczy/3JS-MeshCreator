import * as THREE from '../../../node_modules/three/build/three.module.js';
import { objToList } from './objectsList.js';
import { scene } from '../setup.js';

// 1. RIGHT MENU BUTTONS ( => if u want to follow the action goto point 2. =>)
// New Cube
const addCube = document.getElementById("addCube");


addCube.addEventListener('click', ()=>{
    // Change it to create object and then modify this object via event listeners
    const geometry = new THREE.CubeGeometry(1,1,1);
    const material = new THREE.MeshPhongMaterial( { color: 0x90a4ae } );
    const cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true;
    cube.receiveShadow = true;
    cube.scale.x = 10;
    cube.scale.y = 10;
    cube.scale.z = 10;

    objToList(cube);

    scene.add(cube);
});
// new Sphere
const addSphere = document.getElementById("addSphere");

addSphere.addEventListener('click', () => {
    let geometry = new THREE.SphereGeometry(1, 30, 30);
    let material = new THREE.MeshPhongMaterial( { color: 0x90a4ae } );
    let sphere = new THREE.Mesh(geometry, material);
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    sphere.scale.x = 10;
    sphere.scale.y = 10;
    sphere.scale.z = 10;

    objToList(sphere);

    scene.add(sphere);
});
// new Cylinder
const addCylinder = document.getElementById("addCylinder");

addCylinder.addEventListener('click', () => {
    let geometry = new THREE.CylinderGeometry(1, 1, 1, 30, 1);
    let material = new THREE.MeshPhongMaterial( { color: 0x90a4ae } );
    let cylinder = new THREE.Mesh(geometry, material);
    cylinder.castShadow = true;
    cylinder.receiveShadow = true;
    cylinder.scale.x = 10;
    cylinder.scale.y = 10;
    cylinder.scale.z = 10;

    objToList(cylinder);

    scene.add(cylinder);
});
// new Cone
const addCone = document.getElementById("addCone");

addCone.addEventListener('click', () => {
    let geometry = new THREE.ConeGeometry(1, 1, 30, 1, false, 0);
    let material = new THREE.MeshPhongMaterial( { color: 0x90a4ae } );
    let cone = new THREE.Mesh(geometry, material);
    cone.castShadow = true;
    cone.receiveShadow = true;
    cone.scale.x = 10;
    cone.scale.y = 10;
    cone.scale.z = 10;

    objToList(cone);

    scene.add(cone);
});
// ======