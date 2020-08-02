import React from 'react'
import './Characters.scss'
import Logo from '../Assets/dragonballlogo.png'

class Characters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allCharacters: this.props.allChars
    }
  }

  createLinks = () => {
    if(this.state.allCharacters.length){
    return this.state.allCharacters.map((char) => {
      return (
       <a><h2 className='name-tag'>{char.name}</h2></a>
      )
    })

    }
  }

  render() {
   return (
     <section class='characters-main'>
       <header className='game-header'>
      <img className='game-logo' src={Logo} alt='Dragon ball logo' ></img>
    </header>
      <div className='characters-page'>
       {this.createLinks()}
      </div>
     </section>
   )
  }
}

export default Characters