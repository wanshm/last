class Meteor{
  constructor(){
    this.laser = document.createElement("a-cursor")

    this.type = "meteor"
    this.fired = false;

    this.laser.setAttribute("raycaster","showLine:true; lineColor:red")
    this.laser.setAttribute("position","0 10 0")
    

    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("radius",2)
    let pos = camera.object3D.position;
    this.obj.setAttribute("position",{x:pos.x,y:pos.y+10,z:pos.z});
    
    
    this.theta = camera.children[0].object3D.rotation.y;
    this.phi = THREE.MathUtils.degToRad(this.laser.object3D.rotation.x) ; // do something 
    let v = 2.1;
    let v_xz = v * Math.cos(this.phi);
    this.dz = v_xz * Math.cos(this.theta);
    this.dx = v_xz * Math.sin(this.theta);
    this.dy = v * Math.sin(this.phi);
  
  }

  followCam(){
    this.laser.object3D.rotation.y = camera.children[0].object3D.rotation.y
  }

  addLaser(){
    camera.append(this.laser)
  }

  removeLaser(){
    if(this.laser.parentNode){
      this.laser.parentNode.removeChild(this.laser)
    }
  }


  cast(){
    scene.append(this.obj);
    this.fired = true;
  }

  fire(){
    if(this.fired){
      this.obj.object3D.position.x += this.dx;
      this.obj.object3D.position.y += this.dy;
      this.obj.object3D.position.z += this.dz; 
  }
    //this.obj.object3D.rotation.y = this.theta - Math.PI/2;
  }

  removeMeteor(){
    if(this.obj.parentNode)
    this.obj.parentNode.removeChild(this.obj);
  }
}