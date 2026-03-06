let camera, scene, attacks= [], hotbarinfo = ["Slash","Bullet","Spells"],hotbaritems=[], hotbarselection=0, book, building, walls=[], spell, spellcount = 2;
//initialization
window.addEventListener("DOMContentLoaded",function (){
    
    camera = document.querySelector("#camerarig")
    scene = document.querySelector("a-scene");
    const box = document.createElement("a-box");
    box.setAttribute("color","blue");
    box.setAttribute("dynamic-body","mass:0.0001; shape: box;");
    box.setAttribute("position","0 25.5 0");
    scene.append(box);
  
    building = new Building1(100,0,-5);
    walls = building.walls;


    //debugging 
    console.log(walls[0].parentNode.parentNode.parentNode.parentNode.object3D.position)
    walls.forEach(wall => {
        const worldp = wall.parentNode.parentNode.parentNode.parentNode.object3D.position
        const layer1 =wall.parentNode.parentNode.parentNode.object3D.position
        const layer2 =wall.parentNode.parentNode.object3D.position
        const layer3 =wall.parentNode.object3D.position
        const layer4 =wall.object3D.position

        console.log({a:worldp,b:wall.parentNode.parentNode.parentNode.parentNode})
        console.log({a:layer1,b:wall.parentNode.parentNode.parentNode})
        console.log({a:sumPositions([worldp,layer1]),b:"l1+wp"})
    });
    


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



window.addEventListener("click",(e)=>clickHandler(e))

//wheel listener
window.addEventListener("wheel",(e)=>wheelHandler(e))


//keyboard listener
window.addEventListener("keydown",(e)=>keyboardHandler(e))

function loop(){
    
    //spellbook tracking
    book && book.followCam()

    //spellbook animation
    if(book.appearing){
        book.animateAppear()
    }
    if (book.disappearing){
        book.animateDisappear();
    }

    //hotbar tracking
    hotbaritems.forEach((item)=>{
        item.followCam()
    })

    //spell tracking
    if(spell instanceof Laser){
        spell.followCam();

    }
    if(spell instanceof Locator){
        spell.followCam()
    }

    //attack animations
    attacks.forEach((attack,i)=>{
        if(attack instanceof Slash){
            attack.animate();

            for(let wall of walls){
                if(distance(attack.hitbox, wall) <= 10){
                building.makeDynamic(wall);
              }
            }
            if(attack.animated) {
                attack.remove();
                attacks.splice(i,1);
            }


        } else if (attack instanceof Bullet){
            attack.fire();
            for(let wall of walls){
              if(distance(attack.obj, wall) <= 10){
                building.makeDynamic(wall);
              }
            }
            if(attack.obj && distance(camera,attack.obj) > 200){
                attack.remove()
                attacks.splice(i,1);
            }


        } else if (attack instanceof Meteor){
            attack.fire();

            
            for(let wall of walls){
                if(distance(attack.obj, wall) <= 14 || checkMeteorHitbox(attack,wall) ){
                    building.makeDynamic(wall);
                }
            }
            //meteor explosion
            if(attack.obj.object3D.position.y < 0){
                attack.explode();
                
                if(attack.exprad>50){
                    attack.remove();
                    attacks.splice(i,1);
                }
            }


        } else if (attack instanceof EarthWall){
            attack.fire();
            
            //time check
            if (Date.now() - attack.creationTime > attack.lifespan + 1000) {
                attack.remove();
                attacks.splice(i,1);
            }
            for(let wall of walls){
                if(distance(attack.hitboxposition, wall) <= 16){
                    building.makeDynamic(wall);
                }
            }
        }
    })


    window.requestAnimationFrame(loop)

}

