function SetRequestAnimationFrame(){
    let requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;

    let cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
}

export default SetRequestAnimationFrame();