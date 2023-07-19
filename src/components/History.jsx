const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, index) => (
          <li key={index}>
            <div>
              <button
                type="button"
                className={`btn-move ${currentMove === index ? 'active' : ''}`}
                onClick={() => moveTo(index)}
              >
                {index === 0 ? 'Go to Start game' : `Go to move #${index}`}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default History;
