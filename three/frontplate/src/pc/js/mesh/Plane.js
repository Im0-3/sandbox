class Plane {
    constructor(){
        this.mesh = new THREE.Mesh(
            new THREE.PlaneGeometry( 2000, 2000, 10, 10 ),
            new THREE.MeshStandardMaterial({
                color: 0x000000,
                emissive: 0x333333,
                roughness: 1,
                metalness: 1,
                wireframe: true
            })
        );
        this.mesh.position.y = -350;
        this.mesh.rotation.x = Math.PI / 2;
    }
    setToScene(scene){
        scene.add(this.mesh);
    }
    update(){
    }
    draw(){
    }
}

export default Plane;