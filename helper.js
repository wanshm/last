function randInt(u,l){
    return parseInt(Math.random()*(u-l)+l)
}

function distance(obj1, obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}

function distance2(obj1,obj2){
  return Math.sqrt(Math.pow(obj1.x-obj2.x,2) + Math.pow(obj1.y-obj2.y,2) + Math.pow(obj1.z-obj2.z,2))
}

function radiansToDegrees(r){
  return r / Math.PI *180;
}

function addspell(selection){
  //checks the spell&works accordingly
  switch (selection){
    case 0:
        //meteor
        return new Laser();
    case 1:
        //earthwall
        return new Locator();
}
}

function checkMeteorHitbox(meteor, stuff){
  //checks if meteor's explosion comes in contact with things
  //returns boolean
  let bool = false;
  const atkp = meteor.obj.object3D.position;
  meteor.hitboxes.forEach((hitbox) => {
    const hbp = hitbox.box.object3D.position 
    if(distance2({x:atkp.x + hbp.x , y:atkp.y, z:atkp.z + hbp.z}, stuff.object3D.position) < 10){
      bool = true;
    }
  });
  return bool;
}

function sumPositions(array){
  const sump = {x:0,y:0,z:0};

  array.forEach((obj)=>{
    sump.x += obj.x;
    sump.y += obj.y
    sump.z += obj.z
  })

  return sump;
}


function clwalls(){
  
    //used this function to figure shit out, dont mind it
    console.log(walls[0].parentNode.parentNode.parentNode.parentNode)
    console.log(walls[0].parentNode.parentNode.parentNode)
    console.log(walls[0].parentNode.parentNode)
    console.log(walls[0].parentNode)
    console.log(walls[0])
    walls.forEach(wall => {
        const worldp = wall.parentNode.parentNode.parentNode.parentNode.object3D.position
        const layer1 =wall.parentNode.parentNode.parentNode.object3D.position
        const layer2 =wall.parentNode.parentNode.object3D.position
        const layer3 =wall.parentNode.object3D.position
        const layer4 =wall.object3D.position

        

        p = sumPositions([worldp,layer1,layer2,layer3,layer4])
      //this method yields some floating point error, lets hope that doesn't bite us
        console.log(p)
    });
    
}

function toggleloop(){
  looprunning= !looprunning;
  console.log(looprunning);
  if (looprunning){
    loop();
  }

}

function buildingswap(chopped,list,i){
  //on hold lmao
  const cp = chopped.obj.object3D.position
  // console.log(chopped.obj.components)\
  
  buildingA.obj.setAttribute("position",{x:cp.x,y:cp.y,z:cp.z})
  // const nb = new Building2(cp.x,cp.y,cp.z)
  list.push(buildingA)
  // console.log(nb)
  

  // console.log(cp)
  // scene.append(nb)
  list.splice(i,1)
  chopped.remove();


  // nb.walls.forEach((wall)=>{
  //   if(wall.components["static-body"]){
  //   // wall.components["static-body"].initBody();
  //   console.log(wall.components["static-body"].body)}
    
  // })
  // nb.generate()

}


//rangecheck functions take a range argument, which is an array with length 2. first value is the upper and second value is the lower bound.
function rangeCheck(range,point){
  if(point < range[0] && point > range[1]){
    return true;
  }
  return false;
}

function rangeCheckInclusive(range,point){

  if(point <= range[0] && point >= range[1]){
    return true;
  }
  return false;
}

function attackloop(){
  //attack animations
    attacks.forEach((attack,i)=>{
        if(attack instanceof Slash){
            attack.animate();
            
            buildings.forEach((building,i)=>{   
                if (building.checkCollsion(attack.hitbox.object3D.position,50)){
                    if(building instanceof ChoppedBuilding2){
                        buildingswap(building,buildings,i); 
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
                    if(building instanceof ChoppedBuilding2){
                        buildingswap(building,buildings,i)
                        
                    }
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
                    
                if (building.checkCollsion(attack.obj.object3D.position,50) || checkMeteorHitbox(attack,building.obj)){
                    if(building instanceof ChoppedBuilding2){
                        buildingswap(building,buildings,i)
                        
                    }
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
                    
                if (building.checkCollsion(attack.hitboxposition,50)){
                    if(building instanceof ChoppedBuilding2){
                        buildingswap(building,buildings,i)
                        
                    }
                    for(let wall of building.walls){
                        building.makeDynamic(wall);
                        // if(distance(attack.hitboxposition, wall) <= 16){
                            
                        // }
                    }
                }
            })
        }
    })
}