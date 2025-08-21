let board = ["","","","","","","","",""];
let currentPlayer = "X";
function renderBoard() {
  const boardDiv = document.getElementById("board");
  boardDiv.innerHTML = "";
  board.forEach((cell,i)=>{
    const div = document.createElement("div");
    div.className="cell";
    div.textContent=cell;
    div.onclick=()=>makeMove(i);
    boardDiv.appendChild(div);
  });
}
function makeMove(i){
  if(board[i]===""){
    board[i]=currentPlayer;
    if(checkWin()){document.getElementById("status").textContent=currentPlayer+" Wins!"; return;}
    if(board.every(cell=>cell!=="")){document.getElementById("status").textContent="Draw!"; return;}
    currentPlayer=currentPlayer==="X"?"O":"X";
    renderBoard();
  }
}
function checkWin(){
  const wins=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  return wins.some(([a,b,c])=>board[a]&&board[a]===board[b]&&board[a]===board[c]);
}
function reset(){board=["","","","","","","","",""]; currentPlayer="X"; document.getElementById("status").textContent=""; renderBoard();}
renderBoard();