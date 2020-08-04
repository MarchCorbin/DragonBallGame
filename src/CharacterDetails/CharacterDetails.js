import React from 'react'
import './CharacterDetails.scss'
import { Redirect, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'



class CharacterDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: props.info,
      onPage: true
    }
  }

  detailsPage = () => {
    if(this.state.selected){
   const charInfo = this.state.selected[0]
    return(
      <div className='details-section'>
        <h1 className='details-name'>{charInfo.name}</h1>
        <img className='details-image' src={charInfo.image} alt={charInfo.name}></img>
        <section className='readings-section'>
        <h1 className='title-text'>Scanner Readings</h1>
        <h2 className='descrip-text'>Origin Planet: {charInfo.originPlanet}</h2>
        <h3 className='descrip-text'>Species: {charInfo.species}</h3>
        <h3 className='descrip-text'>Gender: {charInfo.gender}</h3>
        <h3 className='descrip-text'>Current Status: {charInfo.status}</h3>
        </section>
      </div>
    )
    }
  }

  handleClick = async() => {
      await this.setState({onPage: false})
      this.props.reset()
  }

  render = () => {
return (
<>
    <div className='button-holder'>
    <button onClick={() => this.handleClick()} className='back-btn'>Back to Characters</button>
    {!this.state.onPage && <Redirect to='/characters' /> }
    </div>
    {this.detailsPage()}
</>
)
  }

}

export default withRouter(CharacterDetails)

CharacterDetails.propTypes = {
info: PropTypes.object.isRequired
}
