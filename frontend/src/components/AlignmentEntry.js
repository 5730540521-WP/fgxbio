import React from 'react'

const AlphaColor = {
  A: '#ff8533',
  T: '#3399ff',
  C: '#ffbb33',
  G: '#00ff99'
}

export default props => (
  <div>
    <div className="columns">
      <div className="column is-1">{props.data.Sample_Year}</div>
      <div className="column is-1">{props.data.Sample_ID}</div>
      <div className="column">
        {' '}
        {props.data.Sequence.split('').map(letter => (
          <span style={{ backgroundColor: AlphaColor[letter] }}>{letter}</span>
        ))}{' '}
      </div>
      <div className="column is-2">{props.data.pattern}</div>
    </div>
  </div>
)
