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


// -------------------------------------------------------------------
      let base2 = new FloorBase(0,3.1,0);
        base2.obj.setAttribute("dynamic-body", " mass:100; shape: box; ");
        base2.obj.setAttribute("scale", "1.001 1.001 1.001");
        this.obj.append( base2.obj );

      this.obj.setAttribute("position",{x:x, y:y, z:z});
      scene.append( this.obj )
  }}


class Building1{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");

        let base = new FloorBase(0,0,0);
        base.obj.setAttribute("static-body", " ");
        this.obj.append( base.obj );

        let wallsandfloor = new Building2WallsAndFloor(0,0,0);
        this.obj.append( wallsandfloor.obj );

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
    }

    ChangeDynamic(){
    if(this.shot){
      this.obj.children[0].setAttribute("dynamic-body", " mass:100; shape: box; ");
    }
  }
}