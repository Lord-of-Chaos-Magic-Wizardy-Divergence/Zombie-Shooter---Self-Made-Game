class NormalZombie{

     constructor(x,y,speed){
       this.x = x;
       this.y = y;
       this.width = 50;
       this.height = 50;
       this.speed = speed;
     }

     display(){
         rectMode(CENTER);
         fill("green");
         rect(this.x,this.y,this.width,this.height);
     }

     follow(){
        //this.pointTo(player.x,player.y);
    
        if(this.x < player.x){
            this.x += this.speed;
        }
        else if(this.x > player.x){
            this.x -= this.speed;
        }
        if(this.y < player.y){
            this.y += this.speed;
        }
        else if(this.y > player.y){
            this.y -= this.speed;
        }
    }     

    collide(x,y,width,height){
      if(this.x + this.width/2 < x + width/2 && this.x + this.width/2 > x - width/2){
        this.speed = 0;
      }else{
          this.speed = 2;
      }

      if(this.y + this.height/2 > y + height/2 && this.y + this.height/2 < y - height/2){
        this.speed = 0;
      }else{
        this.speed = 2;
    }
    }
}