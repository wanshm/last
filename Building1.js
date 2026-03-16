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

        let wallsandfloor2 = new Building2WallsAndFloor2(0,3.1,0);
        this.obj.append( wallsandfloor2.obj );
        this.extractWalls(wallsandfloor2);

        let LeftRoof = new roof2(0,9.3,4.8);
        LeftRoof.obj.setAttribute("rotation",{x:0, y:90, z:0});
        this.obj.append( LeftRoof.obj );
        this.extractWalls(LeftRoof);

        let RightRoof = new roof2(0,9.3,-4.8);
        RightRoof.obj.setAttribute("rotation",{x:0, y:-90, z:0});
        this.obj.append( RightRoof.obj );
        this.extractWalls(RightRoof);

      

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    this.obj.setAttribute("class","b1")
    scene.append( this.obj )
    }

    extractWalls(wallsandfloor){
      const findWalls = (element) => {
        for(let child of element.children){
          if(child.tagName === 'A-BOX' || child.tagName === 'A-TRIANGLE'){
            this.walls.push(child);
          } else {
            findWalls(child);
          }
        }
      };
      findWalls(wallsandfloor.obj);
    }

    makeDynamic(wallBox){
      if(wallBox.getAttribute("static-body")){
        const lifenoise = randInt(0,500); 
        wallBox.setAttribute("ttl",`time:${500+lifenoise}`)
      }
      if(wallBox.getAttribute("dynamic-body"));
      this.obj.setAttribute("ttl","time:1000")
      wallBox.removeAttribute("static-body");
      wallBox.setAttribute("dynamic-body", " mass:70; shape: box; ");
    }
    checkCollsion(position,radius){
      const absp = this.obj.object3D.position
      if (distance2(position,absp)>radius){
        return false;
      }
      const xrange = [absp.x+7.5,absp.x-7.5]
      const yrange = [absp.y+16,absp.y]
      const zrange = [absp.z+7.5,absp.z-7.5]

      // console.log(position)

      if(
        rangeCheck(xrange,position.x) &&
        rangeCheck(yrange,position.y) &&
        rangeCheck(zrange,position.z)
      ){
        return true;
      }
      return false;
    }

}

