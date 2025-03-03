let timer = 60;
let score = 0;
let hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function setBubble() {
  var clutter = "";

  for (var i = 0; i <= 167; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector(".pbtm").innerHTML = clutter;
}

function runTimer() {
  let timerint = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
        clearInterval(timerint);
        document.querySelector(".pbtm").innerHTML = `<h1>Game Over</h1> : <h1>Your Score: ${score}</h1>`;
    }
  }, 1000);
}

document.querySelector(".pbtm")
.addEventListener("click", (dets) => {
    let cn = Number(dets.target.textContent);
    if(cn === hitrn){
        increaseScore();
        setBubble();
        getNewHit();
    }
})

setBubble();
// runTimer();
// getNewHit();