let camera, scene, attacks= [], hotbarinfo = ["Slash","Bullet","Spells"],hotbaritems=[], hotbarselection=0, book;
window.addEventListener("DOMContentLoaded",function (){
    
    camera = document.querySelector("#camerarig")
    scene = document.querySelector("a-scene");
    const box = document.createElement("a-box");
    box.setAttribute("color","blue");
    box.setAttribute("dynamic-body","mass:0.0001; shape: box;");
    box.setAttribute("position","0 25.5 0");
    scene.append(box);
  
    let building1 = new Building1(0,0,-5);

    

    

    console.log(camera)

    book = new Spellbook();

    for(let i = 0; i < hotbarinfo.length; i++){
        if(camera.children[0]){
            const hb = new HotBarItem(hotbarinfo[i],i+1);
            hotbaritems.push(hb);
        }
    }


    loop();
} )

window.addEventListener("click",function(e){
    console.log(e);
    if(hotbarselection==0){
        const slash = new Slash();
        attacks.push(slash);
    } 
    else if (hotbarselection == 1){
        const bullet = new Bullet();
        attacks.push(bullet);
    }
})


window.addEventListener("keydown",function(e){

    console.log(e.key)

    switch(e.key){
        case "1":
            hotbaritems[0].select()
            hotbarselection=0;
            break;
        case "2":
            hotbaritems[1].select()
            hotbarselection=1;
            break;
        case "3":
            hotbaritems[2].select()
            hotbarselection=2;
            break;
    }
    hotbarselection == 2 ? book.appear() : book.disappear();

    //deselects other hotbar items
    hotbaritems.filter((item,i)=>{return i !== hotbarselection}).forEach((item)=>{item.deselect();})

})

function loop(){

    book && book.followCam()

    if(book.appearing){
        book.opacity+= 0.1;
        book.center.children[0].setAttribute("opacity",book.opacity);
        book.center.children[1].setAttribute("opacity",book.opacity);
        book.appearing = book.opacity > 1 ? false:true;
    }
    if (book.disappearing){
        book.opacity-= 0.1;
        book.center.children[0].setAttribute("opacity",book.opacity);
        book.center.children[1].setAttribute("opacity",book.opacity);
        book.disappearing = book.opacity < 0 ? false:true;
    }


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
        } else if (attack instanceof Bullet){
            attack.fire();
            if(distance(camera,attack.obj)> 200){
                attack.remove()
                attacks.splice(i,1);
            }
        }


    })


    window.requestAnimationFrame(loop)

}

