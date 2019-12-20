import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../index.css';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class Main extends Component {

  render(){
    return(
      <div>
      {!localStorage.token ?  null :<h2>Welcome dear {this.props.name}</h2> }

      {!this.props.userDataLoadingComplete ? <h1>loading...</h1>  :
          <div>
        <div className='my_health'>
          <ul className='results_inline'>
            <li><Link to='/bloood-pressure'>Blood Pressure</Link></li>
            <li><Link to='/cholesterol'>Cholesterol</Link></li>
            <li><Link to='/metabolic-panel'>Metabolic Panel</Link></li>
            <li><Link to='/vitamine-panel'>Vitamine Panel</Link></li>
            <li><Link to='/weight'>Weight</Link></li>
          </ul>
        </div>

        <div className='my_neighborhood'>
          <ul className='results_inline'>
            <li><Link to='/insurance'>Health insurance</Link></li>
            <li><Link to='/flue-shot'>Flue Shots</Link></li>
            <li><Link to='/blood-presure-test'>Check your blood pressure</Link></li>
          </ul>
        </div>
      </div>
    }
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userDataLoadingComplete: state.userDataLoadingComplete,
    name: state.name
  }
}

export default withRouter(connect(mapStateToProps) (Main))
