import React from 'react';
import { Component } from 'react';
import './Assets/css/default.min.css';
import Header from './components/headerComponent/header';
import Search from './components/searchComponent/search';
import Filter from './components/filterComponent/filter';
import Sort from './components/sortComponent/sort';
import Result from './components/resultComponent/result';
import ClubComponent from './ClubComponent';

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
  console.log(this.state.organizations)
  }

  render() {
    return this.state.organizations.map(item => (
      <ClubComponent name = {item.name} clubEmail = {item.clubEmail} clubSize = {item.size}/>
    ))
    /** 
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
    <Result />
    
    </div>
      );
      */

  }
}

export default App;