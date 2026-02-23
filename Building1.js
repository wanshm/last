class Building2WallsAndFloor{
    constructor(x,y,z){
      this.obj = document.createElement("a-entity");

// Left walls
      let longwall1 = new LongWall(0,-0.1,0);
        this.obj.append( longwall1.obj );

      let longwall3 = new LongWall(-14.69478,0.9,0);
        longwall3.obj.setAttribute("rotation",{x:0, y:180, z:0});
        this.obj.append( longwall3.obj );
      
      let longwall4 = new LongWall(0,1.9,0);
        this.obj.append( longwall4.obj );
// -------------------------------------------------------------------
// Right walls
      let longwall2 = new LongWall(0,-0.1,0);
        longwall2.obj.setAttribute("rotation",{x:0, y:180, z:0});
        this.obj.append( longwall2.obj );

      let longwall5 = new LongWall(14.69478,0.9,0);
        longwall5.obj.setAttribute("rotation",{x:0, y:0, z:0});
        this.obj.append( longwall5.obj );

      let longwall6 = new LongWall(0,1.9,0);
        longwall6.obj.setAttribute("rotation",{x:0, y:180, z:0});
        this.obj.append( longwall6.obj );

// Back walls
      let backwall1 = new LongWall(0,-0.1,-14.69478);
        backwall1.obj.setAttribute("rotation",{x:0, y:90, z:0});
        backwall1.obj.setAttribute("scale","1 1 0.96");
        this.obj.append( backwall1.obj );

      let backwall2 = new LongWall(0,0.9,-14.69478);
        backwall2.obj.setAttribute("rotation",{x:0, y:90, z:0});
        backwall2.obj.setAttribute("scale","1 1 0.96");
        this.obj.append( backwall2.obj );

      let backwall3 = new LongWall(0,1.9,-14.69478);
        backwall3.obj.setAttribute("rotation",{x:0, y:90, z:0});
        backwall3.obj.setAttribute("scale","1 1 0.96");
        this.obj.append( backwall3.obj );

// Front walls
      let frontwall1 = new FrontWall(0,0,0);
        this.obj.append( frontwall1.obj );

      let frontwall2 = new FrontWall(-3,0,0);
        this.obj.append( frontwall2.obj );

      let frontwall3 = new FrontWall(-9,0,0);
        this.obj.append( frontwall3.obj );

      let frontwall4 = new FrontWall(-12,0,0);
        this.obj.append( frontwall4.obj );

      let doorwall = new DoorWall(-3.5,1,7.5);
        doorwall.obj.setAttribute("rotation",{x:0, y:-90, z:0});
        doorwall.obj.setAttribute("scale","1 1.05 0.665");
        this.obj.append( doorwall.obj );
      
      
        


// -------------------------------------------------------------------
      let base2 = new FloorBase(0,3.1,0);
        base2.obj.setAttribute("static-body", " mass:100; shape: box; ");
        base2.obj.setAttribute("scale", "1.001 1.001 1.001");
        this.obj.append( base2.obj );

      this.obj.setAttribute("position",{x:x, y:y, z:z});
      scene.append( this.obj )
  }}


class Building1{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");
        this.walls = [];

        let base = new FloorBase(0,0,0);
        base.obj.setAttribute("static-body", " ");
        this.obj.append( base.obj );

        let wallsandfloor = new Building2WallsAndFloor(0,0,0);
        this.obj.append( wallsandfloor.obj );
        this.extractWalls(wallsandfloor);

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
    }

    extractWalls(wallsandfloor){
      const findWalls = (element) => {
        for(let child of element.children){
          if(child.tagName === 'A-BOX'){
            this.walls.push(child);
          } else {
            findWalls(child);
          }
        }
      };
      findWalls(wallsandfloor.obj);
    }

    makeDynamic(wallBox){
      if(wallBox.getAttribute("dynamic-body"));
      wallBox.removeAttribute("static-body");
      wallBox.setAttribute("dynamic-body", " mass:70; shape: box; ");
    }

}