import React from 'react';
import { Component } from 'react';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";




/** Filter component responsible for updating search with tag parameters */
class Filter extends Component {

  constructor() {
    super()
    this.state = {
      techChecked: false,
      musicChecked: false,
      artChecked: false,
      greeksChecked: false,
      businessChecked:false,
      govChecked: false,
      size50Checked: false,
      tagList : []
    }
    this.filterCheckBoxEventHandler = this.filterCheckBoxEventHandler.bind(this)
  }

  filterCheckBoxEventHandler(event, currBool) {
    //const stateElement = event.target.name
    this.setState({ [event.target.name] : !currBool})
    if(!currBool && !this.state.tagList.includes(event.target.name)) {
      this.state.tagList.push(event.target.name)
    }
    if(!currBool == false && this.state.tagList.includes(event.target.name)) {
      const index = this.state.tagList.indexOf(event.target.name)
      this.state.tagList.splice(index, 1)
    }
    console.log(this.state.tagList)
  }
    
  
  render() {
    return (

      <div className="filter-section">
        <div className="boxes">
        <h3>
        Filters
        </h3>


  <div className="form-check form-check-inline">
  <input className="form-check-input" onChange = {e => this.filterCheckBoxEventHandler(e, this.state.techChecked)} name = "techChecked" type="checkbox" id="inlineCheckboxTech" checked = {this.state.techChecked}/>
  <label className="form-check-label" htmlFor="inlineCheckbox1">Tech</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" onChange = {e => this.filterCheckBoxEventHandler(e, this.state.musicChecked)} name = "musicChecked" type="checkbox" id="inlineCheckboxMusic" checked = {this.state.musicChecked}/>
  <label className="form-check-label" htmlFor="inlineCheckbox2">Music</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" onChange = {e => this.filterCheckBoxEventHandler(e, this.state.artChecked)} name = "artChecked" type="checkbox" id="inlineCheckboxArt" checked = {this.state.artChecked}/>
  <label className="form-check-label" htmlFor="inlineCheckbox1">Art</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" onChange = {e=> this.filterCheckBoxEventHandler(e, this.state.greeksChecked)} name = "greeksChecked" type="checkbox" id="inlineCheckboxGreeks" checked = {this.state.greeksChecked}/>
  <label className="form-check-label" htmlFor="inlineCheckbox2">Greeks</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" onChange = {e => this.filterCheckBoxEventHandler(e, this.state.businessChecked)} name = "businessChecked" type="checkbox" id="inlineCheckboxBusiness" checked = {this.state.businessChecked}/>
  <label className="form-check-label" htmlFor="inlineCheckbox1">Business</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" onChange = {e=> this.filterCheckBoxEventHandler(e, this.state.govChecked)} name = "govChecked" type="checkbox" id="inlineCheckboxGovernment" checked = {this.state.govChecked}/>
  <label className="form-check-label" htmlFor="inlineCheckbox2">Government</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" onChange = {e=> this.filterCheckBoxEventHandler(e, this.state.size50Checked)} name = "size50Checked" type="checkbox" id="inlineCheckboxSize" checked = {this.state.size50Checked}/>
  <label className="form-check-label" htmlFor="inlineCheckbox1">Size &lt; 50</label>
</div>
        </div>
      
  </div>
      );
  }
}




export default Filter;
