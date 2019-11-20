import React from 'react'
import { Link } from 'react-router-dom'

/**
 * TODO: Item quest in the home screen
 * @param title
 * @param description
 * @param link
 * @param img_path
 */
export const Item = ({ title, description, link, img_path }) => {
  return (
    <div className="single_courses">
      <div className="thumb" style={{background:"#fff"}}>
        <Link to={`${link}`}>
          <img src={img_path ? img_path : '/images/img_quest_default.png'} alt={title} />
        </Link>
      </div>
      <div className="courses_info" style={{background:"#fff"}}>
        <span>{title}</span>
        <h3>
          <Link to={`${link}`}>{description}</Link>
        </h3>
        <div className="star_prise d-flex justify-content-between">
          <div className="star">
            {/* <i className="flaticon-mark-as-favorite-star" /> */}
            <span>Quan Pham</span>
          </div>
          <div className="prise">
            <span className="active_prise">10/10/2010</span>
          </div>
        </div>
      </div>
    </div>)
}
