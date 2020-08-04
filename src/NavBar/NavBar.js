import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'
import contollerIcon from '../Assets/controller.png'
import gokuIcon from '../Assets/gokuicon.png'
import { withRouter } from 'react-router-dom'

function NavBar(props) {
  return (
    <div className='main-header'>
      <Link className='link-header' to="/game">
        <img
          onClick={ () => props.conjureFour} 
          alt="gaming controller" 
          className="game-button" 
          src={contollerIcon}></img>
        </Link>
      <Link 
          className='link-header' 
          to='/characters'>
        <img 
          src={gokuIcon} 
          className='character-button' 
          alt='goku hair'>
        </img>
      </Link>
    </div>
  )
}

export default withRouter(NavBar)