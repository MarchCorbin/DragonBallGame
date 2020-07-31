import React from 'react'
import './Game.scss'
import Logo from '../Assets/dragonballlogo.png'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: this.props.allCharacters
    }
  }


  getSelection() {
  this.setState({selectCharacters: this.props.randomCharacters})
  console.log(this.state.selectCharacters)
  }

render() {
  console.log(this.state.characters, 'this is the state')
  return (
   <section className='game-page'> 
    <header className='game-header'>
      <img className='game-logo' src={Logo} alt='Dragon ball logo' ></img>
    </header>
    <section className='game-body'>
      <div className='single-char'>
        {/* <img></img> */}
      </div>
      <div className='user-choices'>
    {this.getSelection}
      </div>
    </section>
</section>
  )
}



}

export default Game