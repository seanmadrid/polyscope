(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//GLOBAL JQUERY

//^^^^^^^^^GLOBAL

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

var ico_type = 2;
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
var group11Close = 0x777777;

//GROUPS 1//
var group1 = 0x8fa6d2;

task1 = [];
task1.push(materials[10]);
task1.push(materials[11]);
task1.push(materials[12]);
task1.push(materials[7]);
task1.push(materials[8]);
task1.push(materials[9]);

for(var g=0; g < task1.length ; g++){
  task1[g].opacity = 1;
  task1[g].color.setHex(group11Close);
}

task2 = [];
task2.push(materials[50]);

for(var g=0; g < task2.length ; g++){
  task2[g].opacity = 1;
  task2[g].color.setHex(group1);
}

task3 = [];
task3.push(materials[99]);

for(var g=0; g < task3.length ; g++){
  task3[g].opacity = 1;
  task3[g].color.setHex(group1);
}

//GROUPS 2//
var group2 = 0xe1d901;

task4 = [];
task4.push(materials[91]);

for(var g=0; g < task4.length ; g++){
  task4[g].opacity = 1;
  task4[g].color.setHex(group2);
}

task5 = [];
task5.push(materials[46]);

for(var g=0; g < task5.length ; g++){
  task5[g].opacity = 1;
  task5[g].color.setHex(group2);
}

task6 = [];
task6.push(materials[120]);

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
  task7[g].color.setHex(group11Close);
}

task8 = [];
task8.push(materials[74]);
task8.push(materials[73]);
task8.push(materials[75]);


for(var g=0; g < task8.length ; g++){
  task8[g].opacity = 1;
  task8[g].color.setHex(group11Close);
}

task9 = [];
task9.push(materials[1]);
task9.push(materials[2]);

for(var g=0; g < task9.length ; g++){
  task9[g].opacity = 1;
  task9[g].color.setHex(group11Close);
}

task10 = [];
task10.push(materials[4]);
task10.push(materials[5]);

for(var g=0; g < task10.length ; g++){
  task10[g].opacity = 1;
  task10[g].color.setHex(group11Close);
}

task11 = [];
task11.push(materials[33]);

for(var g=0; g < task11.length ; g++){
  task11[g].opacity = 1;
  task11[g].color.setHex(group3);
}

//GROUP 4//
var group4 = group11Close;

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
///////////////////////////////////////////////////////////////
/////////////////////ADD FOR DATA 3///////////////////////

var group5 = 0x1155cc;

task15 = [];
task15.push(materials[100]);

for(var g=0; g < task15.length ; g++){
  task15[g].opacity = 1;
  task15[g].color.setHex(group5);
}

task16 = [];
task16.push(materials[101]);

for(var g=0; g < task16.length ; g++){
  task16[g].opacity = 1;
  task16[g].color.setHex(group11Close);
}

task17 = [];
task17.push(materials[103]);

for(var g=0; g < task17.length ; g++){
  task17[g].opacity = 1;
  task17[g].color.setHex(group5);
}

////////////////////
var group6 = 0xeeae00;

task18 = [];
task18.push(materials[124]);

for(var g=0; g < task18.length ; g++){
  task18[g].opacity = 1;
  task18[g].color.setHex(group11Close);
}


// ///////////////////
var group7 = 0xb4e89d;

task19 = [];
task19.push(materials[104]);
task19.push(materials[110]);
task19.push(materials[108]);
task19.push(materials[109]);

for(var g=0; g < task19.length ; g++){
  task19[g].opacity = 1;
  task19[g].color.setHex(group11Close);
}

task20 = [];
task20.push(materials[159]);
task20.push(materials[156]);
task20.push(materials[157]);
task20.push(materials[158]);

for(var g=0; g < task20.length ; g++){
  task20[g].opacity = 1;
  task20[g].color.setHex(group11Close);
}

task21 = [];
task21.push(materials[172]);
task21.push(materials[167]);
task21.push(materials[168]);
task21.push(materials[169]);
task21.push(materials[170]);
task21.push(materials[171]);

for(var g=0; g < task21.length ; g++){
  task21[g].opacity = 1;
  task21[g].color.setHex(group11Close);
}

task22 = [];
task22.push(materials[138]);
task22.push(materials[139]);
task22.push(materials[140]);
task22.push(materials[141]);
task22.push(materials[142]);
task22.push(materials[143]);
task22.push(materials[137]);
task22.push(materials[136]);

for(var g=0; g < task22.length ; g++){
  task22[g].opacity = 1;
  task22[g].color.setHex(group11Close);
}

// //////////////////////////
var group8 = 0xb52d3a;

task23 = [];
task23.push(materials[112]);

for(var g=0; g < task23.length ; g++){
  task23[g].opacity = 1;
  task23[g].color.setHex(group8);
}

task24 = [];
task24.push(materials[114]);

for(var g=0; g < task24.length ; g++){
  task24[g].opacity = 1;
  task24[g].color.setHex(group8);
}

task25 = [];
task25.push(materials[118]);

for(var g=0; g < task25.length ; g++){
  task25[g].opacity = 1;
  task25[g].color.setHex(group8);
}

// ///////////////////////////

var group9 = 0x00939b;

task26 = [];
task26.push(materials[27]);

for(var g=0; g < task26.length ; g++){
  task26[g].opacity = 1;
  task26[g].color.setHex(group9);
}

task27 = [];
task27.push(materials[17]);

for(var g=0; g < task27.length ; g++){
  task27[g].opacity = 1;
  task27[g].color.setHex(group9);
}

task28 = [];
task28.push(materials[133]);

for(var g=0; g < task28.length ; g++){
  task28[g].opacity = 1;
  task28[g].color.setHex(group9);
}

// ////////////////////////////

var group10 = 0xbf8304;

task29 = [];
task29.push(materials[81]);
task29.push(materials[82]);

for(var g=0; g < task29.length ; g++){
  task29[g].opacity = 1;
  task29[g].color.setHex(group10);
}

task30 = [];
task30.push(materials[151]);

for(var g=0; g < task30.length ; g++){
  task30[g].opacity = 1;
  task30[g].color.setHex(group10);
}

task31 = [];
task31.push(materials[148]);
task31.push(materials[149]);
task31.push(materials[150]);

for(var g=0; g < task31.length ; g++){
  task31[g].opacity = 1;
  task31[g].color.setHex(group11Close);
}

// ////////////////////////////

var group11 = 0xc9daf8;
var group11Close = 0x777777;

task32 = [];
task32.push(materials[116]);

for(var g=0; g < task32.length ; g++){
  task32[g].opacity = 1;
  task32[g].color.setHex(group11);
}

task33 = [];
task33.push(materials[88]);

for(var g=0; g < task33.length ; g++){
  task33[g].opacity = 1;
  task33[g].color.setHex(group11);
}

task34 = [];
task34.push(materials[160]);
task34.push(materials[161]);
task34.push(materials[162]);
task34.push(materials[176]);
task34.push(materials[177]);
task34.push(materials[178]);
task34.push(materials[179]);
task34.push(materials[180]);

for(var g=0; g < task34.length ; g++){
  task34[g].opacity = 1;
  task34[g].color.setHex(group11Close);
}

// ////////////////////////////
var group12 = 0xeea0a5;

task35 = [];
task35.push(materials[116]);
//task36
task35.push(materials[129]);
//task37
task35.push(materials[132]);
//task38
task35.push(materials[144]);
//task39
task35.push(materials[83]);
//task40
task35.push(materials[200]);

for(var g=0; g < task35.length ; g++){
  task35[g].opacity = 1;
  task35[g].color.setHex(group12);
}

// ////////////////////////////
var group13 = 0x53c9d6;

task41 = [];
task41.push(materials[220]);
//TASK42
task41.push(materials[240]);
//TASK43
task41.push(materials[250]);

for(var g=0; g < task41.length ; g++){
  task41[g].opacity = 1;
  task41[g].color.setHex(group13);
}

// ////////////////////////////
var group14 = 0xF97906;

task44 = [];
task44.push(materials[202]);
task44.push(materials[203]);
task44.push(materials[204]);
task44.push(materials[205]);
task44.push(materials[206]);
task44.push(materials[207]);

for(var g=0; g < task44.length ; g++){
  task44[g].opacity = 1;
  task44[g].color.setHex(group11Close);
}

task45 = [];
task45.push(materials[216]);
task45.push(materials[215]);

for(var g=0; g < task45.length ; g++){
  task45[g].opacity = 1;
  task45[g].color.setHex(group14);
}

task46 = [];
task46.push(materials[313]);
task46.push(materials[314]);
task46.push(materials[315]);

for(var g=0; g < task46.length ; g++){
  task46[g].opacity = 1;
  task46[g].color.setHex(group11Close);
}

//////////////////////////////
var group15 = 0xe3eba4;

task47 = [];
task47.push(materials[309]);
//TASK48
task47.push(materials[311]);
//TASK49
task47.push(materials[293]);

for(var g=0; g < task47.length ; g++){
  task47[g].opacity = 1;
  task47[g].color.setHex(group11Close);
}

// task13 = [];
// task13.push(materials[117]);

// for(var g=0; g < task13.length ; g++){
//   task13[g].opacity = 1;
//   task13[g].color.setHex(group15);
// }

// task14 = [];
// task14.push(materials[118]);

// for(var g=0; g < task14.length ; g++){
//   task14[g].opacity = 1;
//   task14[g].color.setHex(group15);
// }
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvcG9seXNjb3BlX3Byb3RvdHlwZS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9wb2x5c2NvcGVfcHJvdG90eXBlL3NyYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy9HTE9CQUwgSlFVRVJZXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCQpeyBcbiAgJCgnYS5zaW5nbGUtcHJvamVjdCcpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAkKHRoaXMpLmhlaWdodCgkKHRoaXMpLndpZHRoKCkpO1xuICB9KTtcblxuICAkKCcuc2luZ2xlLXByb2plY3QnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgJCh0aGlzKS5oZWlnaHQoJCh0aGlzKS53aWR0aCgpKTtcbiAgfSk7XG5cbiAgJCgnI3NhdmVfcHJvamVjdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgJCgnI3NiJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJyNzcGhlcmUnKS5yZW1vdmVDbGFzcygnY29sLTknKS5hZGRDbGFzcygnY29sLTEyJyk7XG4gICAgJCgnI2FkZF90YXNrJykuYWRkQ2xhc3MoJ2FkZGFibGUnKTtcbiAgICAkKCcuc3BoZXJlLXRvZ2dsZScpLnJlbW92ZUNsYXNzKCdwYWQtaXQnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuXG4gICQoJyNhZGRfdGFzaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgJCgnI3NiJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJyNzcGhlcmUnKS5hZGRDbGFzcygnY29sLTknKS5yZW1vdmVDbGFzcygnY29sLTEyJyk7XG4gICAgJCgnI2FkZF90YXNrJykuYWRkQ2xhc3MoJ2FkZGFibGUnKTtcbiAgICAkKCcjc2InKS5yZW1vdmVDbGFzcygnc2ItcHJvamVjdCcpLmFkZENsYXNzKCdzYi10YXNrJyk7XG4gICAgJCgnLnNwaGVyZS10b2dnbGUnKS5hZGRDbGFzcygncGFkLWl0Jyk7XG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWRkYWJsZScpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG5cbiAgLy90cmFja2JhclxuICBuZXdWYWx1ZSA9IDE7XG4gICQoXCIjaG91cnNfcmFuZ2VcIikuYXR0cigndmFsdWUnLCBuZXdWYWx1ZSk7XG5cbiAgJChcIiNob3Vyc19yYW5nZVwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpe1xuICAgICQodGhpcykuYXR0cigndmFsdWUnKTtcbiAgICAkKFwiLmhvdXJzLXJhbmdlXCIpLnRleHQobmV3VmFsdWUpO1xuICB9KTtcbiAgZnVuY3Rpb24gc2hvd1ZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgJChcIi5ob3Vycy1yYW5nZVwiKS5pbm5lckhUTUw9bmV3VmFsdWU7XG4gIH1cblxuXG4gIHZhciBjbGlja2VyID0gMDtcblxuICB2YXIgY291bnQgPSAkKCcjc3BoZXJlIC5wb2x5LXZpZGVvJykubGVuZ3RoIC0gMTtcbiAgY29uc29sZS5sb2coY291bnQpO1xuICAkKCcudG9nZ2xlLWFycm93LWxlZnQubm8tbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7ICAgIFxuICAgIGlmKGNsaWNrZXIgPiAwKXtcbiAgICAgIGNsaWNrZXIgPSBjbGlja2VyIC0gMTsgICAgXG4gICAgfVxuICAgIHZhciB0aGVfaWQgPSBcIiNkYXRhX1wiICsgY2xpY2tlcjtcbiAgICAkKCcjc3BoZXJlID4gLnBvbHktdmlkZW8uc2hvdycpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgJCh0aGVfaWQpLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB0aGVfaWQ7XG4gICAgY29uc29sZS5sb2codGhlX2lkKTtcbiAgfSk7IFxuXG4gICQoJy50b2dnbGUtYXJyb3ctcmlnaHQubm8tbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgaWYoY2xpY2tlciA8IGNvdW50KXtcbiAgICAgIGNsaWNrZXIgPSBjbGlja2VyICsgMTsgICAgXG4gICAgfVxuICAgIHZhciB0aGVfaWQgPSBcIiNcIiArIFwiZGF0YV9cIiArIGNsaWNrZXI7XG4gICAgJCgnI3NwaGVyZSA+IC5wb2x5LXZpZGVvLnNob3cnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICQodGhlX2lkKS5hZGRDbGFzcygnc2hvdycpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdGhlX2lkO1xuICAgIGNvbnNvbGUubG9nKHRoZV9pZCk7XG4gIH0pOyBcblxuICB2YXIgbW91c2VYLCBtb3VzZVk7XG4gICQoJyNzcGhlcmUnKS5kYmxjbGljayhmdW5jdGlvbihlKXtcbiAgICBtb3VzZVggPSBlLnBhZ2VYICsgMjg7XG4gICAgbW91c2VZID0gZS5wYWdlWSAtIDE4O1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAkKFwiI3BvcHVwXCIpLnJlbW92ZUNsYXNzKFwiYXBwZWFyXCIpO1xuICAgIH0pO1xuXG4gICAgJChcIiNwb3B1cFwiKS5yZW1vdmVDbGFzcyhcImFwcGVhclwiKS5jc3Moe1xuICAgICAgICBcImxlZnRcIjogbW91c2VYICsgJ3B4JyxcbiAgICAgICAgXCJ0b3BcIjogbW91c2VZICsgJ3B4J1xuICAgIH0pO1xuXG4gICAgaWYoJChcIiNwb3B1cFwiKS5oYXNDbGFzcygnYXBwZWFyJykpe1xuXG4gICAgICAkKFwiI3BvcHVwXCIpLnJlbW92ZUNsYXNzKCdhcHBlYXInKTtcbiAgICAgICQoXCIjcG9wdXBcIikuZGVsYXkoNTAwKS5hZGRDbGFzcygnYXBwZWFyJyk7XG5cbiAgICB9ZWxzZXtcbiAgICAgICQoXCIjcG9wdXBcIikuYWRkQ2xhc3MoJ2FwcGVhcicpO1xuICAgIH0gXG4gIH0pO1xuXG4gICQoJy5rZXknKS5tb3VzZWVudGVyKGZ1bmN0aW9uKCl7XG4gICAgdmFyIGtleV9ub3RlID0gJCh0aGlzKS5kYXRhKCdob3ZlcicpO1xuICAgICQodGhpcykuYXBwZW5kKFwiPHNwYW4gY2xhc3M9J2tleS1ob3Zlcic+XCIgKyBrZXlfbm90ZSArIFwiPC9zcGFuPlwiKTtcbiAgICAkKCcua2V5LWhvdmVyJykuZmFkZUluKCk7XG4gIH0pLm1vdXNlb3V0KGZ1bmN0aW9uKCl7XG4gICAgJCgnLmtleS1ob3ZlcicpLmZhZGVPdXQoKTtcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcua2V5LWhvdmVyJykucmVtb3ZlKCk7XG4gIH0pO1xuICAkKFwiI2hvdXJzMmNvbXBsZXRlXCIpLnRleHQoJzEnKTtcbiAgJCgnI2Rpc2NvdW50X2NyZWRpdHMnKS5jaGFuZ2UoIGZ1bmN0aW9uKCkgeyBcbiAgICAgIHZhciByYW5nZVZhbCA9ICQodGhpcykudmFsKCk7XG4gICAgICAkKFwiI2hvdXJzMmNvbXBsZXRlXCIpLnRleHQocmFuZ2VWYWwpO1xuICB9KTtcbn0pO1xuXG52YXIgY2FudmFzV2lkdGggPSAkKFwiI3NwaGVyZVwiKS53aWR0aCgpO1xudmFyIGNhbnZhc0hlaWdodCA9ICQoXCIjc3BoZXJlXCIpLmhlaWdodCgpO1xuXG4vL15eXl5eXl5eXkdMT0JBTFxuXG4vLy8vLy8vLy8vLy8vXG4vL0lDT1NQSEVSRS8vXG4vLy8vLy8vLy8vLy8vXG52YXIgdGhlX2NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpO1xudmFyIHN0YXRzLCBlbGVtZW50OyBcbnZhciBtb3VzZSA9IG5ldyBUSFJFRS5WZWN0b3IyKCksIElOVEVSU0VDVEVEO1xudmFyIHJhZGl1cyA9IDEwMCwgdGhldGEgPSAwO1xudmFyIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICBhbnRpYWxpYXM6IHRydWUsXG4gIGFscGhhOiB0cnVlXG59KTtcbnZhciByYXljYXN0ZXIgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKCk7XG52YXIgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDgwLDEsMC4xLDEwMDAwKTtcbnZhciBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xudmFyIHRhcmdldExpc3QgPSBbXTtcbnZhciBtYXRlcmlhbHMgPSBbXTtcblxudmFyIGdyb3VwcyA9IFtdO1xuXG5zY2VuZS5hZGQoY2FtZXJhKTtcbnJlbmRlcmVyLnNldFNpemUoY2FudmFzV2lkdGgsIGNhbnZhc1dpZHRoKTtcblxudGhlX2NvbnRhaW5lci5hcHBlbmQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbi8vIENhbWVyYVxuY2FtZXJhLnBvc2l0aW9uLnogPSAyMDA7XG5cbnZhciBMMSA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KCApO1xuTDEucG9zaXRpb24ueiA9IDIwMDA7XG5MMS5wb3NpdGlvbi55ID0gMTg1MDtcbkwxLnBvc2l0aW9uLnggPSAxMDAwO1xuTDEucG93ZXIgPSA0O1xuc2NlbmUuYWRkKEwxKTtcbmNhbWVyYS5hZGQoTDEpO1xuXG52YXIgTDIgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggKTtcbkwyLnBvc2l0aW9uLnogPSAyMDAwO1xuTDIucG9zaXRpb24ueSA9IC0xODUwO1xuTDIucG9zaXRpb24ueCA9IC0xMDAwO1xuTDIucG93ZXIgPSA0O1xuc2NlbmUuYWRkKEwyKTtcbmNhbWVyYS5hZGQoTDIpO1xuXG52YXIgTDMgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggKTtcbkwzLnBvc2l0aW9uLnogPSAyMDAwO1xuTDMucG9zaXRpb24ueSA9IC0xMDAwO1xuTDMucG9zaXRpb24ueCA9IC0xODUwO1xuTDMucG93ZXIgPSA0O1xuc2NlbmUuYWRkKEwzKTtcbmNhbWVyYS5hZGQoTDMpO1xuXG52YXIgTDQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggKTtcbkw0LnBvc2l0aW9uLnogPSAyMDAwO1xuTDQucG9zaXRpb24ueSA9IDEwMDA7XG5MNC5wb3NpdGlvbi54ID0gMTg1MDtcbkw0LnBvd2VyID0gNDtcbnNjZW5lLmFkZChMNCk7XG5jYW1lcmEuYWRkKEw0KTtcblxudmFyIEw0ID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoICk7XG5MNC5wb3NpdGlvbi56ID0gLTIwMDA7XG5MNC5wb3NpdGlvbi55ID0gMDtcbkw0LnBvc2l0aW9uLnggPSA3MDA7XG5MNC5wb3dlciA9IDQ7XG5zY2VuZS5hZGQoTDQpO1xuY2FtZXJhLmFkZChMNCk7XG5cbmZ1bmN0aW9uIGluaXRMaWdodGluZygpIHtcbiAgLy8gc28gbWFueSBsaWdodHNcbiAgdmFyIGxpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoIDB4NmU2ZTZlLCAuNSApO1xuICBsaWdodC5wb3NpdGlvbi5zZXQoIDAsIDEsIDAgKTtcbiAgc2NlbmUuYWRkKCBsaWdodCApO1xuXG4gIHZhciBsaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KCAweDZlNmU2ZSwgLjUgKTtcbiAgbGlnaHQucG9zaXRpb24uc2V0KCAwLCAtMSwgMCApO1xuICBzY2VuZS5hZGQoIGxpZ2h0ICk7XG5cbiAgdmFyIGxpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoIDB4NmU2ZTZlLCAuNSApO1xuICBsaWdodC5wb3NpdGlvbi5zZXQoIDEsIDAsIDAgKTtcbiAgc2NlbmUuYWRkKCBsaWdodCApO1xuXG4gIHZhciBsaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KCAweDZlNmU2ZSwgLjUgKTtcbiAgbGlnaHQucG9zaXRpb24uc2V0KCAwLCAwLCAxICk7XG4gIHNjZW5lLmFkZCggbGlnaHQgKTtcblxuICB2YXIgbGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCggMHg2ZTZlNmUsIC41ICk7XG4gIGxpZ2h0LnBvc2l0aW9uLnNldCggMCwgMCwgLTEgKTtcbiAgc2NlbmUuYWRkKCBsaWdodCApO1xuXG4gIHZhciBsaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KCAweDZlNmU2ZSwgLjUgKTtcbiAgbGlnaHQucG9zaXRpb24uc2V0KCAtMSwgMCwgMCApO1xuICBzY2VuZS5hZGQoIGxpZ2h0ICk7XG59XG5cbnZhciBpY29fdHlwZSA9IDI7XG52YXIgaWNvX3NpemUgPSA3MDtcblxuZnVuY3Rpb24gaW5pdEdlb21ldHJ5KCkge1xuICAvLyBhZGQgaWNvc2FoZWRyb25cbiAgZ2VvbWV0cnkzID0gbmV3IFRIUkVFLkljb3NhaGVkcm9uR2VvbWV0cnkoIGljb19zaXplID0gaWNvX3NpemUgLSAwLjAxLCBpY29fdHlwZSApO1xuICBnZW9tZXRyeTIgPSBuZXcgVEhSRUUuSWNvc2FoZWRyb25HZW9tZXRyeSggaWNvX3NpemUgPSBpY29fc2l6ZSArIDAuMDEsIGljb190eXBlICk7XG4gIGdlb21ldHJ5ID0gbmV3IFRIUkVFLkljb3NhaGVkcm9uR2VvbWV0cnkoIGljb19zaXplID0gaWNvX3NpemUsIGljb190eXBlICk7IFxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gIHZhciBmYWNlcnMgPSBnZW9tZXRyeTIuZmFjZXM7XG4gIGZvciAoIHZhciBpID0gMDsgaSA8IGZhY2Vycy5sZW5ndGg7IGkgKysgKSB7XG4gICAgICBnZW9tZXRyeTIuZmFjZXNbaV0ubWF0ZXJpYWxJbmRleCA9IGk7XG4gICAgICBnZW9UcmkgPSBnZW9tZXRyeTIuZmFjZXNbaV07XG4gICAgICBtYXRlcmlhbHMucHVzaChuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe1xuICAgICAgICAgIC8vIG92ZXJkcmF3OiB0cnVlLFxuICAgICAgICAgIHdpcmVmcmFtZTogZmFsc2UsXG4gICAgICAgICAgbmFtZTogJyN0cmlhbmdsZScgKyBpLFxuICAgICAgICAgIHNoaW5pbmVzcyA6ICAgXCIxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBcIixcbiAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIHNoYWRpbmcgICAgOiAgVEhSRUUuRmxhdFNoYWRpbmdcblxuICAgICAgfSkpO1xuICB9XG4gIGNvbnNvbGUubG9nKGZhY2Vycyk7XG5cbiAgZWxlbWVudCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5MiwgbWF0ZXJpYWxzKTtcbiAgZWxlbWVudC5wb3NpdGlvbi55ID0gMDtcbiAgc2NlbmUuYWRkKGVsZW1lbnQpO1xuICB0YXJnZXRMaXN0LnB1c2goZWxlbWVudCk7XG5cbiAgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKCBnZW9tZXRyeSwgbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKCB7IFxuICAgIGNvbG9yICAgICAgOiAgbmV3IFRIUkVFLkNvbG9yKFwicmdiKDEwMCwxMDAsMTAwKVwiKSxcbiAgICBlbWlzc2l2ZSAgIDogIG5ldyBUSFJFRS5Db2xvcihcInJnYigxMDAsMTAwLDEwMClcIiksXG4gICAgc3BlY3VsYXIgICA6ICBuZXcgVEhSRUUuQ29sb3IoXCJyZ2IoMTAwLDEwMCwxMDApXCIpLFxuICAgIHNoaW5pbmVzcyA6ICAgXCIxMDAwMDAwMDAwMDAwMDAwMFwiLFxuICAgIHNoYWRpbmcgICAgOiAgVEhSRUUuRmxhdFNoYWRpbmcsXG4gICAgd2lyZWZyYW1lTGluZXdpZHRoIDogMTAsXG4gICAgb3BhY2l0eSAgICA6IDFcbiAgfSApKTtcblxuICBtZXNoZXJzVGltZXJzID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5MywgbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKCB7IFxuICAgIGNvbG9yICAgICAgOiAgbmV3IFRIUkVFLkNvbG9yKFwicmdiKDEwMCwxMDAsMTAwKVwiKSxcbiAgICBlbWlzc2l2ZSAgIDogIG5ldyBUSFJFRS5Db2xvcihcInJnYigxMDAsMTAwLDEwMClcIiksXG4gICAgc3BlY3VsYXIgICA6ICBuZXcgVEhSRUUuQ29sb3IoXCJyZ2IoMTAwLDEwMCwxMDApXCIpLFxuICAgIHNoaW5pbmVzcyA6ICAgXCIxMDAwMDAwMDAwMDAwMDAwMFwiLFxuICAgIHNoYWRpbmcgICAgOiAgVEhSRUUuRmxhdFNoYWRpbmcsXG4gICAgb3BhY2l0eSAgICA6IDFcbiAgfSApKTtcblxuICBzY2VuZS5hZGQoIG1lc2ggKTtcbiAgc2NlbmUuYWRkKG1lc2hlcnNUaW1lcnMpO1xufVxuXG5zY2VuZS5yb3RhdGlvbi56ID0gMC41O1xuXG52YXIgdHJhY2tiYWxsQ29udHJvbCA9IG5ldyBUSFJFRS5UcmFja2JhbGxDb250cm9scyhjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xudHJhY2tiYWxsQ29udHJvbC5yb3RhdGVTcGVlZCA9IDEuMDsgLy8gbmVlZCB0byBzcGVlZCBpdCB1cCBhIGxpdHRsZVxudHJhY2tiYWxsQ29udHJvbC5ub1BhbiA9IHRydWU7XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpe1xuIHNjZW5lLnJvdGF0aW9uLngrPTA7XG4gc2NlbmUucm90YXRpb24ueSs9MDtcbn1cblxuLy8gUmVuZGVyXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gIHRyYWNrYmFsbENvbnRyb2wudXBkYXRlKCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICBjYW1lcmEubG9va0F0KCBzY2VuZS5wb3NpdGlvbiApO1xuICBjYW1lcmEudXBkYXRlTWF0cml4V29ybGQoKTtcbiAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICB1cGRhdGUoKTtcbn1cblxuLy9SVU4gVEhFU0UgVEFTS1MgT04gSEFTSCBDSEFOR0VcbmluaXRMaWdodGluZygpO1xuZnVuY3Rpb24gcmVuZGVyR2VvbWV0cnkoKXtcbiAgaW5pdEdlb21ldHJ5KCk7XG59XG5yZW5kZXJHZW9tZXRyeSgpO1xucmVuZGVyKCk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vL0FERCBGT1IgREFUQSAyLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4vL0dST1VQUyAxLy9cbnZhciBncm91cDEgPSAweDhmYTZkMjtcblxudGFzazEgPSBbXTtcbnRhc2sxLnB1c2gobWF0ZXJpYWxzWzEwXSk7XG50YXNrMS5wdXNoKG1hdGVyaWFsc1sxMV0pO1xudGFzazEucHVzaChtYXRlcmlhbHNbMTJdKTtcbnRhc2sxLnB1c2gobWF0ZXJpYWxzWzddKTtcbnRhc2sxLnB1c2gobWF0ZXJpYWxzWzhdKTtcbnRhc2sxLnB1c2gobWF0ZXJpYWxzWzldKTtcblxuZm9yKHZhciBnPTA7IGcgPCB0YXNrMS5sZW5ndGggOyBnKyspe1xuICB0YXNrMVtnXS5vcGFjaXR5ID0gMTtcbiAgdGFzazFbZ10uY29sb3Iuc2V0SGV4KGdyb3VwMSk7XG59XG5cbnRhc2syID0gW107XG50YXNrMi5wdXNoKG1hdGVyaWFsc1s1MF0pO1xuXG5mb3IodmFyIGc9MDsgZyA8IHRhc2syLmxlbmd0aCA7IGcrKyl7XG4gIHRhc2syW2ddLm9wYWNpdHkgPSAxO1xuICB0YXNrMltnXS5jb2xvci5zZXRIZXgoZ3JvdXAxKTtcbn1cblxudGFzazMgPSBbXTtcbnRhc2szLnB1c2gobWF0ZXJpYWxzWzk5XSk7XG5cbmZvcih2YXIgZz0wOyBnIDwgdGFzazMubGVuZ3RoIDsgZysrKXtcbiAgdGFzazNbZ10ub3BhY2l0eSA9IDE7XG4gIHRhc2szW2ddLmNvbG9yLnNldEhleChncm91cDEpO1xufVxuXG4vL0dST1VQUyAyLy9cbnZhciBncm91cDIgPSAweGUxZDkwMTtcblxudGFzazQgPSBbXTtcbnRhc2s0LnB1c2gobWF0ZXJpYWxzWzkxXSk7XG5cbmZvcih2YXIgZz0wOyBnIDwgdGFzazQubGVuZ3RoIDsgZysrKXtcbiAgdGFzazRbZ10ub3BhY2l0eSA9IDE7XG4gIHRhc2s0W2ddLmNvbG9yLnNldEhleChncm91cDIpO1xufVxuXG50YXNrNSA9IFtdO1xudGFzazUucHVzaChtYXRlcmlhbHNbNDZdKTtcblxuZm9yKHZhciBnPTA7IGcgPCB0YXNrNS5sZW5ndGggOyBnKyspe1xuICB0YXNrNVtnXS5vcGFjaXR5ID0gMTtcbiAgdGFzazVbZ10uY29sb3Iuc2V0SGV4KGdyb3VwMik7XG59XG5cbnRhc2s2ID0gW107XG50YXNrNi5wdXNoKG1hdGVyaWFsc1sxMjBdKTtcblxuZm9yKHZhciBnPTA7IGcgPCB0YXNrNi5sZW5ndGggOyBnKyspe1xuICB0YXNrNltnXS5vcGFjaXR5ID0gMTtcbiAgdGFzazZbZ10uY29sb3Iuc2V0SGV4KGdyb3VwMik7XG59XG5cbi8vR1JPVVAgMy8vXG52YXIgZ3JvdXAzID0gMHg4MmIyNDk7XG5cbnRhc2s3ID0gW107XG50YXNrNy5wdXNoKG1hdGVyaWFsc1s1Nl0pO1xudGFzazcucHVzaChtYXRlcmlhbHNbNTddKTtcbnRhc2s3LnB1c2gobWF0ZXJpYWxzWzU4XSk7XG50YXNrNy5wdXNoKG1hdGVyaWFsc1s1OV0pO1xudGFzazcucHVzaChtYXRlcmlhbHNbNTVdKTtcbnRhc2s3LnB1c2gobWF0ZXJpYWxzWzUzXSk7XG5cbmZvcih2YXIgZz0wOyBnIDwgdGFzazcubGVuZ3RoIDsgZysrKXtcbiAgdGFzazdbZ10ub3BhY2l0eSA9IDE7XG4gIHRhc2s3W2ddLmNvbG9yLnNldEhleChncm91cDMpO1xufVxuXG50YXNrOCA9IFtdO1xudGFzazgucHVzaChtYXRlcmlhbHNbNzRdKTtcbnRhc2s4LnB1c2gobWF0ZXJpYWxzWzczXSk7XG50YXNrOC5wdXNoKG1hdGVyaWFsc1s3NV0pO1xuXG5cbmZvcih2YXIgZz0wOyBnIDwgdGFzazgubGVuZ3RoIDsgZysrKXtcbiAgdGFzazhbZ10ub3BhY2l0eSA9IDE7XG4gIHRhc2s4W2ddLmNvbG9yLnNldEhleChncm91cDMpO1xufVxuXG50YXNrOSA9IFtdO1xudGFzazkucHVzaChtYXRlcmlhbHNbMV0pO1xudGFzazkucHVzaChtYXRlcmlhbHNbMl0pO1xuXG5mb3IodmFyIGc9MDsgZyA8IHRhc2s5Lmxlbmd0aCA7IGcrKyl7XG4gIHRhc2s5W2ddLm9wYWNpdHkgPSAxO1xuICB0YXNrOVtnXS5jb2xvci5zZXRIZXgoZ3JvdXAzKTtcbn1cblxudGFzazEwID0gW107XG50YXNrMTAucHVzaChtYXRlcmlhbHNbNF0pO1xudGFzazEwLnB1c2gobWF0ZXJpYWxzWzVdKTtcblxuZm9yKHZhciBnPTA7IGcgPCB0YXNrMTAubGVuZ3RoIDsgZysrKXtcbiAgdGFzazEwW2ddLm9wYWNpdHkgPSAxO1xuICB0YXNrMTBbZ10uY29sb3Iuc2V0SGV4KGdyb3VwMyk7XG59XG5cbnRhc2sxMSA9IFtdO1xudGFzazExLnB1c2gobWF0ZXJpYWxzWzMzXSk7XG5cbmZvcih2YXIgZz0wOyBnIDwgdGFzazExLmxlbmd0aCA7IGcrKyl7XG4gIHRhc2sxMVtnXS5vcGFjaXR5ID0gMTtcbiAgdGFzazExW2ddLmNvbG9yLnNldEhleChncm91cDMpO1xufVxuXG4vL0dST1VQIDQvL1xudmFyIGdyb3VwNCA9IDB4ZjE1YTZiO1xuXG50YXNrMTIgPSBbXTtcbnRhc2sxMi5wdXNoKG1hdGVyaWFsc1szMV0pO1xuXG5mb3IodmFyIGc9MDsgZyA8IHRhc2sxMi5sZW5ndGggOyBnKyspe1xuICB0YXNrMTJbZ10ub3BhY2l0eSA9IDE7XG4gIHRhc2sxMltnXS5jb2xvci5zZXRIZXgoZ3JvdXA0KTtcbn1cblxudGFzazEzID0gW107XG50YXNrMTMucHVzaChtYXRlcmlhbHNbNDBdKTtcblxuZm9yKHZhciBnPTA7IGcgPCB0YXNrMTMubGVuZ3RoIDsgZysrKXtcbiAgdGFzazEzW2ddLm9wYWNpdHkgPSAxO1xuICB0YXNrMTNbZ10uY29sb3Iuc2V0SGV4KGdyb3VwNCk7XG59XG5cbnRhc2sxNCA9IFtdO1xudGFzazE0LnB1c2gobWF0ZXJpYWxzWzQzXSk7XG5cbmZvcih2YXIgZz0wOyBnIDwgdGFzazE0Lmxlbmd0aCA7IGcrKyl7XG4gIHRhc2sxNFtnXS5vcGFjaXR5ID0gMTtcbiAgdGFzazE0W2ddLmNvbG9yLnNldEhleChncm91cDQpO1xufVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy9BREQgRk9SIERBVEEgMy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbnZhciBncm91cDUgPSAweDExNTVjYztcblxudGFzazE1ID0gW107XG50YXNrMTUucHVzaChtYXRlcmlhbHNbMTAwXSk7XG5cbmZvcih2YXIgZz0wOyBnIDwgdGFzazE1Lmxlbmd0aCA7IGcrKyl7XG4gIHRhc2sxNVtnXS5vcGFjaXR5ID0gMTtcbiAgdGFzazE1W2ddLmNvbG9yLnNldEhleChncm91cDUpO1xufVxuXG50YXNrMTYgPSBbXTtcbnRhc2sxNi5wdXNoKG1hdGVyaWFsc1sxMDFdKTtcblxuZm9yKHZhciBnPTA7IGcgPCB0YXNrMTYubGVuZ3RoIDsgZysrKXtcbiAgdGFzazE2W2ddLm9wYWNpdHkgPSAxO1xuICB0YXNrMTZbZ10uY29sb3Iuc2V0SGV4KGdyb3VwNSk7XG59XG5cbnRhc2sxNyA9IFtdO1xudGFzazE3LnB1c2gobWF0ZXJpYWxzWzEwM10pO1xuXG5mb3IodmFyIGc9MDsgZyA8IHRhc2sxNy5sZW5ndGggOyBnKyspe1xuICB0YXNrMTdbZ10ub3BhY2l0eSA9IDE7XG4gIHRhc2sxN1tnXS5jb2xvci5zZXRIZXgoZ3JvdXA1KTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy9cbnZhciBncm91cDYgPSAweGVlYWUwMDtcblxudGFzazE4ID0gW107XG50YXNrMTgucHVzaChtYXRlcmlhbHNbMTI0XSk7XG5cbmZvcih2YXIgZz0wOyBnIDwgdGFzazE4Lmxlbmd0aCA7IGcrKyl7XG4gIHRhc2sxOFtnXS5vcGFjaXR5ID0gMTtcbiAgdGFzazE4W2ddLmNvbG9yLnNldEhleChncm91cDYpO1xufVxuXG5cbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy9cbnZhciBncm91cDcgPSAweGI0ZTg5ZDtcblxudGFzazE5ID0gW107XG50YXNrMTkucHVzaChtYXRlcmlhbHNbMTA0XSk7XG50YXNrMTkucHVzaChtYXRlcmlhbHNbMTEwXSk7XG50YXNrMTkucHVzaChtYXRlcmlhbHNbMTA4XSk7XG50YXNrMTkucHVzaChtYXRlcmlhbHNbMTA5XSk7XG5cbmZvcih2YXIgZz0wOyBnIDwgdGFzazE5Lmxlbmd0aCA7IGcrKyl7XG4gIHRhc2sxOVtnXS5vcGFjaXR5ID0gMTtcbiAgdGFzazE5W2ddLmNvbG9yLnNldEhleChncm91cDcpO1xufVxuXG50YXNrMjAgPSBbXTtcbnRhc2syMC5wdXNoKG1hdGVyaWFsc1sxNTldKTtcbnRhc2syMC5wdXNoKG1hdGVyaWFsc1sxNTZdKTtcbnRhc2syMC5wdXNoKG1hdGVyaWFsc1sxNTddKTtcbnRhc2syMC5wdXNoKG1hdGVyaWFsc1sxNThdKTtcblxuZm9yKHZhciBnPTA7IGcgPCB0YXNrMjAubGVuZ3RoIDsgZysrKXtcbiAgdGFzazIwW2ddLm9wYWNpdHkgPSAxO1xuICB0YXNrMjBbZ10uY29sb3Iuc2V0SGV4KGdyb3VwNyk7XG59XG5cbnRhc2syMSA9IFtdO1xudGFzazIxLnB1c2gobWF0ZXJpYWxzWzE3Ml0pO1xudGFzazIxLnB1c2gobWF0ZXJpYWxzWzE2N10pO1xudGFzazIxLnB1c2gobWF0ZXJpYWxzWzE2OF0pO1xudGFzazIxLnB1c2gobWF0ZXJpYWxzWzE2OV0pO1xudGFzazIxLnB1c2gobWF0ZXJpYWxzWzE3MF0pO1xudGFzazIxLnB1c2gobWF0ZXJpYWxzWzE3MV0pO1xuXG5mb3IodmFyIGc9MDsgZyA8IHRhc2syMS5sZW5ndGggOyBnKyspe1xuICB0YXNrMjFbZ10ub3BhY2l0eSA9IDE7XG4gIHRhc2syMVtnXS5jb2xvci5zZXRIZXgoZ3JvdXA3KTtcbn1cblxudGFzazIyID0gW107XG50YXNrMjIucHVzaChtYXRlcmlhbHNbMTM4XSk7XG50YXNrMjIucHVzaChtYXRlcmlhbHNbMTM5XSk7XG50YXNrMjIucHVzaChtYXRlcmlhbHNbMTQwXSk7XG50YXNrMjIucHVzaChtYXRlcmlhbHNbMTQxXSk7XG50YXNrMjIucHVzaChtYXRlcmlhbHNbMTQyXSk7XG50YXNrMjIucHVzaChtYXRlcmlhbHNbMTQzXSk7XG50YXNrMjIucHVzaChtYXRlcmlhbHNbMTM3XSk7XG50YXNrMjIucHVzaChtYXRlcmlhbHNbMTM2XSk7XG5cbmZvcih2YXIgZz0wOyBnIDwgdGFzazIyLmxlbmd0aCA7IGcrKyl7XG4gIHRhc2syMltnXS5vcGFjaXR5ID0gMTtcbiAgdGFzazIyW2ddLmNvbG9yLnNldEhleChncm91cDcpO1xufVxuXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xudmFyIGdyb3VwOCA9IDB4YjUyZDNhO1xuXG50YXNrMjMgPSBbXTtcbnRhc2syMy5wdXNoKG1hdGVyaWFsc1sxMTJdKTtcblxuZm9yKHZhciBnPTA7IGcgPCB0YXNrMjMubGVuZ3RoIDsgZysrKXtcbiAgdGFzazIzW2ddLm9wYWNpdHkgPSAxO1xuICB0YXNrMjNbZ10uY29sb3Iuc2V0SGV4KGdyb3VwOCk7XG59XG5cbnRhc2syNCA9IFtdO1xudGFzazI0LnB1c2gobWF0ZXJpYWxzWzExNF0pO1xuXG5mb3IodmFyIGc9MDsgZyA8IHRhc2syNC5sZW5ndGggOyBnKyspe1xuICB0YXNrMjRbZ10ub3BhY2l0eSA9IDE7XG4gIHRhc2syNFtnXS5jb2xvci5zZXRIZXgoZ3JvdXA4KTtcbn1cblxudGFzazI1ID0gW107XG50YXNrMjUucHVzaChtYXRlcmlhbHNbMTE4XSk7XG5cbmZvcih2YXIgZz0wOyBnIDwgdGFzazI1Lmxlbmd0aCA7IGcrKyl7XG4gIHRhc2syNVtnXS5vcGFjaXR5ID0gMTtcbiAgdGFzazI1W2ddLmNvbG9yLnNldEhleChncm91cDgpO1xufVxuXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxudmFyIGdyb3VwOSA9IDB4MDA5MzliO1xuXG50YXNrMjYgPSBbXTtcbnRhc2syNi5wdXNoKG1hdGVyaWFsc1syN10pO1xuXG5mb3IodmFyIGc9MDsgZyA8IHRhc2syNi5sZW5ndGggOyBnKyspe1xuICB0YXNrMjZbZ10ub3BhY2l0eSA9IDE7XG4gIHRhc2syNltnXS5jb2xvci5zZXRIZXgoZ3JvdXA5KTtcbn1cblxudGFzazI3ID0gW107XG50YXNrMjcucHVzaChtYXRlcmlhbHNbMTddKTtcblxuZm9yKHZhciBnPTA7IGcgPCB0YXNrMjcubGVuZ3RoIDsgZysrKXtcbiAgdGFzazI3W2ddLm9wYWNpdHkgPSAxO1xuICB0YXNrMjdbZ10uY29sb3Iuc2V0SGV4KGdyb3VwOSk7XG59XG5cbnRhc2syOCA9IFtdO1xudGFzazI4LnB1c2gobWF0ZXJpYWxzWzEzM10pO1xuXG5mb3IodmFyIGc9MDsgZyA8IHRhc2syOC5sZW5ndGggOyBnKyspe1xuICB0YXNrMjhbZ10ub3BhY2l0eSA9IDE7XG4gIHRhc2syOFtnXS5jb2xvci5zZXRIZXgoZ3JvdXA5KTtcbn1cblxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG52YXIgZ3JvdXAxMCA9IDB4YmY4MzA0O1xuXG50YXNrMjkgPSBbXTtcbnRhc2syOS5wdXNoKG1hdGVyaWFsc1s4MV0pO1xudGFzazI5LnB1c2gobWF0ZXJpYWxzWzgyXSk7XG5cbmZvcih2YXIgZz0wOyBnIDwgdGFzazI5Lmxlbmd0aCA7IGcrKyl7XG4gIHRhc2syOVtnXS5vcGFjaXR5ID0gMTtcbiAgdGFzazI5W2ddLmNvbG9yLnNldEhleChncm91cDEwKTtcbn1cblxudGFzazMwID0gW107XG50YXNrMzAucHVzaChtYXRlcmlhbHNbMTUxXSk7XG5cbmZvcih2YXIgZz0wOyBnIDwgdGFzazMwLmxlbmd0aCA7IGcrKyl7XG4gIHRhc2szMFtnXS5vcGFjaXR5ID0gMTtcbiAgdGFzazMwW2ddLmNvbG9yLnNldEhleChncm91cDEwKTtcbn1cblxudGFzazMxID0gW107XG50YXNrMzEucHVzaChtYXRlcmlhbHNbMTQ4XSk7XG50YXNrMzEucHVzaChtYXRlcmlhbHNbMTQ5XSk7XG50YXNrMzEucHVzaChtYXRlcmlhbHNbMTUwXSk7XG5cbmZvcih2YXIgZz0wOyBnIDwgdGFzazMxLmxlbmd0aCA7IGcrKyl7XG4gIHRhc2szMVtnXS5vcGFjaXR5ID0gMTtcbiAgdGFzazMxW2ddLmNvbG9yLnNldEhleChncm91cDEwKTtcbn1cblxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG52YXIgZ3JvdXAxMSA9IDB4YzlkYWY4O1xuXG50YXNrMzIgPSBbXTtcbnRhc2szMi5wdXNoKG1hdGVyaWFsc1sxMTZdKTtcblxuZm9yKHZhciBnPTA7IGcgPCB0YXNrMzIubGVuZ3RoIDsgZysrKXtcbiAgdGFzazMyW2ddLm9wYWNpdHkgPSAxO1xuICB0YXNrMzJbZ10uY29sb3Iuc2V0SGV4KGdyb3VwMTEpO1xufVxuXG50YXNrMzMgPSBbXTtcbnRhc2szMy5wdXNoKG1hdGVyaWFsc1s4OF0pO1xuXG5mb3IodmFyIGc9MDsgZyA8IHRhc2szMy5sZW5ndGggOyBnKyspe1xuICB0YXNrMzNbZ10ub3BhY2l0eSA9IDE7XG4gIHRhc2szM1tnXS5jb2xvci5zZXRIZXgoZ3JvdXAxMSk7XG59XG5cbnRhc2szNCA9IFtdO1xudGFzazM0LnB1c2gobWF0ZXJpYWxzWzE2MF0pO1xudGFzazM0LnB1c2gobWF0ZXJpYWxzWzE2MV0pO1xudGFzazM0LnB1c2gobWF0ZXJpYWxzWzE2Ml0pO1xudGFzazM0LnB1c2gobWF0ZXJpYWxzWzE3Nl0pO1xudGFzazM0LnB1c2gobWF0ZXJpYWxzWzE3N10pO1xudGFzazM0LnB1c2gobWF0ZXJpYWxzWzE3OF0pO1xudGFzazM0LnB1c2gobWF0ZXJpYWxzWzE3OV0pO1xudGFzazM0LnB1c2gobWF0ZXJpYWxzWzE4MF0pO1xuXG5mb3IodmFyIGc9MDsgZyA8IHRhc2szNC5sZW5ndGggOyBnKyspe1xuICB0YXNrMzRbZ10ub3BhY2l0eSA9IDE7XG4gIHRhc2szNFtnXS5jb2xvci5zZXRIZXgoZ3JvdXAxMSk7XG59XG5cbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbnZhciBncm91cDEyID0gMHhlZWEwYTU7XG5cbnRhc2szNSA9IFtdO1xudGFzazM1LnB1c2gobWF0ZXJpYWxzWzExNl0pO1xuLy90YXNrMzZcbnRhc2szNS5wdXNoKG1hdGVyaWFsc1sxMjldKTtcbi8vdGFzazM3XG50YXNrMzUucHVzaChtYXRlcmlhbHNbMTMyXSk7XG4vL3Rhc2szOFxudGFzazM1LnB1c2gobWF0ZXJpYWxzWzE0NF0pO1xuLy90YXNrMzlcbnRhc2szNS5wdXNoKG1hdGVyaWFsc1s4M10pO1xuLy90YXNrNDBcbnRhc2szNS5wdXNoKG1hdGVyaWFsc1syMDBdKTtcblxuZm9yKHZhciBnPTA7IGcgPCB0YXNrMzUubGVuZ3RoIDsgZysrKXtcbiAgdGFzazM1W2ddLm9wYWNpdHkgPSAxO1xuICB0YXNrMzVbZ10uY29sb3Iuc2V0SGV4KGdyb3VwMTIpO1xufVxuXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG52YXIgZ3JvdXAxMyA9IDB4NTNjOWQ2O1xuXG50YXNrNDEgPSBbXTtcbnRhc2s0MS5wdXNoKG1hdGVyaWFsc1syMjBdKTtcbi8vVEFTSzQyXG50YXNrNDEucHVzaChtYXRlcmlhbHNbMjQwXSk7XG4vL1RBU0s0M1xudGFzazQxLnB1c2gobWF0ZXJpYWxzWzI1MF0pO1xuXG5mb3IodmFyIGc9MDsgZyA8IHRhc2s0MS5sZW5ndGggOyBnKyspe1xuICB0YXNrNDFbZ10ub3BhY2l0eSA9IDE7XG4gIHRhc2s0MVtnXS5jb2xvci5zZXRIZXgoZ3JvdXAxMyk7XG59XG5cbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbnZhciBncm91cDE0ID0gMHhGOTc5MDY7XG5cbnRhc2s0NCA9IFtdO1xudGFzazQ0LnB1c2gobWF0ZXJpYWxzWzIwMl0pO1xudGFzazQ0LnB1c2gobWF0ZXJpYWxzWzIwM10pO1xudGFzazQ0LnB1c2gobWF0ZXJpYWxzWzIwNF0pO1xudGFzazQ0LnB1c2gobWF0ZXJpYWxzWzIwNV0pO1xudGFzazQ0LnB1c2gobWF0ZXJpYWxzWzIwNl0pO1xudGFzazQ0LnB1c2gobWF0ZXJpYWxzWzIwN10pO1xuXG5mb3IodmFyIGc9MDsgZyA8IHRhc2s0NC5sZW5ndGggOyBnKyspe1xuICB0YXNrNDRbZ10ub3BhY2l0eSA9IDE7XG4gIHRhc2s0NFtnXS5jb2xvci5zZXRIZXgoZ3JvdXAxNCk7XG59XG5cbnRhc2s0NSA9IFtdO1xudGFzazQ1LnB1c2gobWF0ZXJpYWxzWzIxNl0pO1xudGFzazQ1LnB1c2gobWF0ZXJpYWxzWzIxNV0pO1xuXG5mb3IodmFyIGc9MDsgZyA8IHRhc2s0NS5sZW5ndGggOyBnKyspe1xuICB0YXNrNDVbZ10ub3BhY2l0eSA9IDE7XG4gIHRhc2s0NVtnXS5jb2xvci5zZXRIZXgoZ3JvdXAxNCk7XG59XG5cbnRhc2s0NiA9IFtdO1xudGFzazQ2LnB1c2gobWF0ZXJpYWxzWzMxM10pO1xudGFzazQ2LnB1c2gobWF0ZXJpYWxzWzMxNF0pO1xudGFzazQ2LnB1c2gobWF0ZXJpYWxzWzMxNV0pO1xuXG5mb3IodmFyIGc9MDsgZyA8IHRhc2s0Ni5sZW5ndGggOyBnKyspe1xuICB0YXNrNDZbZ10ub3BhY2l0eSA9IDE7XG4gIHRhc2s0NltnXS5jb2xvci5zZXRIZXgoZ3JvdXAxNCk7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xudmFyIGdyb3VwMTUgPSAweGUzZWJhNDtcblxudGFzazQ3ID0gW107XG50YXNrNDcucHVzaChtYXRlcmlhbHNbMzA5XSk7XG4vL1RBU0s0OFxudGFzazQ3LnB1c2gobWF0ZXJpYWxzWzMxMV0pO1xuLy9UQVNLNDlcbnRhc2s0Ny5wdXNoKG1hdGVyaWFsc1syOTNdKTtcblxuZm9yKHZhciBnPTA7IGcgPCB0YXNrNDcubGVuZ3RoIDsgZysrKXtcbiAgdGFzazQ3W2ddLm9wYWNpdHkgPSAxO1xuICB0YXNrNDdbZ10uY29sb3Iuc2V0SGV4KGdyb3VwMTUpO1xufVxuXG4vLyB0YXNrMTMgPSBbXTtcbi8vIHRhc2sxMy5wdXNoKG1hdGVyaWFsc1sxMTddKTtcblxuLy8gZm9yKHZhciBnPTA7IGcgPCB0YXNrMTMubGVuZ3RoIDsgZysrKXtcbi8vICAgdGFzazEzW2ddLm9wYWNpdHkgPSAxO1xuLy8gICB0YXNrMTNbZ10uY29sb3Iuc2V0SGV4KGdyb3VwMTUpO1xuLy8gfVxuXG4vLyB0YXNrMTQgPSBbXTtcbi8vIHRhc2sxNC5wdXNoKG1hdGVyaWFsc1sxMThdKTtcblxuLy8gZm9yKHZhciBnPTA7IGcgPCB0YXNrMTQubGVuZ3RoIDsgZysrKXtcbi8vICAgdGFzazE0W2ddLm9wYWNpdHkgPSAxO1xuLy8gICB0YXNrMTRbZ10uY29sb3Iuc2V0SGV4KGdyb3VwMTUpO1xuLy8gfSJdfQ==
