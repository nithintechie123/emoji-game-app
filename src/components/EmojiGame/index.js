import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import './index.css'
import WinOrLoseCard from '../WinOrLoseCard'
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {isGameInProgress: true, clickedEmojisList: [], topScore: 0}

  resetGame = () => {
    this.setState({isGameInProgress: true, clickedEmojisList: []})
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisListlength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisListlength)
    } else {
      if (emojisList.length - 1 === clickedEmojisListlength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList, topScore, isGameInProgress} = this.state
    const currentScore = clickedEmojisList.length
    const isWon = clickedEmojisList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        currentScore={currentScore}
        topScore={topScore}
        isGameInProgress={isGameInProgress}
        resetGame={this.resetGame}
      />
    )
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.shuffledEmojisList()

    return (
      <ul className="emoji-game-body">
        {shuffledEmojisList.map(eachEmojiItem => (
          <EmojiCard
            key={eachEmojiItem.id}
            emojiDetails={eachEmojiItem}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isGameInProgress, topScore, clickedEmojisList} = this.state
    const currentScore = clickedEmojisList.length

    return (
      <div className="app-container">
        <NavBar
          topScore={topScore}
          currentScore={currentScore}
          isGameInProgress={isGameInProgress}
        />
        <div className="emojis-container">
          {isGameInProgress ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
