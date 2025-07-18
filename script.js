let start = new Date().getTime();


function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function moveBox() {
  const box = document.getElementById("gameBox");


  const left = Math.random() * (window.innerWidth - 100); 
  const top = Math.random() * (window.innerHeight - 100);
  const size = Math.random() * 200 + 100; // 

  
  box.style.left = `${left}px`;
  box.style.top = `${top}px`;
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.backgroundColor = getRandomColor();
  box.style.display = "block";

  
  start = new Date().getTime();
}


function appearAfterDelay() {
  setTimeout(moveBox, Math.random() * 1000 + 500); }


document.getElementById("gameBox").onclick = function () {
  this.style.display = "none";

  const end = new Date().getTime();
  const reactionTime = (end - start) / 1000;
  alert(` Reaction time: ${reactionTime.toFixed(2)} seconds`);

  appearAfterDelay(); // restart
};

window.onload = appearAfterDelay;
