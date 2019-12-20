import { Link } from 'react-router-dom'
import React from 'react'

export const Answer = ({ value, id, label, onAnswer, style }) => {
  return (
    <Link
      to="#"
      style={{ color: '#fff', fontFamily: '\'Baloo\', cursive' }}
      id={id}
      onClick={e => {
        e.preventDefault()
        onAnswer(value)
      }}>
      <div
        className="center-div cl-ans"
        style={{ ...style, cursor: 'pointer' }}>
        <h1 style={{color:'#fff',fontSize:'4em'}}>{label}</h1>
      </div>
    </Link>
  )
}
