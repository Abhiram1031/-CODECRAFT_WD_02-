let startTime, interval, elapsedTime = 0;
let running = false;

function updateDisplay() {
  let time = Date.now() - startTime + elapsedTime;
  let date = new Date(time);
  document.getElementById("display").innerText = 
    new Date(time).toISOString().substr(11, 8);
}

function startStop() {
  if (!running) {
    startTime = Date.now();
    interval = setInterval(updateDisplay, 1000);
    running = true;
  }
}

function pause() {
  if (running) {
    clearInterval(interval);
    elapsedTime += Date.now() - startTime;
    running = false;
  }
}

function reset() {
  clearInterval(interval);
  elapsedTime = 0;
  document.getElementById("display").innerText = "00:00:00";
  document.getElementById("laps").innerHTML = "";
  running = false;
}

function lap() {
  if (running) {
    let li = document.createElement("li");
    li.innerText = document.getElementById("display").innerText;
    document.getElementById("laps").appendChild(li);
  }
}