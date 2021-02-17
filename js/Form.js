class Form{
    constructor(){
        this.title=createElement('h2');
        this.input=createInput("Name");
        this.button=createButton('Play');
        this.greeting=createElement('h3');
        this.reset=createButton("reset");

    }

    hide(){
       this.input.hide();
       this.button.hide();
       this.greeting.hide();
    }
    
    display(){
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2-50,0);

        this.input.position(displayWidth-100,displayHeight/2-80);

        this.button.position(displayWidth/20+30,displayHeight/2);

        this.reset.position(displayWidth+400,50);

        this. button.mousePressed(()=>{
           
            
            player.name=this.input.value()

            playerCount+=1;
            player.index=playerCount
            player.update();
            player.updateCount(playerCount);

            this. greeting.html("Hello "+player.name);
            this. greeting.position(displayWidth/20-70,displayHeight/4);

        });

        this.reset.mousePressed(()=>{
            game.update(0);
            player.updateCount(0);

            var ref = database.ref("players")
            ref.remove();
            updateCarsAtEnd(0);
        })

    }
}