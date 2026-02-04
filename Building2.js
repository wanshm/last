class FloorBase{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let base = document.createElement("a-box");
    base.setAttribute("color","red");
    base.setAttribute("position","0 0.5 0");
    base.setAttribute("height","0.1");
    base.setAttribute("width","15");
    base.setAttribute("depth","15");
    this.obj.append( base );
    
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  } 
}

class Wall1{
    constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let wall = document.createElement("a-box");
    wall.setAttribute("color","#000000");
    wall.setAttribute("position","-0.1 1.17 -6.75");
    wall.setAttribute("height","1");
    wall.setAttribute("width","0.3");
    wall.setAttribute("depth","1.5");
    wall.setAttribute("force-pushable", "");
    wall.setAttribute("dynamic-body", " mass:60.1; shape: box; ");

    this.obj.append( wall );

    let wall2 = document.createElement("a-box");
    wall2.setAttribute("color","#fcf700");
    wall2.setAttribute("position","-0.1 1.17 -5.25");
    wall2.setAttribute("height","1");
    wall2.setAttribute("width","0.3");
    wall2.setAttribute("depth","1.5");
    wall2.setAttribute("force-pushable", "");
    wall2.setAttribute("dynamic-body", " mass:60.1; shape: box; ");

    this.obj.append( wall2 );
    
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }

}

class LongWall{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");

    let wall1 = new Wall1(-7.25,0,0);
    this.obj.append( wall1.obj );

    let wall2 = new Wall1(-7.25,0,3);
    this.obj.append( wall2.obj );

    let wall3 = new Wall1(-7.25,0,6);
    this.obj.append( wall3.obj );

    let wall4 = new Wall1(-7.25,0,9);
    this.obj.append( wall4.obj );

    let wall5 = new Wall1(-7.25,0,12);
    this.obj.append( wall5.obj );


    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )


  }
} 

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
      // let longwall2 = new LongWall(0,-0.1,0);
      //   longwall2.obj.setAttribute("rotation",{x:0, y:180, z:0});
      //   this.obj.append( longwall2.obj );

      // let longwall5 = new LongWall(14.69478,0.9,0);
      //   longwall5.obj.setAttribute("rotation",{x:0, y:0, z:0});
      //   this.obj.append( longwall5.obj );

      // let longwall6 = new LongWall(0,1.9,0);
      //   longwall6.obj.setAttribute("rotation",{x:0, y:180, z:0});
      //   this.obj.append( longwall6.obj );
// -------------------------------------------------------------------
      // let base2 = new FloorBase(0,3.1,0);
      //   base2.obj.setAttribute("dynamic-body", " mass:100; shape: box; ");
      //   this.obj.append( base2.obj );

      // this.obj.setAttribute("position",{x:x, y:y, z:z});
      // scene.append( this.obj )
  }}

  class Building2{
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

}
