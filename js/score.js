class Score {
    constructor(game){
        this.game=game
        this.$score=document.getElementsByTagName("td")
        this.team1 = 0
        this.team2 = 0
    }

updateScore(){
    console.log(this)
    $score[0].innerText = `${this.team1}`
    $score[1].innerText = `${this.team2}`
}
goalTeam1(){this.team1++}
goalTeam2(){this.team2++}
}