const StatusMessage = ({ winner, gamingBoard }) => {
  const { squares, isXNext } = gamingBoard;
  const noMovesLeft = squares.every(squareValue => squareValue !== null);
  const nextPlayer = isXNext ? 'X' : 'O';
  const renderStatusMessage = () => {
    if (winner) {
      return (
        <>
          Winner is{' '}
          <span className={!isXNext ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      );
    }
    if (!winner && noMovesLeft) {
      return (
        <>
          <span className="text-orange">X</span> &{' '}
          <span className="text-green">O</span> tied the game
        </>
      );
    }
    if (!winner && !noMovesLeft) {
      return (
        <>
          Next player is{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </>
      );
    }
    return <h1>null</h1>;
  };
  return <h2 className="status-message">{renderStatusMessage()}</h2>;
};

export default StatusMessage;
