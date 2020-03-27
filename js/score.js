class Score {
    constructor(game){
        this.game=game
        this.$score=document.getElementsByTagName("td")
        this.team1 = 0
        this.team2 = 0
    }

restartScore(){
    this.team1 = 0
    this.team2 = 0
}
updateScore(){
    this.$score[0].innerHTML = `${this.team1}`
    this.$score[1].innerText = `${this.team2}`
}
goalTeam1(){
    this.team1++
    this.setIntervalLimited(()=>{
        this.$score[0].innerHTML = `${this.team1}`
        this.$score[0].setAttribute("id","team1")
        this.$score[0].style.color=this.generateRandomColor()
    }, 1000,5)
    setTimeout(()=>{this.$score[0].removeAttribute("id")},6000)
}

goalTeam2(){
    this.team2++
    this.setIntervalLimited(()=>{
        this.$score[1].innerHTML = `${this.team2}`
        this.$score[1].setAttribute("id","team2")
        this.$score[1].style.color=this.generateRandomColor()
    }, 1000,5)
    setTimeout(()=>{this.$score[1].removeAttribute("id")},6000)
}
gameOver(){
    if(this.team1+this.team2===7){
        return true
    }
}
generateRandomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }

setIntervalLimited(callback, interval, x){

    for (var i = 0; i < x; i++) {
        setTimeout(callback, i * interval);
    }

}
}