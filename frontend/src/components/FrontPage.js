import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

import '../assets/index.css'

const FrontPage = () => {
  const name = useSelector(state => state.name);

  return(
    <div>
      <div>
        <p className='lead'>Welcome <b>{name}</b></p>
        <p className='lead'>How are you feeling today?</p>
      </div>

      <div>
        <img className='img_size' src='https://c.pxhere.com/images/d7/e9/8eb2cba42a856d7b2b0b23f3bc32-1541055.jpg!d'  height="500" />
      </div>
    </div>)
}

export default FrontPage