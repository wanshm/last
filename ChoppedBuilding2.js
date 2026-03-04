class GlassBoxz{
  constructor(x,y,z){
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("color","#0000FF");
    this.obj.setAttribute("opacity","0.5");
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    this.obj.setAttribute("height","10");
    this.obj.setAttribute("width","10");
    this.obj.setAttribute("depth","10");
    this.obj.setAttribute("force-pushable", "");
    this.obj.setAttribute("static-body", " ");
    scene.append( this.obj )
  }
}

class ChoppedBuilding2{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");
        this.walls = [];

        let base = new FloorBase(0,0,0);
        base.obj.setAttribute("scale","1.5 1 1.5")
        this.obj.append( base.obj );

        let glassBox = new GlassBoxz(0,14.4,0);
        glassBox.obj.setAttribute("scale","2.2 2.8 2.2")
        this.obj.append( glassBox.obj );

        let topFloor = new FloorBase(0,28,0);
        topFloor.obj.setAttribute("scale","1.5 1 1.5")
        this.obj.append( topFloor.obj );


      

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
    }
}