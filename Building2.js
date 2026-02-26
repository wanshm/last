class Building2{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");
        // this.walls = [];

        let base1 = new FloorBase(0,0,0);
        base1.obj.setAttribute("static-body", " ");
        this.obj.append( base1.obj );


        
      

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
    
    } }

