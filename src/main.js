import { scene, renderer, controls, camera } from './modules/setup.js';
import './modules/menus/moveObject.js';
import './modules/menus/makeObject.js';
import './modules/menus/resizeObject.js';
import './modules/menus/camera.js';
import './modules/menus/objectsList.js'
import './modules/menus/moveObject.js';
import './modules/menus/lights.js';
// import './modules/svgCaretaker/svgCreator.js';



// const update = () => {
//}

// ANIMATE
const animate = () => {
    // controls.update();
	requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();
// ======