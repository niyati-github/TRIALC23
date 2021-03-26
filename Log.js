class Log {


    constructor(x,y,h,angle) {
    
        var Options = {restitution:0.8, friction: 1}
        this.body = Bodies.rectangle(x,y,20,h,Options)
        this.width = 20
        this.height = h
        Matter.Body.setAngle(this.body,angle)
    
        World.add(world,this.body)
    }
    display(){
    var angle = this.body.angle
    var pos = this.body.position
    
    push();
    translate(pos.x,pos.y)
    rotate(angle)
    rectMode(CENTER)
    strokeWeight(4)
    stroke("orange")
    fill(255)
    rect(0,0,this.width,this.height)
    pop();
    
    }
    
    }