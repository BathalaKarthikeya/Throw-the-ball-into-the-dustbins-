class Dustbins extends BaseClass1{
    constructor(x, y, width, height){

       super(x,y,width,height)
       World.add(world,this.body)
    }
   display(){
      fill("yellow");
      strokeWeight(0);
   }
}