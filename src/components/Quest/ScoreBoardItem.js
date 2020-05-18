import React from 'react'

export const ScoreBoardItem = ({ id, player }) => {
  return (
    <div className="item_scoreBoard" style={{ verticalAlign: 'middle' }}>
      {/* desktop */}
      <div className="row item_scoreBoard_dk">
        <div className="col-1 ">{id}</div>
        <div className="col-4">{player.username}</div>
        <div className="col-4 ">
          <i
            className="fas fa-star icon-question"
            style={{ color: '#37ce4e' }}
          />
          {player.score}
        </div>
        <div className="col-3 ">
          <i
            className="fas fa-stopwatch icon-question"
            style={{ color: '#f5ce67' }}
          />
          {player.time ? player.time.toFixed(2) : 0}
        </div>
      </div>

      {/* mobile */}
      <div className="row item_scoreBoard_mb">
        <div className="col-9" style={{ fontSize: '0.5em', textAlign: 'left' }}>
          {player.username}
        </div>
        <div className="col-3" style={{ fontSize: '0.5em' }}>
          {player.score}
        </div>
      </div>
    </div>
  )
}
