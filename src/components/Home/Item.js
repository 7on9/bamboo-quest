import React from 'react'
import { Link } from 'react-router-dom'
import { objectIdToDate } from '../../utils/date'
import moment from 'moment'

/**
 * TODO: Item quest in the home screen
 * @param title
 * @param description
 * @param link
 * @param img_path
 */
export const Item = ({ id, title, description, link, img_path }) => {
  return (
    <div className="single_courses">
      <div className="thumb" style={{background:'#fff'}}>
        <Link to={link}>
          <img src={img_path ? img_path : '/images/img_quest_default.png'} style={{height:'250px', objectFit: 'cover'}} alt={title}/>
        </Link>
      </div>
      <div className="courses_info" style={{background:'#fff'}}>
        <h4 className='limitText'>{title}</h4>
        <h3>
          <Link to={link}><p className='limitText'>{description}</p></Link>
        </h3>
        <div className="star_prise d-flex justify-content-between">
          <div className="star">
            {/* <i className="flaticon-mark-as-favorite-star" /> */}
            {/* <span>Quan Pham</span> */}
          </div>
          <div className="prise">
            <span className="active_prise">{moment(objectIdToDate(id)).format('DD/MM/YYYY')}</span>
          </div>
        </div>
      </div>
    </div>)
}
