import React from 'react';
import { Component } from 'react';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";





class Filter extends Component {
  render() {
    return (

      <div className="filter-section">
        <div className="boxes">
        <h3>
        Filters
        </h3>


  <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckboxTech" value="optionTech"/>
  <label className="form-check-label" htmlFor="inlineCheckbox1">Tech</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckboxMusic" value="optionMusic"/>
  <label className="form-check-label" htmlFor="inlineCheckbox2">Music</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckboxArt" value="optionArt"/>
  <label className="form-check-label" htmlFor="inlineCheckbox1">Art</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckboxGreeks" value="optionGreeks"/>
  <label className="form-check-label" htmlFor="inlineCheckbox2">Greeks</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckboxBusiness" value="optionBusiness"/>
  <label className="form-check-label" htmlFor="inlineCheckbox1">Business</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckboxGovernment" value="optionGovernment"/>
  <label className="form-check-label" htmlFor="inlineCheckbox2">Government</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckboxSize" value="optionSize"/>
  <label className="form-check-label" htmlFor="inlineCheckbox1">Size &lt; 50</label>
</div>
        </div>
      
  </div>
      );
  }
}




export default Filter;
