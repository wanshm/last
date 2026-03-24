class Building2{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");
        this.walls = [];

        let base = new FloorBase(0,0,0);
        base.obj.setAttribute("scale","1.5 1 1.5")
        base.obj.setAttribute("static-body", " ");
        this.obj.append( base.obj );

        let Floor1 = new Building2Floor1(0,0,0);
        this.obj.append( Floor1.obj );
        this.extractWalls(Floor1);

        let Floor2 = new Building2FloorS(0,3.1,0);
        this.obj.append( Floor2.obj );
        this.extractWalls(Floor2);

        let Floor3 = new Building2FloorS(0,6.2,0);
        this.obj.append( Floor3.obj );
        this.extractWalls(Floor3);

        let Floor4 = new Building2FloorS(0,9.3,0);
        this.obj.append( Floor4.obj );
        this.extractWalls(Floor4);

        let Floor5 = new Building2FloorS(0,12.4,0);
        this.obj.append( Floor5.obj );
        this.extractWalls(Floor5);
        
        let Floor6 = new Building2FloorS(0,15.5,0);
        this.obj.append( Floor6.obj );
        this.extractWalls(Floor6);

        let Floor7 = new Building2FloorS(0,18.6,0);
        this.obj.append( Floor7.obj );
        this.extractWalls(Floor7);

        let Floor8 = new Building2FloorS(0,21.7,0);
        this.obj.append( Floor8.obj );
        this.extractWalls(Floor8);

        let Floor9 = new Building2FloorS(0,24.8,0);
        this.obj.append( Floor9.obj );
        this.extractWalls(Floor9);

    this.obj.setAttribute("static-body","")
    this.obj.setAttribute("class","b2")
    
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
    
    
    } 

     extractWalls(Floor1){
      // console.log(Floor1)
      const findWalls = (element) => {
        for(let child of element.children){
          if(child.tagName === 'A-BOX'){
            this.walls.push(child);
          } else {
            findWalls(child);
          }
        }
      };
      findWalls(Floor1.obj);
    }

    makeDynamic(wallBox){
      if(wallBox.getAttribute("static-body")){
        const lifenoise = randInt(0,500); 
        wallBox.setAttribute("ttl",`time:${500+lifenoise}`)
      }
      if(wallBox.getAttribute("dynamic-body"));
      this.obj.setAttribute("ttl","time:1000")
      wallBox.removeAttribute("static-body");
      wallBox.setAttribute("dynamic-body", " mass:70; shape: box; ");
    }


    checkCollsion(position,radius){

      const absp = this.obj.object3D.position;
      if (distance2(position,absp)>radius){
        return false;
      }

      const xrange = [absp.x+7.5,absp.x-7.5]
      const yrange = [absp.y+29,absp.y]
      const zrange = [absp.z+7.5,absp.z-7.5]

      // console.log(position)

      if(
        rangeCheck(xrange,position.x) &&
        rangeCheck(yrange,position.y) &&
        rangeCheck(zrange,position.z)
      ){
        return true;
      }
      return false;
    }
    

  }
