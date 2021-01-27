class box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0.1,
            friction:1.0,
            density:0.0001,
         // dencity:0.1,
          //friction:2
      }
      this.body = Bodies.rectangle(x,y,30,40,options);
      this.width = 30;
      this.height = 40;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      strokeWeight(2);
      stroke("white")
      rect(pos.x, pos.y, this.width, this.height);
    }
  };