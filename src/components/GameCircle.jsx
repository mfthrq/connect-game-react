import '../Game.css';

const onClick = (ev, id) => {
    alert("OnClick " + id);
}

const GameCircle = ({id, color, children}) => {
    const style = {
        backgroundColor: color
    }

    return (
        <div style={style} className='gameCircle' onClick={(ev) => onClick(ev, id, value)}>
            {children}
        </div>
    )
}

export default GameCircle;