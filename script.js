let camera, scene
window.addEventListener("DOMContentLoaded",function (){
    
    camera = document.querySelector("#camerarig")
    scene = document.querySelector("a-scene");
    const box = document.createElement("a-box");
    box.setAttribute("color","blue");
    box.setAttribute("dynamic-body","")
    box.setAttribute("position","0 25.5 0");
    console.log(box)
    scene.append(box);
    

    

} )

window.addEventListener("click",function(){
    const scene = document.querySelector("a-scene");
    const slash = document.createElement("a-ring");
    
    console.log(camera.object3D)

    slash.setAttribute("side","double")
    slash.setAttribute("rotation", {x:90,y:0,z:90})
    console.log(slash)
    slash.setAttribute("position",{ x:camera.object3D.position.x,y:camera.object3D.position.y +1,z:camera.object3D.position.z})
    scene.append(slash)
    setTimeout(() => {
        slash.parentNode.removeChild(slash);
    }, 1000);
})



