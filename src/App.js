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
import './Assets/css/layout.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      organizations: [ // fixme when using proper backend
        {
          name: 'Student Org 1',
          intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aperiam, facere culpa dolore tempore adipisci.'
        },
        {
          name: 'Student Org 2',
          intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aperiam, facere culpa dolore tempore adipisci.'
        },
        {
          name: 'Student Org 3',
          intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aperiam, facere culpa dolore tempore adipisci.'
        },
        {
          name: 'Student Org 4',
          intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aperiam, facere culpa dolore tempore adipisci.'
        },
        {
          name: 'Student Org 5',
          intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aperiam, facere culpa dolore tempore adipisci.'
        },
        {
          name: 'Student Org 6',
          intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aperiam, facere culpa dolore tempore adipisci.'
        },
        {
          name: 'Student Org 7',
          intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aperiam, facere culpa dolore tempore adipisci.'
        },
        {
          name: 'Student Org 8',
          intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aperiam, facere culpa dolore tempore adipisci.'
        },
        {
          name: 'Student Org 9',
          intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aperiam, facere culpa dolore tempore adipisci.'
        },
      ],
      searchDisplayName: ""
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateOrganizations = this.updateOrganizations.bind(this)

  }

  updateOrganizations(name, childData) {
    this.setState(
      {
        organizations: childData,
        searchDisplayName: name
      }
    )
  }

  async componentDidMount() {
    await fetch(`http://localhost:8081/getClubData`)
      .then(response =>
        response.json())
      .then(result => {
        this.setState({
          organizations: result
        })
      }
      )
    //console.log(this.state.organizations)
  }

  render() {
    const mappedClubs = this.state.organizations.map(item => (
      <ClubCard name={item.name} info={item.intro} /> 
    ))

    return (
      <div className="App">
        <Header />
        <div className="big-flex">
          <div className='vs--sidebar'>
            <div className="welcome-message">
              <h1>Welcome to Virtual Sproul</h1> 
              <h3>Start looking for the student orgs you're interested in!</h3>
            </div>
            <Search parentUpdateCB={this.updateOrganizations} />
            <Filter />
          </div>

          <div className="vs--main">
            <Sort />
            <ClubComponent clubArray={mappedClubs} />
          </div>
        </div>





        

        {/** This part should rerender based off the search results! */ }

        {/**Conditional rendering should be done here to display "Search results for XYZ when search button is clicked" */}

        {this.state.searchDisplayName.length != 0 && //fixme
          <h1> Search Results for {this.state.searchDisplayName}</h1>
        }



      </div>
    );


  }
}

export default App;