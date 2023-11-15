export default function Messages({ gameOver, turn, winner, onClickPlayAgain }) {
  const renderMessage = () => {
    if (winner) {
      return `${winner} is the winner!`;
    } else if (gameOver) {
      return 'Tie game!';
    } else {
      return `Your turn, ${turn}.`;
    }
  };

  return (
    <div className="messages">
      <div>{renderMessage()}</div>
      {gameOver && (
        <button onClick={onClickPlayAgain} className="playAgain">Play Again</button>
      )}
    </div>
  );
};