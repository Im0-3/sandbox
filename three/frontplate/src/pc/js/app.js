import WebGLController from './module/WebGLController';
import Cube from './mesh/Cube';
import Plane from './mesh/Plane';
import MeshController from './mesh/MeshController';

import ShaderController from './shader/ShaderController';
import BasicShader from './shader/BasicShader';

navigator.getMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;
let low = 0;
let high = 0;

navigator.getMedia ({ audio:true }, function(stream) {
    let context = new AudioContext();
    let analyser = context.createAnalyser();
    let oscillator = context.createOscillator();
    let source = context.createMediaStreamSource(stream);
    //source.connect(context.destination);
    source.connect(analyser);
    //oscillator.connect(analyser);
    //analyser.connect(context.destination);
    analyser.fftSize = 256;  // The default value
    let intervalid = window.setInterval(function() {
        low = 0;
        high = 0;
        let times = new Uint8Array(analyser.fftSize);
        analyser.getByteTimeDomainData(times);
        for(let i = 0; i < times.length; i++){
            if(i < times.length / 2) {
                low += (times[i] - 128);
            }else {
                high += 160 - times[i];
            }
        }
    }, 10);
}, function(err){  });

let webGLController = new WebGLController();
let meshController = new MeshController([
    new Cube(),
    new Plane()
], webGLController.getScene());
let shaderController = new ShaderController(BasicShader);
shaderController.addToScene(webGLController.getScene());

let animation = () => {
    meshController.update(low, high);
    meshController.draw();
    requestAnimationFrame(animation);
}
animation();