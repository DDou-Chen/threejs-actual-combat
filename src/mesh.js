import * as THREE from "three";

const geometry = new THREE.CylinderGeometry(30, 50, 1000, 32, 32, true); // 分段32，设置空心

const loader = new THREE.TextureLoader();
const texture = loader.load("./storm.png");

// 设置竖直方向重复两次
// 竖直方向重复，就要设置 wrapT
texture.colorSpace = THREE.SRGBColorSpace;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(1, 2);

const material = new THREE.MeshBasicMaterial({
  // color: 'orange',
  
  // map: texture, // 颜色贴图
  alphaMap: texture, // alpha贴图-灰度纹理的，用于控制整个表面的透明度
  transparent: true,

  side: THREE.DoubleSide,
});

const tunnel = new THREE.Mesh(geometry, material);

export default tunnel;
