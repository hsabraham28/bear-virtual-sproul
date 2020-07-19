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


  <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckboxTech" value="optionTech"/>
  <label class="form-check-label" for="inlineCheckbox1">Tech</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckboxMusic" value="optionMusic"/>
  <label class="form-check-label" for="inlineCheckbox2">Music</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckboxArt" value="optionArt"/>
  <label class="form-check-label" for="inlineCheckbox1">Art</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckboxGreeks" value="optionGreeks"/>
  <label class="form-check-label" for="inlineCheckbox2">Greeks</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckboxBusiness" value="optionBusiness"/>
  <label class="form-check-label" for="inlineCheckbox1">Business</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckboxGovernment" value="optionGovernment"/>
  <label class="form-check-label" for="inlineCheckbox2">Government</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckboxSize" value="optionSize"/>
  <label class="form-check-label" for="inlineCheckbox1">Size &lt; 50</label>
</div>
        </div>
      
  </div>
      );
  }
}




export default Filter;
