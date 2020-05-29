import React from 'react'

const Card = ({ type, lable, value }) => {
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className={`card border-left-${type} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={`text-xs font-weight-bold text-${type} text-uppercase mb-1`}>
                {lable}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {value}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Card)
