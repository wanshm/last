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
    // wall.setAttribute("color","#000000");
    wall.setAttribute("material", "src", "Images/Bricks.png");
    wall.setAttribute("position","-0.1 1.17 -6.75");
    wall.setAttribute("height","1");
    wall.setAttribute("width","0.3");
    wall.setAttribute("depth","1.5");
    wall.setAttribute("force-pushable", "");
    wall.setAttribute("static-body", "");

    this.obj.append( wall );

    let wall2 = document.createElement("a-box");
    // wall2.setAttribute("color","#fcf700");
    wall2.setAttribute("material", "src", "Images/Bricks.png");
    wall2.setAttribute("position","-0.1 1.17 -5.25");
    wall2.setAttribute("height","1");
    wall2.setAttribute("width","0.3");
    wall2.setAttribute("depth","1.5");
    wall2.setAttribute("force-pushable", "");
    wall2.setAttribute("static-body", " ");

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


  } }

  class FrontWall{
    constructor(x,y,z){
    this.obj = document.createElement("a-entity");
    let frontwall1 = new Wall1(0,-0.1,7.5);
        frontwall1.obj.setAttribute("rotation",{x:0, y:-90, z:0});
        this.obj.append( frontwall1.obj );
      
      let frontwall2 = new Wall1(0,0.9,7.5);
        frontwall2.obj.setAttribute("rotation",{x:0, y:-90, z:0});
        this.obj.append( frontwall2.obj );

      let frontwall3 = new Wall1(0,1.9,7.5);
        frontwall3.obj.setAttribute("rotation",{x:0, y:-90, z:0});
        this.obj.append( frontwall3.obj );

      this.obj.setAttribute("position",{x:x, y:y, z:z});
      scene.append( this.obj )
  }
}
  class DoorWall{
    constructor(x,y,z){
    this.obj = document.createElement("a-entity");

    let doorl = document.createElement("a-box");
    doorl.setAttribute("position","-0.1 2 -6.75");
    doorl.setAttribute("height","1");
    doorl.setAttribute("width","0.3");
    doorl.setAttribute("depth","1.5");
    doorl.setAttribute("force-pushable", "");
    doorl.setAttribute("static-body", "");
    doorl.setAttribute("material", "src", "Images/Door/Door3.png");

    this.obj.append( doorl );

    let door2 = document.createElement("a-box");
    door2.setAttribute("position","-0.1 2 -5.25");
    door2.setAttribute("height","1");
    door2.setAttribute("width","0.3");
    door2.setAttribute("depth","1.5");
    door2.setAttribute("force-pushable", "");
    door2.setAttribute("static-body", "");
    door2.setAttribute("material", "src", "Images/Door/Door2.png");

    this.obj.append( door2 );

    let door3 = document.createElement("a-box");
    door3.setAttribute("position","-0.1 2 -3.75");
    door3.setAttribute("height","1");
    door3.setAttribute("width","0.3");
    door3.setAttribute("depth","1.5");
    door3.setAttribute("force-pushable", "");
    door3.setAttribute("static-body", "");
    door3.setAttribute("material", "src", "Images/Door/Door1.png");

    this.obj.append( door3 );

    let door4 = document.createElement("a-box");
    door4.setAttribute("position","-0.1 1 -3.75");
    door4.setAttribute("height","1");
    door4.setAttribute("width","0.3");
    door4.setAttribute("depth","1.5");
    door4.setAttribute("force-pushable", "");
    door4.setAttribute("static-body", "");
    door4.setAttribute("material", "src", "Images/Door/Door4.png");

    this.obj.append( door4 );

    let door5 = document.createElement("a-box");
    door5.setAttribute("position","-0.1 1 -6.75");
    door5.setAttribute("height","1");
    door5.setAttribute("width","0.3");
    door5.setAttribute("depth","1.5");
    door5.setAttribute("force-pushable", "");
    door5.setAttribute("static-body", "");
    door5.setAttribute("material", "src", "Images/Door/Door6.png");

    this.obj.append( door5 );

    let door6 = document.createElement("a-box");
    door6.setAttribute("position","-0.1 1 -5.25");
    door6.setAttribute("height","1");
    door6.setAttribute("width","0.3");
    door6.setAttribute("depth","1.5");
    door6.setAttribute("force-pushable", "");
    door6.setAttribute("static-body", "");
    door6.setAttribute("material", "src", "Images/Door/Door5.png");

    this.obj.append( door6 );

    let door7 = document.createElement("a-box");
    door7.setAttribute("position","-0.1 0 -3.75");
    door7.setAttribute("height","1");
    door7.setAttribute("width","0.3");
    door7.setAttribute("depth","1.5");
    door7.setAttribute("force-pushable", "");
    door7.setAttribute("static-body", "");
    door7.setAttribute("material", "src", "Images/Door/Door7.png");

    this.obj.append( door7 );

    let door8 = document.createElement("a-box");
    door8.setAttribute("position","-0.1 0 -5.25");
    door8.setAttribute("height","1");
    door8.setAttribute("width","0.3");
    door8.setAttribute("depth","1.5");
    door8.setAttribute("force-pushable", "");
    door8.setAttribute("static-body", "");
    door8.setAttribute("material", "src", "Images/Door/Door8.png");

    this.obj.append( door8 );

    let door9 = document.createElement("a-box");
    door9.setAttribute("position","-0.1 0 -6.75");
    door9.setAttribute("height","1");
    door9.setAttribute("width","0.3");
    door9.setAttribute("depth","1.5");
    door9.setAttribute("force-pushable", "");
    door9.setAttribute("static-body", "");
    door9.setAttribute("material", "src", "Images/Door/Door9.png");

    this.obj.append( door9 );
    
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

class Building2WallsAndFloor2{
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

      let frontwall5 = new FrontWall(-6,0,0);
        this.obj.append( frontwall5.obj );

      
      
        


// -------------------------------------------------------------------
      let base2 = new FloorBase(0,3.1,0);
        base2.obj.setAttribute("static-body", " mass:100; shape: box; ");
        base2.obj.setAttribute("scale", "1.001 1.001 1.001");
        this.obj.append( base2.obj );

      this.obj.setAttribute("position",{x:x, y:y, z:z});
      scene.append( this.obj )
  }}


  class RoofBlocks{
    constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let wall1 = document.createElement("a-box");
    // wall1.setAttribute("color","#ffffff");
    wall1.setAttribute("material", "src", "Images/Roof.png");
    wall1.setAttribute("position","-0.1 1.17 -6.75");
    wall1.setAttribute("height","1");
    wall1.setAttribute("width","0.1");
    wall1.setAttribute("depth","1.5");
    wall1.setAttribute("force-pushable", "");
    wall1.setAttribute("static-body", "");

    this.obj.append( wall1 );

    let wall2 = document.createElement("a-box");
    // wall2.setAttribute("color","#fcf700");
    wall2.setAttribute("material", "src", "Images/Roof.png");
    wall2.setAttribute("position","-0.1 1.17 -5.25");
    wall2.setAttribute("height","1");
    wall2.setAttribute("width","0.1");
    wall2.setAttribute("depth","1.5");
    wall2.setAttribute("force-pushable", "");
    wall2.setAttribute("static-body", " ");

    this.obj.append( wall2 );
    
    this.obj.setAttribute("position",{x:x, y:y, z:z});
  }
}

class longRoof{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");

    let roof = new RoofBlocks(4.8,3.6,-1.3);
    roof.obj.setAttribute("rotation",{x:0, y:90, z:45});
    this.obj.append( roof.obj );

    let roof2 = new RoofBlocks(7.8,3.6,-1.3);
    roof2.obj.setAttribute("rotation",{x:0, y:90, z:45});
    this.obj.append( roof2.obj );

    let roof3 = new RoofBlocks(10.8,3.6,-1.3);
    roof3.obj.setAttribute("rotation",{x:0, y:90, z:45});
    this.obj.append( roof3.obj );

    let roof4 = new RoofBlocks(13.8,3.6,-1.3);
    roof4.obj.setAttribute("rotation",{x:0, y:90, z:45});
    this.obj.append( roof4.obj );

    let roof5 = new RoofBlocks(16.8,3.6,-1.3);
    roof5.obj.setAttribute("rotation",{x:0, y:90, z:45});
    this.obj.append( roof5.obj );
   
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}

class roof2{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");

    let longroof = new longRoof(0,0,0);
    this.obj.append( longroof.obj );

    let longroof2 = new longRoof(0,-0.7,-0.7);
    this.obj.append( longroof2.obj );

    let longroof3 = new longRoof(0,-1.4,-1.4);
    this.obj.append( longroof3.obj );

    let longroof4 = new longRoof(0,-2.1,-2.1);
    this.obj.append( longroof4.obj );

    let longroof5 = new longRoof(0,-2.8,-2.8);
    this.obj.append( longroof5.obj );

    let longroof6 = new longRoof(0,-3.5,-3.5);
    this.obj.append( longroof6.obj );

    let longroof7 = new longRoof(0,-4.2,-4.2);
    this.obj.append( longroof7.obj );

    let longroof8 = new longRoof(0,-4.9,-4.9);
    this.obj.append( longroof8.obj );

    let longroof9 = new longRoof(0,-5.6,-5.6);
    this.obj.append( longroof9.obj );

    let longroof10 = new longRoof(0,-6.3,-6.3);
    this.obj.append( longroof10.obj );

    let longroof11 = new longRoof(0,-6.7,-6.7);
    this.obj.append( longroof11.obj );

    let triangularRoof = document.createElement("a-triangle");
    // triangularRoof.setAttribute("color","#00ff80");
    triangularRoof.setAttribute("material", "src", "Images/Wood.png");
    triangularRoof.setAttribute("repeat", "5 5");
    triangularRoof.setAttribute("position","-2.7 1.5 0");
    triangularRoof.setAttribute("rotation",{x:0, y:0, z:90});
    triangularRoof.setAttribute("side","double");
    triangularRoof.setAttribute("vertex-a","3.3 0 0");
    triangularRoof.setAttribute("vertex-b","-4.2 0 -7.5");
    triangularRoof.setAttribute("vertex-c","-4.2 0 7.5");
    triangularRoof.setAttribute("force-pushable", "");
    triangularRoof.setAttribute("static-body", " ");

    this.obj.append( triangularRoof );

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}



