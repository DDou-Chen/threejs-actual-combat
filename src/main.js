import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import mesh from "./mesh.js";

const scene = new THREE.Scene();

scene.add(mesh);

const width = window.innerWidth;
const height = window.innerHeight;

const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
// camera.position.set(300, 300, 300);
camera.position.set(0.9, -520, 6.5);

camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);

const clock = new THREE.Clock();
let H = 0;

function render() {
  // 让纹理 offset 动
  // mesh.material.map.offset.y += 0.01

  // 每次改变的数值的另一种写法
  const delta = clock.getDelta(); // 拿到每次渲染的时间间隔，用它作为改变的数值
  // mesh.material.map.offset.y += delta * 0.5;
  mesh.material.alphaMap.offset.y += delta * 0.5;

  H += 0.002;
  if (H > 1) H = 0;
  mesh.material.color.setHSL(H, 0.5, 0.5);

  mesh.rotation.y += delta * 0.5; // 顺便做个旋转

  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

render();

document.body.append(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
