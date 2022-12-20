//JavaScript
function changeHeading() {
  if (flagga == 0) {
    rubrik.innerHTML = 'Du klickade';
      } else {
      	rubrik.innerHTML = 'JavaScript';
  }
}

 function changeBg() {
  var bg = document.getElementById('bg');
  bg.classList.add('nybg');  
}

function changeBgAgain() {
  var bg = document.getElementById('bg');
  bg.classList.add('greenbg');
}