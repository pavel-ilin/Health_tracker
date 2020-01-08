import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../assets/index.css';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Main extends Component {
  render(){
    return(

      <div>

      {!localStorage.token ?  null :

        <div>
          {!this.props.userDataLoadingComplete ? <h1 className='display-1'>loading...</h1>  :

                  <div>
                    <div>
                      <p className='lead'>Welcome dear <b>{this.props.name}</b></p>
                      <p className='lead'>How are we feeling today?</p>
                    </div>


                      <div className='grid1'>

                        <div className='g1'>
                          <Link to='/bloood-pressure'>
                            <h5 className="card-title">Blood Pressure</h5>
                            <img src={'https://storage.needpix.com/rsynced_images/cardiac-156059_1280.png'} alt="bloodPressure" className="img_size"/>
                          </Link>
                        </div>

                        <div className='g1'>
                          <Link to='/cholesterol'>
                            <h5 className="card-title">Cholesterol</h5>
                            <img src={'http://www.picserver.org/highway-signs2/images/cholesterol.jpg'} alt="cholesterol" className="img_size"/>
                          </Link>
                        </div>

                        <div className='g1'>
                          <Link to='/metabolic-panel'>
                            <h5 className="card-title">Metabolic Panel</h5>
                            <img src={'https://st4.depositphotos.com/4177785/27492/v/450/depositphotos_274920202-stock-illustration-healthy-liver-color-icon-human.jpg'} alt="metabolism" className="img_size"/>
                          </Link>
                        </div>

                        <div className='g1'>
                          <Link to='/vitamine-panel'>
                            <h5 className="card-title">Vitamine Panel</h5>
                            <img src={'https://hhp-blog.s3.amazonaws.com/2018/02/iStock-505820296.jpg'} alt="cholesterol" className="img_size"/>
                          </Link>
                        </div>
                      </div>


                      <div>
                        <p className='lead'>Explore your neighborhood!</p>
                      </div>


                      <div className='grid2'>

                        <div className='g1'>
                          <Link to='/flue-shot'>
                            <h5 className="card-title">Flue Shots</h5>
                            <img src={'https://obamawhitehouse.archives.gov/sites/default/files/image/image_file/h1n1_shot.jpg'} alt="flu shot" className="img_size"/>
                          </Link>
                        </div>

                        <div className='g1'>
                          <Link to='/blood-presure-test'>
                            <h5 className="card-title">Blood pressure tests</h5>
                            <img src={'https://cdn.pixabay.com/photo/2019/01/15/21/19/blood-3934879_960_720.jpg'} alt="blood pressure test" className="img_size"/>
                          </Link>
                        </div>
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
    name: state.name
  }
}

export default withRouter(connect(mapStateToProps) (Main))