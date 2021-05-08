class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.visiblity=255;
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");

    if(this.body.speed < 3){
      rect(pos.x, pos.y, this.width, this.height);
     }
     else{
       World.remove(world, this.body);
       push();
       this.visiblity = this.visiblity - 5;
       pop();
     }
  }
  score () {
    if (this.visiblity<0&&this.visiblity>-200){
      score=score+1;
    }
  }
};
