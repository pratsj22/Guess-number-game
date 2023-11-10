const random = Math.ceil(Math.random() * 100)
let guess = 10
let guesses = document.getElementById('guesses').getElementsByTagName('span')[0]
guesses.innerHTML = guess
let prev=""
let previous= document.getElementById('previous').getElementsByTagName('span')[0]
console.log(previous.innerHTML)
document.getElementById('input').focus()

let flag=true;

let message = document.getElementById("message")

document.getElementById('input').addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
      document.getElementById("btn").click();
  }
})

document.getElementById('btn').addEventListener('click', function() {
  const val = parseInt(document.getElementById('input').value);
  document.getElementById('input').value = ""
  guess--;
  prev+=val+", "
  previous.innerHTML = prev
  if(guess == 0) {
    checkVal(val)
    if(flag) newGame("lose")
  }
  else {
  guesses.innerHTML = guess
  checkVal(val);
  document.getElementById('input').focus()
  }
})

function checkVal(val) {
    message.style.backgroundColor = "black"
  if (isNaN(val)) {
    message.innerHTML = "Please enter a valid number"
  }
  else if (val < 1 || val > 100) {
    message.innerHTML = "Please enter a number between 1 and 100"
  }
  else if (val === random) {
    flag=false;
    newGame("win")
  } else if (val > random) {
    message.innerHTML = 'Too High'
  } else {
    message.innerHTML = 'Too Low'
  }
}
function newGame(str) {
  message.style.backgroundColor = "transparent"
  message.innerHTML = '<button class="btn" id="newbtn">New Game ? </button>'
  document.getElementById('input').disabled = true
  let result = document.getElementsByClassName('results')[0]
  if(str==="win") {
  result.innerHTML = `
  <h1> Congratulations!</h1>
  <div>You guessed the number in ${10-guess} guesses</div>`
  }
  else{
  result.innerHTML = `
  <h1> You Lose!</h1>
  <div class="button">The correct number is ${random} </div>`
  }
  document.getElementById('btn').disabled = true
  document.getElementById('newbtn').addEventListener('click', function() {
    location.reload()
  })
}
