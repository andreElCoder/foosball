class Game {
    constructor(canvas){
    this.$canvas=canvas
    this.ctx = this.$canvas.getContext("2d");
    this.width = this.$canvas.width;
    this.height= this.$canvas.height;
    this.field=new Field(this)
    this.playersTeam1=[];
    this.playersTeam2=[];
    //this.ball = new Ball(this);
    }
displayTeams(){
    for(let x=60;x<=this.width-60;x+=(this.game.width-120)/7){
        switch(x){                                  // Representes the this.x of the player
            case 60 : this.playersTeam1.push(new Player(x,this.height/2));break;                    //GK team1
            case this.width-60 : this.playersTeam2.push(new Player(x,this.height/2));break;         //GK team2
            case 60+(this.game.width-120)/7 :                                                       //DF team1
                for(let y=60;y<=this.height-60;y+=(this.height-120)/2)
                this.playersTeam1.push(new Player(x,y))
                break
            case 60+2*(this.game.width-120)/7:                                                       //FW team2
                for(let y=60;y<=this.height-60;y+=(this.height-120)/7)
                this.playersTeam1.push(new Player(i,this.height/2))
        } 
}
}
}