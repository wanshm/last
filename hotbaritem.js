class HotBarItem {
    constructor(text, number){
        const scene = document.querySelector("a-scene");

        this.center = document.createElement("a-box");

        this.hbb = document.createElement("a-box");
        this.hbn = document.createElement("a-text");
        this.hbt = document.createElement("a-text");

        this.hbb.object3D.scale.set(.25,.25,.05);

        this.hbn.setAttribute("value",number);
        this.hbt.setAttribute("value",text);

        this.hbb.append(this.hbn);
        this.hbb.append(this.hbt);

        this.center.append(this.hbb)
        scene.append(this.center);

    }

    followCam(){
        this.center.setAttribute("position",{x:camera.object3D.position.x,y:camera.object3D.position.y,z:camera.object3D.position.z })
    }
}