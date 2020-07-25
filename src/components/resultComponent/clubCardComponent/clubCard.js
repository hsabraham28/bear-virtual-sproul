import React from 'react';
import { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import oski from './oski-big.png';

console.log(oski);




class ClubCard extends Component {
  render() {
    return (

      <div className="clubLayout">
        

        <MDBCard wide cascade>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src={oski}
              alt='Card cap'
            />
          </MDBView>

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Club Name</strong>
            </MDBCardTitle>


            <MDBCardText>
              Brief Introduction
            </MDBCardText>

            <MDBCol md='12' className='d-flex justify-content-center'>
              
            </MDBCol>
          </MDBCardBody>
        </MDBCard>
     
      

  </div>
      );
  }
}




export default ClubCard;
