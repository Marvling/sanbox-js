
import THREE from './js/three.module.js';

// SETUP

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
})

let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


// GEOMETRY

let geoSphere = new THREE.SphereGeometry(1, 20, 20);
let geoBox = new THREE.BoxGeometry(1, 1, 1);

// MATERIALS

let matW = new THREE.MeshLambertMaterial({ color: 0xFFFFFF })
let matNormal = new THREE.MeshNormalMaterial();

// MESHES

let mesh = new THREE.Mesh(geoBox, matNormal);

// LIGHTS

let pointW = new THREE.PointLight(0xFFFFFF, 1, 500);
pointW.position.set(10, 0, 25);

// SCENE

scene.add(pointW);
scene.add(mesh);

// ANIMATION

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    if (mesh.position.x < 5) {
        mesh.position.x += 0.01;

    }
    else {
        mesh.position.set(0, 0, 0);
    }
    renderer.render(scene, camera);
}
animate();
