import './Messages.css'
import Winner from '../Winner/Winner';

export default function Messages({ gameOver, turn, Winner, onClickPlayAgain }) {
  const renderMessage = () => {
    if (Winner) {
      return `${Winner} is the winner!`;
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