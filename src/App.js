import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import { fetchCharactersData } from './fetchCalls/fetchCalls'
import NavBar from './NavBar/NavBar.js';
import Game from './Game/Game'
import { dbResult } from './mockResult/MockResult'
import Characters from './Characters/Characters'
import CharacterDetails from './CharacterDetails/CharacterDetails.js'
import PropTypes from 'prop-types'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      allChars: dbResult,
      gameSelection: []
    }
  }

  componentDidMount = async () => {
    // await this.retrieveCharacterData()
    this.conjureFour()
  }

  conjureFour = () => {
    let randomIndexes = []
    let randomIndex;
    if(this.state.allChars.length > 2){
    while(randomIndexes.length <= 3){
      randomIndex = Math.floor(Math.random() * this.state.allChars.length)
      if(!randomIndexes.includes(randomIndex)){
      randomIndexes.push(randomIndex)
      }
     }
     this.fourCharacters(randomIndexes)
    }
  }
  

fourCharacters(randomIndexes) {
  let fourChar = []
  randomIndexes.map((index) => {
  fourChar.push(this.state.allChars[index])
  })
  this.setState({gameSelection: fourChar})
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
    <main role='main-styling' className='main-page'>
      <BrowserRouter>
        <Route exact path='/' >
          <NavBar conjureFour={this.conjureFour} />
        </Route>
        <Route path="/game">
          <NavBar />
          <Game 
            conjureFour={this.conjureFour} 
            allCharacters={this.state.gameSelection} />
        </Route>
        <Route path='/characters'>
          <NavBar />
          <Characters allChars={this.state.allChars} />
        </Route>
        <Route path='/characters/:name'>
        </Route>

      </BrowserRouter>
    </main>
  )
}

}

export default App;

// App.PropTypes = {
// allChars: PropTypes.array.isRequired,
// gameSelection: PropTypes.array.isRequired
// }
