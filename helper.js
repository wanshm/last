function randInt(u,l){
    return parseInt(Math.random()*(u-l)+l)
}

function distance(obj1, obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}

function distance(obj1,obj2){
  return Math.sqrt(Math.pow(obj1.x-obj2.x,2) + Math.pow(obj1.y-obj2.y,2) + Math.pow(obj1.z-obj2.z,2))
}

function radiansToDegrees(r){
  return r / Math.PI *180;
}

function addspell(selection){
  //checks the spell&works accordingly
  switch (selection){
    case 0:
        //meteor
        return new Laser();
    case 1:
        //earthwall
        return new Locator();
}
}

function checkMeteorHitbox(meteor, stuff){
  //checks if meteor's explosion comes in contact with things
  //returns boolean
  const atkp = meteor.obj.object3D.position;
  meteor.hitboxes.forEach((hitbox,i) => {
    const hbp = hitbox.box.object3D.position
    if(distance({x:atkp.x + hbp.x , y:atkp.y, z:atkp.z + hbp.z}, stuff.object3D.position)){
      return true;
    }
  });
  return false;
}