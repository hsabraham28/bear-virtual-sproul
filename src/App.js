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
      ]
  }
  this.componentDidMount = this.componentDidMount.bind(this)

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
      <Search />
      <div className='colA'>
      <Filter />
      </div>
      <Sort />

    </div>
    <ClubComponent clubArray = {mappedClubs}/>
    
    </div>
      );
    

  }
}

export default App;