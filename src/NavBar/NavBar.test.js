import React from 'react'
import NavBar from './NavBar.js';
import App from '../App.js'
import { render, getAllByRole, getByAltText, getByTestId, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('NavBar', () => {
  it('should render header images', () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const linkElement = getAllByRole('img');
    expect(linkElement[0]).toBeInTheDocument(2);
  })
  it('should render game after clicking on controller button', () => {
    const { getByAltText, getByRole, getByTestId, container } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    const controller = getByAltText('gaming controller')
    fireEvent.click(controller)
    const gamePage = getByTestId('gaming-page')
    expect(gamePage).toBeInTheDocument()

  })
  // it('should render the character page after clicking on the goku icon', () => {
  //   const { getByTestId, getByRole }
  // })
})