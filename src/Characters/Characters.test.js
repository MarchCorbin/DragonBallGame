import React from 'react'
import Characters from './Characters.js'
import { render, getAllByRole, getByAltText, FireEvent, waitFor } from '@testing-library/react'
import { MemoryRouter, BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import { dbResult } from '../mockResult/MockResult.js'

jest.mock('../fetchCalls/fetchCalls.js')

describe('Characters', () => {
  const allCharacters = dbResult
  const createLinks = jest.fn()
  
    it('should render the header and characters page', () => {
      const { getByAltText } = render(
        <BrowserRouter>
        <Characters allCharacters={allCharacters} />
        </BrowserRouter>
      )
      const charPage = getByAltText('Dragon ball logo')
      expect(charPage).toBeInTheDocument()
    })

    it('should render all characters to the page as links',  () => {
      const { getAllByRole } = render(
        <MemoryRouter>
          <Characters allChars={allCharacters} />
        </MemoryRouter>
      )

      const charButton = getAllByRole('link')
      expect(charButton).toHaveLength(22)
    })
})