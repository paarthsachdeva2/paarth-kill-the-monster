class Hero{
   constructor(x,y,radius){
       var options={
           density:1,
           frictionAir:1,
       }
       
     this.x=x;
     this.y=y;
     this.radius=100;
     this.image=loadImage("Superhero-01.png");
     this.body=Bodies.circle(this.x,this.y,100,options);
     World.add(world,this.body);
   }

   display(){
       var pos=this.body.position;
       push();
       translate(pos.x,pos.y);
       imageMode(CENTER);
       image(this.image,this.x,this.y,100,100);
       pop();
   }
}