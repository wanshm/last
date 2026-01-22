let rnd = (l,u) => Math.random() * (u-l) + l
let scene, bullets = [];


window.addEventListener("DOMContentLoaded", function () {
  scene = document.querySelector("a-scene");

  // let building1 = new Building1(0.5, -0.43, 0.5);
  let Testing1 = new Testing(0.5, -0.43, 0.5); // Testing class instantiation


  window.addEventListener("keydown", function (e) {
    if (e.code == "Space" || e.key == " ") {
      let bullet = new Bullet(); 
      bullets.push(bullet);
    }
  });

  

  loop();
});

function loop() {
  bullets.forEach(bullet => bullet.fire());

  window.requestAnimationFrame(loop);
} 



// function distance(obj1,obj2){
//   let x1 = obj1.object3D.position.x;
//   let y1 = obj1.object3D.position.y;
//   let z1 = obj1.object3D.position.z;
//   let x2 = obj2.object3D.position.x;
//   let y2 = obj2.object3D.position.y;
//   let z2 = obj2.object3D.position.z;

//   let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
//   return d;
// } 
