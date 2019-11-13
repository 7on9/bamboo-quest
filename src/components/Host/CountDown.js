import React from 'react'

export const CountDown = props => {
  return (
    <div className="row" style={{ width: '100%', height: '100%' }}>
      <div
        className="col-12 col-sm-2 col-md-2 center-div pA"
        style={{
          textAlign: 'center',
          width: '100%',
          justifyContent: 'center',
        }}>
        <div id="countdown" />
      </div>
      <div
        className="col-12 col-sm-8 col-md-8 center-div pB"
        style={{
          textAlign: 'cen4ter',
          width: '100%',
          justifyContent: 'center',
        }}>
        <img
          style={{ width: '75%', height: '90%', textAlign: 'center' }}
          src=""
        />
      </div>
      <div
        className="col-12 col-sm-2 col-md-2 pC"
        style={{ textAlign: 'center', width: '100%' }}>
        <div className="col-12">
          <a href="#" className="btn btn-primary">
            Bỏ qua
          </a>
        </div>
        <div className="col-12" style={{}}>
          {props.time}
        </div>
        <div className="col-12" style={{}}>
          {props.answers}
        </div>
      </div>
    </div>
  )
}
