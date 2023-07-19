const Reset = ({NEW_GAME, setHistory, setCurrentMove}) => {
    const resetGame = () => {
        setHistory(NEW_GAME);
        setCurrentMove(0);
      }
    return(
        <div>
            <button type="button" onClick={resetGame } className='btn-reset'>New Game</button>
        </div>
    )
}
export default Reset;