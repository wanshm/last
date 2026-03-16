class ChoppedBuilding1{
    constructor(x,y,z){;
    
    let base = new FloorBase(0,0,0);
    base.obj.setAttribute("scale","1.5 1 1.5")
    this.obj.append( base.obj );

    
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )

}}