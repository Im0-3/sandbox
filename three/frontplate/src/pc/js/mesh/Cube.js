class Cube {
    constructor(){
        this.mesh = new THREE.Mesh(
            new THREE.BoxGeometry( 40, 40, 40 ),
            new THREE.MeshStandardMaterial({
                color: 0x888888,
                emissive: 0x000000,
                roughness: 0.6,
                metalness: 0.4
            })
        );
        this.scale = 1;
    }
    setToScene(scene){
        scene.add(this.mesh);
    }
    update(_low, high){
        let low;
        if(_low < 0){
            low = 0;
        }else{
            low = _low;
        }
        this.scale = this.scale + (((low / 10) - this.scale) / 10);
        if(this.scale < 1){
            this.scale = 1;
        }
        if(this.scale > 10){
            this.scale = 10;
        }
    }
    draw(){
        this.mesh.rotation.x += 0.02;
        this.mesh.rotation.y += 0.02;
        this.mesh.rotation.z += 0.02;
        this.mesh.scale.x = this.scale;
        this.mesh.scale.y = this.scale;
        this.mesh.scale.z = this.scale;
    }
}

export default Cube;