import * as THREE from '../../../node_modules/three/build/three.module.js'
import { svgRectangles } from './svgLoader.js'
import { scene } from '../setup.js';

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshLambertMaterial( { color: 0xffffff } );
let walls = [];

// const xzRotation = () => {

// }

// Creating walls from svg
svgRectangles.forEach(currentItem => {
    const posX = currentItem.getAttribute('x');
    const posY = currentItem.getAttribute('y');
    console.log(currentItem.getAttribute('x'), currentItem.getAttribute('y'));
    const width = currentItem.getAttribute('width');
    const height = currentItem.getAttribute('height');
    const rotate = currentItem.getAttribute('transform');

    const currentWall = new THREE.Mesh(geometry, material);
    console.log(currentItem.style);
    currentWall.material.color.set(currentItem.style.fill);
 
    currentWall.scale.x = width;
    currentWall.scale.z = height;
    currentWall.scale.y = 100;
    currentWall.position.x = posX;
    currentWall.position.z = posY;

    if (rotate !== null) {
        const transform = currentItem.getAttribute('transform').slice(7);
        const rotation = parseInt(transform);
        currentWall.rotateY(rotation * Math.PI / 180*(-1));

        if (rotation == -90) {
            currentWall.position.x = posY*(-1);
            currentWall.position.z = posX;
        }
        else if (rotation == 90) {
            currentWall.position.x =posY*(-1);
            currentWall.position.z = posX;
        }

    }
    


    walls.push(currentWall);
    console.log(walls);
});

scene.add(...walls);