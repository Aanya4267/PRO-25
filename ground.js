class ground{
    constructor(x,y,width){
       this.width=width;
        this.height = 20;
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true});
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position ;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.width,this.height);
    }
}