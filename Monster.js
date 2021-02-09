class Monster{
    constructor(x,y,radius){
        var options={
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
      this.x=x;
      this.y=y;
      this.radius=90;
      this,image=loadImage("Monster-01.png");
      this.body=Bodies.circle(this.x,this.y,90,options);
      World.add(world,this.body);
    }
 
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,this.x,this.y,90,90);
        pop();
    }
 }