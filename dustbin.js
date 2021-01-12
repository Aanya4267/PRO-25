class dustbin {
    constructor(wid,hei,x,y){
        this.width = wid ; 
        this.height = hei ;
        this.x = x ;
        this.y =y ; 
        this.body = Bodies.rectangle(x,y,wid,hei,{isStatic:true}) ; 
        World.add(world,this.body); 
    }

    display(){
        var pos = this.body.position; 
       rect(pos.x,pos.y,this.width,this.height);

    }
}