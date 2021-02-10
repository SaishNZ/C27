class ROPE{
    constructor(body1, body2, ptX) {

        var options = {
            bodyA : body1,
            bodyB : body2,
            length : 350,
            stiffness : 0.2
            
        }

        this.Rope = Matter.Constraint.create(options);
        World.add(world, this.Rope);
        this.positionX = ptX;
        //this.p = point2;

    }

    display() {
       
        //if(this.body.bodyA) {
            strokeWeight(2);
            line(this.Rope.bodyA.position.x, this.Rope.bodyA.position.y, this.Rope.bodyB.position.x + this.positionX, this.Rope.bodyB.position.y);            
        //}

    }

}