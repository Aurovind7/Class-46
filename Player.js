class Player {
    constructor(x,y,width,height){
        var options = {
            'friction':10,
            'density':10
        }
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("rhino.png");
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}