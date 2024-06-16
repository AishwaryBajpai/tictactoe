import '../styles/root.css';
import Square from './Square';

const Board = ({board, handleSquareClick,winningSquare}) =>{
    const rendersquare = (position) =>{
        const isWinningSquare = winningSquare.includes(position);
        return (
            <Square value={board[position]} onClick = {()=> handleSquareClick(position) } isWinningSquare={isWinningSquare}/>
        );
    };
    return (
       <div className='board'>
          <div className='board-row'>
            {rendersquare(0)}
            {rendersquare(1)}
            {rendersquare(2)}
          </div>     
          <div className='board-row'>
          {rendersquare(3)}
            {rendersquare(4)}
            {rendersquare(5)}
          </div> 
          <div className='board-row'>
          {rendersquare(6)}
            {rendersquare(7)}
            {rendersquare(8)}
          </div> 
       </div>
    );

};

export default Board;