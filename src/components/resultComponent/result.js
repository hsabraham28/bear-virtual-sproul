import React from 'react';
import { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import oski from './oski-big.png';
import ClubCard from './clubCardComponent/clubCard';

console.log(oski);





class Result extends Component {
  render() {
    return (

      <div className="result-section">
  <div className="rowOne">      
 <MDBRow>

      <MDBCol md='2'>
      <ClubCard />
      </MDBCol>

      <MDBCol md='2'>
      <ClubCard />
      </MDBCol>

      <MDBCol md='2'>
      <ClubCard />
      </MDBCol>

    </MDBRow>
    </div>


    <MDBRow>

      <MDBCol md='2'>
      <ClubCard />
      </MDBCol>

      <MDBCol md='2'>
      <ClubCard />
      </MDBCol>

      <MDBCol md='2'>
      <ClubCard />
      </MDBCol>
      
    </MDBRow>
      

   </div>
      );
  }
}




export default Result;
