class Building1ChoppedFloorBox{
  constructor(x,y,z){
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    this.obj.setAttribute("material", "src", "Images/Bricks.png");
    this.obj.setAttribute("repeat", "10 4");
    this.obj.setAttribute("height","3");
    this.obj.setAttribute("width","15");
    this.obj.setAttribute("depth","15");
    this.obj.setAttribute("force-pushable", "");
    this.obj.setAttribute("side","double");
    this.obj.setAttribute("static-body", " ");
    scene.append( this.obj )
  }
}



class ChoppedBuilding1{
    constructor(x,y,z){;
    
    let base1 = new FloorBase(0,0,0);
    base1.obj.setAttribute("static-body", " ");
    scene.append( base1.obj )


    let floor1Box = new Building1ChoppedFloorBox(0,2,0);
    scene.append( floor1Box.obj )

    let base2 = new FloorBase(0 , 3.04 , 0);
    scene.append( base2.obj );
    
    let floor2Box = new Building1ChoppedFloorBox(0,5.1,0);
    scene.append( floor2Box.obj )

    let base3 = new FloorBase(0 , 6.1 , 0);
    scene.append( base3.obj );

    let triangularRoof = document.createElement("a-triangle");
    triangularRoof.setAttribute("material", "src", "Images/Wood.png");
    triangularRoof.setAttribute("repeat", "5 5");
    triangularRoof.setAttribute("position","0 10.85 7.5");
    triangularRoof.setAttribute("rotation",{x:0, y:90, z:90});
    triangularRoof.setAttribute("side","double");
    triangularRoof.setAttribute("vertex-a","3.3 0 0");
    triangularRoof.setAttribute("vertex-b","-4.2 0 -7.5");
    triangularRoof.setAttribute("vertex-c","-4.2 0 7.5");
    triangularRoof.setAttribute("static-body", " ");
    scene.append( triangularRoof );

    let triangularRoof2 = document.createElement("a-triangle");
    triangularRoof2.setAttribute("material", "src", "Images/Wood.png");
    triangularRoof2.setAttribute("repeat", "5 5");
    triangularRoof2.setAttribute("position","0 10.85 -7.5");
    triangularRoof2.setAttribute("rotation",{x:0, y:90, z:90});
    triangularRoof2.setAttribute("side","double");
    triangularRoof2.setAttribute("vertex-a","3.3 0 0");
    triangularRoof2.setAttribute("vertex-b","-4.2 0 -7.5");
    triangularRoof2.setAttribute("vertex-c","-4.2 0 7.5");
    triangularRoof2.setAttribute("static-body", " ");
    scene.append( triangularRoof2 );

    let roof = document.createElement("a-box");
    roof.setAttribute("material", "src", "Images/Roof.png");
    roof.setAttribute("repeat", "10 10");
    roof.setAttribute("position","-3.7 10.4 0");
    roof.setAttribute("rotation", {x:0, y:0, z:45});
    roof.setAttribute("height","0.1");
    roof.setAttribute("side","double");
    roof.setAttribute("width","10.6");
    roof.setAttribute("depth","15");
    roof.setAttribute("class","base")
    scene.append( roof );

    let roof2 = document.createElement("a-box");
    roof2.setAttribute("material", "src", "Images/Roof.png");
    roof2.setAttribute("repeat", "10 10");
    roof2.setAttribute("position","3.7 10.4 0");
    roof2.setAttribute("rotation", {x:0, y:0, z:-45});
    roof2.setAttribute("height","0.1");
    roof2.setAttribute("side","double");
    roof2.setAttribute("width","10.6");
    roof2.setAttribute("depth","15");
    roof2.setAttribute("class","base")
    scene.append( roof2 );

    let door = document.createElement("a-box");
    door.setAttribute("src","Images/Door/Door.png");
    door.setAttribute("position","0 2 7.35");
    door.setAttribute("scale","1 0.7 0.8");
    door.setAttribute("height","4");
    door.setAttribute("width","3");
    door.setAttribute("depth","0.5");
    door.setAttribute("force-pushable", "");
    door.setAttribute("static-body", " ");
    scene.append( door );

    





}}