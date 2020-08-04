import React from 'react'
import './Game.scss'
import Logo from '../Assets/dragonballlogo.png'
import propTypes from 'prop-types'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      correctAnswer: null,
      playerScore: 0,
    }
  }

componentDidMount() {
  this.props.conjureFour()
  this.setState({characters:this.props.allCharacters})
}

componentDidUpdate = async(prevProps) => {
  if(prevProps.allCharacters !== this.props.allCharacters){
    await this.setState({characters:this.props.allCharacters})
  this.setAWinner()
  }
}

setAWinner = () => {
  let randomIndex = Math.floor(Math.random() * 4)
  let winner = this.state.characters[randomIndex]
  this.setState({correctAnswer: winner})
  this.showOptions()
}

showOptions() {
  if(this.state.characters.length > 2){
  return this.state.characters.map((char, index) => {
    return (
      <button
        alt='user-choices'
        onClick={(event) => {
          this.checkForWin(event)
        }}
        id={`${char.name}`}
        className='user-button'
        key={index}
        >
        {char.name}
      </button>
      )
    })
  }
}

checkForWin = (event) => {
if(event.target.id == this.state.correctAnswer.name){
    this.correctAnswered()
  } else {
    this.incorrectAnswered()
  }

}

incorrectAnswered() {
  const feedback = document.getElementById('feedback-text')
  this.setState({playerScore: 0})
  this.props.conjureFour()
  return (feedback.innerText= 'You Lack Discipline! Focus!')
}

correctAnswered(prevState) {
  const feedback = document.getElementById('feedback-text')
  this.setState({playerScore: this.state.playerScore + 1 })
  this.props.conjureFour()
  return (feedback.innerText= 'Thats right Gohan!')
}

showCorrect = () => {
  if(this.state.correctAnswer !== null){
   return (
     <section className='correct-section'>
      <img 
        className='correct-pic' 
        src={this.state.correctAnswer.image} 
        alt='character pic'>
      </img>
      <div className='text-holder'>
        <h3 className='feedback-text' id='feedback-text'></h3>
        <h3 className='planet-text'>Planet of Origin:{this.state.correctAnswer.originPlanet}</h3>
         <h4 className='player-score'>Your Score: {this.state.playerScore}</h4>
      </div>
     </section>
    )
  }
}

render() {
  return (
      <section data-testid='gaming-page' className='game-page'> 
        <header className='game-header'>
          <img className='game-logo' src={Logo} alt='Dragon ball logo' ></img>
        </header>
        <section className='game-body'>
          <div className='single-char'>
            {this.showCorrect()}
          </div>
          <div className='user-choices'>
            {this.showOptions()}
          </div>
        </section>
      </section>
    )
  }
}

export default Game


Game.propTypes = {
allCharacters: propTypes.array.isRequired,
}

