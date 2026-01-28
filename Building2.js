class Floor1Base{
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
    wall.setAttribute("color","#808080");
    wall.setAttribute("position","0 2.5 0");
    wall.setAttribute("height","5");
    wall.setAttribute("width","0.5");
    wall.setAttribute("depth","15");
    // wall.setAttribute("force-pushable", "");
    // wall.setAttribute("dynamic-body", " ");
    this.obj.append( wall );
    
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }

}

class building2{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");

    let base = new Floor1Base(0,0,0);
    // base.obj.setAttribute("static-body", " ");
    this.obj.append( base.obj );

    let wall1 = new Wall1(-7.25,0,0);
    this.obj.append( wall1.obj );


    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )


  }
}

