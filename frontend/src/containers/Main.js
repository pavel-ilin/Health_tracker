import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../index.css';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class Main extends Component {
  render(){
    return(
      <div className='container-fluid'>
      {!localStorage.token ?  null :

        <div>
        <h2 className='display-1'>Welcome dear {this.props.name}</h2>
        <p className='lead'>How are we fiiling today?</p>
        </div>
      }

      {!this.props.userDataLoadingComplete ? <h1>loading...</h1>  :
          <div>
        <div>
          <ul className='row'>
            <div className='col'><Link to='/bloood-pressure'>Blood Pressure</Link></div>
            <div className='col'><Link to='/cholesterol'>Cholesterol</Link></div>
            <div className='col'><Link to='/metabolic-panel'>Metabolic Panel</Link></div>
            <div className='col'><Link to='/vitamine-panel'>Vitamine Panel</Link></div>
          </ul>
        </div>

        <div>
          <ul className='row'>
            <div className='col'><Link to='/flue-shot'>Flue Shots</Link></div>
            <div className='col'><Link to='/blood-presure-test'>Check your blood pressure</Link></div >
          </ul>
        </div>






        <ul className='row'>
        <div className="card" style={{width: '18rem'}}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className='col'><Link to='/bloood-pressure'>Blood Pressure</Link></div>
          </div>
        </div>
        <div className="card" style={{width: '18rem'}}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className='col'><Link to='/bloood-pressure'>Blood Pressure</Link></div>
          </div>
        </div>
        <div className="card" style={{width: '18rem'}}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className='col'><Link to='/bloood-pressure'>Blood Pressure</Link></div>
          </div>
        </div>
        <div className="card" style={{width: '18rem'}}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className='col'><Link to='/bloood-pressure'>Blood Pressure</Link></div>
          </div>
        </div>
        </ul>
        

        <ul className='row' style={{display: 'inline-flex'}}>
        <div className="card" style={{width: '18rem'}}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className='col'><Link to='/bloood-pressure'>Blood Pressure</Link></div>
          </div>
        </div>
        <div className="card" style={{width: '18rem'}}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className='col'><Link to='/bloood-pressure'>Blood Pressure</Link></div>
          </div>
        </div>
        </ul>


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
