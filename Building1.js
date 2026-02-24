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

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
    }

    extractWalls(wallsandfloor){
      const findWalls = (element) => {
        for(let child of element.children){
          if(child.tagName === 'A-BOX'){
            this.walls.push(child);
          } else {
            findWalls(child);
          }
        }
      };
      findWalls(wallsandfloor.obj);
    }

    makeDynamic(wallBox){
      if(wallBox.getAttribute("dynamic-body"));
      wallBox.removeAttribute("static-body");
      wallBox.setAttribute("dynamic-body", " mass:70; shape: box; ");
    }

    extractWalls(wallsandfloor2){
      const findWalls = (element) => {
        for(let child of element.children){
          if(child.tagName === 'A-BOX'){
            this.walls.push(child);
          } else {
            findWalls(child);
          }
        }
      };
      findWalls(wallsandfloor2.obj);
    }

    makeDynamic(wallBox){
      if(wallBox.getAttribute("dynamic-body"));
      wallBox.removeAttribute("static-body");
      wallBox.setAttribute("dynamic-body", " mass:70; shape: box; ");
    }

}