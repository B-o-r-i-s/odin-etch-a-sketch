const ORIGINAL_COLOR = '#FFFFFF';
const container = document.querySelector('.container')
const div = document.createElement("div")
const refresh = document.getElementById('btn')
let currentColor = ORIGINAL_COLOR;
let rowNumber = 5;
let colNumber = 5;

//create a grid 
function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows',rows)
  container.style.setProperty('--grid-cols', cols)
  container.style.width = "100 px";
  container.style.height = "100 px"
  for (let i = 0; i < (rows * cols); i++){
    let cell = document.createElement("div")
    cell.classList.add('gridItem')
    cell.style.backgroundColor = currentColor;
    cell.addEventListener('mouseover', changeColor)
    container.appendChild(cell)    
  }
}

makeGrid(rowNumber,colNumber)

//change the background color every single time the mouse hovers
function changeColor (e) {
  const randomR = Math.floor(Math.random() * 256)
  const randomG = Math.floor(Math.random() * 256)
  const randomB = Math.floor(Math.random() * 256)
  e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

refresh.addEventListener('click', function() {
  let welcome = Number(window.prompt('Choose a number between 10 and 100'))
  if ( welcome >= 10 && welcome <= 100){
    rowNumber = welcome;
    colNumber = welcome;
    clearGrid();
    makeGrid(rowNumber,colNumber)
  } 
  else {
    let denial = prompt('You are out of luck. Reload the page and start over!')
  }
})

function clearGrid(){
  container.innerHTML = ''
}
