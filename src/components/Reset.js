
const Reset = ({onClick,winner}) =>{
    return(
        <button className={`reset ${winner ? 'active': ''}`} onClick={onClick}>Reset</button>       
    );

};

export default Reset;