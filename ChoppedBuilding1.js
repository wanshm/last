class Building1ChoppedFloorBox{
  constructor(x,y,z){
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("position",{x:x, y:y, z:z});
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

    // let LeftRoof = new roof2(0,9.3,4.8);
    // LeftRoof.obj.setAttribute("rotation",{x:0, y:90, z:0});
    // scene.append( LeftRoof.obj );


    // let RightRoof = new roof2(0,9.3,-4.8);
    // RightRoof.obj.setAttribute("rotation",{x:0, y:-90, z:0});
    // scene.append( RightRoof.obj );

    let triangularRoof = document.createElement("a-triangle");
    triangularRoof.setAttribute("material", "src", "Images/Wood.png");
    triangularRoof.setAttribute("repeat", "5 5");
    triangularRoof.setAttribute("position","-2.7 1.5 0");
    triangularRoof.setAttribute("rotation",{x:0, y:0, z:90});
    triangularRoof.setAttribute("side","double");
    triangularRoof.setAttribute("vertex-a","3.3 0 0");
    triangularRoof.setAttribute("vertex-b","-4.2 0 -7.5");
    triangularRoof.setAttribute("vertex-c","-4.2 0 7.5");
    triangularRoof.setAttribute("static-body", " ");
    scene.append( triangularRoof );





}}