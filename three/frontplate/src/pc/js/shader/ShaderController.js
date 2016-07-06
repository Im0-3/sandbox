class ShaderController {
    constructor(shader){
        console.log(shader);
        this.shader = new THREE.ShaderMaterial( {
            defines: shader.defines || {},
            uniforms: shader.uniforms,
            vertexShader: shader.vertexShader,
            fragmentShader: shader.fragmentShader
        } );
    }
    addToScene(scene){
        this.quad = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2, 2 ), this.shader );
        scene.add(this.quad);
    }
}


export default ShaderController;