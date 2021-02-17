class Player{
    constructor(){
      this.index=null;
      this.name=null;
      this.distance=0;
      this.rank=null;
    }

    getCount(){
        var playerCountRef=database.ref('playerCount')
        playerCountRef.on('value',function(data){
            playerCount=data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
          playerCount: count
        });

    
      }

      getCarsAtEnd(){
        var Ref=database.ref('carsAtEnd')
        Ref.on('value',(data)=>{
            this.rank=data.val();
        })
    }

    static updateCarsAtEnd(rank){
        database.ref('/').update({
          carsAtEnd: rank
        });

    
      }

      update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance

      }) 
      }
      static getPlayerInfo(){
        var playerInfoRef = database.ref('players')
        playerInfoRef.on('value',(data)=>{
          allPlayers=data.val();
        }
        )
          
      }
      
}