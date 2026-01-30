class Bullet{
  constructor(){
    this.obj = document.createElement("a-sphere");
    
    this.obj.setAttribute("dynamic-body", " mass:0; shape: sphere; ");
    this.obj.setAttribute("raycaster", "objects:[force-pushable]");

    
    const bullet1 = document.createElement("a-sphere");
    const bullet2 = document.createElement("a-sphere");
    const bullet3 = document.createElement("a-sphere");
    const bullet4 = document.createElement("a-sphere");
    
    bullet1.setAttribute("raycaster", "objects:[force-pushable]");
    bullet2.setAttribute("raycaster", "objects:[force-pushable]");
    bullet3.setAttribute("raycaster", "objects:[force-pushable]");
    bullet4.setAttribute("raycaster", "objects:[force-pushable]");
    
    bullet1.setAttribute("dynamic-body", " mass:0; shape: sphere; ");
    bullet2.setAttribute("dynamic-body", " mass:0; shape: sphere; ");
    bullet3.setAttribute("dynamic-body", " mass:0; shape: sphere; ");
    bullet4.setAttribute("dynamic-body", " mass:0; shape: sphere; ");
    
    this.obj.setAttribute("radius",.5)
    this.obj.object3D.rotation.set(
            camera.object3D.children[0].rotation.x +Math.PI/2,
            camera.object3D.children[0].rotation.y,
            THREE.MathUtils.degToRad(0)
        );
    this.obj.append(bullet1);
    this.obj.append(bullet2);
    this.obj.append(bullet3);
    this.obj.append(bullet4);
    bullet1.setAttribute("position","2 0 0");
    bullet2.setAttribute("position","-2 0 0");
    bullet3.setAttribute("position","0 0 2");
    bullet4.setAttribute("position","0 0 -2");
    let pos = camera.object3D.position;
    this.obj.setAttribute("position",{x:pos.x,y:pos.y+2,z:pos.z});
    
    scene.append(this.obj);
    
    this.theta = camera.object3D.children[0].rotation.y + Math.PI;
    this.phi = camera.object3D.children[0].rotation.x ; // do something 
    let v = 2.1;
    let v_xz = v * Math.cos(this.phi);
    this.dz = v_xz * Math.cos(this.theta);
    this.dx = v_xz * Math.sin(this.theta);
    this.dy = v * Math.sin(this.phi);
//     this.lifespan = 5000;
//     this.creationTime = Date.now();
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


//   fire() {
//     this.obj.object3D.position.x += this.dx;
//     this.obj.object3D.position.y += this.dy;
//     this.obj.object3D.position.z += this.dz;

//     if (Date.now() - this.creationTime > this.lifespan) {
//       if (this.obj.parentNode) {
//         this.obj.parentNode.removeChild(this.obj); // Remove from scene
//       }
//     }
//   }
// }
