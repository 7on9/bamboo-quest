import React from 'react'

export const Collection = props => {
  const img = "url('" + props.img + "')"
  return (
    <div
      className="col-10 collection-md center-div"
      style={{ backgroundImage: img }}>
      <button className="btn btn-success ">{props.name}</button>
    </div>
  )
}
