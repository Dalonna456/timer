
const timerEl = document.getElementById('timer');

console.log(timerEl);

const startingMinutes = 60;
let time = startingMinutes * 60;

setInterval(updateTimer, 1000);

function updateTimer() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    timerEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
}


