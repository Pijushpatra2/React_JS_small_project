import React, { Component } from 'react';
import "./FristBody.css";
import { Button } from '@mui/material';
import mainimg from '../../assets/mainImg.png'
export class FristBody extends Component {
  render() {
    const styles = {
      main:{
      // backgroundColor: '#1b2430',
      backgroundColor:"#111",
      width: '94%',
      height: 'auto',
      marginLeft:"3%",
      marginRight:"3%"
    }
    };
    
    

    return (
      <div style={styles.main} className='main'>
        <div className='mainBody'>
          <div className='mainBodycont'>
            <div className='mainBodyHeading'>
              <h3>H2R</h3>
            </div>
            <div className='quotusDiv'>
              <p className='quotus'>THE RACING HORSE BACK</p>
            </div>
            <p className='fristAbout'>The <b>Kawasaki H2R</b> isn't called a Ninja for nothing -- <br/> this thing is silent but deadly on the race track.</p>
            <Button variant="contained" className='btn'>Contained</Button>
          </div>
          <div className='mainBodyImg'>
            <img src={mainimg} alt='' height={250} width={360} className='mainImg'/>
            <div className='glow'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default FristBody;

