function clickHandler(e){
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
            attacks.push(new Meteor(spell.laser.object3D.rotation.x));
            break;
        case 1:
            attacks.push(new EarthWall(spell.locator.object3D.position.z));
            break;
    }

    }
}

function wheelHandler(e){
        
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

        //earthwall locator
        if(spell instanceof Locator){
            //thing goes back
            if(e.deltaY > 0 && spell.locator.object3D.position.z < 0){
                if(e.shiftKey){spell.locator.object3D.position.z++;} else spell.locator.object3D.position.z+=5;
            }
            //thing goes forwards
            if(e.deltaY < 0 && spell.locator.object3D.position.z > -100){
                if(e.shiftKey){spell.locator.object3D.position.z--;} else spell.locator.object3D.position.z-=5;
            }
        }
  }



  function keyboardHandler(e){

    //hotbar switch
    switch(e.key){
        case "q":
            if(book.selection == 0){
                book.selection = spellcount-1;
            } else book.selection--;
            
            spell && spell.remove()
            spell = addspell(book.selection);
            break;
        case "e":
            if(book.selection == spellcount-1 ){
                book.selection = 0;
            } else book.selection++;

            spell && spell.remove()
            spell = addspell(book.selection);
            break;

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
            
            spell = addspell(book.selection);

            //hotbar update
            hotbaritems[2].select()
            hotbarselection=2;
            break;

        case "r":    
            window.location.reload()
            break;
    }
    //disappear spells
    if(hotbarselection!==2){
        book.disappear()
        if(spell instanceof Laser){
            spell.remove()
        }
        if( spell instanceof Locator){
            spell.remove()
        }
        spell = undefined;
    }
    //deselects other hotbar items
    hotbaritems.filter((item,i)=>{return i !== hotbarselection}).forEach((item)=>{item.deselect();})

}