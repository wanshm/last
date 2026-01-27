class HotBarItem {
    constructor(text, number){

        this.number

        const scene = document.querySelector("a-scene");


        this.center = document.createElement("a-box")


        this.hbb = document.createElement("a-box");
        this.hbn = document.createElement("a-text");
        this.hbt = document.createElement("a-text");

        this.hbb.object3D.scale.set(.125,.15,.01);
        this.center.setAttribute("position","0 2 0")

        this.hbn.setAttribute("value",number);
        this.hbt.setAttribute("value",text);


        this.center.append(this.hbb)
        this.hbb.append(this.hbn);
        this.hbb.append(this.hbt);
        this.hbb.setAttribute("position",{x:camera.object3D.position.x, y : camera.object3D.position.y , z:camera.object3D.position.z })
        
        console.log(camera.children[0].object3D)
        

        camera.append(this.center)
    }

    followCam(){
        this.hbb.setAttribute("position",{x:0 + this.number/100, y : 0, z:-1 })
        this.center.object3D.rotation.set(
            camera.children[0].object3D.rotation.x,
            camera.children[0].object3D.rotation.y,
            THREE.MathUtils.degToRad(0)
        );
    }
}