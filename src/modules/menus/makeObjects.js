import * as THREE from '../../../node_modules/three/build/three.module.js';
import { objToArray } from './objectsList.js';
import { scene } from '../setup.js';

// 1. RIGHT MENU BUTTONS ( => if u want to follow the action goto point 2. =>)
// New Cube
const addCube = document.getElementById("addCube");

class newObj {
    constructor(obj, type) {
            this.mesh = obj;
            this.type = type;
            this.position = [0,0,0];
    }
    abandonShip() {
        this.mesh.geometry.dispose();
        this.mesh.material.dispose();
        scene.remove(this.mesh);
    }    
}

addCube.addEventListener('click', ()=>{
    // Change it to create object and then modify this object via event listeners
    const geometry = new THREE.CubeGeometry(1,1,1);
    const material = new THREE.MeshBasicMaterial( { color: 0xff4000 } );
    const cube = new THREE.Mesh(geometry, material);
    cube.scale.x = 10;
    cube.scale.y = 10;
    cube.scale.z = 10;

    const newCube = new newObj(cube, 'cube');

    objToArray(newCube);

    scene.add(cube);
});
// new Sphere
const addSphere = document.getElementById("addSphere");

addSphere.addEventListener('click', () => {
    let geometry = new THREE.SphereGeometry(1, 30, 30);
    let material = new THREE.MeshBasicMaterial( { color: 0xff4000 } );
    let sphere = new THREE.Mesh(geometry, material);
    sphere.scale.x = 10;
    sphere.scale.y = 10;
    sphere.scale.z = 10;

    const newSphere = new newObj(sphere, 'sphere');

    objToArray(newSphere);

    scene.add(sphere);
});
// new Cylinder
const addCylinder = document.getElementById("addCylinder");

addCylinder.addEventListener('click', () => {
    let geometry = new THREE.CylinderGeometry(1, 1, 1, 30, 1);
    let material = new THREE.MeshBasicMaterial( { color: 0xff4000 } );
    let cylinder = new THREE.Mesh(geometry, material);

    cylinder.scale.x = 10;
    cylinder.scale.y = 10;
    cylinder.scale.z = 10;

    const newCylinder = new newObj(cylinder, 'cylinder');

    objToArray(newCylinder);

    scene.add(cylinder);
});
// new Cone
const addCone = document.getElementById("addCone");

addCone.addEventListener('click', () => {
    let geometry = new THREE.ConeGeometry(1, 1, 30, 1, false, 0);
    let material = new THREE.MeshBasicMaterial( { color: 0xff4000 } );
    let cone = new THREE.Mesh(geometry, material);

    cone.scale.x = 10;
    cone.scale.y = 10;
    cone.scale.z = 10;

    const newCone = new newObj(cone, 'cone');

    objToArray(newCone);

    scene.add(cone);
});
// ======