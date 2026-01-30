class Testing{
    constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let base = document.createElement("a-box");
    base.setAttribute("color","red");
    base.setAttribute("position","0 0.5 0");
    base.setAttribute("height","0.1");
    base.setAttribute("width","15");
    base.setAttribute("depth","15");
    this.obj.append( base );

    let floor1window1 = document.createElement("a-box");
    floor1window1.setAttribute("color","#000000");
    floor1window1.setAttribute("opacity","1");
    floor1window1.setAttribute("position","5.725 2.1 -7");
    floor1window1.setAttribute("height","3.2");
    floor1window1.setAttribute("width","2.7");
    floor1window1.setAttribute("depth","0.15");
    floor1window1.setAttribute("side","double");
    floor1window1.setAttribute("class", "breakable");
    floor1window1.setAttribute("static-body", " ");  
    this.obj.append( floor1window1 );
    
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  } 

}