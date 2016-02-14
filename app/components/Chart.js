import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'
import _ from 'lodash'

function average (data) {
  return _.round(_.sum(data) / data.length)
}

// Functional component so we do not use a class
export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type='avg' color='black' />
      </Sparklines>
      <div>{average(props.data)} <span style={{fontSize: '85%', fontWeight: 700}}>{props.unit}</span></div>
    </div>
  )
}
