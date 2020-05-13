import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { objectIdToDate } from '../../utils/date'
import { Icon } from './../../res/icon/index'

/**
 * TODO: Item quest in the home screen
 * @param title
 * @param description
 * @param link
 * @param img_path
 */
export const Cardlist = ({ id, title, question, img_path }) => {
  return (
    <Link to={`/quest/info/${id}`}>
      <div className="item-myquiz">
        <div
          className="row"
          style={{ margin: 0, width: '100%', height: '100%' }}>
          <div
            className="col-4 col-md-2"
            style={{ padding: 0, height: '100%', background: 'red' }}>
            <img
              src={
                img_path
                  ? img_path
                  : 'https://ipm-cdn.kahoot.it/wp-content/uploads/2019/03/HigherEd-Plus.png'
              }
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '3px 0 0 3px',
              }}
              alt=""
            />
            <div className="count-quest">
              <h5 style={{ color: '#fff' }}>
                {question ? question.length : 0}
              </h5>
            </div>
          </div>
          <div
            className="col-8 col-md-10"
            style={{ padding: '0', margin: '0', height: '100%' }}>
            <div
              className="row"
              style={{
                width: '100%',
                padding: '0',
                margin: '0',
                height: '100%',
              }}>
              <div className="col-11">
                <h4 style={{ color: '#5e5e5e' }}>{title}</h4>
                <p style={{ fontSize: '10px' }}>
                  Tạo ngày: {moment(objectIdToDate(id)).format('DD/MM/YYYY')}
                </p>
              </div>
              <div
                className="col-1"
                style={{
                  display: 'flex',
                  alignItems: 'right',
                  background: 'red',
                  height: '100%',
                  opacity: 0.7,
                  borderRadius: '0px 3px 3px 0px',
                }}>
                <img
                  src={Icon.REMOVE}
                  style={{
                    width: '24px',
                    height: '24px',
                    textAlign: 'right',
                    alignSelf: 'center',
                  }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
