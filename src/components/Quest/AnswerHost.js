import { Link } from 'react-router-dom';
import React from 'react'

export const Answer = ({ id, label, onAnswer, style }) => {
  return (
    <Link to="#" style={{ color: '#fff', fontFamily: `'Baloo', cursive` }} id={id} onClick={onAnswer}>
      <div className='center-div cl-ans' style={{...style, cursor: 'pointer'}}>
        <h1>{label}</h1>
      </div>
    </Link>)
}
