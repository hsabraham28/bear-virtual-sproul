import React from 'react';
import { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import oski from './oski-big.png';

console.log(oski);




function ClubCard(props){
  
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
              <strong>{props.name}</strong>
            </MDBCardTitle>


            <MDBCardText>
              {props.info}
            </MDBCardText>

            <MDBCol md='12' className='d-flex justify-content-center'>
              
            </MDBCol>
          </MDBCardBody>
        </MDBCard>
     
      

  </div>
  );
}





export default ClubCard;
