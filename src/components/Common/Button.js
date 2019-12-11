import React from 'react'
import { Link } from 'react-router-dom'

export const Button = ({ title, onClick, url, style }) => {
  return (
    <Link
      to={url ? url : '#'}
      className="btn-bamboo-quest"
      onClick={onClick}
      style={style}>
      {title}
    </Link>
  )
}