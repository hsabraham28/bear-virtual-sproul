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
      searchDisplayName:""
  }
  this.componentDidMount = this.componentDidMount.bind(this)
  this.updateOrganizations = this.updateOrganizations.bind(this)

  }

  updateOrganizations(name, childData) {
      this.setState(
        {organizations: childData,
         searchDisplayName: name
        }
      )
  }

  async componentDidMount() {
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
    const mappedClubs = this.state.organizations.map(item => (
      <ClubCard name = {item.name} info = {item.intro}/>
    ))

    

    

    return (
      <div className="App">

      <Header />


<div className='rowB'>
      <Search parentUpdateCB = {this.updateOrganizations}/>
      <div className='colA'>
      <Filter />
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