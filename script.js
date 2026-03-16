let camera, scene, attacks= [], hotbarinfo = ["Slash","Bullet","Spells"],hotbaritems=[], hotbarselection=0, book, buildings =[], walls=[], spell, spellcount = 2;
//initialization
window.addEventListener("DOMContentLoaded",function (){
    
    camera = document.querySelector("#camerarig")
    scene = document.querySelector("a-scene");
    const box = document.createElement("a-box");
    box.setAttribute("color","blue");
    box.setAttribute("dynamic-body","mass:0.0001; shape: box;");
    box.setAttribute("position","0 25.5 0");
    
    scene.append(box);
    
    box.setAttribute("ttl","time:500")

    const building = new Building1(100,0,-5);
    buildings.push(building)
    // walls = building.walls;

    const buildingA = new Building2(0,0,-5);
    buildings.push(buildingA)
    // walls = buildingA.walls;
   
    // building2opti = new Building2Opti(-25,0,-5);

    for(let i = 0; i < 36 ; i++){
        const z = Math.floor(i/6)*40;
        const x = (i)%6*40;
        const bc = new ChoppedBuilding2(x+20,-1.5,z+20)
        buildings.push(bc)
    }



    


   






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
            
            buildings.forEach((building,i)=>{   
                if (distance(building.obj,attack.hitbox)< 30){
                    if(building instanceof ChoppedBuilding2){
                        buildingswap(building,buildings,i)
                    }
                    for(let wall of building.walls){
                        building.makeDynamic(wall);
                    }
                }
            })
                if(attack.animated) {
                    attack.remove();
                    attacks.splice(i,1);
                }
            

        } else if (attack instanceof Bullet){
            attack.fire();

            buildings.forEach((building,i)=>{
                    if(building.checkCollsion(attack.obj.object3D.position,50)){
                    for(let wall of building.walls){
                            building.makeDynamic(wall);
                        // if(distance(attack.obj, wall) <= 10){
                        // }
                    }}
                }
            )
            if(attack.obj && distance(camera,attack.obj) > 200){
                attack.remove()
                attacks.splice(i,1);
            }


        } else if (attack instanceof Meteor){
            attack.fire();

            buildings.forEach((building,i)=>{
                if (distance(building.obj,attack.obj)<14){
                    for(let wall of building.walls){
                        building.makeDynamic(wall);
                        // if(distance(attack.obj, wall) <= 14 || checkMeteorHitbox(attack,wall) ){
                            
                        // }
                    }
                }
            })
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
            buildings.forEach((building,i)=>{
                if (distance(building.obj,attack.hitboxposition) < 16){
                    for(let wall of building.walls){
                        building.makeDynamic(wall);
                        // if(distance(attack.hitboxposition, wall) <= 16){
                            
                        // }
                    }
                }
            })
        }
    })


    window.requestAnimationFrame(loop)

}

