import * as THREE from 'three';

//Scene
const scene = new THREE.Scene();

//Creating the sphere
const geometry = new THREE.SphereGeometry(15,32,16)
const material = new THREE.MeshStandardMaterial({color: 0xffff00 })
const mesh = new THREE.mesh(geometry, mesh)
scene.add(mesh)

//Camera
const camera = new THREE.PerspectiveCamera(45,800,600)
scene.add(camera)

//Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(800,600)
renderer.render(scene,camera)