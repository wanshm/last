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
    // walls = building.walls;

    buildingA = new Building2(0,0,-5);
    // walls = buildingA.walls;
   
    // building2opti = new Building2Opti(-25,0,-5);

    building2chopped1 = new ChoppedBuilding2(220,0,220);
    building2chopped2 = new ChoppedBuilding2(220,0,180);
    building2chopped3 = new ChoppedBuilding2(180,0,220);
    building2chopped4 = new ChoppedBuilding2(180,0,180);
    building2chopped5 = new ChoppedBuilding2(220,0,140);
    building2chopped6 = new ChoppedBuilding2(180,0,140);
    building2chopped7 = new ChoppedBuilding2(140,0,220);
    building2chopped8 = new ChoppedBuilding2(140,0,180);
    building2chopped9 = new ChoppedBuilding2(140,0,140);
    building2chopped10 = new ChoppedBuilding2(100,0,220);
    building2chopped11 = new ChoppedBuilding2(100,0,180);
    building2chopped12 = new ChoppedBuilding2(100,0,140);
    building2chopped13 = new ChoppedBuilding2(60,0,220);
    building2chopped14 = new ChoppedBuilding2(60,0,180);
    building2chopped15 = new ChoppedBuilding2(60,0,140);
    building2chopped16 = new ChoppedBuilding2(20,0,220);
    building2chopped17 = new ChoppedBuilding2(20,0,180);
    building2chopped18 = new ChoppedBuilding2(20,0,140);
    building2chopped19 = new ChoppedBuilding2(220,0,100);
    building2chopped20 = new ChoppedBuilding2(180,0,100);
    building2chopped21 = new ChoppedBuilding2(140,0,100);
    building2chopped22 = new ChoppedBuilding2(100,0,100);
    building2chopped23 = new ChoppedBuilding2(60,0,100);
    building2chopped24 = new ChoppedBuilding2(20,0,100);
    building2chopped25 = new ChoppedBuilding2(220,0,60);
    building2chopped26 = new ChoppedBuilding2(180,0,60);
    building2chopped27 = new ChoppedBuilding2(140,0,60);
    building2chopped28 = new ChoppedBuilding2(100,0,60);
    building2chopped29 = new ChoppedBuilding2(60,0,60);
    building2chopped30 = new ChoppedBuilding2(20,0,60);
    building2chopped31 = new ChoppedBuilding2(220,0,20);
    building2chopped32 = new ChoppedBuilding2(180,0,20);
    building2chopped33 = new ChoppedBuilding2(140,0,20);
    building2chopped34 = new ChoppedBuilding2(100,0,20);
    building2chopped35 = new ChoppedBuilding2(60,0,20);
    building2chopped36 = new ChoppedBuilding2(20,0,20);



    


   






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
            
            
            if (distance(building.obj,attack.hitbox)< 10){
            for(let wall of building.walls){
                building.makeDynamic(wall);
                // if(distance(attack.hitbox, wall) <= 10){
                // }
            }
            }
            if(attack.animated) {
                attack.remove();
                attacks.splice(i,1);
            }


        } else if (attack instanceof Bullet){
            attack.fire();
            if (distance(building.obj,attack.obj)< 10){
                for(let wall of walls){
                        building.makeDynamic(wall);
                    // if(distance(attack.obj, wall) <= 10){
                    // }
                }
            }
            if(attack.obj && distance(camera,attack.obj) > 200){
                attack.remove()
                attacks.splice(i,1);
            }


        } else if (attack instanceof Meteor){
            attack.fire();

            
            if (distance(building.obj,attack.obj)<14 || checkMeteorHitbox(attack,building.obj)){
                for(let wall of walls){
                    building.makeDynamic(wall);
                    // if(distance(attack.obj, wall) <= 14 || checkMeteorHitbox(attack,wall) ){
                        
                    // }
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
            
            if (distance(building.obj,attack.hitboxposition)< 16){
                for(let wall of walls){
                    building.makeDynamic(wall);
                    // if(distance(attack.hitboxposition, wall) <= 16){
                        
                    // }
                }
            }
        }
    })


    window.requestAnimationFrame(loop)

}

