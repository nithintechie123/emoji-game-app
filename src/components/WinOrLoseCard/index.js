import './index.css'

const WinOrLoseCard = props => {
  const {isWon, currentScore, resetGame} = props
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreStatus = isWon ? 'Best Score' : 'Score'
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const onClickPlayAgain = () => {
    resetGame()
  }

  return (
    <div className="score-card-image-container">
      <div className="score-container">
        <h1 className="game-status">{gameStatus}</h1>
        <div className="score-summary-section">
          <p className="score-status">{scoreStatus}</p>
          <p className="score-display">{currentScore}/12</p>
          <button
            type="button"
            className="play-again-button"
            onClick={onClickPlayAgain}
          >
            Play Again
          </button>
        </div>
      </div>

      <img src={imageUrl} alt="win or lose" className="win-or-loss-image" />
    </div>
  )
}

export default WinOrLoseCard
