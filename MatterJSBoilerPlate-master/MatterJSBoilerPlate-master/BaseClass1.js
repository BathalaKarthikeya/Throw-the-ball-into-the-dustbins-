class BaseClass1{
    constructor(x, y, width, height){

        var options={
           isStatic:true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        this.image = loadImage("sprites");
     
    } display(){
        var pos1 = this.body.position;

        rectMode(CENTER);
        
        fill("red");
        strokeWeight(2);
        rect(pos1.x,pos1.y,this.width,this.height);

    }}