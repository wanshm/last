class GlassBoxz{
  constructor(x,y,z){
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("color","#00ffff");
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

class pillarChopped{
  constructor(x,y,z){;

    let pillarA = document.createElement("a-box");
    pillarA.setAttribute("color","#ff0000");
    pillarA.setAttribute("position","0 0 0");
    pillarA.setAttribute("height","1");
    pillarA.setAttribute("width","0.2");
    pillarA.setAttribute("depth","0.2");
    pillarA.setAttribute("force-pushable", "");
    pillarA.setAttribute("static-body", " ");
    this.obj = pillarA;

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }}

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

        let floor2 = new FloorBase(0,3,0);
        floor2.obj.setAttribute("scale","1.5 1 1.5")
        this.obj.append( floor2.obj );

        let floor3 = new FloorBase(0,6,0);
        floor3.obj.setAttribute("scale","1.5 1 1.5")
        this.obj.append( floor3.obj );

        let floor4 = new FloorBase(0,9,0);
        floor4.obj.setAttribute("scale","1.5 1 1.5")
        this.obj.append( floor4.obj );

        let floor5 = new FloorBase(0,12,0);
        floor5.obj.setAttribute("scale","1.5 1 1.5")
        this.obj.append( floor5.obj );

        let floor6 = new FloorBase(0,15,0);
        floor6.obj.setAttribute("scale","1.5 1 1.5")
        this.obj.append( floor6.obj );

        let floor7 = new FloorBase(0,18,0);
        floor7.obj.setAttribute("scale","1.5 1 1.5")
        this.obj.append( floor7.obj )

        let floor8 = new FloorBase(0,21,0);
        floor8.obj.setAttribute("scale","1.5 1 1.5")
        this.obj.append( floor8.obj );

        let floor9 = new FloorBase(0,24,0);
        floor9.obj.setAttribute("scale","1.5 1 1.5")
        this.obj.append( floor9.obj );

        let pillarA = new pillarChopped(11,14.5,11);
        pillarA.obj.setAttribute("scale","2.7 28 2.7");
        this.obj.append( pillarA.obj );

        let pillarB = new pillarChopped(-11,14.5,11);
        pillarB.obj.setAttribute("scale","2.7 28 2.7");
        this.obj.append( pillarB.obj );

        let pillarC = new pillarChopped(-11,14.5,-11);
        pillarC.obj.setAttribute("scale","2.7 28 2.7");
        this.obj.append( pillarC.obj );

        let pillarD = new pillarChopped(11,14.5,-11);
        pillarD.obj.setAttribute("scale","2.7 28 2.7");
        this.obj.append( pillarD.obj );

        let door = document.createElement("a-box");
        door.setAttribute("src","Images/Door/Door.png");
        door.setAttribute("position","0 2 11");
        door.setAttribute("scale","1 0.7 0.8");
        door.setAttribute("height","4");
        door.setAttribute("width","3");
        door.setAttribute("depth","0.5");
        door.setAttribute("force-pushable", "");
        door.setAttribute("static-body", " ");
        this.obj.append( door );

        this.obj.setAttribute("position",{x:x, y:y, z:z});
        this.obj.setAttribute("rotation","0 -90 0");
        scene.append( this.obj )
    

      

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
    }

    remove(){
      if(this.obj.parentNode)
        this.obj.parentNode.removeChild(this.obj);
    }
    checkCollsion(position,radius){
      const absp = this.obj.object3D.position
      if (distance2(position,absp)>radius){
        return false;
      }
      const xrange = [absp.x+7.5,absp.x-7.5]
      const yrange = [absp.y+29,absp.y]
      const zrange = [absp.z+7.5,absp.z-7.5]

      // console.log(position)

      if(
        rangeCheck(xrange,position.x) &&
        rangeCheck(yrange,position.y) &&
        rangeCheck(zrange,position.z)
      ){
        return true;
      }
      return false;
    }
}