class Floor1Base{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let base = document.createElement("a-box");
    base.setAttribute("color","red");
    base.setAttribute("position","0 0.5 0");
    base.setAttribute("height","0.1");
    base.setAttribute("width","15");
    base.setAttribute("depth","15");
    // base.setAttribute("dynamic-body", " mass:0.1; shape: box; ");
    this.obj.append( base );
    
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  } 
}

class Building3{
    constructor(x,y,z){
      this.obj = document.createElement("a-entity");

      let base = new FloorBase(0,0,0);
        base.obj.setAttribute("static-body", " ");
        this.obj.append( base.obj );

      let wallsandfloor = new Building2WallsAndFloor(0,0,0);
        this.obj.append( wallsandfloor.obj );
      
     

      this.obj.setAttribute("position",{x:x, y:y, z:z});
      scene.append( this.obj )



    const pinkWalls = [];

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