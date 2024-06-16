import '../styles/root.css';

const Square = ({value, onClick,isWinningSquare}) =>{
    const colorClassName = value === 'X' ? 'text-green' : 'text-orange';
    const winningClass = isWinningSquare ? 'winning' : '';

    return(
        <button className = {`square ${colorClassName} ${winningClass}`} onClick = {onClick}>{value}</button>
    );
};

export default Square;