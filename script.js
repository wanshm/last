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
    
    const slash = new Slash()
    attacks.push(slash);

    console.log(camera.object3D.children[0])
    
    console.log(slash)
})

function loop(){

    attacks.forEach((attack,i)=>{
        if(attack instanceof Slash){
            const start = attack.getAttribute("theta-start")
            const length = attack.getAttribute("theta-length")
            const sword = attack.slash.children[0];
            const swordAngle = sword.object3D.rotation;
            if(parseInt(start) < 300){
            attack.setAttribute("theta-start", parseInt(start) + 7);
            attack.setAttribute("theta-length", parseInt(length) + 5);
            swordAngle.z+= THREE.MathUtils.degToRad(12);
            } else {
                attack.remove()
            }
        }
    })


    window.requestAnimationFrame(loop)

}

