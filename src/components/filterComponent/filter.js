import React from 'react';
import { Component } from 'react';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";




/** Filter component responsible for updating search with tag parameters */
class Filter extends Component {

  constructor() {
    super()
    this.state = {
      Technology: false,
      Music: false,
      Art: false,
      Greek: false,
      Business:false,
      Government: false,
      Size50: false,
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
    this.props.filterParentUpdate(this.state.tagList)
  }
    
  
  render() {
    return (

      <div className="filter-section">
        <div className="boxes">
        <h3>
        Filters
        </h3>


  <div className="form-check form-check-inline">
  <input className="form-check-input" onChange = {e => this.filterCheckBoxEventHandler(e, this.state.Technology)} name = "Technology" type="checkbox" id="inlineCheckboxTech" checked = {this.state.Technology}/>
  <label className="form-check-label" htmlFor="inlineCheckbox1">Tech</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" onChange = {e => this.filterCheckBoxEventHandler(e, this.state.Music)} name = "Music" type="checkbox" id="inlineCheckboxMusic" checked = {this.state.Music}/>
  <label className="form-check-label" htmlFor="inlineCheckbox2">Music</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" onChange = {e => this.filterCheckBoxEventHandler(e, this.state.Art)} name = "Art" type="checkbox" id="inlineCheckboxArt" checked = {this.state.Art}/>
  <label className="form-check-label" htmlFor="inlineCheckbox1">Art</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" onChange = {e=> this.filterCheckBoxEventHandler(e, this.state.Greek)} name = "Greek" type="checkbox" id="inlineCheckboxGreeks" checked = {this.state.Greek}/>
  <label className="form-check-label" htmlFor="inlineCheckbox2">Greeks</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" onChange = {e => this.filterCheckBoxEventHandler(e, this.state.Business)} name = "Business" type="checkbox" id="inlineCheckboxBusiness" checked = {this.state.Business}/>
  <label className="form-check-label" htmlFor="inlineCheckbox1">Business</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" onChange = {e=> this.filterCheckBoxEventHandler(e, this.state.Government)} name = "Government" type="checkbox" id="inlineCheckboxGovernment" checked = {this.state.Government}/>
  <label className="form-check-label" htmlFor="inlineCheckbox2">Government</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" onChange = {e=> this.filterCheckBoxEventHandler(e, this.state.Size50)} name = "Size50" type="checkbox" id="inlineCheckboxSize" checked = {this.state.Size50}/>
  <label className="form-check-label" htmlFor="inlineCheckbox1">Size &lt; 50</label>
</div>
        </div>
      
  </div>
      );
  }
}




export default Filter;
