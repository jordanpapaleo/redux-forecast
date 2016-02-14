import React, { Component } from 'react'
import SearchBar from 'containers/SearchBar'
import WeatherList from 'containers/WeatherList'

export default class App extends Component {
  static get displayName () {
    return 'App'
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <SearchBar />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <WeatherList />
          </div>
        </div>
      </div>
    )
  }
}
