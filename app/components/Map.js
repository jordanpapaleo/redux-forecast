import React from 'react'
import { GoogleMap } from 'react-google-maps'
import { default as FaSpinner } from 'react-icons/lib/fa/spinner.js'
import { default as ScriptjsLoader } from 'react-google-maps/lib/async/ScriptjsLoader'

export default (props) => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <ScriptjsLoader
        hostname={'maps.googleapis.com'}
        pathname={'/maps/api/js'}
        query={{v: '3.exp', libraries: 'places'}}
        loadingElement={<div style={{height: '100%', width: '100%'}}><FaSpinner /></div>}
        containerElement={<div style={{height: '100%', width: '100%'}} />}
        googleMapElement={
          <GoogleMap ref={(map) => console.log(map)} defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
        }
      />
    </div>
  )
}
