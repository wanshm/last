  class Bullet {
  constructor() {
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("radius", 0.5);
    this.obj.setAttribute("src", "#bulletTexture");

    let camera = document.querySelector("a-camera"); 
    let pos = camera.object3D.position;

    this.obj.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z });
    scene.appendChild(this.obj);

    let theta = camera.object3D.rotation.y + Math.PI; 
    let phi = camera.object3D.rotation.x;
    let v = 1; 

    let v_xz = v * Math.cos(phi);
    this.dz = v_xz * Math.cos(theta);
    this.dx = v_xz * Math.sin(theta);
    this.dy = v * Math.sin(phi);

    // Set bullet lifespan (5 seconds)
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
