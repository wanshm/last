class pillarOpti{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");

    let pillarA = document.createElement("a-box");
    pillarA.setAttribute("color","#000000");
    pillarA.setAttribute("position","0 1 0");
    pillarA.setAttribute("height","3");
    pillarA.setAttribute("width","0.2");
    pillarA.setAttribute("depth","0.2");
    pillarA.setAttribute("force-pushable", "");
    pillarA.setAttribute("static-body", " ");
    this.obj.append( pillarA );

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}

class Floor1Opti{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
    
    let pillarA = new pillarOpti(11,5.2,11);
    pillarA.obj.setAttribute("scale","2.5 9.3 2.5");
    this.obj.append( pillarA.obj );

    let pillarB = new pillarOpti(11,5.2,-11);
    pillarB.obj.setAttribute("scale","2.5 9.3 2.5");
    this.obj.append( pillarB.obj );

    let pillarC = new pillarOpti(-11,5.2,11);
    pillarC.obj.setAttribute("scale","2.5 9.3 2.5");
    this.obj.append( pillarC.obj );

    let pillarD = new pillarOpti(-11,5.2,-11);
    pillarD.obj.setAttribute("scale","2.5 9.3 2.5");
    this.obj.append( pillarD.obj );

    let pillarA1 = new pillarOpti(-6.3,5.2,11);
    pillarA1.obj.setAttribute("scale","1 9.3 1");
    this.obj.append( pillarA1.obj );

    let pillarB2 = new pillarOpti(6.3,5.2,11);
    pillarB2.obj.setAttribute("scale","1 9.3 1");
    this.obj.append( pillarB2.obj );

    let pillarA3 = new pillarOpti(-1.8,5.2,11);
    pillarA3.obj.setAttribute("scale","1.5 9.3 1.5")
    this.obj.append( pillarA3.obj );

    let doorPillar2 = new pillarOpti(1.8,5.2,11);
    doorPillar2.obj.setAttribute("scale","1.5 9.3 1.5")
    this.obj.append( doorPillar2.obj );

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }}

    class Building2Opti{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");
        this.walls = [];

        let base = new FloorBase(0,0,0);
        base.obj.setAttribute("scale","1.5 1 1.5")
        base.obj.setAttribute("static-body", " ");
        this.obj.append( base.obj );

        let Floor1 = new Floor1Opti(0,0,0);
        this.obj.append( Floor1.obj );



    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
    
    } 

}