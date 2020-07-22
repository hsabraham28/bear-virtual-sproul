import React from 'react';
import { Component } from 'react';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";





class Sort extends Component {
  render() {
    return (

      <div className="sort-section">
        <h1>
        Sort By
        </h1>

        <div className="form-group">
    <select className="form-control" id="exampleFormControlSelect1">
      <option>Popular</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
 
      

  </div>
      );
  }
}




export default Sort;
