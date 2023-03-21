// Import everything from three.js core
import * as THREE from './vendor/three/build/three.module.js';

// Import OrbitControls plugin
import { OrbitControls } from './vendor/three/examples/jsm/controls/OrbitControls.js';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 5);

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create an orbit control
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Create a floor
const floorGeometry = new THREE.PlaneGeometry(10, 10);
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

// Create four walls
const wallGeometry = new THREE.PlaneGeometry(10, 4);
const wallMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
const wallFront = new THREE.Mesh(wallGeometry, wallMaterial);
wallFront.position.z = -5;
wallFront.position.y = 2;
scene.add(wallFront);

const wallBack = new THREE.Mesh(wallGeometry, wallMaterial);
wallBack.position.z = 5;
wallBack.position.y = 2;
wallBack.rotation.y = Math.PI;
scene.add(wallBack);

const wallLeft = new THREE.Mesh(wallGeometry, wallMaterial);
wallLeft.position.x = -5;
wallLeft.position.y = 2;
wallLeft.rotation.y = Math.PI / 2;
scene.add(wallLeft);

const wallRight= new THREE.Mesh(wallGeometry, wallMaterial);
wallRight.position.x=5;
wallRight.position.y=2;
wallRight.rotation.y=-Math.PI/2;
scene.add(wallRight);

// Create a ceiling
const ceilingGeometry=newTHREE.PlaneGeometry(10 ,10 );
 const ceilingMaterial=newTHREE.MeshStandardMaterial({color:0xaaaaaa});
 const ceiling=newTHREE.Mesh(ceilingGeometry ,ceilingMaterial );
 ceiling.position.y=4 ;
 ceiling.rotation.x=Math.PI/2 ;
 scene.add(ceiling );

 //Create alight 
 const light=newTHREE.PointLight(0xffffff ,1 );
 light.position.set(0 ,3.8 ,0 );
 scene.add(light );

 //Animate 
 function animate() {
     requestAnimationFrame(animate );
     controls.update();
     renderer.render(scene ,camera );
 }
 animate();