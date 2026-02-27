class EarthWall{
    constructor(distance){
        
        this.wall = document.createElement("a-box");



        const z = distance * Math.cos(camera.children[0].object3D.rotation.y)
        const x = distance * Math.sin(camera.children[0].object3D.rotation.y)
        
        this.wall.setAttribute("static-body","")
        this.wall.setAttribute("position",{x:camera.object3D.position.x+x, y:-60, z:camera.object3D.position.z+z})
        this.wall.setAttribute("scale","32 8 8")
        this.wall.setAttribute("color","gray")
        this.wall.object3D.rotation.set(
            0,
            camera.children[0].object3D.rotation.y,
            Math.PI/2,
        )

        console.log(distance)

        scene.append(this.wall);
    }

    fire(){
        if(this.wall.object3D.position.y<16)
        this.wall.object3D.position.y+=1;
    }
}

class Locator{
    constructor(){

        this.center = document.createElement("a-entity")

        this.locator = document.createElement("a-ring");
        const laser = document.createElement("a-cursor");

        laser.setAttribute("raycaster","showLine:true;lineColor:red")
        this.locator.setAttribute("side","double");
        this.locator.setAttribute("rotation","90 0 0")
        this.locator.setAttribute("scale","2 2 1")
        this.locator.setAttribute("color","black")

        this.locator.append(laser);
        
        this.center.append(this.locator);

        camera.append(this.center)

    }
  followCam(){
    this.center.object3D.rotation.y = camera.children[0].object3D.rotation.y
  }

  remove(){
    if(this.center.parentNode){
        this.center.parentNode.removeChild(this.center)
        }
  }

}