let 
    camera,
    scene,
    attacks= [],
    hotbarinfo = ["Slash","Bullet","Spells"],
    hotbaritems=[],
    hotbarselection=0,
    book,
    buildings =[],
    backlogbuildings =[],
    walls=[], 
    spell, 
    spellcount = 2, 
    buildingA, 
    looprunning=true,
    timestopped=false;

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
    // building.obj.addEventListener("collide",(e)=>{
    //     console.log("a")
    // })
    buildings.push(building)
    // walls = building.walls;


    // for(let i = 0; i<36;i++){
    //     const nb = new Building2(0,0,-5000);
    //     backlogbuildings.push(nb)
    // }    
    // scene.append(buildingA)
    buildingA = new Building2(0,0,-5000);
    // buildings.push(buildingA)
    // walls = buildingA.walls;
   
    // building2opti = new Building2Opti(-25,0,-5);

    for(let i = 0; i < 36 ; i++){
        const z = Math.floor(i/6)*40;
        const x = (i)%6*40;
        const bc = new ChoppedBuilding2(x+20,0,z+20)
        buildings.push(bc)
    }

    // for(let i = 0; i < 36 ; i++){
    //     const z = Math.floor(i/6)*40;
    //     const x = (i)%6*40;
    //     const bc = new Building2(x+20,-50000000,z+20)
    //     stashbuildings.push(bc)
    // }


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

    if(!timestopped){
        attackloop();
    }
    if(looprunning){
        window.requestAnimationFrame(loop)
    }
}

