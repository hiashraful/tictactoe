const Reset = ({NEW_GAME, setHistory, setCurrentMove, winner}) => {
    const resetGame = () => {
        setHistory(NEW_GAME);
        setCurrentMove(0);
      }
    return(
        <div>
            <button type="button" onClick={resetGame } className={`btn-reset ${winner && 'active'}`}>New Game</button>
        </div>
    )
}
export default Reset;