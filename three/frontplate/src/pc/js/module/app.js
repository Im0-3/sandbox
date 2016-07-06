let scene; //シーン
let camera; //カメラ
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let mouseX = 0;
let mouseY = 0;
let renderer; //レンダラー

function onDocumentMouseMove( event ) {
    mouseX = ( event.clientX - windowHalfX );
    mouseY = ( event.clientY - windowHalfY );
}

let initThree = () => {
    //Sceneの準備 (舞台)
    scene = new THREE.Scene();
    //Cameraの準備
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    //カメラのポジションを変更
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = -200;
    //原点の方向にカメラを向く
    camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );
    camera.position.y = 100;
    //ArrowHelperの準備
    let origin = new THREE.Vector3( 0, 0, 0 );
    let length = 300;

    //Rendererの準備　（描画）
    renderer = new THREE.WebGLRenderer();
    //サイズをセット
    renderer.setSize( window.innerWidth, window.innerHeight );
    //レンダラークリアカラーの設定
    renderer.setClearColor( 0x000000, 1.0);
    //DOMに追加
    document.body.appendChild( renderer.domElement );

    //軸オブジェクトの生成
    //x:red y:green z: blue
//   let axis = new THREE.AxisHelper( 400 );
//   scene.add( axis );

//   document.addEventListener( 'mousemove', onDocumentMouseMove, false );
}

initThree();

//環境光源
let ambientLight = new THREE.AmbientLight( 0x333333 ); // soft white light
scene.add( ambientLight );

//平行光源
let light = new THREE.DirectionalLight( 0xffffff, 1 );
light.position.set(0, 30, -100);
scene.add( light );

let isPlus = true;
let count = 0;

class Cube {
    constructor(){
        this.mesh;
        this.x = Math.random() * 1000 - 500;
        this.y = -100;
        this.z = Math.random() * 500 + 200;
        this.size = Math.random() * 30;
        this.init();
    }
    init(){
        this.mesh = new THREE.Mesh(
            new THREE.BoxGeometry( this.size, this.size, this.size ),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                emissive: 0x000000,
                roughness: 0.4,
                metalness: 1
            })
        );
        scene.add( this.mesh );
    }
    update(){
        this.z -= 2;
        if(this.z <= -500){
            this.z = Math.random() * 800 - 300;
        }
    }
    draw(){
        this.mesh.position.set(
            this.x,
            this.y,
            this.z
        );
        this.mesh.scale.y = (1 - (this.z / 1000)) * (1 - (this.z / 1000)) * (1 - (this.z / 1000)) * 10;
    }
}

//cubeGeometry

let cube = [];
for(let i = 0; i < 200; i++){
    cube[i] = new Cube();
    cube[i].update();
    cube[i].draw();
}

function render() {
    for(let i = 0; i < 200; i++){
        cube[i].update();
        cube[i].draw();
    }
    camera.position.x = Math.sin(new Date().getTime() / 30000 / (Math.PI/ 180)) * 80;
    light.position.x = Math.sin(new Date().getTime() / 30000 / (Math.PI/ 180)) * 200;
    requestAnimationFrame( render );
    renderer.render( scene, camera );
}
render();