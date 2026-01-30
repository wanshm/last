class HotBarItem {
    constructor(text, number){

        this.number = number;

        const scene = document.querySelector("a-scene");


        this.center = document.createElement("a-entity")


        this.hbb = document.createElement("a-box");
        this.hbn = document.createElement("a-text");
        this.hbt = document.createElement("a-text");

        
        this.selected && this.hbb.setAttribute("color","gray")
        this.hbb.object3D.scale.set(.125,.125,.01);
        this.center.setAttribute("position","0 2 0")

        this.hbn.setAttribute("value",number);
        this.hbt.setAttribute("value",text);


        this.center.append(this.hbb)
        this.hbb.append(this.hbn);
        this.hbb.append(this.hbt);

        this.hbt.setAttribute("position","-.5 -.3 1");
        this.hbn.setAttribute("position","-.5 .3 1");
        this.hbt.setAttribute("color","black");
        this.hbn.setAttribute("color","black");
        
        console.log(camera.children[0].object3D)
        

        camera.append(this.center)
    }

    followCam(){
        this.hbb.setAttribute("position",{x:0 +this.number/4, y : 0, z:-1 })
        this.center.object3D.rotation.set(
            camera.children[0].object3D.rotation.x,
            camera.children[0].object3D.rotation.y,
            0
        );
    }

    select(){
        this.hbb.setAttribute("color","gray");
    }

    deselect(){
        this.hbb.setAttribute("color","white");
    }
}