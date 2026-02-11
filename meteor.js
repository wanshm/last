class Meteor{
  constructor(phi){
    
    this.type = "meteor"
    this.fired = false;

    this.obj = document.createElement("a-sphere");
    this.explosion = document.createElement("a-torus");
    const ehb1 = document.createElement("a-box");
    const ehb2 = document.createElement("a-box");
    const ehb3 = document.createElement("a-box");
    const ehb4 = document.createElement("a-box");
    const ehb5 = document.createElement("a-box");
    const ehb6 = document.createElement("a-box");
    const ehb7 = document.createElement("a-box");
    const ehb8 = document.createElement("a-box");

    this.obj.append(ehb1);
    this.obj.append(ehb2);
    this.obj.append(ehb3);
    this.obj.append(ehb4);
    this.obj.append(ehb5);
    this.obj.append(ehb6);
    this.obj.append(ehb7);
    this.obj.append(ehb8);

    ehb1.setAttribute("scale", "16 4 16");



    this.obj.setAttribute("radius",4)
    this.obj.setAttribute("position",{x:camera.object3D.position.x,y:camera.object3D.position.y+30,z:camera.object3D.position.z});
    
    this.obj.setAttribute("dynamic-body", " mass:0; shape: sphere; ");
    this.explosion.setAttribute("dynamic-body", " mass:0; shape: sphere; ");
    



    this.exprad = 1;
    this.explosion.setAttribute("radius-tubular","1");
    this.explosion.setAttribute("rotation","90 0 0");
    
    this.theta = camera.children[0].object3D.rotation.y + Math.PI;
    this.phi = phi
    const v = 2.1;
    let v_xz =v * Math.cos(this.phi);
    this.dz = v_xz * Math.cos(this.theta);
    this.dx = v_xz * Math.sin(this.theta);
    this.dy = v * Math.sin(this.phi);

    
    this.obj.append(this.explosion)
    scene.append(this.obj);
  }

  explode(){
    this.dx=0; this.dy=0; this.dz=0;
    this.explosion.setAttribute("radius",this.exprad);
    this.exprad+=1;

    
    v_xz * Math.cos(this.theta);
    v_xz * Math.sin(this.theta);

    this.obj.children[0].object3D.position.x += v_xz * Math.cos(this.theta);
    this.obj.children[0].object3D.position.z += v_xz * Math.sin(this.theta);
    console.log(this.obj.children[0].object3D)
  }

  fire(){
      this.obj.object3D.position.x += this.dx;
      this.obj.object3D.position.y += this.dy;
      this.obj.object3D.position.z += this.dz; 
  }

  remove(){
    if(this.obj.parentNode)
    this.obj.parentNode.removeChild(this.obj);
  }
}

class Laser{

  constructor(){
    this.laser = document.createElement("a-cursor")

    this.laser.setAttribute("raycaster","showLine:true; lineColor:red")
    this.laser.setAttribute("position","0 30 0")
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