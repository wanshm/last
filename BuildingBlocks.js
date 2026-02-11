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
