import React from 'react'
import './NavBar.scss'
import contollerIcon from '../Assets/controller.png'

function NavBar() {
  return (
<div className='main-header'>
  <img alt="gaming controller" className="game-button" src={contollerIcon}></img>
</div>
  )
}

export default NavBar