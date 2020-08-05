import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import NavBar from './NavBar/NavBar.js'
import '@testing-library/jest-dom'
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { fetchCharactersData } from './fetchCalls/fetchCalls.js'

jest.mock('./fetchCalls/fetchCalls.js')

describe('App', () => {
 fetchCharactersData.mockResolvedValue( 
   [
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
        "image": "../images/Frieza.jpg",
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
        "image": "../images/Goku.jpg",
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
        "image": "../images/Vegeta.jpg",
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
        "image": "../images/Gohan.jpg",
        "__v": 0
    },
    {
        "species": "Android",
        "status": "Dead",
        "originPlanet": "Earth",
        "gender": "Male",
        "_id": "5c7c8b1012b25c00177aa158",
        "name": "Android16",
        "series": "Z",
        "created": "2019-03-04T02:18:56.081Z",
        "url": "/api/character/Android16",
        "image": "../images/Android16.jpg",
        "__v": 0
    },
    {
        "species": "Namekian",
        "status": "Alive",
        "originPlanet": "Namek",
        "gender": "Male",
        "_id": "5c7c991f12b25c00177aa15b",
        "name": "Piccolo",
        "series": "DragonBall",
        "created": "2019-03-04T03:18:55.804Z",
        "url": "/api/character/Piccolo",
        "image": "../images/Piccolo.jpg",
        "__v": 0
    },
    {
        "species": "Majin",
        "status": "Alive",
        "originPlanet": "Majin",
        "gender": "Male",
        "_id": "5c7c994712b25c00177aa15c",
        "name": "Fat_Majin_Buu",
        "series": "Z",
        "created": "2019-03-04T03:19:35.092Z",
        "url": "/api/character/Fat_Majin_Buu",
        "image": "../images/Fat_Majin_Buu.jpg",
        "__v": 0
    }
   ])

 it('should render the nav bar and homepage', async () => {

   const { getByRole } = render(
     <MemoryRouter>
       <App />
     </MemoryRouter>
   )
   const gameNav = getByRole('main-styling')
  expect(gameNav).toBeInTheDocument()
 })

})
