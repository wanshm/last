class Slash{

    constructor(){
        const scene = document.querySelector("a-scene");
        this.center = document.createElement("a-entity")
        this.slash = document.createElement("a-ring");
        const sword = document.createElement("a-box");
        const crossguard = document.createElement("a-box");
        this.center.append(this.slash)
        this.slash.append(sword)
        
        sword.append(crossguard)
        sword.setAttribute("hidden","true")
        this.slash.setAttribute("atktype","slash")
        this.slash.setAttribute("side","double")
        this.slash.object3D.scale.set(10, 5, 1)
        this.center.object3D.rotation.set(
            camera.object3D.children[0].rotation.x +Math.PI/2,
            camera.object3D.children[0].rotation.y,
            THREE.MathUtils.degToRad(0)
        );
        this.center.setAttribute("position",{ x:camera.object3D.position.x,y:camera.object3D.position.y + 3,z:camera.object3D.position.z })
        this.slash.setAttribute("position","0 -7 0")
        this.slash.setAttribute("theta-start", 100);
        this.slash.setAttribute("theta-length", 0);

        sword.object3D.scale.set(.1,1,.5)
        sword.setAttribute("rotation", "0 0 -180");
        crossguard.object3D.position.set(0,.25,0)
        crossguard.object3D.scale.set(4,.1,1)
        
        scene.append(this.center)


    }    


    getAttribute(args){
        return this.slash.getAttribute(args)
    }
    setAttribute(args){
        return this.slash.setAttribute(args)
    }

    remove(){
        if(this.center.parentNode)
        this.center.parentNode.removeChild(this.center);
    }
}