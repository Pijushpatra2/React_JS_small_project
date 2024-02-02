import React, { Component } from 'react';
import "./CarMenu.css";
import ktm from '../../assets/bikeLogo/ktm.png';
import bajaj from '../../assets/bikeLogo/bajaj.png';
import honda from '../../assets/bikeLogo/honda.png';
import kawasaki from '../../assets/bikeLogo/kawasaki.png';
import royalE from '../../assets/bikeLogo/royal-enfield.png';
import harleyD from '../../assets/bikeLogo/harley-davidson.png';
import bmw from '../../assets/bikeLogo/bmw.png'
import jawa from '../../assets/bikeLogo/jawa.png'
import aprilia from '../../assets/bikeLogo/aprilia.png'
import yamaha from '../../assets/bikeLogo/yamaha.png'
import triump from '../../assets/bikeLogo/triump.png'
import benelli from '../../assets/bikeLogo/benelli.png'

export class CarMenu extends Component {
  render() {
    const styles = {
      main: {
        width: "100%",
        height: "400px",
        marginTop: "50px",
        display:"flex",
        justifyContent:"center",
      }
    }; 

    return (
      <div style={styles.main}>
        <div className='mainCont'>
              <div className='mainContSemiheading'>
                <p>ALL BRANDS</p>
              </div>
              <div className='mainContheading'>
                <h2>Select Your Brand</h2>
              </div>
              <div className='mainContSub'>
                <div className='logoGrid'>
                  <img src={ktm} alt="KTM" height={"80%"} width={"80%"}/>
                </div>
                <div className='logoGrid'>
                  <img src={bajaj} alt="KTM" height={"80%"} width={"80%"}/>
                </div>
                <div className='logoGrid'>
                  <img src={honda} alt="KTM" height={"80%"} width={"80%"}/>
                </div>
                <div className='logoGrid'>
                  <img src={kawasaki} alt="KTM" height={"80%"} width={"80%"}/>
                </div>
                <div className='logoGrid'>
                  <img src={royalE} alt="KTM" height={"80%"} width={"80%"}/>
                </div>
                <div className='logoGrid'>
                  <img src={harleyD} alt="KTM" height={"80%"} width={"80%"}/>
                </div>

                <div className='logoGrid'>
                  <img src={bmw} alt="KTM" height={"65%"} width={"70%"}/>
                </div>
                <div className='logoGrid'>
                  <img src={jawa} alt="KTM" height={"66%"} width={"80%"}/>
                </div>
                <div className='logoGrid'>
                  <img src={aprilia} alt="KTM" height={"65%"} width={"95%"}/>
                </div>
                <div className='logoGrid'>
                  <img src={yamaha} alt="KTM" height={"25%"} width={"80%"}/>
                </div>
                <div className='logoGrid'>
                  <img src={benelli} alt="KTM" height={"40%"} width={"80%"}/>
                </div>
                <div className='logoGrid'>
                  <img src={triump} alt="KTM" height={"80%"} width={"80%"}/>
                </div>
              </div>
        </div>
      </div>
    );
  }
}

export default CarMenu;
