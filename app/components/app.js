import React, { Component } from 'react'
import SearchBar from 'containers/SearchBar'
import WeatherList from 'containers/WeatherList'

export default class App extends Component {
  static get displayName () {
    return 'App'
  }

  render () {
    const footerIcon = require('images/tahoe-js-logo.gif')

    return (
      <div className='container-fluid app-wrapper'>
        <header className='app-header'>
          <h1><img className='header-logo' src={footerIcon} style={{width: 50}} /> Redux Weather Example App</h1>
        </header>

        <section className='app-content'>
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
        </section>

        <footer className='app-footer'>
          BeerJS:Tahoe - Jordan Papaleo
        </footer>
      </div>
    )
  }
}
