import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../assets/index.css';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Main extends Component {
  render(){
    return(

      <div className='App'>

      {!localStorage.token ?  null :

        <div>
          {!this.props.userDataLoadingComplete ? <h1 className='display-1'>loading...</h1>  :

                  <div>
                    <div>
                      <p className='lead'>Welcome <b>{this.props.name}</b></p>
                      <p className='lead'>How are you feeling today?</p>
                    </div>

                    <div>
                      <img className='img_size' src='https://c.pxhere.com/images/d7/e9/8eb2cba42a856d7b2b0b23f3bc32-1541055.jpg!d'  height="500" />
                    </div>
                  </div>
          }
          </div>
      }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userDataLoadingComplete: state.userDataLoadingComplete,
    name: state.name,
    last_blood_pressures: state.blood_pressures[0],
    last_metabolic_panels: state.metabolic_panels[0],
    last_vitamine_panels: state.vitamine_panels[0],
    last_cholesterols: state.cholesterols[0]
  }
}

export default withRouter(connect(mapStateToProps) (Main))
