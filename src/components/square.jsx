const Square = ({ value, onClick, isWinningSquares }) => {
  const colorClassName = value === 'X' ? 'text-green' : 'text-orange';
  const winnerClassName = isWinningSquares && 'winning';
  return (
    <button
      type="button"
      className={`square ${colorClassName} ${winnerClassName}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
export default Square;
