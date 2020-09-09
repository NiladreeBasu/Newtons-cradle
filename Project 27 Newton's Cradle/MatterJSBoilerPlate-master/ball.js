class Metal {
    constructor(x,y){
        var options = {
            
            isStatic: false,
            density: 5
        }

        this.ball = Bodies.circle(x,y,30,options);
        World.add(world,this.ball);
    }

    display(){
        var pos = this.ball.position;
        stroke("red");
        strokeWeight(4);
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,30,30);
    }
}