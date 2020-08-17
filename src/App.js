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
    //console.log("Name is ", name)
      this.setState(
        {
          searchDisplayName: name
        }, () => {this.fetchSearchData(this.state.searchDisplayName, this.state.tagList)}
      )
      //Sends the fetch call here once the searchKey and tagList are updated - tagList gets updated real time FYI, while
      // the searchKey gets updated once we click the button, which is when we should also send API request, causing component
      // to rerender
      //console.log("Before fetch method, the skey is ", this.state.searchDisplayName)
      

  }

  //The fetch call to backend Search API
  //CORS error being thrown for some reason? - Will get fixed once we host everything somewhere
  fetchSearchData(searchName, tagParams) {
    //Need to alter logic here such the right API can be chosen
    /**
     * Case 1 - SearchKey only, no tagList
     * Case 2 - SearchKey and tagList of size x
     * Case 3 - No SearchKey and tagList of size x only
     */
    console.log("Calling fetchSearchData to consume backend API")
    console.log(searchName.length)
    console.log(tagParams.length)
    //Case 1
    if(searchName.length>0 && tagParams.length==0) {
      fetch(`http://localhost:8081/searchByName/` + searchName)
    .then(response => 
      response.json())
    .then(result => {
      this.setState({organizations: result})
      console.log(this.state.organizations)
      
  })
    }

    //Case 2
    else if(searchName.length >0 && tagParams.length>0) {
      console.log("Case 2 triggered")
    }

    //Case 3
    else if(searchName.length == 0 && tagParams.length>0) {
      console.log("Case 3 triggered")
    }


    
}

  async componentDidMount() {
    console.log("Should happen once!")
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
    /** Call fetch function here */
   
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
            <Search parentUpdateCB = {this.updateSearchKey} />
            <Filter filterParentUpdate = {this.updateTagState} />
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