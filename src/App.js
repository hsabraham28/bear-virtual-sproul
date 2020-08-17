import React from 'react';
import { Component } from 'react';
import './Assets/css/default.min.css';
import Header from './components/headerComponent/header';
import Search from './components/searchComponent/search';
import Filter from './components/filterComponent/filter';
import Sort from './components/sortComponent/sort';
import Result from './components/resultComponent/result';
import ClubComponent from './ClubComponent';
import ClubCard from './components/resultComponent/clubCardComponent/clubCard'

class App extends Component {
  constructor() {
    super()
    this.state = {
      organizations: [
      ],
      searchDisplayName:"",
      tagList:[]
  }
  this.componentDidMount = this.componentDidMount.bind(this)
  this.updateSearchKey = this.updateSearchKey.bind(this)
  this.updateTagState = this.updateTagState.bind(this)
  this.fetchSearchData=this.fetchSearchData.bind(this)
  }

  //Updated TagList 
  updateTagState(updatedTags) {
    this.setState(
      {tagList: updatedTags}
      )
  }

  //Updating Organizations
  updateSearchKey(name) {
      this.setState(
        {
         searchDisplayName: name
        }
      )
      //Sends the fetch call here once the searchKey and tagList are updated - tagList gets updated real time FYI, while
      // the searchKey gets updated once we click the button, which is when we should also send API request, causing component
      // to rerender
      this.fetchSearchData(this.state.searchDisplayName, this.state.tagList)

  }

  //The fetch call to backend Search API
  fetchSearchData(searchName, tagParams) {
    console.log("Calling fetchSearchData to consume backend API")
    fetch(`http://localhost:8081/searchByName/` + searchName)
    .then(response => 
      response.json())
    .then(result => {
      this.setState({organizations: result})
      console.log(this.state.organizations)
      
  })
}

  async componentDidMount() {
    console.log("Should happen once!")
    await fetch(`http://localhost:8081/getClubData`)
    .then(response => 
    response.json())
    .then(result => 
      {
      this.setState({
      organizations: result
      })    
      }
  )
  //console.log(this.state.organizations)
  }



  render() {
    /** Call fetch function here */
   
    const mappedClubs = this.state.organizations.map(item => (
      <ClubCard name = {item.name} info = {item.intro}/>
    ))
    

    

    

    return (
      <div className="App">

      <Header />


<div className='rowB'>
      <Search parentUpdateCB = {this.updateSearchKey}/>
      <div className='colA'>
      <Filter filterParentUpdate = {this.updateTagState}/>
      </div>
      <Sort />

    </div>
    {/** This part should rerender based off the search results! */}

    {/**Conditional rendering should be done here to display "Search results for XYZ when search button is clicked" */}
    
    { this.state.searchDisplayName.length!= 0 && 
    <h1> Search Results for {this.state.searchDisplayName}</h1>
    }
    <ClubComponent clubArray = {mappedClubs}/>
    
    </div>
      );
    

  }
}

export default App;