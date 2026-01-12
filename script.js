

window.addEventListener("DOMContentLoaded",function (){
    const scene = document.querySelector("a-scene");
    const box = document.createElement("a-box");
    box.setAttribute("color","black");
    box.setAttribute("dynamic-body","")
    box.setAttribute("position","0 .5 0");
    console.log(box)
    scene.append(box);
} )




