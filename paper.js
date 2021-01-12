

class paper{

    constructor(x,y,radius) {

        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }


        this.body = Bodies.circle(x,y,radius,options)

        this.radius = radius;

        this.img = loadImage("image/paper.png")

        World.add(world,this.body)

    }

    display(width,height) {

        var pos = this.body.position;

        imageMode(CENTER)
        
        image(this.img,pos.x,pos.y,width,height);

    }
}