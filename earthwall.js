class EarthWall{
    constructor(position){
        
        this.wall = document.createElement("a-box");

        this.wall.setAttribute("position",{x:position.x, y:position.y-60, z:position.z})
        this.wall.setAttribute("scale","32 64 8")
    }

    animate(){
        this.wall.object3D.position.y++;
    }
}

class Locator{
    constructor(){

        this.center = document.createElement("a-entity")

        this.locator = document.createElement("a-ring");
        const laser = document.createElement("a-cursor");

        laser.setAttribute("raycaster","showline:true")

        this.locator.append(laser);
        
        this.center.append(this.locator);

        camera.append(this.center)

    }
  followCam(){
    this.center.object3D.rotation.y = camera.children[0].object3D.rotation.y
  }

}