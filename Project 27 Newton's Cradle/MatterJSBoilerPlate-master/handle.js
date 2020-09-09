class Roof{
    constructor(){
        var options = {
            isStatic: true
        }

        this.roof = Bodies.rectangle(400,100,460,15,options);
        World.add(world,this.roof);
    }

    display(){
        var pos = this.roof.position;
        rectMode(CENTER);
        fill("green");
        rect(pos.x,pos.y,460,15)
    }
}