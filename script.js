//hi 


let scene;

window.addEventListener("DOMContentLoaded",initializePage())

function initializePage(){
    scene = document.getElementsByTagName("a-scene");
    const box = document.createElement("a-box");
    box.setAttribute("scale",{x:2,y:2,z:2})
    console.log(scene)
    scene.append(box)
}