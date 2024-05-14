<template>
  <div class="canvas-container">
    <video class="video" ref="video" width="auto" height="auto" autoplay></video>
    <canvas id="overlay" class="three"></canvas>
  </div>
  <div class="carousel-container">
    <carousel :items-to-show="4">
    <slide v-for="slide in glasses" :key="slide.id">
      <div class="carousel__slide">
        <img class="carousel__img" :src="`images/${slide.image}`" alt="">
        <button @click="changeModel(slide.id)"> Model {{ slide.id+1 }}</button> 
      </div>
    </slide>
  </carousel>
  </div>
</template>
<script setup>
import { ref, onMounted  } from 'vue'
import {  FaceLandmarker,  FilesetResolver } from '@mediapipe/tasks-vision'
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
 
const video = ref(null)
const canvas= ref(null)
let vision 
let faceLandmarker
let scene = null
let camera = null
let renderer = null
let cube = null
let videoWidth = 640
let videoHeight = 480
const glasses = [
  {
    id: 0,
    name: 'glasses_1.glb',
    relativeScale: 390,
    image: 'image_1.png',
    x: 3,
    y: 30,
    z: 100
  },
  {
    id: 1,
    name: 'glasses_7.glb',
    relativeScale: 5050,
    image: 'image_3.png',
    x: 5,
    y: 20,
    z: 0
  },
  {
    id: 2,
    name: 'glasses_3.glb',
    relativeScale: 195,
    image: 'image_7.png',
    x: 4,
    y: 30,
    z: 120
  },
  {
    id: 3,
    name: 'glasses_4.glb',
    relativeScale: 580,
    image: 'image_6.png',
    x: 0,
    y: 30,
    z: 130
  },
  {
    id: 4,
    name: 'glasses_5.glb',
    relativeScale: 430,
    image: 'image_2.png',
    x: 0,
    y: 10,
    z: 100
  },
  {
    id: 5,
    name: 'glasses_2.glb',
    relativeScale: 5330,
    image: 'image_5.png',
    x: 3,
    y: 30,
    z: 0
  },
]
let glassModel = glasses[0]
const loader = new GLTFLoader();

onMounted(() => {
  video.value = video.value;
  canvas.value = canvas.value;
  navigator.mediaDevices.getUserMedia({ video: true }).then(async (stream) => {
    video.value.srcObject = stream;
    await init()
    initThree()
    await trackFace()      
  });
})

async function init(){
   vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
  );
   faceLandmarker = await FaceLandmarker.createFromModelPath(vision,
      "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task"
  );
}

function initThree(){
  videoWidth = video.value.videoWidth;
  videoHeight = video.value.videoHeight;
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 35, 1, 0.1, 1070 );
  renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById( "overlay" ),
    alpha: true,
    antialiasing: true
  });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
  renderer.setSize( videoWidth, videoHeight );  
  loader.load(`models/${glassModel.name}`, (gltf) => {
    cube = gltf.scene
    scene.add(cube);
  });
  scene.add( new THREE.AmbientLight( 0xcccccc, 2.4 ) );
  camera.add( new THREE.PointLight( 0xffffff, 1.8 ) );
  camera.position.x = videoWidth / 2;
  camera.position.y = -videoHeight / 2;
  camera.position.z = ( videoHeight / 2 ) / Math.tan( 45 / 2 ); 
}

async function trackFace() {
  const video2 = document.querySelector( "video" );
  const landmarks = await faceLandmarker.detect(video2);

  console.log(landmarks)

  requestAnimationFrame( trackFace );
  if(!landmarks?.faceLandmarks?.length) return

  const midwayBetweenEyes = landmarks.faceLandmarks[ 0 ][ 6 ]
  const noseBottom = landmarks.faceLandmarks[ 0 ][ 1 ]
  const leftEye = landmarks.faceLandmarks[ 0 ][ 226 ]
  const rightEye = landmarks.faceLandmarks[ 0 ][ 446 ]
  if(!cube) return;

  cube.position.x = midwayBetweenEyes.x * videoWidth - glassModel.x;
  cube.position.y = -midwayBetweenEyes.y * videoHeight - glassModel.y;
  cube.position.z = -camera.position.z + midwayBetweenEyes.z - glassModel.z;

  cube.up.x = midwayBetweenEyes.x - noseBottom.x;
  cube.up.y = -( midwayBetweenEyes.y - noseBottom.y );
  cube.up.z = midwayBetweenEyes.z - noseBottom.z;
  const length = Math.sqrt( cube.up.x ** 2 + cube.up.y ** 2 + cube.up.z ** 2 );
  cube.up.x /= length;
  cube.up.y /= length;
  cube.up.z = 0;

  let angle = Math.atan2( cube.up.y, cube.up.x );

  const eyeDist = Math.sqrt(
    ( leftEye.x - rightEye.x ) ** 2 +
    ( leftEye.y - rightEye.y ) ** 2 +
    ( leftEye.z - rightEye.z ) ** 2
  );
  cube.scale.x = eyeDist * glassModel.relativeScale;
  cube.scale.y = eyeDist * glassModel.relativeScale;
  cube.scale.z = eyeDist * glassModel.relativeScale * 2;
  cube.rotation.y = angle - Math.PI/2;
  cube.rotation.z = -(Math.PI / 2 - Math.acos( cube.up.x ));
  renderer.render( scene, camera );
}

function changeModel(id){

  glassModel = glasses[id]; 
  scene.children.forEach((item)=>{
    if(item?.name){
      scene.remove( item );
    }
  })
  loader.load(`models/${glassModel.name}`, (gltf) => {
    cube = gltf.scene
    scene.add(cube);
  });
}
</script>

<style>
.canvas-container{
  position: relative;
  margin: 0 auto;
  max-width: 640px;
}

.three{
  position: absolute;
  left: 0;
  right: 0;
}
.carousel-container{
  max-width: 640px;
  margin: 0 auto;
  width: 100%;
}
.carousel__slide{
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  img{
    height: 80px;
    display: block;
  }
  button{
    background-color: #7779f3;
    border: 0;
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
    cursor: pointer;
  }
  button:hover{
    background-color: #5b5def;
  }
}
</style>