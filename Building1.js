class Floor1Base{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let base = document.createElement("a-box");
    base.setAttribute("color","red");
    base.setAttribute("position","0 0.5 0");
    base.setAttribute("height","0.1");
    base.setAttribute("width","15");
    base.setAttribute("depth","15");
    this.obj.append( base );
    
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  } 
}

class Floor1Wall{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");

    let floor1wall1 = document.createElement("a-box");
    floor1wall1.setAttribute("color","#B3B3B3");
    floor1wall1.setAttribute("position","0 3.6 -7");
    floor1wall1.setAttribute("height","0.3");
    floor1wall1.setAttribute("width","14.8");
    floor1wall1.setAttribute("depth","0.25");
    floor1wall1.setAttribute("side","double");
    floor1wall1.setAttribute("static-body", "true");
    this.obj.append( floor1wall1 );

    let floor1wall2 = document.createElement("a-box");
    floor1wall2.setAttribute("color","#B3B3B3");
    floor1wall2.setAttribute("position","-7.25 2.1 -7");
    floor1wall2.setAttribute("height","3.3");
    floor1wall2.setAttribute("width","0.35");
    floor1wall2.setAttribute("depth","0.25");
    floor1wall2.setAttribute("side","double");
    floor1wall2.setAttribute("static-body", "true");
    this.obj.append( floor1wall2 );

    let floor1wall3 = document.createElement("a-box");
    floor1wall3.setAttribute("color","#B3B3B3");
    floor1wall3.setAttribute("position","7.25 2.1 -7");
    floor1wall3.setAttribute("height","3.3");
    floor1wall3.setAttribute("width","0.35");
    floor1wall3.setAttribute("depth","0.25");
    floor1wall3.setAttribute("side","double");
    floor1wall3.setAttribute("static-body", "true");
    this.obj.append( floor1wall3 );

    let floor1wall4 = document.createElement("a-box");
    floor1wall4.setAttribute("color","#B3B3B3");
    floor1wall4.setAttribute("position","4.2 2.1 -7");
    floor1wall4.setAttribute("height","3.3");
    floor1wall4.setAttribute("width","0.35");
    floor1wall4.setAttribute("depth","0.25");
    floor1wall4.setAttribute("side","double");
    floor1wall4.setAttribute("static-body", "true");
    this.obj.append( floor1wall4 );

    let floor1wall5 = document.createElement("a-box");
    floor1wall5.setAttribute("color","#B3B3B3");
    floor1wall5.setAttribute("position","1.2 2.1 -7");
    floor1wall5.setAttribute("height","3.3");
    floor1wall5.setAttribute("width","0.35");
    floor1wall5.setAttribute("depth","0.25");
    floor1wall5.setAttribute("side","double");
    floor1wall5.setAttribute("static-body", "true");
    this.obj.append( floor1wall5 );

    let floor1wall6 = document.createElement("a-box");
    floor1wall6.setAttribute("color","#B3B3B3");
    floor1wall6.setAttribute("position","-1.75 2.1 -7");
    floor1wall6.setAttribute("height","3.3");
    floor1wall6.setAttribute("width","0.35");
    floor1wall6.setAttribute("depth","0.25");
    floor1wall6.setAttribute("side","double");
    floor1wall6.setAttribute("static-body", "true");
    this.obj.append( floor1wall6 );

    let floor1wall7 = document.createElement("a-box");
    floor1wall7.setAttribute("color","#B3B3B3");
    floor1wall7.setAttribute("position","-4.67 2.1 -7");
    floor1wall7.setAttribute("height","3.3");
    floor1wall7.setAttribute("width","0.35");
    floor1wall7.setAttribute("depth","0.25");
    floor1wall7.setAttribute("side","double");
    floor1wall7.setAttribute("static-body", "true");
    this.obj.append( floor1wall7 );

    let floor1window1 = document.createElement("a-box");
    floor1window1.setAttribute("color","#D7DFD8");
    floor1window1.setAttribute("opacity","0.3");
    floor1window1.setAttribute("position","5.725 2.1 -7");
    floor1window1.setAttribute("height","3.2");
    floor1window1.setAttribute("width","2.7");
    floor1window1.setAttribute("depth","0.15");
    floor1window1.setAttribute("side","double");
    floor1window1.setAttribute("dynamic-body", "true");
    this.obj.append( floor1window1 );

    let floor1window2 = document.createElement("a-box");
    floor1window2.setAttribute("color","#D7DFD8");
    floor1window2.setAttribute("opacity","0.3");
    floor1window2.setAttribute("position","2.725 2.1 -7");
    floor1window2.setAttribute("height","3.2");
    floor1window2.setAttribute("width","2.7");
    floor1window2.setAttribute("depth","0.15");
    floor1window2.setAttribute("side","double");
    floor1window2.setAttribute("dynamic-body", "true");
    this.obj.append( floor1window2 );

    let floor1window3 = document.createElement("a-box");
    floor1window3.setAttribute("color","#D7DFD8");
    floor1window3.setAttribute("opacity","0.3");
    floor1window3.setAttribute("position","-0.3 2.1 -7");
    floor1window3.setAttribute("height","3.2");
    floor1window3.setAttribute("width","2.7");
    floor1window3.setAttribute("depth","0.15");
    floor1window3.setAttribute("side","double");
    floor1window3.setAttribute("dynamic-body", "true");
    this.obj.append( floor1window3 );

    let floor1window4 = document.createElement("a-box");
    floor1window4.setAttribute("color","#D7DFD8");
    floor1window4.setAttribute("opacity","0.3");
    floor1window4.setAttribute("position","-3.25 2.1 -7");
    floor1window4.setAttribute("height","3.2");
    floor1window4.setAttribute("width","2.7");
    floor1window4.setAttribute("depth","0.15");
    floor1window4.setAttribute("side","double");
    floor1window4.setAttribute("dynamic-body", "true");
    this.obj.append( floor1window4 );

    let floor1window5 = document.createElement("a-box");
    floor1window5.setAttribute("color","#D7DFD8");
    floor1window5.setAttribute("opacity","0.3");
    floor1window5.setAttribute("position","-5.925 2.1 -7");
    floor1window5.setAttribute("height","3.2");
    floor1window5.setAttribute("width","2.3");
    floor1window5.setAttribute("depth","0.15");
    floor1window5.setAttribute("side","double");
    floor1window5.setAttribute("dynamic-body", "true");
    this.obj.append( floor1window5 );

    
    

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}

class Floor1Door{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
    
    let floor1wall1 = document.createElement("a-box");
    floor1wall1.setAttribute("color","#B3B3B3");
    floor1wall1.setAttribute("position","0 3.6 0");
    floor1wall1.setAttribute("height","0.3");
    floor1wall1.setAttribute("width","14.8");
    floor1wall1.setAttribute("depth","0.25");
    floor1wall1.setAttribute("side","double");
    this.obj.append( floor1wall1 );

    let floor1wall2 = document.createElement("a-box");
    floor1wall2.setAttribute("color","#B3B3B3");
    floor1wall2.setAttribute("position","-7.25 2.1 0");
    floor1wall2.setAttribute("height","3.3");
    floor1wall2.setAttribute("width","0.35");
    floor1wall2.setAttribute("depth","0.25");
    floor1wall2.setAttribute("side","double");
    this.obj.append( floor1wall2 );

    let floor1wall3 = document.createElement("a-box");
    floor1wall3.setAttribute("color","#B3B3B3");
    floor1wall3.setAttribute("position","7.25 2.1 0");
    floor1wall3.setAttribute("height","3.3");
    floor1wall3.setAttribute("width","0.35");
    floor1wall3.setAttribute("depth","0.25");
    floor1wall3.setAttribute("side","double");
    this.obj.append( floor1wall3 );

    let floor1wall4 = document.createElement("a-box");
    floor1wall4.setAttribute("color","#B3B3B3");
    floor1wall4.setAttribute("position","2.25 2.1 0");
    floor1wall4.setAttribute("height","3.3");
    floor1wall4.setAttribute("width","0.35");
    floor1wall4.setAttribute("depth","0.25");
    floor1wall4.setAttribute("side","double");
    floor1wall4.setAttribute("id","RightDoorHinge");
    floor1wall4.setAttribute("static-body", "");
    this.obj.append( floor1wall4 );

    let floor1wall5 = document.createElement("a-box");
    floor1wall5.setAttribute("color","#B3B3B3");
    floor1wall5.setAttribute("position","-2.25 2.1 0");
    floor1wall5.setAttribute("height","3.3");
    floor1wall5.setAttribute("width","0.35");
    floor1wall5.setAttribute("depth","0.25");
    floor1wall5.setAttribute("side","double");
    floor1wall5.setAttribute("id","LeftDoorHinge");
    floor1wall5.setAttribute("static-body", "");
    this.obj.append( floor1wall5 );

    let floor1window1 = document.createElement("a-box");
    floor1window1.setAttribute("color","#D7DFD8");
    floor1window1.setAttribute("opacity","0.3");
    floor1window1.setAttribute("position","4.5 1.6 0");
    floor1window1.setAttribute("height","4");
    floor1window1.setAttribute("width","4.7");
    floor1window1.setAttribute("depth","0.15");
    floor1window1.setAttribute("side","double");
    this.obj.append( floor1window1 );

    let floor1window2 = document.createElement("a-box");
    floor1window2.setAttribute("color","#D7DFD8");
    floor1window2.setAttribute("opacity","0.3");
    floor1window2.setAttribute("position","-4.5 1.6 0");
    floor1window2.setAttribute("height","4");
    floor1window2.setAttribute("width","4.7");
    floor1window2.setAttribute("depth","0.15");
    floor1window2.setAttribute("side","double");
    this.obj.append( floor1window2 );

    let LeftDoor = document.createElement("a-box");
    LeftDoor.setAttribute("color","#D7DFD8");
    LeftDoor.setAttribute("opacity","0.3");
    // LeftDoor.setAttribute("position","-1.175 1.6 0");
    LeftDoor.setAttribute("height","3");
    LeftDoor.setAttribute("width","2.35");
    LeftDoor.setAttribute("depth","0.15");
    LeftDoor.setAttribute("side","double");
    LeftDoor.setAttribute("dynamic-body", "");
    LeftDoor.setAttribute("force-pushable", " ");
    LeftDoor.setAttribute("constraint","type:hinge; target: #LeftDoorHinge; axis: 0 1 0;targetAxis: 0 1 0; pivot: -1.125 0 0;targetPivot: 0 0 0.125;");
    this.obj.append( LeftDoor );

    let RightDoor = document.createElement("a-box");
    RightDoor.setAttribute("color","#D7DFD8");
    RightDoor.setAttribute("opacity","0.3");
    RightDoor.setAttribute("position","1.175 1.6 0");
    RightDoor.setAttribute("height","3");
    RightDoor.setAttribute("width","2.35");
    RightDoor.setAttribute("depth","0.15");
    RightDoor.setAttribute("side","double");
    RightDoor.setAttribute("dynamic-body", "");
    RightDoor.setAttribute("force-pushable", " ");
    RightDoor.setAttribute("constraint","type:hinge; target: #RightDoorHinge; axis: 0 1 0;targetAxis: 0 1 0; pivot: 1.125 0 0;targetPivot: 0 0 0.125;");
    this.obj.append( RightDoor );

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}

class Floor2{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");

    let floor2base = new Floor1Base(0,3.3,0);
    this.obj.append( floor2base.obj );

    let wall1 = new Floor1Wall(0,0,0);
    this.obj.append( wall1.obj );

    let wall2 = new Floor1Wall(0,0,0);
    wall2.obj.setAttribute("rotation",{x:0, y:90, z:0});
    this.obj.append( wall2.obj );

    let wall3 = new Floor1Wall(0,0,0);
    wall3.obj.setAttribute("rotation",{x:0, y:-90, z:0});
    this.obj.append( wall3.obj );

    let wall4 = new Floor1Wall(0,0,14.125);
    this.obj.append( wall4.obj );

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )

}}


class Building1{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");

    let base = new Floor1Base(0,0,0);
    base.obj.setAttribute("static-body", " ");
    this.obj.append( base.obj );

    let floor2base = new Floor1Base(0,3.3,0);
    floor2base.obj.setAttribute("static-body", " ");
    this.obj.append( floor2base.obj );

    let wall1 = new Floor1Wall(0,0,0);
    wall1.obj.setAttribute("static-body", "");
    this.obj.append( wall1.obj );

    let wall2 = new Floor1Wall(0,0,0);
    wall2.obj.setAttribute("rotation",{x:0, y:90, z:0});
    wall2.obj.setAttribute("static-body", "");
    this.obj.append( wall2.obj );

    let wall3 = new Floor1Wall(0,0,0);
    wall3.obj.setAttribute("rotation",{x:0, y:-90, z:0});
    wall3.obj.setAttribute("static-body", "");
    this.obj.append( wall3.obj );

    let door = new Floor1Door(0,0,7.125);
    door.obj.setAttribute("static-body", " ");
    this.obj.append( door.obj );

    let floor2 = new Floor2(0,3,0);
    floor2.obj.setAttribute("static-body", " ");
    bullets.forEach(bullet => {
      if (distance(bullet.obj, floor2.obj) < 2) {
        floor2.obj.setAttribute("dynamic-body", " ");
        
      }
    });
    this.obj.append( floor2.obj );

    let floor3 = new Floor2(0,6,0); 
    this.obj.append( floor3.obj );

    let floor4 = new Floor2(0,9,0);
    floor4.obj.setAttribute("static-body", " ");
    this.obj.append( floor4.obj );

    let floor5 = new Floor2(0,12,0);
    floor5.obj.setAttribute("static-body", " ");
    this.obj.append( floor5.obj );

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )


  }
}

function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
} 
