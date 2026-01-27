let camera, scene, attacks= [], hotbarinfo = ["slash","bullet"],hotbaritems=[];
window.addEventListener("DOMContentLoaded",function (){
    
    camera = document.querySelector("#camerarig")
    scene = document.querySelector("a-scene");
    const box = document.createElement("a-box");
    box.setAttribute("color","blue");
    box.setAttribute("dynamic-body","")
    box.setAttribute("position","0 25.5 0");
    scene.append(box);

    console.log(camera.object3D.children)

    for(let i = 0; i < hotbarinfo.length; i++){
        if(camera.children[0]){
            const hb = new HotBarItem(hotbarinfo[i],i+1);
            hotbaritems.push(hb);
        }
    }


    loop();
} )

window.addEventListener("click",function(){
    
    const slash = new Slash();
    attacks.push(slash);

})

function loop(){

    hotbaritems.forEach((item)=>{
        item.followCam()
    })

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

