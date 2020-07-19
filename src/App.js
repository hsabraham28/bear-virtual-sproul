import React from 'react';
import { Component } from 'react';
import './Assets/css/default.min.css';
import Header from './components/headerComponent/header';
import Search from './components/searchComponent/search';
import Filter from './components/filterComponent/filter';
import Sort from './components/sortComponent/sort';
import Result from './components/resultComponent/result';





class App extends Component {
  render() {
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
  }
}


export default App;
