class Game{
    constructor(){

    }

     getState() {
        var gameStateRef=database.ref('gameState')
        gameStateRef.on('value',function(data){
            gameState=data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        });
    }

    start(){
        if(gameState===0){
            form=new Form();
            form.display();
            player=new Player();
            player.getCount();
        }
        car1=createSprite(100,200)
        car1.addImage(car1img)
        car2=createSprite(300,200)
        car2.addImage(car2img)
        car3=createSprite(500,200)
        car3.addImage(car3img)
        car4=createSprite(700,200)
        car4.addImage(car4img)

        cars=[car1,car2,car3,car4];
    }
    play(){
        form.hide();
       // textSize(30);
        //text("game start",120,100);
        Player.getPlayerInfo();
        player.getCarsAtEnd();

        if(allPlayers!==undefined){
           // var display_position=130;
            background(groundIMG);
            image(trackIMG,0,-displayHeight*4,displayWidth,displayHeight*5);

           var xPos=200;
           var yPos=0;
           var carIndex=0;

            for(var plr in allPlayers){
                carIndex++
                xPos+=200
                yPos=displayHeight-allPlayers[plr].distance;
                cars[carIndex-1].x=xPos;
                cars[carIndex-1].y=yPos;

                if(carIndex===player.index){
                    push();
                    noFill();
                    strokeWeight(4);
                    stroke("red")
                    rectMode(CENTER);
                    rect(xPos,yPos,100,100);
                    pop();
                   // cars[carIndex-1].shapeColor="red";
                    camera.position.x=displayWidth/2
                    camera.position.y=cars[carIndex-1].y;
                }

                              /*  if(plr==="player"+player.index)
                    fill("red");
                else
                    fill("black")
            
                display_position+=20;
                textSize(15);
                text(allPlayers[plr].name+" : "+allPlayers[plr].distance,120,display_position);*/

            }
                         
            
        }
        if(player.distance>3650){
            gameState=2;
            player.rank+=1;
            Player.updateCarsAtEnd(player.rank);
        }

        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance+=50;
            player.update();

       
        }
        drawSprites();
    }

    end(){
        console.log("PLAYER RANK: "+player.rank);
    }
    
}