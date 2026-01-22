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
    const sword = document.createElement("a-box");
    const crossguard = document.createElement("a-box");
    slash.append(sword)
    sword.append(crossguard)
    attacks.push(slash);
    
    slash.setAttribute("atktype","slash")
    slash.setAttribute("side","double")
    slash.object3D.scale.set(5, 5, 1)
    slash.object3D.rotation.set(
        camera.object3D.children[0].rotation.x +Math.PI/2,
        camera.object3D.children[0].rotation.y,
        THREE.MathUtils.degToRad(0)
    );
    slash.setAttribute("position",{ x:camera.object3D.position.x,y:camera.object3D.position.y +3,z:camera.object3D.position.z - 10})
    slash.setAttribute("theta-start", 100);
    slash.setAttribute("theta-length", 0);
    
    sword.object3D.scale.set(.1,1,.5)
    sword.setAttribute("rotation", "0 0 -180");
    crossguard.object3D.position.set(0,.25,0)
    crossguard.object3D.scale.set(4,.1,1)
    
    scene.append(slash)

    console.log(camera.object3D.children[0])
    
    console.log(slash)


})

function loop(){

    attacks.forEach((attack,i)=>{
        if(attack.getAttribute("atktype")=="slash"){
            const start = attack.getAttribute("theta-start")
            const length = attack.getAttribute("theta-length")
            const sword = attack.children[0];
            const swordAngle = sword.object3D.rotation;
            if(parseInt(start) < 300){
            attack.setAttribute("theta-start", parseInt(start) + 7);
            attack.setAttribute("theta-length", parseInt(length) + 5);
            swordAngle.z+= THREE.MathUtils.degToRad(12);
            } else {
                attack.parentNode.removeChild(attack);
                attacks.splice(i,1);
            }
            // console.log([start, length])
            // setTimeout(() => {
                
            // }, 1000);
        }
    })


    window.requestAnimationFrame(loop)

}

