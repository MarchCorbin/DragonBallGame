import React from 'react'
import './Characters.scss'
import Logo from '../Assets/dragonballlogo.png'
import {Link, withRouter } from 'react-router-dom'
import CharacterDetails from '../CharacterDetails/CharacterDetails'
import PropTypes from 'prop-types'

class Characters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allCharacters: this.props.allChars,
      selectedChar: null,
    }
  }

  createLinks = (prevProps) => {
    if(this.state.allCharacters !== prevProps){
    return this.state.allCharacters.map((char) => {
      return (
       <Link
          alt='single link'
          className='link-tag' 
          key={char.id} 
          onClick={(event) => this.setSelected(event)} 
          to={`characters/${char.name}`}>
          <h2 id='link-text' className={`${char.name}`}>{char.name}</h2>
        </Link>
        )
      })

    }
  }

  resetSelected = () => {
    this.setState({selectedChar: null})
  }

  setSelected = (event) => {
    console.log(event.target)
    
    let select = this.state.allCharacters.filter(char => char.name == event.target.className)
    this.setState({selectedChar: select})
  }

  render() {
   return (
     <section className='characters-main'>
       <header className='game-header'>
      <img className='game-logo' src={Logo} alt='Dragon ball logo' ></img>
    </header>
    {!this.state.selectedChar ? 
      <div className='characters-page'>
       {this.createLinks()}
      </div> : <CharacterDetails reset={this.resetSelected} info={this.state.selectedChar} />
    }
     </section>
   )
  }
}

export default withRouter(Characters)

Characters.propTypes = {
allChars: PropTypes.array.isRequired
}

