const X_class = 'x';
const circle_class = 'circle'

const winningCombination = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]

]


const cellElement = document.querySelectorAll('[data-cell]');
const board = document.getElementById("board");
const winMassage = document.getElementById("winMassage");
const wintext = document.querySelector('[wintext]')

const restart = document.getElementById("restart");




let circleturn ;

startgame();

restart.addEventListener('click',startgame);

function startgame(){
      circleturn = false;

      cellElement.forEach(cell =>{
            cell.classList.remove(X_class);
            cell.classList.remove(circle_class);
            cell.removeEventListener('click',handleClick)
            cell.addEventListener('click', handleClick, {once:true})
      })
      setBoardHoverclass();
      winMassage.classList.remove('show');
}



function handleClick(e){
      console.log("clicked");
      const cell = e.target;
      const currentclass = circleturn ? circle_class : X_class;

      placeMark(cell,currentclass);
      if(checkWin(currentclass)){
       console.log("winning");
       endGame(false);
      }
      else if(isDraw()){
            endGame(true);
      }
      else{
            swapturn();
            setBoardHoverclass();
      }


    
}

function endGame(draw){
     if(draw){
         wintext.innerText = `Draw Game!`
     }
     else{
      wintext.innerText = `${circleturn ? "O's":"X's"} Wins!`;
     }
     winMassage.classList.add('show');
}

function isDraw(){
      return [...cellElement].every(cell =>{
            return cell.classList.contains(X_class) || cell.classList.contains(circle_class);
      })
}

function placeMark(cell, currentclass){
      cell.classList.add(currentclass)
}

function swapturn(){
      circleturn = !circleturn;
}

function setBoardHoverclass(){
      board.classList.remove(X_class);
      board.classList.remove(circle_class);

      if (circleturn) {
            board.classList.add(circle_class)
          } else {
            board.classList.add(X_class)
          }
}

function checkWin(currentclass){
      return winningCombination.some(combination =>{
            return combination.every(index =>{
                  return cellElement[index].classList.contains(currentclass);
            })
      })
}