(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//GLOBAL JQUERY

/////////////
//ICOSPHERE//
/////////////
var the_container = document.getElementById("container");
var stats, element; 
var mouse = new THREE.Vector2(), INTERSECTED;
var radius = 100, theta = 0;
var renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});
var raycaster = new THREE.Raycaster();
var camera = new THREE.PerspectiveCamera(80,1,0.1,10000);
var scene = new THREE.Scene();
var targetList = [];
var materials = [];

var groups = [];

scene.add(camera);
renderer.setSize(950, 950);

the_container.append(renderer.domElement);

// Camera
camera.position.z = 200;

var L1 = new THREE.PointLight( );
L1.position.z = 2000;
L1.position.y = 1850;
L1.position.x = 1000;
L1.power = 4;
scene.add(L1);
camera.add(L1);

var L2 = new THREE.PointLight( );
L2.position.z = 2000;
L2.position.y = -1850;
L2.position.x = -1000;
L2.power = 4;
scene.add(L2);
camera.add(L2);

var L3 = new THREE.PointLight( );
L3.position.z = 2000;
L3.position.y = -1000;
L3.position.x = -1850;
L3.power = 4;
scene.add(L3);
camera.add(L3);

var L4 = new THREE.PointLight( );
L4.position.z = 2000;
L4.position.y = 1000;
L4.position.x = 1850;
L4.power = 4;
scene.add(L4);
camera.add(L4);

var L4 = new THREE.PointLight( );
L4.position.z = -2000;
L4.position.y = 0;
L4.position.x = 700;
L4.power = 4;
scene.add(L4);
camera.add(L4);

function initLighting() {
  // so many lights
  var light = new THREE.DirectionalLight( 0x6e6e6e, .5 );
  light.position.set( 0, 1, 0 );
  scene.add( light );

  var light = new THREE.DirectionalLight( 0x6e6e6e, .5 );
  light.position.set( 0, -1, 0 );
  scene.add( light );

  var light = new THREE.DirectionalLight( 0x6e6e6e, .5 );
  light.position.set( 1, 0, 0 );
  scene.add( light );

  var light = new THREE.DirectionalLight( 0x6e6e6e, .5 );
  light.position.set( 0, 0, 1 );
  scene.add( light );

  var light = new THREE.DirectionalLight( 0x6e6e6e, .5 );
  light.position.set( 0, 0, -1 );
  scene.add( light );

  var light = new THREE.DirectionalLight( 0x6e6e6e, .5 );
  light.position.set( -1, 0, 0 );
  scene.add( light );
}

var ico_type = 1;
var ico_size = 70;

function initGeometry() {
  // add icosahedron
  geometry3 = new THREE.IcosahedronGeometry( ico_size = ico_size - 0.01, ico_type );
  geometry2 = new THREE.IcosahedronGeometry( ico_size = ico_size + 0.01, ico_type );
  geometry = new THREE.IcosahedronGeometry( ico_size = ico_size, ico_type ); 
  window.requestAnimationFrame(render);
  var facers = geometry2.faces;
  for ( var i = 0; i < facers.length; i ++ ) {
      geometry2.faces[i].materialIndex = i;
      geoTri = geometry2.faces[i];
      materials.push(new THREE.MeshPhongMaterial({
          // overdraw: true,
          wireframe: false,
          name: '#triangle' + i,
          shininess :   "100000000000000000000000000",
          transparent: true,
          opacity: 0,
          shading    :  THREE.FlatShading

      }));
  }

  element = new THREE.Mesh(geometry2, materials);
  element.position.y = 0;
  scene.add(element);
  targetList.push(element);

  mesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { 
    color      :  new THREE.Color("rgb(100,100,100)"),
    emissive   :  new THREE.Color("rgb(100,100,100)"),
    specular   :  new THREE.Color("rgb(100,100,100)"),
    shininess :   "10000000000000000",
    shading    :  THREE.FlatShading,
    wireframeLinewidth : 10,
    opacity    : 1
  } ));

  meshersTimers = new THREE.Mesh( geometry3, new THREE.MeshPhongMaterial( { 
    color      :  new THREE.Color("rgb(100,100,100)"),
    emissive   :  new THREE.Color("rgb(100,100,100)"),
    specular   :  new THREE.Color("rgb(100,100,100)"),
    shininess :   "10000000000000000",
    shading    :  THREE.FlatShading,
    opacity    : 1
  } ));

  scene.add( mesh );
  scene.add(meshersTimers);
}

scene.rotation.z = 0.5;

var trackballControl = new THREE.TrackballControls(camera, renderer.domElement);
trackballControl.rotateSpeed = 1.0; // need to speed it up a little
trackballControl.noPan = true;

function update(){
 scene.rotation.x+=0;
 scene.rotation.y+=0;
}

// Render
function render() {
  trackballControl.update();
  requestAnimationFrame(render);
  camera.lookAt( scene.position );
  camera.updateMatrixWorld();
  renderer.render(scene, camera);
  update();
}

//RUN THESE TASKS ON HASH CHANGE
initLighting();
function renderGeometry(){
  initGeometry();
}
renderGeometry();
render();

/////////////////////ADD FOR DATA 2///////////////////////

//GROUPS 1//
// var group1 = 0x8fa6d2;

// task1 = [];
// task1.push(materials[1]);
// task1.push(materials[2]);
// task1.push(materials[3]);
// task1.push(materials[4]);
// task1.push(materials[5]);
// task1.push(materials[15]);

// for(var g=0; g < task1.length ; g++){
//   task1[g].opacity = 1;
//   task1[g].color.setHex(group1);
// }

/////////////////////ADD FOR DATA 3///////////////////////

// task2 = [];
// task2.push(materials[18]);

// for(var g=0; g < task2.length ; g++){
//   task2[g].opacity = 1;
//   task2[g].color.setHex(group1);
// }

// task3 = [];
// task3.push(materials[40]);

// for(var g=0; g < task3.length ; g++){
//   task3[g].opacity = 1;
//   task3[g].color.setHex(group1);
// }

//GROUPS 1//
var group1 = 0x8fa6d2;

task1 = [];
task1.push(materials[21]);
task1.push(materials[22]);
task1.push(materials[23]);
task1.push(materials[20]);
task1.push(materials[7]);
task1.push(materials[6]);

for(var g=0; g < task1.length ; g++){
  task1[g].opacity = 1;
  task1[g].color.setHex(group1);
}

task2 = [];
task2.push(materials[18]);

for(var g=0; g < task2.length ; g++){
  task2[g].opacity = 1;
  task2[g].color.setHex(group1);
}

task3 = [];
task3.push(materials[19]);

for(var g=0; g < task3.length ; g++){
  task3[g].opacity = 1;
  task3[g].color.setHex(group1);
}

//GROUPS 2//
var group2 = 0xe1d901;

task4 = [];
task4.push(materials[1]);

for(var g=0; g < task4.length ; g++){
  task4[g].opacity = 1;
  task4[g].color.setHex(group2);
}

task5 = [];
task5.push(materials[31]);

for(var g=0; g < task5.length ; g++){
  task5[g].opacity = 1;
  task5[g].color.setHex(group2);
}

task6 = [];
task6.push(materials[44]);

for(var g=0; g < task6.length ; g++){
  task6[g].opacity = 1;
  task6[g].color.setHex(group2);
}

//GROUP 3//
var group3 = 0x82b249;

task7 = [];
task7.push(materials[56]);
task7.push(materials[57]);
task7.push(materials[58]);
task7.push(materials[59]);
task7.push(materials[55]);
task7.push(materials[53]);

for(var g=0; g < task7.length ; g++){
  task7[g].opacity = 1;
  task7[g].color.setHex(group3);
}

task8 = [];
task8.push(materials[60]);
task8.push(materials[61]);
task8.push(materials[63]);


for(var g=0; g < task8.length ; g++){
  task8[g].opacity = 1;
  task8[g].color.setHex(group3);
}

task9 = [];
task9.push(materials[1]);
task9.push(materials[2]);

for(var g=0; g < task9.length ; g++){
  task9[g].opacity = 1;
  task9[g].color.setHex(group3);
}

task10 = [];
task10.push(materials[4]);
task10.push(materials[5]);

for(var g=0; g < task10.length ; g++){
  task10[g].opacity = 1;
  task10[g].color.setHex(group3);
}

task11 = [];
task11.push(materials[33]);

for(var g=0; g < task11.length ; g++){
  task11[g].opacity = 1;
  task11[g].color.setHex(group3);
}

//GROUP 3//
var group4 = 0xf15a6b;

task12 = [];
task12.push(materials[31]);

for(var g=0; g < task12.length ; g++){
  task12[g].opacity = 1;
  task12[g].color.setHex(group4);
}

task13 = [];
task13.push(materials[40]);

for(var g=0; g < task13.length ; g++){
  task13[g].opacity = 1;
  task13[g].color.setHex(group4);
}

task14 = [];
task14.push(materials[43]);

for(var g=0; g < task14.length ; g++){
  task14[g].opacity = 1;
  task14[g].color.setHex(group4);
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvcG9seXNjb3BlX3Byb3RvdHlwZS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9wb2x5c2NvcGVfcHJvdG90eXBlL3NyYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvL0dMT0JBTCBKUVVFUllcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCl7IFxuICBcbiAgJCgnYS5zaW5nbGUtcHJvamVjdCcpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAkKHRoaXMpLmhlaWdodCgkKHRoaXMpLndpZHRoKCkpO1xuICB9KTtcblxuICAkKCcuc2luZ2xlLXByb2plY3QnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgJCh0aGlzKS5oZWlnaHQoJCh0aGlzKS53aWR0aCgpKTtcbiAgfSk7XG5cbiAgJCgnI3NhdmVfcHJvamVjdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgJCgnI3NiJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJyNzcGhlcmUnKS5yZW1vdmVDbGFzcygnY29sLTknKS5hZGRDbGFzcygnY29sLTEyJyk7XG4gICAgJCgnI2FkZF90YXNrJykuYWRkQ2xhc3MoJ2FkZGFibGUnKTtcbiAgICAkKCcuc3BoZXJlLXRvZ2dsZScpLnJlbW92ZUNsYXNzKCdwYWQtaXQnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuXG4gICQoJyNhZGRfdGFzaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgJCgnI3NiJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJyNzcGhlcmUnKS5hZGRDbGFzcygnY29sLTknKS5yZW1vdmVDbGFzcygnY29sLTEyJyk7XG4gICAgJCgnI2FkZF90YXNrJykuYWRkQ2xhc3MoJ2FkZGFibGUnKTtcbiAgICAkKCcjc2InKS5yZW1vdmVDbGFzcygnc2ItcHJvamVjdCcpLmFkZENsYXNzKCdzYi10YXNrJyk7XG4gICAgJCgnLnNwaGVyZS10b2dnbGUnKS5hZGRDbGFzcygncGFkLWl0Jyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcblxuICAvL3RyYWNrYmFyXG4gIG5ld1ZhbHVlID0gMTtcbiAgJChcIiNob3Vyc19yYW5nZVwiKS5hdHRyKCd2YWx1ZScsIG5ld1ZhbHVlKTtcblxuICAkKFwiI2hvdXJzX3JhbmdlXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCl7XG4gICAgJCh0aGlzKS5hdHRyKCd2YWx1ZScpO1xuICAgICQoXCIuaG91cnMtcmFuZ2VcIikudGV4dChuZXdWYWx1ZSk7XG4gIH0pO1xuICBmdW5jdGlvbiBzaG93VmFsdWUobmV3VmFsdWUpIHtcbiAgICAkKFwiLmhvdXJzLXJhbmdlXCIpLmlubmVySFRNTD1uZXdWYWx1ZTtcbiAgfVxuXG5cbiAgdmFyIGNsaWNrZXIgPSAwO1xuXG4gIHZhciBjb3VudCA9ICQoJyNzcGhlcmUgLnBvbHktdmlkZW8nKS5sZW5ndGggLSAxO1xuICBjb25zb2xlLmxvZyhjb3VudCk7XG4gICQoJy50b2dnbGUtYXJyb3ctbGVmdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7ICAgIFxuICAgIGlmKGNsaWNrZXIgPiAwKXtcbiAgICAgIGNsaWNrZXIgPSBjbGlja2VyIC0gMTsgICAgXG4gICAgfVxuICAgIHZhciB0aGVfaWQgPSBcIiNkYXRhX1wiICsgY2xpY2tlcjtcbiAgICAkKCcjc3BoZXJlID4gLnBvbHktdmlkZW8uc2hvdycpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgJCh0aGVfaWQpLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB0aGVfaWQ7XG4gICAgY29uc29sZS5sb2codGhlX2lkKTtcbiAgfSk7IFxuXG4gICQoJy50b2dnbGUtYXJyb3ctcmlnaHQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGlmKGNsaWNrZXIgPCBjb3VudCl7XG4gICAgICBjbGlja2VyID0gY2xpY2tlciArIDE7ICAgIFxuICAgIH1cbiAgICB2YXIgdGhlX2lkID0gXCIjXCIgKyBcImRhdGFfXCIgKyBjbGlja2VyO1xuICAgICQoJyNzcGhlcmUgPiAucG9seS12aWRlby5zaG93JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAkKHRoZV9pZCkuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHRoZV9pZDtcbiAgICBjb25zb2xlLmxvZyh0aGVfaWQpO1xuICB9KTsgXG5cbiAgdmFyIG1vdXNlWCwgbW91c2VZO1xuICAkKCcjc3BoZXJlJykuZGJsY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgbW91c2VYID0gZS5wYWdlWCArIDI4O1xuICAgIG1vdXNlWSA9IGUucGFnZVkgLSAxODtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgJChcIiNwb3B1cFwiKS5yZW1vdmVDbGFzcyhcImFwcGVhclwiKTtcbiAgICB9KTtcblxuICAgICQoXCIjcG9wdXBcIikucmVtb3ZlQ2xhc3MoXCJhcHBlYXJcIikuY3NzKHtcbiAgICAgICAgXCJsZWZ0XCI6IG1vdXNlWCArICdweCcsXG4gICAgICAgIFwidG9wXCI6IG1vdXNlWSArICdweCdcbiAgICB9KTtcblxuICAgIGlmKCQoXCIjcG9wdXBcIikuaGFzQ2xhc3MoJ2FwcGVhcicpKXtcblxuICAgICAgJChcIiNwb3B1cFwiKS5yZW1vdmVDbGFzcygnYXBwZWFyJyk7XG4gICAgICAkKFwiI3BvcHVwXCIpLmRlbGF5KDUwMCkuYWRkQ2xhc3MoJ2FwcGVhcicpO1xuXG4gICAgfWVsc2V7XG4gICAgICAkKFwiI3BvcHVwXCIpLmFkZENsYXNzKCdhcHBlYXInKTtcbiAgICB9IFxuICB9KTtcblxuICAkKCcua2V5JykubW91c2VlbnRlcihmdW5jdGlvbigpe1xuICAgIHZhciBrZXlfbm90ZSA9ICQodGhpcykuZGF0YSgnaG92ZXInKTtcbiAgICAkKHRoaXMpLmFwcGVuZChcIjxzcGFuIGNsYXNzPSdrZXktaG92ZXInPlwiICsga2V5X25vdGUgKyBcIjwvc3Bhbj5cIik7XG4gICAgJCgnLmtleS1ob3ZlcicpLmZhZGVJbigpO1xuICB9KS5tb3VzZW91dChmdW5jdGlvbigpe1xuICAgICQoJy5rZXktaG92ZXInKS5mYWRlT3V0KCk7XG4gICAgJCh0aGlzKS5jaGlsZHJlbignLmtleS1ob3ZlcicpLnJlbW92ZSgpO1xuICB9KTtcbn0pO1xuXG4vLy8vLy8vLy8vLy8vXG4vL0lDT1NQSEVSRS8vXG4vLy8vLy8vLy8vLy8vXG52YXIgdGhlX2NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpO1xudmFyIHN0YXRzLCBlbGVtZW50OyBcbnZhciBtb3VzZSA9IG5ldyBUSFJFRS5WZWN0b3IyKCksIElOVEVSU0VDVEVEO1xudmFyIHJhZGl1cyA9IDEwMCwgdGhldGEgPSAwO1xudmFyIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICBhbnRpYWxpYXM6IHRydWUsXG4gIGFscGhhOiB0cnVlXG59KTtcbnZhciByYXljYXN0ZXIgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKCk7XG52YXIgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDgwLDEsMC4xLDEwMDAwKTtcbnZhciBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xudmFyIHRhcmdldExpc3QgPSBbXTtcbnZhciBtYXRlcmlhbHMgPSBbXTtcblxudmFyIGdyb3VwcyA9IFtdO1xuXG5zY2VuZS5hZGQoY2FtZXJhKTtcbnJlbmRlcmVyLnNldFNpemUoOTUwLCA5NTApO1xuXG50aGVfY29udGFpbmVyLmFwcGVuZChyZW5kZXJlci5kb21FbGVtZW50KTtcblxuLy8gQ2FtZXJhXG5jYW1lcmEucG9zaXRpb24ueiA9IDIwMDtcblxudmFyIEwxID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoICk7XG5MMS5wb3NpdGlvbi56ID0gMjAwMDtcbkwxLnBvc2l0aW9uLnkgPSAxODUwO1xuTDEucG9zaXRpb24ueCA9IDEwMDA7XG5MMS5wb3dlciA9IDQ7XG5zY2VuZS5hZGQoTDEpO1xuY2FtZXJhLmFkZChMMSk7XG5cbnZhciBMMiA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KCApO1xuTDIucG9zaXRpb24ueiA9IDIwMDA7XG5MMi5wb3NpdGlvbi55ID0gLTE4NTA7XG5MMi5wb3NpdGlvbi54ID0gLTEwMDA7XG5MMi5wb3dlciA9IDQ7XG5zY2VuZS5hZGQoTDIpO1xuY2FtZXJhLmFkZChMMik7XG5cbnZhciBMMyA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KCApO1xuTDMucG9zaXRpb24ueiA9IDIwMDA7XG5MMy5wb3NpdGlvbi55ID0gLTEwMDA7XG5MMy5wb3NpdGlvbi54ID0gLTE4NTA7XG5MMy5wb3dlciA9IDQ7XG5zY2VuZS5hZGQoTDMpO1xuY2FtZXJhLmFkZChMMyk7XG5cbnZhciBMNCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KCApO1xuTDQucG9zaXRpb24ueiA9IDIwMDA7XG5MNC5wb3NpdGlvbi55ID0gMTAwMDtcbkw0LnBvc2l0aW9uLnggPSAxODUwO1xuTDQucG93ZXIgPSA0O1xuc2NlbmUuYWRkKEw0KTtcbmNhbWVyYS5hZGQoTDQpO1xuXG52YXIgTDQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggKTtcbkw0LnBvc2l0aW9uLnogPSAtMjAwMDtcbkw0LnBvc2l0aW9uLnkgPSAwO1xuTDQucG9zaXRpb24ueCA9IDcwMDtcbkw0LnBvd2VyID0gNDtcbnNjZW5lLmFkZChMNCk7XG5jYW1lcmEuYWRkKEw0KTtcblxuZnVuY3Rpb24gaW5pdExpZ2h0aW5nKCkge1xuICAvLyBzbyBtYW55IGxpZ2h0c1xuICB2YXIgbGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCggMHg2ZTZlNmUsIC41ICk7XG4gIGxpZ2h0LnBvc2l0aW9uLnNldCggMCwgMSwgMCApO1xuICBzY2VuZS5hZGQoIGxpZ2h0ICk7XG5cbiAgdmFyIGxpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoIDB4NmU2ZTZlLCAuNSApO1xuICBsaWdodC5wb3NpdGlvbi5zZXQoIDAsIC0xLCAwICk7XG4gIHNjZW5lLmFkZCggbGlnaHQgKTtcblxuICB2YXIgbGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCggMHg2ZTZlNmUsIC41ICk7XG4gIGxpZ2h0LnBvc2l0aW9uLnNldCggMSwgMCwgMCApO1xuICBzY2VuZS5hZGQoIGxpZ2h0ICk7XG5cbiAgdmFyIGxpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoIDB4NmU2ZTZlLCAuNSApO1xuICBsaWdodC5wb3NpdGlvbi5zZXQoIDAsIDAsIDEgKTtcbiAgc2NlbmUuYWRkKCBsaWdodCApO1xuXG4gIHZhciBsaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KCAweDZlNmU2ZSwgLjUgKTtcbiAgbGlnaHQucG9zaXRpb24uc2V0KCAwLCAwLCAtMSApO1xuICBzY2VuZS5hZGQoIGxpZ2h0ICk7XG5cbiAgdmFyIGxpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoIDB4NmU2ZTZlLCAuNSApO1xuICBsaWdodC5wb3NpdGlvbi5zZXQoIC0xLCAwLCAwICk7XG4gIHNjZW5lLmFkZCggbGlnaHQgKTtcbn1cblxudmFyIGljb190eXBlID0gMTtcbnZhciBpY29fc2l6ZSA9IDcwO1xuXG5mdW5jdGlvbiBpbml0R2VvbWV0cnkoKSB7XG4gIC8vIGFkZCBpY29zYWhlZHJvblxuICBnZW9tZXRyeTMgPSBuZXcgVEhSRUUuSWNvc2FoZWRyb25HZW9tZXRyeSggaWNvX3NpemUgPSBpY29fc2l6ZSAtIDAuMDEsIGljb190eXBlICk7XG4gIGdlb21ldHJ5MiA9IG5ldyBUSFJFRS5JY29zYWhlZHJvbkdlb21ldHJ5KCBpY29fc2l6ZSA9IGljb19zaXplICsgMC4wMSwgaWNvX3R5cGUgKTtcbiAgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuSWNvc2FoZWRyb25HZW9tZXRyeSggaWNvX3NpemUgPSBpY29fc2l6ZSwgaWNvX3R5cGUgKTsgXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgdmFyIGZhY2VycyA9IGdlb21ldHJ5Mi5mYWNlcztcbiAgZm9yICggdmFyIGkgPSAwOyBpIDwgZmFjZXJzLmxlbmd0aDsgaSArKyApIHtcbiAgICAgIGdlb21ldHJ5Mi5mYWNlc1tpXS5tYXRlcmlhbEluZGV4ID0gaTtcbiAgICAgIGdlb1RyaSA9IGdlb21ldHJ5Mi5mYWNlc1tpXTtcbiAgICAgIG1hdGVyaWFscy5wdXNoKG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7XG4gICAgICAgICAgLy8gb3ZlcmRyYXc6IHRydWUsXG4gICAgICAgICAgd2lyZWZyYW1lOiBmYWxzZSxcbiAgICAgICAgICBuYW1lOiAnI3RyaWFuZ2xlJyArIGksXG4gICAgICAgICAgc2hpbmluZXNzIDogICBcIjEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMFwiLFxuICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgc2hhZGluZyAgICA6ICBUSFJFRS5GbGF0U2hhZGluZ1xuXG4gICAgICB9KSk7XG4gIH1cblxuICBlbGVtZW50ID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnkyLCBtYXRlcmlhbHMpO1xuICBlbGVtZW50LnBvc2l0aW9uLnkgPSAwO1xuICBzY2VuZS5hZGQoZWxlbWVudCk7XG4gIHRhcmdldExpc3QucHVzaChlbGVtZW50KTtcblxuICBtZXNoID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoIHsgXG4gICAgY29sb3IgICAgICA6ICBuZXcgVEhSRUUuQ29sb3IoXCJyZ2IoMTAwLDEwMCwxMDApXCIpLFxuICAgIGVtaXNzaXZlICAgOiAgbmV3IFRIUkVFLkNvbG9yKFwicmdiKDEwMCwxMDAsMTAwKVwiKSxcbiAgICBzcGVjdWxhciAgIDogIG5ldyBUSFJFRS5Db2xvcihcInJnYigxMDAsMTAwLDEwMClcIiksXG4gICAgc2hpbmluZXNzIDogICBcIjEwMDAwMDAwMDAwMDAwMDAwXCIsXG4gICAgc2hhZGluZyAgICA6ICBUSFJFRS5GbGF0U2hhZGluZyxcbiAgICB3aXJlZnJhbWVMaW5ld2lkdGggOiAxMCxcbiAgICBvcGFjaXR5ICAgIDogMVxuICB9ICkpO1xuXG4gIG1lc2hlcnNUaW1lcnMgPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnkzLCBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoIHsgXG4gICAgY29sb3IgICAgICA6ICBuZXcgVEhSRUUuQ29sb3IoXCJyZ2IoMTAwLDEwMCwxMDApXCIpLFxuICAgIGVtaXNzaXZlICAgOiAgbmV3IFRIUkVFLkNvbG9yKFwicmdiKDEwMCwxMDAsMTAwKVwiKSxcbiAgICBzcGVjdWxhciAgIDogIG5ldyBUSFJFRS5Db2xvcihcInJnYigxMDAsMTAwLDEwMClcIiksXG4gICAgc2hpbmluZXNzIDogICBcIjEwMDAwMDAwMDAwMDAwMDAwXCIsXG4gICAgc2hhZGluZyAgICA6ICBUSFJFRS5GbGF0U2hhZGluZyxcbiAgICBvcGFjaXR5ICAgIDogMVxuICB9ICkpO1xuXG4gIHNjZW5lLmFkZCggbWVzaCApO1xuICBzY2VuZS5hZGQobWVzaGVyc1RpbWVycyk7XG59XG5cbnNjZW5lLnJvdGF0aW9uLnogPSAwLjU7XG5cbnZhciB0cmFja2JhbGxDb250cm9sID0gbmV3IFRIUkVFLlRyYWNrYmFsbENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XG50cmFja2JhbGxDb250cm9sLnJvdGF0ZVNwZWVkID0gMS4wOyAvLyBuZWVkIHRvIHNwZWVkIGl0IHVwIGEgbGl0dGxlXG50cmFja2JhbGxDb250cm9sLm5vUGFuID0gdHJ1ZTtcblxuZnVuY3Rpb24gdXBkYXRlKCl7XG4gc2NlbmUucm90YXRpb24ueCs9MDtcbiBzY2VuZS5yb3RhdGlvbi55Kz0wO1xufVxuXG4vLyBSZW5kZXJcbmZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdHJhY2tiYWxsQ29udHJvbC51cGRhdGUoKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gIGNhbWVyYS5sb29rQXQoIHNjZW5lLnBvc2l0aW9uICk7XG4gIGNhbWVyYS51cGRhdGVNYXRyaXhXb3JsZCgpO1xuICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gIHVwZGF0ZSgpO1xufVxuXG4vL1JVTiBUSEVTRSBUQVNLUyBPTiBIQVNIIENIQU5HRVxuaW5pdExpZ2h0aW5nKCk7XG5mdW5jdGlvbiByZW5kZXJHZW9tZXRyeSgpe1xuICBpbml0R2VvbWV0cnkoKTtcbn1cbnJlbmRlckdlb21ldHJ5KCk7XG5yZW5kZXIoKTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vQUREIEZPUiBEQVRBIDIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vL0dST1VQUyAxLy9cbnZhciBncm91cDEgPSAweDhmYTZkMjtcblxudGFzazEgPSBbXTtcbnRhc2sxLnB1c2gobWF0ZXJpYWxzWzFdKTtcbnRhc2sxLnB1c2gobWF0ZXJpYWxzWzJdKTtcbnRhc2sxLnB1c2gobWF0ZXJpYWxzWzNdKTtcbnRhc2sxLnB1c2gobWF0ZXJpYWxzWzRdKTtcbnRhc2sxLnB1c2gobWF0ZXJpYWxzWzVdKTtcbnRhc2sxLnB1c2gobWF0ZXJpYWxzWzE1XSk7XG5cbmZvcih2YXIgZz0wOyBnIDwgdGFzazEubGVuZ3RoIDsgZysrKXtcbiAgdGFzazFbZ10ub3BhY2l0eSA9IDE7XG4gIHRhc2sxW2ddLmNvbG9yLnNldEhleChncm91cDEpO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy9BREQgRk9SIERBVEEgMy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbnRhc2syID0gW107XG50YXNrMi5wdXNoKG1hdGVyaWFsc1sxOF0pO1xuXG5mb3IodmFyIGc9MDsgZyA8IHRhc2syLmxlbmd0aCA7IGcrKyl7XG4gIHRhc2syW2ddLm9wYWNpdHkgPSAxO1xuICB0YXNrMltnXS5jb2xvci5zZXRIZXgoZ3JvdXAxKTtcbn1cblxudGFzazMgPSBbXTtcbnRhc2szLnB1c2gobWF0ZXJpYWxzWzQwXSk7XG5cbmZvcih2YXIgZz0wOyBnIDwgdGFzazMubGVuZ3RoIDsgZysrKXtcbiAgdGFzazNbZ10ub3BhY2l0eSA9IDE7XG4gIHRhc2szW2ddLmNvbG9yLnNldEhleChncm91cDEpO1xufVxuXG4vL0dST1VQUyAxLy9cbnZhciBncm91cDEgPSAweDhmYTZkMjtcblxudGFzazEgPSBbXTtcbnRhc2sxLnB1c2gobWF0ZXJpYWxzWzIxXSk7XG50YXNrMS5wdXNoKG1hdGVyaWFsc1syMl0pO1xudGFzazEucHVzaChtYXRlcmlhbHNbMjNdKTtcbnRhc2sxLnB1c2gobWF0ZXJpYWxzWzIwXSk7XG50YXNrMS5wdXNoKG1hdGVyaWFsc1s3XSk7XG50YXNrMS5wdXNoKG1hdGVyaWFsc1s2XSk7XG5cbmZvcih2YXIgZz0wOyBnIDwgdGFzazEubGVuZ3RoIDsgZysrKXtcbiAgdGFzazFbZ10ub3BhY2l0eSA9IDE7XG4gIHRhc2sxW2ddLmNvbG9yLnNldEhleChncm91cDEpO1xufVxuXG50YXNrMiA9IFtdO1xudGFzazIucHVzaChtYXRlcmlhbHNbMThdKTtcblxuZm9yKHZhciBnPTA7IGcgPCB0YXNrMi5sZW5ndGggOyBnKyspe1xuICB0YXNrMltnXS5vcGFjaXR5ID0gMTtcbiAgdGFzazJbZ10uY29sb3Iuc2V0SGV4KGdyb3VwMSk7XG59XG5cbnRhc2szID0gW107XG50YXNrMy5wdXNoKG1hdGVyaWFsc1s0MF0pO1xuXG5mb3IodmFyIGc9MDsgZyA8IHRhc2szLmxlbmd0aCA7IGcrKyl7XG4gIHRhc2szW2ddLm9wYWNpdHkgPSAxO1xuICB0YXNrM1tnXS5jb2xvci5zZXRIZXgoZ3JvdXAxKTtcbn1cblxuLy9HUk9VUFMgMi8vXG52YXIgZ3JvdXAyID0gMHhlMWQ5MDE7XG5cbnRhc2s0ID0gW107XG50YXNrNC5wdXNoKG1hdGVyaWFsc1sxXSk7XG5cbmZvcih2YXIgZz0wOyBnIDwgdGFzazQubGVuZ3RoIDsgZysrKXtcbiAgdGFzazRbZ10ub3BhY2l0eSA9IDE7XG4gIHRhc2s0W2ddLmNvbG9yLnNldEhleChncm91cDIpO1xufVxuXG50YXNrNSA9IFtdO1xudGFzazUucHVzaChtYXRlcmlhbHNbMzFdKTtcblxuZm9yKHZhciBnPTA7IGcgPCB0YXNrNS5sZW5ndGggOyBnKyspe1xuICB0YXNrNVtnXS5vcGFjaXR5ID0gMTtcbiAgdGFzazVbZ10uY29sb3Iuc2V0SGV4KGdyb3VwMik7XG59XG5cbnRhc2s2ID0gW107XG50YXNrNi5wdXNoKG1hdGVyaWFsc1s0NF0pO1xuXG5mb3IodmFyIGc9MDsgZyA8IHRhc2s2Lmxlbmd0aCA7IGcrKyl7XG4gIHRhc2s2W2ddLm9wYWNpdHkgPSAxO1xuICB0YXNrNltnXS5jb2xvci5zZXRIZXgoZ3JvdXAyKTtcbn1cblxuLy9HUk9VUCAzLy9cbnZhciBncm91cDMgPSAweDgyYjI0OTtcblxudGFzazcgPSBbXTtcbnRhc2s3LnB1c2gobWF0ZXJpYWxzWzU2XSk7XG50YXNrNy5wdXNoKG1hdGVyaWFsc1s1N10pO1xudGFzazcucHVzaChtYXRlcmlhbHNbNThdKTtcbnRhc2s3LnB1c2gobWF0ZXJpYWxzWzU5XSk7XG50YXNrNy5wdXNoKG1hdGVyaWFsc1s1NV0pO1xudGFzazcucHVzaChtYXRlcmlhbHNbNTNdKTtcblxuZm9yKHZhciBnPTA7IGcgPCB0YXNrNy5sZW5ndGggOyBnKyspe1xuICB0YXNrN1tnXS5vcGFjaXR5ID0gMTtcbiAgdGFzazdbZ10uY29sb3Iuc2V0SGV4KGdyb3VwMyk7XG59XG5cbnRhc2s4ID0gW107XG50YXNrOC5wdXNoKG1hdGVyaWFsc1s2MF0pO1xudGFzazgucHVzaChtYXRlcmlhbHNbNjFdKTtcbnRhc2s4LnB1c2gobWF0ZXJpYWxzWzYzXSk7XG5cblxuZm9yKHZhciBnPTA7IGcgPCB0YXNrOC5sZW5ndGggOyBnKyspe1xuICB0YXNrOFtnXS5vcGFjaXR5ID0gMTtcbiAgdGFzazhbZ10uY29sb3Iuc2V0SGV4KGdyb3VwMyk7XG59XG5cbnRhc2s5ID0gW107XG50YXNrOS5wdXNoKG1hdGVyaWFsc1sxXSk7XG50YXNrOS5wdXNoKG1hdGVyaWFsc1syXSk7XG5cbmZvcih2YXIgZz0wOyBnIDwgdGFzazkubGVuZ3RoIDsgZysrKXtcbiAgdGFzazlbZ10ub3BhY2l0eSA9IDE7XG4gIHRhc2s5W2ddLmNvbG9yLnNldEhleChncm91cDMpO1xufVxuXG50YXNrMTAgPSBbXTtcbnRhc2sxMC5wdXNoKG1hdGVyaWFsc1s0XSk7XG50YXNrMTAucHVzaChtYXRlcmlhbHNbNV0pO1xuXG5mb3IodmFyIGc9MDsgZyA8IHRhc2sxMC5sZW5ndGggOyBnKyspe1xuICB0YXNrMTBbZ10ub3BhY2l0eSA9IDE7XG4gIHRhc2sxMFtnXS5jb2xvci5zZXRIZXgoZ3JvdXAzKTtcbn1cblxudGFzazExID0gW107XG50YXNrMTEucHVzaChtYXRlcmlhbHNbMzNdKTtcblxuZm9yKHZhciBnPTA7IGcgPCB0YXNrMTEubGVuZ3RoIDsgZysrKXtcbiAgdGFzazExW2ddLm9wYWNpdHkgPSAxO1xuICB0YXNrMTFbZ10uY29sb3Iuc2V0SGV4KGdyb3VwMyk7XG59XG5cbi8vR1JPVVAgMy8vXG52YXIgZ3JvdXA0ID0gMHhmMTVhNmI7XG5cbnRhc2sxMiA9IFtdO1xudGFzazEyLnB1c2gobWF0ZXJpYWxzWzMxXSk7XG5cbmZvcih2YXIgZz0wOyBnIDwgdGFzazEyLmxlbmd0aCA7IGcrKyl7XG4gIHRhc2sxMltnXS5vcGFjaXR5ID0gMTtcbiAgdGFzazEyW2ddLmNvbG9yLnNldEhleChncm91cDQpO1xufVxuXG50YXNrMTMgPSBbXTtcbnRhc2sxMy5wdXNoKG1hdGVyaWFsc1s0MF0pO1xuXG5mb3IodmFyIGc9MDsgZyA8IHRhc2sxMy5sZW5ndGggOyBnKyspe1xuICB0YXNrMTNbZ10ub3BhY2l0eSA9IDE7XG4gIHRhc2sxM1tnXS5jb2xvci5zZXRIZXgoZ3JvdXA0KTtcbn1cblxudGFzazE0ID0gW107XG50YXNrMTQucHVzaChtYXRlcmlhbHNbNDNdKTtcblxuZm9yKHZhciBnPTA7IGcgPCB0YXNrMTQubGVuZ3RoIDsgZysrKXtcbiAgdGFzazE0W2ddLm9wYWNpdHkgPSAxO1xuICB0YXNrMTRbZ10uY29sb3Iuc2V0SGV4KGdyb3VwNCk7XG59XG4iXX0=
