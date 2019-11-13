import React from 'react'

export const ScoreBoardItem = ({id, player}) => {
  return (
    <div className='item_scoreBoard' style={{ verticalAlign: 'middle', lineHeight: '80px' }}>
      <div className='row'>
        <div className='col-1 text-left'>{id}</div>
        <div className='col-4 text-left'>{player.username}</div>
        <div className='col-4 text-left'>
          <i className="fas fa-star icon-question" style={{ color: '#37ce4e' }} />
          {player.score}
        </div>
        <div className='col-3 text-left'>
          <i className="fas fa-stopwatch icon-question" style={{ color: '#f5ce67' }} />
          {player.time}
        </div>
      </div>
    </div>
  )
}