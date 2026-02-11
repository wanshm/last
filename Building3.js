class Wall1S {
  constructor(x, y, z) {
    this.obj = document.createElement("a-entity");

    let wall = document.createElement("a-box");
    wall.setAttribute("color", "#000000");
    wall.setAttribute("position", "-0.1 1.17 -6.75");
    wall.setAttribute("height", "1");
    wall.setAttribute("width", "0.3");
    wall.setAttribute("depth", "1.5");
    this.obj.append(wall);

    let wall2 = document.createElement("a-box");
    wall2.setAttribute("color", "#fcf700");
    wall2.setAttribute("position", "-0.1 1.17 -5.25");
    wall2.setAttribute("height", "1");
    wall2.setAttribute("width", "0.3");
    wall2.setAttribute("depth", "1.5");
    this.obj.append(wall2);

    // Initially set as static-body
    this.obj.setAttribute("static-body", "");
    this.obj.setAttribute("position", { x: x, y: y, z: z });

    scene.append(this.obj);
  }

  setDynamic() {
    this.obj.setAttribute("static-body", null); // Remove static-body
    this.obj.setAttribute("dynamic-body", ""); // Make it dynamic
    console.log("Wall became dynamic!");
  }
}

class LongWallS {
  constructor(x, y, z) {
    this.obj = document.createElement("a-entity");

    // Create multiple walls
    let wall1 = new Wall1S(-7.25, 0, 0);
    this.obj.append(wall1.obj);

    let wall2 = new Wall1S(-7.25, 0, 3);
    this.obj.append(wall2.obj);

    let wall3 = new Wall1S(-7.25, 0, 6);
    this.obj.append(wall3.obj);

    let wall4 = new Wall1S(-7.25, 0, 9);
    this.obj.append(wall4.obj);

    let wall5 = new Wall1S(-7.25, 0, 12);
    this.obj.append(wall5.obj);

    this.obj.setAttribute("position", { x: x, y: y, z: z });
    scene.append(this.obj);
  }
}

class Building2WallsAndFloorS {
  constructor(x, y, z) {
    this.obj = document.createElement("a-entity");

    // Left walls
    let longwall1 = new LongWallS(0, -0.1, 0);
    this.obj.append(longwall1.obj);

    let longwall3 = new LongWallS(-14.69478, 0.9, 0);
    longwall3.obj.setAttribute("rotation", { x: 0, y: 180, z: 0 });
    this.obj.append(longwall3.obj);

    let longwall4 = new LongWallS(0, 1.9, 0);
    this.obj.append(longwall4.obj);

    // Right walls
    let longwall2 = new LongWallS(0, -0.1, 0);
    longwall2.obj.setAttribute("rotation", { x: 0, y: 180, z: 0 });
    this.obj.append(longwall2.obj);

    let longwall5 = new LongWallS(14.69478, 0.9, 0);
    longwall5.obj.setAttribute("rotation", { x: 0, y: 0, z: 0 });
    this.obj.append(longwall5.obj);

    let longwall6 = new LongWallS(0, 1.9, 0);
    longwall6.obj.setAttribute("rotation", { x: 0, y: 180, z: 0 });
    this.obj.append(longwall6.obj);

    // Floor base
    let base2 = new FloorBase(0, 3.1, 0);
    base2.obj.setAttribute("dynamic-body", " mass:100; shape: box; ");
    base2.obj.setAttribute("scale", "1.001 1.001 1.001");
    this.obj.append(base2.obj);

    this.obj.setAttribute("position", { x: x, y: y, z: z });
    scene.append(this.obj);
  }
}

class Building3 {
  constructor(x, y, z) {
    this.obj = document.createElement("a-entity");

    // Create base for the building
    let base = new FloorBase(0, 0, 0);
    base.obj.setAttribute("static-body", " "); // Make the base static
    this.obj.append(base.obj);

    // Add walls and floor
    let wallsandfloor = new Building2WallsAndFloorS(0, 0, 0);
    this.obj.append(wallsandfloor.obj);

    this.obj.setAttribute("position", { x: x, y: y, z: z });
    scene.append(this.obj);

    // Assuming the bullet is created and appended to the scene, make sure it has an id like "bullet"
    this.bullet = document.querySelector('#bullet'); // Access bullet object from the DOM
  }

  update() {
    // Continuously check the distance between the bullet and walls
    requestAnimationFrame(() => this.update()); // Keep calling update continuously

    let walls = this.obj.querySelectorAll('a-entity'); // Get all walls in the building

    walls.forEach(wall => {
      // Check the distance between the bullet and the wall
      let dist = distance(this.bullet, wall);

      // If the distance is less than 1 unit, make the wall dynamic
      if (dist < 1) {
        wall.setDynamic(); // Switch to dynamic-body (movable)
      }
    });
  }
}
