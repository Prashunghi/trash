class Ball {
    constructor(x,y){

        var options={
            'isStatic': false,
            'restitution':1.3,
            'friction':0.7,
            'density':1.2
        }
        this.body=Bodies.circle(x,y,50, options);
        this.body.position.x=x;
        this.body.position.y=y;
        World.add(world, this.body);

    }

    display(){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,50,50);
    }

}



