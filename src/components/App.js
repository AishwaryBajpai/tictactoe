import { useState } from 'react';
import '../styles/root.css';
import Board from './Board';
import Reset from './Reset';
import { calculateWinner,getallfill } from './helpers';

const App = () =>{
  const [ board, setBoard] = useState(Array(9).fill(null));
  const [ isXNext , setisXNext ] = useState(false);
  
  const winner = calculateWinner(board);
  const allfill = getallfill(board);
  const message = winner ? `winner is ${winner}` : allfill ? `match tied.Pls reset to start new game` :`next player is ${ isXNext ? 'X' : 'O' }`;
  

  const handleSquareClick = (position) =>{
      if(winner || board[position])
         return;
      setBoard(prev => {
        return prev.map((square,pos) =>{
          if(pos === position){
            return isXNext ? 'X' : 'O';
          }
          return square;
        });
      });

      setisXNext(prev=> !prev);
  };

  const handleResetClick = () => {
      setBoard(Array(9).fill(null));
      setisXNext(false);
  }

  return (
    <div className='app'>
     <h1>TIC TAC TOE</h1>
     <h4>{message}</h4>
     <Board board={board} handleSquareClick = {handleSquareClick} />
     <Reset onClick={()=>handleResetClick()} />
    </div>
  );
};

export default App;
