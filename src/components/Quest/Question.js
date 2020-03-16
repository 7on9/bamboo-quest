/* eslint-disable react/prop-types */
import React from 'react'
import './style.css'

export const Question = props => {
  return (
    <div
      className="col-12 col-sm-12 col-md-12 itemList"
      style={{ cursor: 'pointer' }}
      onClick={() => {
        if (props.i === props.show) {
          props.showAns(-1)
        } else {
          props.showAns(props.i)
        }
      }}>
      <div className="row">
        <div
          className="col-1 col-sm-1 col-md-1 center"
          style={{ fontSize: '1.5rem' }}>
          {props.question._id}
        </div>
        <div className="col-4 col-sm-5 col-md-4 center">
          <i
            className="far fa-question-circle icon-question"
            style={{ color: '#3f6dae' }}
          />
          <h5 className="limitText itemQuestPhone">{props.question.quiz}</h5>
        </div>
        <div className="col-2 col-sm-2 col-md-2 center ">
          <i
            className="fas fa-check-circle icon-question"
            style={{ color: '#37ce4e' }}
          />
          {props.question.correct_point}
        </div>
        <div className="col-2 col-sm-2 col-md-2 center timer">
          <i
            className="fas fa-times-circle icon-question"
            style={{ color: '#cf3542' }}
          />
          {props.question.incorrect_point}
        </div>
        <div className="col-3 col-sm-2 col-md-2 center timer" >
          <i
            className="fas fa-stopwatch icon-question"
            style={{ color: '#f5ce67' }}
          />
          {props.question.duration}
        </div>

        {/* <div className="col-md-1 hover-show-icon-edit center">
          <i
            className="fas fa-pen-square icon-question"
            style={{ color: '#dea79d' }}
          />
        </div> */}
        {props.i === props.show ? (
          <ul style={{ width: '100%' }}>
            {props.question.ans.map((item, key) => {
              var background =
                key === 0
                  ? '#e21b3c'
                  : key === 1
                    ? '#1368ce'
                    : key === 2
                      ? '#ffa602'
                      : key === 3
                        ? '#26890c'
                        : 'red'
              var ans =
                key === 0
                  ? 'A'
                  : key === 1
                    ? 'B'
                    : key === 2
                      ? 'C'
                      : key === 3
                        ? 'D'
                        : 'E'

              return (
                <li
                  key={key}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    background: '#fff',
                    marginTop: '2px',
                    borderTop: '3px solid #F2F2F2',
                    padding: '10px',
                    alignItems: 'center',
                    display: 'flex',
                  }}>
                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      background,
                      float: 'left',
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'center',
                      marginRight: '20px',
                    }}>
                    <h4 style={{ color: '#fff' }}>{ans}</h4>
                  </div>
                  {item.content}
                </li>
              )
            })}
          </ul>
        ) : null}
        {/* <div className='col-12 col-sm-2 col-md-2 center'>
          <a href="" className="action"><i class="fas fa-pencil-alt" style={{ color: '#46168f', marginRight: '20px' }}/></a>
          <a href="" className="action"><i class="far fa-trash-alt" style={{ color: '#e0a700' }}/></a>
        </div> */}
      </div>
    </div>
  )
}
