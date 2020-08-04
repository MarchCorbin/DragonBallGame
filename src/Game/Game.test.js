import React from 'react'
import Game from './Game.js';
import { render, getAllByRole, getByAltText, fireEvent, debug, getById } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

jest.mock('../fetchCalls/fetchCalls.js')

describe('Game', () => {
  const conjureFour = jest.fn()
  const correctAnswer = {
        "species": "unknown",
        "status": "Alive",
        "originPlanet": "Unknown",
        "gender": "Male",
        "_id": "5c7c89fb12b25c00177aa150",
        "name": "Frieza",
        "series": "Z",
        "created": "2019-03-04T02:14:19.836Z",
        "url": "/api/character/Frieza",
        "image": "https://www.fightersgeneration.com/nf2/char/dbfz/frieza/frieza-dbz-point.png",
        "__v": 0
  }
  const allCharacters = [
    {
        "species": "unknown",
        "status": "Alive",
        "originPlanet": "Unknown",
        "gender": "Male",
        "_id": "5c7c89fb12b25c00177aa150",
        "name": "Frieza",
        "series": "Z",
        "created": "2019-03-04T02:14:19.836Z",
        "url": "/api/character/Frieza",
        "image": "https://www.fightersgeneration.com/nf2/char/dbfz/frieza/frieza-dbz-point.png",
        "__v": 0
    },
    {
        "species": "Saiyan",
        "status": "Alive",
        "originPlanet": "Vegeta",
        "gender": "Male",
        "_id": "5c7c8ab312b25c00177aa155",
        "name": "Goku",
        "series": "DragonBall",
        "created": "2019-03-04T02:17:23.056Z",
        "url": "/api/character/Goku",
        "image": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F04%2Fdragonball-goku-kakarot-choose-custom-outfit-campaign-news-001.jpg?quality=95&w=1170&cbr=1&q=90&fit=max",
        "__v": 0
    },
    {
        "species": "Saiyan",
        "status": "Alive",
        "originPlanet": "Vegeta",
        "gender": "Male",
        "_id": "5c7c8ad012b25c00177aa156",
        "name": "Vegeta",
        "series": "Z",
        "created": "2019-03-04T02:17:52.593Z",
        "url": "/api/character/Vegeta",
        "image": "https://superherojacked.com/wp-content/uploads/2018/07/Vegeta-Workout-1-1024x563.jpeg",
        "__v": 0
    },
    {
        "species": "Saiyan",
        "status": "Alive",
        "originPlanet": "Earth",
        "gender": "Male",
        "_id": "5c7c8aed12b25c00177aa157",
        "name": "Gohan",
        "series": "Z",
        "created": "2019-03-04T02:18:21.992Z",
        "url": "/api/character/Gohan",
        "image": "https://techanimate.com/wp-content/uploads/2017/11/Why-does-Gohan-Have-so-much-Hidden-Power-1024x576.jpg",
        "__v": 0
    }]

  it('should render four choices', () => {
    const { getAllByRole, getByAltText } = render(
      <MemoryRouter>
        <Game allCharacters={allCharacters}  conjureFour={() => conjureFour} />
      </MemoryRouter>
    )
    const userChoices = getAllByRole('button')
    expect(userChoices).toHaveLength(4)
  })
it('it should render a header', () => {
  const { getAllByRole } = render(
    <MemoryRouter>
      <Game allCharacters={allCharacters}  conjureFour={() => conjureFour} />
    </MemoryRouter>
  )
  const header = getAllByRole('button')
  expect(header[0]).toBeInTheDocument()
})

})