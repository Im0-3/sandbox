class MeshController {
    constructor(mesh, scene){
        this.mesh = mesh;
        for(let i = 0; i < this.mesh.length; i++){
            console.log(this.mesh[i]);
            this.mesh[i].setToScene(scene);
        }
    }
    update(low, high){
        for(let i = 0; i < this.mesh.length; i++){
            this.mesh[i].update(low, high);
        }
    }
    draw(){
        for(let i = 0; i < this.mesh.length; i++){
            this.mesh[i].draw();
        }
    }
}

export default MeshController;