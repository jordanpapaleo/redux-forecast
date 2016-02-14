import { combineReducers } from 'redux'
import WeatherReducer from './reducerWeather'

// maps our state
const rootReducer = combineReducers({
  weather: WeatherReducer
})

export default rootReducer
