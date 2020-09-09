class Bob {
    constructor(bodyA,bodyB,offsetX,offsetY){
        var stiffy;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB : {x:this.offsetX , y:this.offsetY},
            stiffness: 3

        }
                        
        this.sling = Constraint.create(options)        
        World.add(world,this.sling);
    }
 
    display(){
        var pointA = this.sling.bodyA.position
        var pointB = this.sling.bodyB.position
        strokeWeight(9);

        var anchor1X = pointA.x
        var anchor1Y = pointA.y

        var anchor2X = pointB.x+this.offsetX
        var anchor2Y = pointB.y+this.offsetY

        stroke("blue");
        line(anchor1X,anchor1Y,anchor2X,anchor2Y);
    }
 }