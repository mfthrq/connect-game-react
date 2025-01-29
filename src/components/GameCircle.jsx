const onClick = () => {
    alert("OnClick");
}

const GameCircle = ({id, children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default GameCircle;