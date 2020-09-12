class Food
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2

			
            }
        var foodStock;
        var lastFed;
		this.x=x;
		this.y=y;
        this.w=w;
        this.h=h;
		this.image=loadImage("milk.png");
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

    }
    
    deductStock(){
        if(x<=0){
        x=0;
        }else{
        x=x-1
        }
        database.ref('/').update({
        food:x
        })
        }
    
    getFoodStock(){
        var foodStockRef = database.ref('food');
        foodStockRef.on("value",function(data){
          foodStock = data.val();
        })

         updateFoodStock(food)
            database.ref('/').update({
              Food: food
            });
          }
display(){
var x=80,y=100;

imageMode(CENTER);
image(this.image,720,220,70,70);

if(this.foodStock!=0){
for(var i=0;i<this.foodStock;i++){
if(i%10===0){
x=80;
y=y+50;
}
image(this.image,x,y,50,50);
x=x+30;
}
}

}

        

        
        }

