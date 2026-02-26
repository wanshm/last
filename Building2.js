class Building2{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");
        // this.walls = [];

        let base = new FloorBase(0,0,0);
        base.obj.setAttribute("scale","1.5 1 1.5")
        base.obj.setAttribute("static-body", " ");
        this.obj.append( base.obj );

        let pillarCornerA = new pillar(11,1,11);
        pillarCornerA.obj.setAttribute("scale","2.5 1 2.5")
        this.obj.append( pillarCornerA.obj );

        let pillarCornerB = new pillar(-11,1,11);
        pillarCornerB.obj.setAttribute("scale","2.5 1 2.5")
        this.obj.append( pillarCornerB.obj );

        let pillarCornerC = new pillar(-11,1,-11);
        pillarCornerC.obj.setAttribute("scale","2.5 1 2.5")
        this.obj.append( pillarCornerC.obj );

        let pillarCornerD = new pillar(11,1,-11);
        pillarCornerD.obj.setAttribute("scale","2.5 1 2.5")
        this.obj.append( pillarCornerD.obj );

        let glassWallFront1 = new glassWall(8.5,0.5,11);
        glassWallFront1.obj.setAttribute("scale","1.5 1 1.5")
        glassWallFront1.obj.setAttribute("rotation",{x:0, y:90, z:0})
        this.obj.append( glassWallFront1.obj );

        let glassWallFront2 = new glassWall(-8.5,0.5,11);
        glassWallFront2.obj.setAttribute("scale","1.5 1 1.5")
        glassWallFront2.obj.setAttribute("rotation",{x:0, y:90, z:0})
        this.obj.append( glassWallFront2.obj );

        let pillarWallFrontA = new pillar(-6.3,1,11);
        pillarWallFrontA.obj.setAttribute("scale","1.5 1 1.5")
        this.obj.append( pillarWallFrontA.obj );

        let pillarWallFrontB = new pillar(6.3,1,11);
        pillarWallFrontB.obj.setAttribute("scale","1.5 1 1.5")
        this.obj.append( pillarWallFrontB.obj );

        let glassWallFront3 = new glassWall(4,0.5,11);
        glassWallFront3.obj.setAttribute("scale","1.5 1 1.5")
        glassWallFront3.obj.setAttribute("rotation",{x:0, y:90, z:0})
        this.obj.append( glassWallFront3.obj );

        let glassWallFront4 = new glassWall(-4,0.5,11);
        glassWallFront4.obj.setAttribute("scale","1.5 1 1.5")
        glassWallFront4.obj.setAttribute("rotation",{x:0, y:90, z:0})
        this.obj.append( glassWallFront4.obj );

        let doorPillar1 = new pillar(-1.8,1,11);
        doorPillar1.obj.setAttribute("scale","1.5 1 1.5")
        this.obj.append( doorPillar1.obj );

        let doorPillar2 = new pillar(1.8,1,11);
        doorPillar2.obj.setAttribute("scale","1.5 1 1.5")
        this.obj.append( doorPillar2.obj );

        let door = new DoorWall(-4.2,1,11.1);
        door.obj.setAttribute("scale","1 1 0.8")
        door.obj.setAttribute("rotation",{x:0, y:-90, z:0})
        this.obj.append( door.obj );



        
      

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
    
    } }

