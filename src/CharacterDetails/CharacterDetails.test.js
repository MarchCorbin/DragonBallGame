import React from 'react'
import CharacterDetails from './CharacterDetails.js'
import { render, getAllByRole, getByAltText, FireEvent, waitFor } from '@testing-library/react'
import { MemoryRouter, BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'



describe('Characters', () => {
  const selectedChar = {
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
  const reset = jest.fn()


  it('should render the character image and information', () => {
    const { getByRole, getAllByRole } = render(
      <BrowserRouter>
      <CharacterDetails reset={reset} info={selectedChar} />
      </BrowserRouter>
    )
    console.log(selectedChar, 'THISISSELECTED')
    const nameText = getByRole('heading')
    expect(nameText).toBeInTheDocument()
    const charImg = getByRole('img')
    expect(charImg).toBeInTheDocument()
  })
})