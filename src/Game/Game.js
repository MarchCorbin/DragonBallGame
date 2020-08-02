import React from 'react'
import './Game.scss'
import Logo from '../Assets/dragonballlogo.png'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      correctAnswer: null,
      playerScore: 0,
    }
  }

componentDidUpdate = async(prevProps) => {
  console.log(prevProps.allCharacters, 'prevprops')
  console.log(this.props.allCharacters, 'currentprops')
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
        onClick={(event) => {
          this.checkForWin(event)
        }}
        id={`${char.name}`}
        className='user-button'
        key={index}
        >{char.name}
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
  console.log(this.state.correctAnswer, 'HEREIS CORRECTANSWER')
  if(this.state.correctAnswer !== null){
   return (
     <section className='correct-section'>
     <img className='correct-pic' src={this.state.correctAnswer.image} alt='character pic' ></img>
     <div className='text-holder'>
     <h3 className='feedback-text' id='feedback-text'></h3>
     <h3 className='planet-text'>Planet of Origin:{this.state.correctAnswer.originPlanet}</h3>
     </div>
     </section>
    )
   }
}

render() {
  return (
   <section className='game-page'> 
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
        <div className='player-score'>Your Score: {this.state.playerScore}</div>
    </section>
</section>
  )
}



}

export default Game