let camera, scene, attacks= [], hotbarinfo = ["Slash","Bullet","Spells"],hotbaritems=[], hotbarselection=0, book, building, walls=[], spells=[], activespell;
//initialization
window.addEventListener("DOMContentLoaded",function (){
    
    camera = document.querySelector("#camerarig")
    scene = document.querySelector("a-scene");
    const box = document.createElement("a-box");
    box.setAttribute("color","blue");
    box.setAttribute("dynamic-body","mass:0.0001; shape: box;");
    box.setAttribute("position","0 25.5 0");
    scene.append(box);
  
    building = new Building1(0,0,-5);
    walls = building.walls;

    

    

    console.log(camera)

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
    switch(book.selection){
        case 0:
            // console.log(spells)
            const las = spells.find((spell)=>{return spell instanceof Laser})
            const met = new Meteor(las.laser.object3D.rotation.x);
            attacks.push(met);
            break;
    }
    }
})

//wheel listener
window.addEventListener("wheel",(e)=>{
    spells.forEach((spell)=>{

        //meteor laser stuff

        if(spell instanceof Laser){
            rot = spell.laser.object3D.rotation;
        
            //turn down
            if(e.deltaY > 0 && rot.x < -.1){
            if(e.shiftKey){
                spell.laser.object3D.rotation.set(
                    rot.x+(Math.PI/180),
                    rot.y,
                    rot.z
                )
            } else{
                spell.laser.object3D.rotation.set(
                    rot.x+(5*Math.PI/180),
                    rot.y,
                    rot.z
                )
            }
            }

            //turn up
            if(e.deltaY < 0  && rot.x > -1){
            if(e.shiftKey){
                spell.laser.object3D.rotation.set(
                    rot.x-(Math.PI/180),
                    rot.y,
                    rot.z
                )
            } else{
                spell.laser.object3D.rotation.set(
                    rot.x-(5*Math.PI/180),
                    rot.y,
                    rot.z
                )
            }
            }
        }
    })
  })

//keyboard listener
window.addEventListener("keydown",function(e){

    //hotbar switch
    switch(e.key){
        case "1":
            if(hotbarselection==0){
                break;
                //prevent reselection
            }
            
            //hotbar selection update
            hotbaritems[0].select()
            hotbarselection=0;
            break;
        case "2":
            if(hotbarselection==1){
                break;
                //prevent reselection
            }

            //hotbar update
            hotbaritems[1].select()
            hotbarselection=1;
            break;
        case "3":
            if(hotbarselection==2){
                break;
                //prevent reselection
            }
            
            book.appear()
            switch (book.selection){
                case 0:
                    //meteor
                    las = new Laser()
                    spells.push(las);
                    break;
            }

            //hotbar update
            hotbaritems[2].select()
            hotbarselection=2;
            break;
    }

    //on book deselect
    if(hotbarselection!==2){
        book.disappear()
        spells.forEach((spell,i)=>{
            if(spell instanceof Laser){
                spell.removeLaser();
                spells.splice(i,1);
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
        book.animateAppear()
    }
    if (book.disappearing){
        book.animateDisappear();
    }

    //hotbar tracking
    hotbaritems.forEach((item)=>{
        item.followCam()
    })

    //spell animations
    spells.forEach((spell,i)=>{
        if(spell instanceof Laser){
            spell.followCam();
            // spell.fire()
        }
    })

    //attack animations
    attacks.forEach((attack,i)=>{
        if(attack instanceof Slash){
            attack.animate();
            for(let wall of walls){
              if(distance(attack.slash, wall) <= 5){
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
            if(attack.obj && distance(camera,attack.obj)> 200){
                attack.remove()
                attacks.splice(i,1);
            }
        } else if (attack instanceof Meteor){
            attack.fire();

            if(attack.obj.object3D.position.y < 0){
                attack.explode();
                if(attack.exprad>50){
                    attack.remove();
                    attacks.splice(i,1);
                }
            }
        }
    })


    window.requestAnimationFrame(loop)

}

