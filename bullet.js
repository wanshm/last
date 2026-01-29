  class Bullet {
  constructor() {
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("radius", 1.2);
    this.obj.setAttribute("color", "hsl(308, 100%, 50%)");
    this.obj.setAttribute("dynamic-body", " mass:0; shape: sphere; ");
    this.obj.setAttribute("class", "bullet");
    // this.obj.setAttribute("src", "#bulletTexture");
    this.obj.setAttribute("raycaster", "objects:[force-pushable]");

    let camera = document.querySelector("a-camera"); 
    let pos = camera.object3D.position;

    this.obj.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z });
    scene.appendChild(this.obj);

    let theta = camera.object3D.rotation.y + Math.PI; 
    let phi = camera.object3D.rotation.x;
    let v = 5; 

    let v_xz = v * Math.cos(phi);
    this.dz = v_xz * Math.cos(theta);
    this.dx = v_xz * Math.sin(theta);
    this.dy = v * Math.sin(phi);

   
    this.lifespan = 5000;
    this.creationTime = Date.now();

  }

  fire() {
    this.obj.object3D.position.x += this.dx;
    this.obj.object3D.position.y += this.dy;
    this.obj.object3D.position.z += this.dz;

    if (Date.now() - this.creationTime > this.lifespan) {
      if (this.obj.parentNode) {
        this.obj.parentNode.removeChild(this.obj); // Remove from scene
      }
    }
  }
}
