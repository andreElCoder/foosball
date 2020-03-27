const $startButton = document.getElementById("start-button")
$startButton.addEventListener("click",startGame)
console.log($startButton)

function startGame(){
    console.log("Executed")
    const $menu = document.getElementById("menu")
    $menu.innerHTML=`<div>
    <canvas id ="canvas" width="1400" height="650"></canvas>
</div>
<div>
    <table>
        <tr id="score">
          <td>0</td>
          <td>0</td>
        </tr>
      </table>
</div>`
    let $canvas= document.querySelector("canvas");
    let $score = document.querySelector("#score")
    let game = new Game($canvas,$score);
    game.start()
}
