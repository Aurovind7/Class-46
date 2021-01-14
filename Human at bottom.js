class HumanBottom {
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.x=x
        this.y=y
        this.width=100
        this.height=100
        this.body = Bodies.rectangle(x, y, 30, 100, options);
        this.image = loadImage("human.png");
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