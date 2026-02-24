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
    wall.setAttribute("static-body", "");

    this.obj.append( wall );

    let wall2 = document.createElement("a-box");
    wall2.setAttribute("color","#fcf700");
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
    doorl.setAttribute("material", "src", "Door3.png");

    this.obj.append( doorl );

    let door2 = document.createElement("a-box");
    door2.setAttribute("position","-0.1 2 -5.25");
    door2.setAttribute("height","1");
    door2.setAttribute("width","0.3");
    door2.setAttribute("depth","1.5");
    door2.setAttribute("force-pushable", "");
    door2.setAttribute("static-body", "");
    door2.setAttribute("material", "src", "Door2.png");

    this.obj.append( door2 );

    let door3 = document.createElement("a-box");
    door3.setAttribute("position","-0.1 2 -3.75");
    door3.setAttribute("height","1");
    door3.setAttribute("width","0.3");
    door3.setAttribute("depth","1.5");
    door3.setAttribute("force-pushable", "");
    door3.setAttribute("static-body", "");
    door3.setAttribute("material", "src", "Door1.png");

    this.obj.append( door3 );

    let door4 = document.createElement("a-box");
    door4.setAttribute("position","-0.1 1 -3.75");
    door4.setAttribute("height","1");
    door4.setAttribute("width","0.3");
    door4.setAttribute("depth","1.5");
    door4.setAttribute("force-pushable", "");
    door4.setAttribute("static-body", "");
    door4.setAttribute("material", "src", "Door4.png");

    this.obj.append( door4 );

    let door5 = document.createElement("a-box");
    door5.setAttribute("position","-0.1 1 -6.75");
    door5.setAttribute("height","1");
    door5.setAttribute("width","0.3");
    door5.setAttribute("depth","1.5");
    door5.setAttribute("force-pushable", "");
    door5.setAttribute("static-body", "");
    door5.setAttribute("material", "src", "Door6.png");

    this.obj.append( door5 );

    let door6 = document.createElement("a-box");
    door6.setAttribute("position","-0.1 1 -5.25");
    door6.setAttribute("height","1");
    door6.setAttribute("width","0.3");
    door6.setAttribute("depth","1.5");
    door6.setAttribute("force-pushable", "");
    door6.setAttribute("static-body", "");
    door6.setAttribute("material", "src", "Door5.png");

    this.obj.append( door6 );

    let door7 = document.createElement("a-box");
    door7.setAttribute("position","-0.1 0 -3.75");
    door7.setAttribute("height","1");
    door7.setAttribute("width","0.3");
    door7.setAttribute("depth","1.5");
    door7.setAttribute("force-pushable", "");
    door7.setAttribute("static-body", "");
    door7.setAttribute("material", "src", "Door7.png");

    this.obj.append( door7 );

    let door8 = document.createElement("a-box");
    door8.setAttribute("position","-0.1 0 -5.25");
    door8.setAttribute("height","1");
    door8.setAttribute("width","0.3");
    door8.setAttribute("depth","1.5");
    door8.setAttribute("force-pushable", "");
    door8.setAttribute("static-body", "");
    door8.setAttribute("material", "src", "Door8.png");

    this.obj.append( door8 );

    let door9 = document.createElement("a-box");
    door9.setAttribute("position","-0.1 0 -6.75");
    door9.setAttribute("height","1");
    door9.setAttribute("width","0.3");
    door9.setAttribute("depth","1.5");
    door9.setAttribute("force-pushable", "");
    door9.setAttribute("static-body", "");
    door9.setAttribute("material", "src", "Door9.png");

    this.obj.append( door9 );
    
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
} 

