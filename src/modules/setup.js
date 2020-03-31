import * as THREE from '../../node_modules/three/build/three.module.js';
import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls.js';

// SCENE,  RENDERER, CAMERA INIT
export const scene = new THREE.Scene();

export const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

export const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );

camera.position.set(0, 2, 20);

// CAMERA ORBIT CONTROLS AND RESIZE EVENT
export const controls = new OrbitControls( camera, renderer.domElement);

window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    controls.update();
    renderer.setSize( window.innerWidth, window.innerHeight );
}


// CANVAS
const canvas = document.getElementById('CanvasContainer').appendChild( renderer.domElement );

// Fixes problem with canvas element putting line before and after thus making scrollbars apear
canvas.style.display = 'block';