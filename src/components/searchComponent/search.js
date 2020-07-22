import React from 'react';
import { Component } from 'react';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";


class Search extends Component {
  render() {
    return (

      <div className="searchSpace">

      <div className="searchLabel">
        Search
        </div>

        <div className="searchPoint">
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-right-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg>
        </div>

      
      
      <div className="searchbar">
      <MDBCol md="6">
      <MDBFormInline className="md-form">
        <input className="form-control form-control-lg ml-5 w-75" type="text" placeholder="Search for Club Names" aria-label="Search" />
        <div className="sicon">
      <button type="button" className="btn-light btn-xs"><MDBIcon icon="search" /></button>
      </div>
      </MDBFormInline>
      </MDBCol>
      </div>

      <h1>
      Welcome to the Virtual Sproul!
        </h1>
        <h2>
      Here you can find where your interests are and contacts for various clubs.
        </h2>
</div>
      );
  }
}


export default Search;
