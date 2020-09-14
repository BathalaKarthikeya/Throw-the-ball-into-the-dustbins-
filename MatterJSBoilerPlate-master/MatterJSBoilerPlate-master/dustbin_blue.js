class Dustbinblue extends BaseClass1{
    constructor(x, y, width, height){
        
        super(x,y,width,height);

        this.image = loadImage("sprites/recycle-bin-icon-512x512.png");
     
    }display(){
        
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
    }