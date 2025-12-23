import * as THREE from 'three';
import { STLLoader } from 'three/addons/loaders/STLLoader.js';

const width = window.innerWidth, height = window.innerHeight;

// init

const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10 );
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
const material = new THREE.MeshNormalMaterial();

const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );


const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( width, height );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );
mesh.position.x = -2

const loader = new STLLoader();
const geometry2 = await loader.loadAsync( '/pr2_head_pan.stl' )
scene.add( new THREE.Mesh( geometry2, material ) );

// animation
function animate( time ) {
	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

    mesh.position.x += .01
    if (mesh.position.x > 2 )mesh.position.x = -2

	renderer.render( scene, camera );
}