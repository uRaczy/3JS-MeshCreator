import { scene, renderer, controls, camera } from './modules/setup.js';
import './modules/menus/manipulateObjects.js';
import './modules/menus/makeObjects.js';
import './modules/menus/changeObjects.js';
import './modules/menus/camera.js';
import './modules/menus/objectsList.js'




// ======
// OBJECTS
// Right menu functionalities (Creating new geometries)
// new Cube
let objects = [];




// Event listeners in popup window for creating a cube
const cubeValuesCounters = [];

class Cube {
    constructor(length, height, width) {
        this.length = length,
        this.height = height,
        this.width = width
    }

    create() {
        
    }
}

// ======
// ANIMATE
const animate = () => {
    controls.update();
	requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();