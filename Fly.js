class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 100
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
           if(this.sling.bodyA){

           
        var pos=this.sling.bodyA.position;
        var posB=this.pointB;
        push();
        strokeWeight(0);
        line(posB.x,posB.y,pos.x,pos.y);
        pop();
           }
        }
    }
    