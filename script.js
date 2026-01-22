let camera, scene, attacks= [];
window.addEventListener("DOMContentLoaded",function (){
    
    camera = document.querySelector("#camerarig")
    scene = document.querySelector("a-scene");
    const box = document.createElement("a-box");
    box.setAttribute("color","blue");
    box.setAttribute("dynamic-body","")
    box.setAttribute("position","0 25.5 0");
    console.log(box)
    scene.append(box);
    
    loop();
} )

window.addEventListener("click",function(){
    const scene = document.querySelector("a-scene");
    const slash = document.createElement("a-ring");
    attacks.push(slash);
    slash.setAttribute("atktype","slash")
    slash.setAttribute("side","double")
    slash.object3D.rotation.set(
        camera.object3D.children[0].rotation.x +Math.PI/2,
        camera.object3D.children[0].rotation.y,
        THREE.MathUtils.degToRad(0)
    );
    console.log(slash)
    slash.setAttribute("position",{ x:camera.object3D.position.x,y:camera.object3D.position.y +3,z:camera.object3D.position.z })
    slash.setAttribute("theta-start", 100);
    slash.setAttribute("theta-length", 0);
    scene.append(slash)
    console.log(camera.object3D.children[0])
    



})

function loop(){

    attacks.forEach((attack,i)=>{
        if(attack.getAttribute("atktype")=="slash"){
            const start = attack.getAttribute("theta-start")
            const length = attack.getAttribute("theta-length")
            
            attack.setAttribute("theta-start", parseInt(start) + 50);
            attack.setAttribute("theta-length", parseInt(length) + 100);
            console.log([start, length])
            setTimeout(() => {
                attack.parentNode.removeChild(attack);
                attacks.splice(i,1);
            }, 1000);
        }
    })


    window.requestAnimationFrame(loop)

}

