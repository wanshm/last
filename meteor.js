class Meteor{
  constructor(phi){
    
    this.type = "meteor"
    this.fired = false;


    this.obj = document.createElement("a-sphere");
    // this.obj.setAttribute("radius",2)
    let pos = camera.object3D.position;
    this.obj.setAttribute("position",{x:pos.x,y:pos.y+10,z:pos.z});
    
    
    this.theta = camera.children[0].object3D.rotation.y + Math.PI;
    // this.phi = this.laser.object3D.rotation.x;
    this.phi = phi
    let v = 2.1;
    let v_xz = v * Math.cos(this.phi);
    this.dz = v_xz * Math.cos(this.theta);
    this.dx = v_xz * Math.sin(this.theta);
    this.dy = v * Math.sin(this.phi);
  
    scene.append(this.obj);
  }

  

  fire(){
    // if(this.fired){
      this.obj.object3D.position.x += this.dx;
      this.obj.object3D.position.y += this.dy;
      this.obj.object3D.position.z += this.dz; 
  // }
  }

  remove(){
    if(this.obj.parentNode)
    this.obj.parentNode.removeChild(this.obj);
  }
  
  // cast(){
  //   console.log("casted")
  //   this.phi = this.laser.object3D.rotation.x;
  //   let v = 2.1;
  //   let v_xz = v * Math.cos(this.phi);
  //   this.dz = v_xz * Math.cos(this.theta);
  //   this.dx = v_xz * Math.sin(this.theta);
  //   this.dy = v * Math.sin(this.phi);
  //   this.fired = true;
  // }
}

class Laser{

  constructor(){
    this.laser = document.createElement("a-cursor")

    this.laser.setAttribute("raycaster","showLine:true; lineColor:red")
    this.laser.setAttribute("position","0 10 0")
    this.laser.setAttribute("rotation","-10 0 0")
    
    camera.append(this.laser)
  }
  
  followCam(){
    this.laser.object3D.rotation.y = camera.children[0].object3D.rotation.y
  }

  removeLaser(){
    if(this.laser.parentNode){
      this.laser.parentNode.removeChild(this.laser)
    }
  }

}