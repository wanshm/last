class Building1{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");

        let base = new FloorBase(0,0,0);
        base.obj.setAttribute("static-body", " ");
        this.obj.append( base.obj );

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
    }
}