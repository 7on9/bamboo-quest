import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { objectIdToDate } from '../../utils/date'

export default function UserQuestItem({ id, title, link, img_path }) {
  
  return (
    <div className="item-my-quest">
      <Link
        to={link}
        className="row"
        style={{ margin: 0, width: '100%', height: '100%' }}>
        <div
          className="col-4 col-md-2"
          style={{ padding: 0, height: '100%', background: 'red' }}>
          <img
            src={img_path}
            style={{ width: '100%', height: '100%' }}
          />
          <div className="count-quest">
            <h5 style={{ color: '#fff' }}>12</h5>
          </div>
        </div>
        <div className="col-8 col-md-10" style={{ padding: '10px' }}>
          <h4 style={{ color: '#5e5e5e' }}>{title}</h4>
          <p style={{ fontSize: '10px' }}>Tạo ngày: {moment(objectIdToDate(id)).format('DD/MM/YYYY')}</p>
        </div>
      </Link>
    </div>
  )
}
