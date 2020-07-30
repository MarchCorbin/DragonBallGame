import React from 'react';
import './App.css';
import { fetchCharactersData } from './fetchCalls/fetchCalls'
import NavBar from './NavBar/NavBar.js';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      allChars: [],
      fourChars: [],
    }
  }

  componentDidMount = async () => {
    await this.retrieveCharacterData()
    console.log(this.state.allChars, 'allCars')
  }

retrieveCharacterData = () => {
  return fetchCharactersData()
  .then(data => {
    this.setState({allChars: data})
    return data
  })
}

getRandomChars = () => {
  const characters = [{},{},{},{}]
  let randomIndex = []
  while (randomIndex <= 4) {
    let randomNum = Math.floor(Math.random() * this.state.allChars.length)
    if(randomIndex.indexOf(randomNum) === -1) randomIndex.push(randomNum)
  }
  return characters.map((emptySlot, index) => {
    const randomIndexes = randomIndex[index]
    console.log(characters, 'characters')
    return this.state.allChars[randomIndexes] 
  })
}



render() {
  return(
    <main className='main-page'>
      <NavBar />
    </main>
  )
}

}

export default App;
