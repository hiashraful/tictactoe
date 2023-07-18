const History = ({ history }) => {
    // console.log(history)
  return (
    <>
      <ul>
        <li>
          {history.map((_, index) => {
            <div key={index}>move</div>;
          })}
        </li>
      </ul>
    </>
  );
};
export default History;
