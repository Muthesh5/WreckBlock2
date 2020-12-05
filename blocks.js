class Block{
    constructor(x, y) {
        var options = {
            'restitution':0.4,
            'friction':1.5,
            'density':1.3
        }
        this.body = Bodies.rectangle(x, y, 30,40, options);
        this.width = 30;
        this.height = 40;
        this.Visible = 255
        World.add(world, this.body);
      }
      display(){
        if(this.body.position.y<500){
        push();
        fill("cyan")
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        }
      }
  }