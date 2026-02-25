class Spellbook{
    constructor(){
        this.center = document.createElement("a-entity");
        const cover1 = document.createElement("a-box");
        const cover2 = document.createElement("a-box");

        this.selection = 0
        this.appearing = false;
        this.disappearing = false;
        this.opacity = 0;

        //appending
        this.center.append(cover1);
        this.center.append(cover2);

        //this.center;
        this.center.setAttribute("position","0 2 0");
        // this.center.setAttribute("opacity","0");
        // this.center.setAttribute("visible","false");

        //cover1
        cover1.setAttribute("scale","0.35 0.5 0.05");
        cover1.setAttribute("rotation","0 30 0");
        cover1.setAttribute("position","0 0 -1");
        cover1.setAttribute("opacity","0");

        //cover2
        cover2.setAttribute("scale","0.35 0.5 0.05");
        cover2.setAttribute("position",".25 0 -1")
        cover2.setAttribute("rotation","0 -30 0");
        cover2.setAttribute("opacity","0");


        this.page = 0;


        

        camera.append(this.center);
    }
    followCam(){
        this.center.object3D.rotation.set(
            - Math.PI/12,
            camera.children[0].object3D.rotation.y + Math.PI/4,
            0
        );
    }

    appear(){
        // this.center.setAttribute("visible","true")
        this.appearing = true;
        this.disappearing=false;
    }

    disappear(){
        // this.center.setAttribute("visible","false")
        this.disappearing = true;
        this.appearing=false;
    }

    animateAppear(){
        this.opacity+= 0.1;
        this.center.children[0].setAttribute("opacity",book.opacity);
        this.center.children[1].setAttribute("opacity",book.opacity);
        this.appearing = book.opacity > 1 ? false:true;
    }

    animateDisappear(){
        this.opacity-= 0.1;
        this.center.children[0].setAttribute("opacity",book.opacity);
        this.center.children[1].setAttribute("opacity",book.opacity);
        this.disappearing = book.opacity < 0 ? false:true;
        
    }
    remove(){
        if(this.center.parentNode)
        this.center.parentNode.removeChild(this.center);
    }
}