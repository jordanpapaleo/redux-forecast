import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from 'actions/index'

class SearchBar extends Component {
  static get displayName () {
    return 'SearchBar'
  }

  static propTypes () {
    return {
      fetchWeather: PropTypes.func
    }
  }

  constructor (props) {
    super(props)

    this.state = { term: '' }

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange (se) {
    this.setState({
      term: se.target.value
    })
  }

  onFormSubmit (se) {
    se.preventDefault()
    this.props.fetchWeather(this.state.term)
    this.setState({ term: '' })
  }

  render () {
    return (
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input value={this.state.term} onChange={this.onInputChange} placeholder='Get a forecast for your favorite cities' className='form-control' />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Search</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

// null: this container does not care about having state passed into it
export default connect(null, mapDispatchToProps)(SearchBar)
