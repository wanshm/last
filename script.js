let camera, scene, attacks= [], hotbarinfo = ["Slash","Bullet","Spells"],hotbaritems=[], hotbarselection=0, book, spells=[],activespells=[];
window.addEventListener("DOMContentLoaded",function (){
    
    camera = document.querySelector("#camerarig")
    scene = document.querySelector("a-scene");
    const box = document.createElement("a-box");
    box.setAttribute("color","blue");
    box.setAttribute("dynamic-body","mass:0.0001; shape: box;");
    box.setAttribute("position","0 25.5 0");
    scene.append(box);
  
    // const met = new Meteor
    // met.addLaser()

    // let building1 = new Building1(0.5, -0.43, 0.5);
    let building2 = new Building2(5,1,-5);

    //create spellbook
    book = new Spellbook();
    book.selection = 0;

    //create hotbar
    for(let i = 0; i < hotbarinfo.length; i++){
        if(camera.children[0]){
            const hb = new HotBarItem(hotbarinfo[i],i+1);
            hotbaritems.push(hb);
        }
    }

    //start loop
    loop();
} )

//click listener
window.addEventListener("click",function(e){
    if(hotbarselection==0){
        const slash = new Slash();
        attacks.push(slash);
    } 
    else if (hotbarselection == 1){
        const bullet = new Bullet();
        attacks.push(bullet);
    } else if(hotbarselection == 2){
    activespells.forEach((spell,i)=>{
            switch(spell.type){
                case "meteor":
                    activespells[i].cast()
                    console.log(activespells)
                    break;
            }})
    }
})

//wheel listener
window.addEventListener("wheel",(e)=>{
    console.log(e)
    
  })

//keyboard listener
window.addEventListener("keydown",function(e){

    //hotbar switch
    switch(e.key){
        case "1":
            if(hotbarselection==0){
                break;
            }
            hotbaritems[0].select()
            hotbarselection=0;
            break;
        case "2":
            if(hotbarselection==1){
                break;
            }
            hotbaritems[1].select()
            hotbarselection=1;
            break;
        case "3":
            if(hotbarselection==2){
                break;
            }
            
            book.appear()
            switch (book.selection){
                case 0:
                    //meteor
                    met = new Meteor
                    met.addLaser();
                    attacks.push(met);
                    activespells.push(met);
                    break;
        }
            hotbaritems[2].select()
            hotbarselection=2;
            break;
    }

    //on book select
    // if(hotbarselection == 2){
    //     book.appear()
    // }

    //on book deselect
    if(hotbarselection!==2){
        book.disappear()
        activespells.forEach((spell,i)=>{
            if(spell instanceof Meteor){
                spell.removeLaser();
                activespells.splice(i,1);
            }
        })
    }

    //deselects other hotbar items
    hotbaritems.filter((item,i)=>{return i !== hotbarselection}).forEach((item)=>{item.deselect();})

})

function loop(){
    //spellbook tracking
    book && book.followCam()

    //spellbook animation
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

    //hotbar tracking
    hotbaritems.forEach((item)=>{
        item.followCam()
    })

    //attack animations
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
        } else if (attack instanceof Meteor){
            attack.fire();
        }


    })


    window.requestAnimationFrame(loop)

}

