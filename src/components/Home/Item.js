import React from 'react'
import {
  Link
} from "react-router-dom";

export const Item = (props) => {
  return (
    <div className="col-12 " style={{ position: 'relative', marginBottom: '20px', height: '330px', background: '', cursor: 'pointer' }}>
      <Link to={`${props.link}`}>
        <div className="card card-1" style={{ background: '#fff', width: '98%', height: '310px', textAlign: 'center', borderRadius: '5px' }}>
          <img src={props.img ? props.img : '/images/img_quest_default.jpg'} style={{ width: '100%', height: '170px', objectFit: 'cover' }} />
          <div className='text-left ' style={{ width: '100%', marginTop: '10px', marginLeft: '15px' }}>
            <h6 style={{ width: '100%' }}>
              <b className='title ' style={{ color: '#000', width: '' }}>
                {props.title}
              </b>
            </h6>
            <p className='title' style={{ width: '90%', marginTop: '10px' }} >  {props.description}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}