import React from 'react';
import './App.css';
import { fetchCharactersData } from './fetchCalls/fetchCalls'
import NavBar from './NavBar/NavBar.js';
import Game from './Game/Game'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      allChars: [],
    }
  }

  componentDidMount = async () => {
    await this.retrieveCharacterData()
    console.log(this.state.allChars, 'allCars')
    // this.gameCharacters()
  }

  gameCharacters = () => {
   if(this.state.allChars.length) {
     return this.state.allChars
   }
  
  }

retrieveCharacterData = () => {
  return fetchCharactersData()
  .then(data => {
    this.setState({allChars: data})
  })
  .catch(err => console.log(err))
}

render() {
  return(
    <main className='main-page'>
      <NavBar />
      <Game allCharacters={this.state.allChars} />
    </main>
  )
}

}

export default App;
