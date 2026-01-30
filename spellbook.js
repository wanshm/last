class Spellbook{
    constructor(){
        this.center = document.createElement("a-entity");
        const cover1 = document.createElement("a-box")

        //appending
        this.center.append(cover1);

        //cover1
        cover1.setAttribute("scale","0.35 0.5 0.05");
        cover1.setAttribute("rotation","0 30 0");
        cover1.setAttribute("position","0 2 -1");




        this.page = 0;


        

        camera.append(this.center);
    }

    remove(){

    }
}