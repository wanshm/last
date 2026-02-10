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

class Wall2{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
    
    let wall = document.createElement("a-box");
    wall.setAttribute("color","#000000");
    wall.setAttribute("position","6.42 0.17 0.1");
    wall.setAttribute("rotation",{x:0, y:90, z:0});
    wall.setAttribute("height","1");
    wall.setAttribute("width","0.3");
    wall.setAttribute("depth","1.5");
    wall.setAttribute("force-pushable", "");
    wall.setAttribute("dynamic-body", " mass:60.1; shape: box; ");

    this.obj.append( wall );

    let wall2 = document.createElement("a-box");
    wall2.setAttribute("color","#ffee00");
    wall2.setAttribute("position","4.94 0.17 0.1");
    wall2.setAttribute("rotation",{x:0, y:90, z:0});
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

class BackWall{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
    
    let wall1 = new Wall2(0,0,0);
    this.obj.append( wall1.obj );

    let wall2 = new Wall2(-3,0,0);
    this.obj.append( wall2.obj );

    let wall3 = new Wall2(-6,0,0);
    this.obj.append( wall3.obj );

    let wall4 = new Wall2(-9,0,0);
    this.obj.append( wall4.obj );

    let wall5 = document.createElement("a-box");
    wall5.setAttribute("color","#00ff00");
    wall5.setAttribute("position","-6.0 0.17 0.1");
    wall5.setAttribute("rotation",{x:0, y:90, z:0});
    wall5.setAttribute("height","1");
    wall5.setAttribute("width","0.3");
    wall5.setAttribute("depth","2.4");
    wall5.setAttribute("force-pushable", "");
    wall5.setAttribute("dynamic-body", " mass:60.1; shape: box; ");

    this.obj.append( wall5 );
    

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }

}

class FrontWall{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");

    let wall1 = new Wall2(0,0,0);
    this.obj.append( wall1.obj );

    let wall2 = new Wall2(-3,0,0);
    this.obj.append( wall2.obj );

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
      let longwall2 = new LongWall(0,-0.1,0);
        longwall2.obj.setAttribute("rotation",{x:0, y:180, z:0});
        this.obj.append( longwall2.obj );

      let longwall5 = new LongWall(14.69478,0.9,0);
        longwall5.obj.setAttribute("rotation",{x:0, y:0, z:0});
        this.obj.append( longwall5.obj );

      let longwall6 = new LongWall(0,1.9,0);
        longwall6.obj.setAttribute("rotation",{x:0, y:180, z:0});
        this.obj.append( longwall6.obj );

// Back Wall----------------------------------------------------------
      let backwall = new BackWall(0,0.29,-7.4);
        this.obj.append( backwall.obj );

      let backwall2 = new BackWall(0,1.29,-7.2);
        backwall2.obj.setAttribute("rotation",{x:0, y:180, z:0});
        this.obj.append( backwall2.obj );

      let backwall3 = new BackWall(0,2.29,-7.4);
        this.obj.append( backwall3.obj );

// Front Wall---------------------------------------------------------
      let frontwall = new FrontWall(0,0.29,7.3);
        this.obj.append( frontwall.obj );

      let frontwall3 = new FrontWall(0,1.29,7.3);
        this.obj.append( frontwall3.obj );
      
      let frontwall2 = new FrontWall(0,2.29,7.3);
        this.obj.append( frontwall2.obj );

      let frontwall4 = new FrontWall(-8.5,0.29,7.3);
        this.obj.append( frontwall4.obj );
      
      let frontwall5 = new FrontWall(-8.5,1.29,7.3);
        this.obj.append( frontwall5.obj );

      let frontwall6 = new FrontWall(-8.5,2.29,7.3);
        this.obj.append( frontwall6.obj );

     let wall6 = document.createElement("a-box");
     wall6.setAttribute("id","DoorHinge");
      wall6.setAttribute("position","1.2 1.56 7.26"); // edge of CLOSED door
      wall6.setAttribute("height","3");
      wall6.setAttribute("width","0.001");
      wall6.setAttribute("depth","0.001");
      wall6.setAttribute("static-body","");
      wall6.setAttribute("visible","true");
      this.obj.append(wall6);

      let wall5 = document.createElement("a-box");
      wall5.setAttribute("color","#00ff00");
      wall5.setAttribute("position","0 1.56 7.26"); // CLOSED position
      wall5.setAttribute("rotation",{x:0, y:90, z:0});
      wall5.setAttribute("height","3");
      wall5.setAttribute("width","0.3");
      wall5.setAttribute("depth","2.4");
      // wall5.setAttribute("dynamic-body","mass: 10");
      // wall5.setAttribute(
      //   "constraint",
      //   "type: hinge; target: #DoorHinge; axis: 0 1 0; targetAxis: 0 1 0; pivot: 1.2 0 0; targetPivot: 0 0 0"
      // );
      this.obj.append(wall5);

// -------------------------------------------------------------------
      let base2 = new FloorBase(0,3.1,0);
        base2.obj.setAttribute("dynamic-body", " mass:100; shape: box; ");
        base2.obj.setAttribute("scale", "1.001 1.001 1.001");
        this.obj.append( base2.obj );

      this.obj.setAttribute("position",{x:x, y:y, z:z});
      scene.append( this.obj )
  }}

  class Building2{
    constructor(x,y,z){
      this.obj = document.createElement("a-entity");

      let base = new FloorBase(0,0,0);
        base.obj.setAttribute("static-body", " ");
        this.obj.append( base.obj );

      let wallsandfloor = new Building2WallsAndFloor(0,0,0);
        this.obj.append( wallsandfloor.obj );

      // let wallsandfloor2 = new Building2WallsAndFloor(0,4,0);
      //   // wallsandfloor2.obj.setAttribute("scale","0.99 0.99 0.99");
      //   this.obj.append( wallsandfloor2.obj );
      
     

      this.obj.setAttribute("position",{x:x, y:y, z:z});
      scene.append( this.obj )

      let pinkwall = document.createElement("a-box");
      pinkwall.setAttribute("color","pink");
      pinkwall.setAttribute("position","-7.519 1.7 0");
      pinkwall.setAttribute("height","20.1");
      pinkwall.setAttribute("width","0.01");
      pinkwall.setAttribute("depth","15");
      pinkwall.setAttribute("static-body", " ");
      pinkwall.setAttribute("opacity", "1");
      this.obj.append( pinkwall );

      let pinkwall2 = document.createElement("a-box");
      pinkwall2.setAttribute("color","pink");
      pinkwall2.setAttribute("position","-7.2 1.7 0");
      pinkwall2.setAttribute("height","2.1");
      pinkwall2.setAttribute("width","0.01");
      pinkwall2.setAttribute("depth","15");
      pinkwall2.setAttribute("static-body", " ");
      pinkwall2.setAttribute("opacity", "1");
      this.obj.append( pinkwall2 );

      let pinkwall3 = document.createElement("a-box");
      pinkwall3.setAttribute("color","pink");
      pinkwall3.setAttribute("position","7.519 1.7 0");
      pinkwall3.setAttribute("height","20.1");
      pinkwall3.setAttribute("width","0.01");
      pinkwall3.setAttribute("depth","15");
      pinkwall3.setAttribute("static-body", " ");
      pinkwall3.setAttribute("opacity", "1");
      this.obj.append( pinkwall3 );

      let pinkwall4 = document.createElement("a-box");
      pinkwall4.setAttribute("color","pink");
      pinkwall4.setAttribute("position","7.2 1.7 0");
      pinkwall4.setAttribute("height","2.1");
      pinkwall4.setAttribute("width","0.01");
      pinkwall4.setAttribute("depth","15");
      pinkwall4.setAttribute("static-body", " ");
      pinkwall4.setAttribute("opacity", "1");
      this.obj.append( pinkwall4 );

      let pinkwall5 = document.createElement("a-box");
      pinkwall5.setAttribute("color","pink");
      pinkwall5.setAttribute("position","0.2 1.7 7.26");
      pinkwall5.setAttribute("rotation",{x:0, y:90, z:0});
      pinkwall5.setAttribute("height","2.1");
      pinkwall5.setAttribute("width","0.01");
      pinkwall5.setAttribute("depth","13");
      pinkwall5.setAttribute("static-body", " ");
      pinkwall5.setAttribute("opacity", "1");
      this.obj.append( pinkwall5 );

      let pinkwall6 = document.createElement("a-box");
      pinkwall6.setAttribute("color","pink");
      pinkwall6.setAttribute("position","0.2 1.7 -7.22");
      pinkwall6.setAttribute("rotation",{x:0, y:90, z:0});
      pinkwall6.setAttribute("height","2.1");
      pinkwall6.setAttribute("width","0.01");
      pinkwall6.setAttribute("depth","13");
      pinkwall6.setAttribute("static-body", " ");
      pinkwall6.setAttribute("opacity", "1");
      this.obj.append( pinkwall6 );

      let pinkwall7 = document.createElement("a-box");
      pinkwall7.setAttribute("color","pink");
      pinkwall7.setAttribute("position","0.2 1.7 7.58");
      pinkwall7.setAttribute("rotation",{x:0, y:90, z:0});
      pinkwall7.setAttribute("height","20.1");
      pinkwall7.setAttribute("width","0.01");
      pinkwall7.setAttribute("depth","13");
      pinkwall7.setAttribute("static-body", " ");
      pinkwall7.setAttribute("opacity", "1");
      this.obj.append( pinkwall7 );

      let pinkwall8 = document.createElement("a-box");
      pinkwall8.setAttribute("color","pink");
      pinkwall8.setAttribute("position","0.2 1.7 -7.58");
      pinkwall8.setAttribute("rotation",{x:0, y:90, z:0});
      pinkwall8.setAttribute("height","20.1");
      pinkwall8.setAttribute("width","0.01");
      pinkwall8.setAttribute("depth","13");
      pinkwall8.setAttribute("static-body", " ");
      pinkwall8.setAttribute("opacity", "1");
      this.obj.append( pinkwall8 );

      let pinkwall9 = document.createElement("a-box");
      pinkwall9.setAttribute("color","pink");
      pinkwall9.setAttribute("position","-7.2 4.7 0");
      pinkwall9.setAttribute("height","2.2");
      pinkwall9.setAttribute("width","0.01");
      pinkwall9.setAttribute("depth","14");
      pinkwall9.setAttribute("static-body", " ");
      pinkwall9.setAttribute("opacity", "1");
      this.obj.append( pinkwall9 );

      let pinkwall10 = document.createElement("a-box");
      pinkwall10.setAttribute("color","pink");
      pinkwall10.setAttribute("position","7.2 4.7 0");
      pinkwall10.setAttribute("height","2.2");
      pinkwall10.setAttribute("width","0.01");
      pinkwall10.setAttribute("depth","14");
      pinkwall10.setAttribute("static-body", " ");
      pinkwall10.setAttribute("opacity", "1");
      this.obj.append( pinkwall10 );

      let pinkwall11 = document.createElement("a-box");
      pinkwall11.setAttribute("color","pink");
      pinkwall11.setAttribute("position","0.2 4.7 -7.22");
      pinkwall11.setAttribute("rotation",{x:0, y:90, z:0});
      pinkwall11.setAttribute("height","2.1");
      pinkwall11.setAttribute("width","0.01");
      pinkwall11.setAttribute("depth","13");
      pinkwall11.setAttribute("static-body", " ");
      pinkwall11.setAttribute("opacity", "1");
      this.obj.append( pinkwall11 );

      let pinkwall12 = document.createElement("a-box");
      pinkwall12.setAttribute("color","pink");
      pinkwall12.setAttribute("position","0.2 4.7 7.22");
      pinkwall12.setAttribute("rotation",{x:0, y:90, z:0});
      pinkwall12.setAttribute("height","2.1");
      pinkwall12.setAttribute("width","0.01");
      pinkwall12.setAttribute("depth","13");
      pinkwall12.setAttribute("static-body", " ");
      pinkwall12.setAttribute("opacity", "1");
      this.obj.append( pinkwall12 );

    const pinkWalls = [pinkwall, pinkwall2, pinkwall3, pinkwall4, pinkwall5, pinkwall6, 
                        pinkwall7, pinkwall8, pinkwall9, pinkwall10, pinkwall11, pinkwall12];

    setTimeout(() => {
      pinkWalls.forEach(wall => {
        wall.setAttribute("opacity", "0");
      });
    }, 0);

    setTimeout(() => {
      pinkWalls.forEach(wall => wall.remove());
    }, 2000);

      

      
  }

  

}