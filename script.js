

window.addEventListener("DOMContentLoaded",function (){
    const scene = document.querySelector("a-scene");
    const box = document.createElement("a-box");
    box.setAttribute("color","blue");
    box.setAttribute("dynamic-body","")
    box.setAttribute("position","0 25.5 0");
    console.log(box)
    scene.append(box);
} )




