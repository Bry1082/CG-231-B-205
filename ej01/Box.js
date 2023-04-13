var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);


var lado=2; //Lado del cubo
var colorzaso =[{ color: 0x46a8af },{color: 0x6343ad},{color: 0xde8cc4}]; //Arreglod de colores
 var geo=[];
			var material=[]; //arreglo de los materiales 
			var cubos=[]; //Arreglo de los diferentes cubos

			for(i=0;i<3;i++){ //Crea los 3 cubos
				geo.push(new THREE.BoxGeometry(lado,lado,lado));  
				material.push(new THREE.MeshToonMaterial(colorzaso[i]));  
				cubos.push(new THREE.Mesh(geo[i], material[i]));  
				
			}
//Transformaciones de los cubos
/*
geo[0].translate(lado/2,lado/2,lado/2);


geo[1].scale(1/2,1/2,1/2);
geo[1].translate(lado/2,lado+lado/4,lado/2);

geo[2].scale(1/4,1/4,1/4);
geo[2].translate(lado/2,lado+lado/2+lado/8,lado/2);
*/
//Luz
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
window.alert("Animacion de Torre de Cubos\n\n Teclas a usar del numpad 1 al 9\n el 9 refresca la pagina");
render();
document.addEventListener('keydown', event => {
	switch(event.keyCode) {
		case 103: 
		scene.add(cubos[0]); //crea el cubo 1 en el origen
		break;

		case 104: 
		geo[0].translate(lado/2,lado/2,lado/2);
		break;

		case 100: 
		scene.add(cubos[1]); //cagraga el cubo 2 en el origen
	
		break;
		case 101: 
		geo[1].scale(1/2,1/2,1/2);
		break;

		case 102: 
		geo[1].translate(lado/2,lado+lado/4,lado/2);
		break;

		case 97: 
		scene.add(cubos[2]);
		break;

		case 98: 
		geo[2].scale(1/4,1/4,1/4);
		break;
		
		case 99: 
		geo[2].translate(lado/2,lado+lado/2+lado/8,lado/2);
		break;

		case 105: 
		location.reload();
		break;
	}
});