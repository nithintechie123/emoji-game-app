import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isGameInProgress} = props

  return (
    <nav className="nav-container">
      <div className="logo-title-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="emoji-heading">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="scores-container">
          <p className="score-heading">Score: {currentScore}</p>
          <p className="score-heading">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
