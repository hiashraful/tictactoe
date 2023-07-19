const History = ({ history, moveTo }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, index) => (
          <li key={index}>
            <div>
              <button type="button" className="btn-move" onClick={()=>moveTo(index)}>
                {index === 0 ? 'Start game' : `Go to move #${index}`}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default History;
