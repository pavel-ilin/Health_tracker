import React, { Component } from 'react'
import { useDispatch } from 'react-redux'
import { logoutAction } from '../actionCreator'
import { Link } from 'react-router-dom'



const Logout = () =>  {
  const dispatch = useDispatch();

    return (
      <div className='App'>
        <button className='btn btn-danger' onClick={() => dispatch(logoutAction())}><Link style={{color: 'white'}} to='/welcome'>Logout</Link></button>
      </div>
    )
}

export default Logout