let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000); 
let renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color("#d0d1c5");
renderer.setSize(800, 800);
document.body.appendChild(renderer.domElement); 

let x = 0.01
let y = 0.01

let cylinderGeo = new THREE.CylinderGeometry(1,1,1);
let cylinderMat = new THREE.MeshBasicMaterial({ color: "#2ec73d" });
let cy = new THREE.Mesh(cylinderGeo, cylinderMat);
scene.add(cy);
camera.position.z=5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    if (cy.position.x >=7 || cy.position.x <= -7){
        x =- x; 
        cy.material.color.set("#2171a6")
        cy.scale.x*=0.75
        cy.scale.y*=0.75
        cy.scale.z*=0.75
    
    }
    if (cy.position.x >=7 || cy.position.x <= -7){
        cy.material.color.set("#2171a6");    
        cy.scale.x*=0.75
        cy.scale.y*=0.75
        cy.scale.z*=0.75
    }
    cy.position.x = cy.position.x + x;
    if (cy.position.y >=3 || cy.position.y <= -3){
        y = -y ;      
        cy.material.color.set("#2ec73d"); 
        cy.scale.x*=0.75
        cy.scale.y*=0.75
        cy.scale.z*=0.75

    }
    if (cy.position.y >=3 || cy.position.y <= -3){
        cy.material.color.set("#687018");  
        cy.scale.x*=0.75
        cy.scale.y*=0.75
        cy.scale.z*=0.75
    }
    cy.position.x = cy.position.x + x;
    cy.position.y = cy.position.y + y;
    
}
animate();