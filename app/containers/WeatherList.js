import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import Chart from 'components/Chart'
import Map from 'components/Map'

class WeatherList extends Component {
  static get displayName () {
    return 'WeatherList'
  }

  static propTypes () {
    return {
      weather: PropTypes.array
    }
  }

  render () {
    console.info(this.props)
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (f)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }

  renderWeather (cityData) {
    const temps = _.map(cityData.list.map((weather) => weather.main.temp), (temp) => (temp / (5 / 9) - 459.67))
    const humidities = cityData.list.map((weather) => weather.main.humidity)
    const pressure = cityData.list.map((weather) => weather.main.pressure)
    const { lat, lon } = cityData.city.coord

    return (
      <tr key={cityData.city.id}>
        <td style={{height: 175, width: 250}}>
          <Map lat={lat} lon={lon} />
        </td>
        <td>
          <Chart color='red' data={temps} unit='f' />
        </td>
        <td>
          <Chart color='blue' data={pressure} unit='hPa' />
        </td>
        <td>
          <Chart color='green' data={humidities} unit='%' />
        </td>
      </tr>
    )
  }
}

/*
function mapStateToProps (state) {
  return { weather: state.weather }
}
*/

// ES6 Upgrade
function mapStateToProps ({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)
