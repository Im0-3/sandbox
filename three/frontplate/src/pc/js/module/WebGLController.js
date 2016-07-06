class Cube {
    constructor(){
        this.mesh = new THREE.Mesh(
            new THREE.BoxGeometry( 40, 40, 40 ),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                emissive: 0xAAAAAA,
                roughness: 0.4,
                metalness: 1
            })
        );
    }
}

class WebGLController {
    constructor(){
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 2000 );
        this.object = new THREE.Object3D();
        this.renderer = new THREE.WebGLRenderer();
        this.init();
    }
    init(){
        this.sceneInit();
        this.cameraInit();
        this.rendererInit();
        this.objectInit();
        this.addLight();
        this.draw();
    }
    sceneInit(){
        this.scene.fog =  new THREE.FogExp2(0x000000, 0.00085);
    }
    getScene(){
        return this.scene;
    }
    objectInit(){
        this.scene.add(this.object);
    }
    cameraInit(){
        this.camera.position.x = 0;
        this.camera.position.y = 0;
        this.camera.position.z = -200;
        this.camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );
    }
    rendererInit(){
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.setClearColor( 0x000000, 1.0);
        document.body.appendChild( this.renderer.domElement );
    }
    addLight(){
        let ambientLight = new THREE.AmbientLight( 0x333333 ); // soft white light
        this.scene.add( ambientLight );
        let light = new THREE.DirectionalLight( 0xffffff, 1 );
        light.position.set(0, 30, -100);
        this.scene.add( light );
    }
    addMesh(mesh){
        this.object.add( mesh );
    }
    draw(){
        this.camera.position.x = Math.cos(new Date().getTime() / 1000) * -500;
        this.camera.position.z = Math.sin(new Date().getTime() / 1000) * -500;
        this.camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );
        requestAnimationFrame(this.draw.bind(this));
        this.renderer.render(this.scene, this.camera);
    }
}

export default WebGLController;