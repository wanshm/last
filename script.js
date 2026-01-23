let camera, scene, attacks= [];
window.addEventListener("DOMContentLoaded",function (){
    
    camera = document.querySelector("#camerarig")
    scene = document.querySelector("a-scene");
    const box = document.createElement("a-box");
    box.setAttribute("color","blue");
    box.setAttribute("dynamic-body","")
    box.setAttribute("position","0 25.5 0");
    scene.append(box);
    
    loop();
} )

window.addEventListener("click",function(){
    
    const slash = new Slash();
    attacks.push(slash);

})

function loop(){
    attacks.forEach((attack,i)=>{
        if(attack instanceof Slash){
            attack.animate()
            if(attack.animated) {
                attack.remove();
                attacks.splice(i,1);
            }
        }
    })


    window.requestAnimationFrame(loop)

}

