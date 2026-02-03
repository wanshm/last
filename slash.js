class Slash{

    constructor(){
        const scene = document.querySelector("a-scene");
        this.center = document.createElement("a-entity")
        this.slash = document.createElement("a-ring");
        const sword = document.createElement("a-box");
        const crossguard = document.createElement("a-box");
        
        this.center.append(this.slash)
        this.slash.append(sword)
        

        this.animated = false;

        sword.append(crossguard)
        this.slash.setAttribute("side","double")
        this.slash.object3D.scale.set(10, 5, 1)
        this.center.object3D.rotation.set(
            camera.object3D.children[0].rotation.x +Math.PI/2,
            camera.object3D.children[0].rotation.y,
            THREE.MathUtils.degToRad(0)
        );
        this.slash.object3D.rotation.set(-Math.PI/4,0,0)
        this.center.setAttribute("position",{ x:camera.object3D.position.x,y:camera.object3D.position.y + 3,z:camera.object3D.position.z })
        this.slash.setAttribute("position","0 -1 0")
        this.slash.setAttribute("theta-start", 100);
        this.slash.setAttribute("theta-length", 0);
        this.slash.setAttribute("dynamic-body", " mass:0; shape: sphere; ");
        this.slash.setAttribute("raycaster", "objects:[force-pushable]");

        sword.object3D.scale.set(.1,1,.5)
        sword.setAttribute("rotation", "0 0 -180");
        crossguard.object3D.position.set(0,.25,0)
        crossguard.object3D.scale.set(4,.1,1)
        
        scene.append(this.center)


    }    

    remove(){
        if(this.center.parentNode)
        this.center.parentNode.removeChild(this.center);
    }

    animate(){
        const start = this.slash.getAttribute("theta-start")
        const length = this.slash.getAttribute("theta-length")
        const sword = this.slash.children[0];
        const swordAngle = sword.object3D.rotation;
        if(parseInt(start) < 300){
        this.slash.setAttribute("theta-start", parseInt(start) + 7);
        this.slash.setAttribute("theta-length", parseInt(length) + 5);
        swordAngle.z+= THREE.MathUtils.degToRad(12);
        } else {
            this.animated = true;
        }
        this.slash.object3D.position.y += -1;
    }
}