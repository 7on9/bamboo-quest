import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import * as questActions from '../../store/quest/action'
import { startGame, resetResult } from '../../store/socket/socket'

export default function Info() {
  const dispatch = useDispatch()
  const quest = useSelector((state) => state.quest)
  const game = useSelector((state) => state.game)
  const [gameStarted, setGameStarted] = useState(false)
  const history = useHistory()
  const { id } = useParams()
  useEffect(() => {
    if (quest.info === null) {
      dispatch(questActions.getInfoQuest(id))
    }
  }, [])
  useEffect(() => {
    if (gameStarted) {
      history.push('/host')
    }
  }, [game])
  const startGameHandle = () => {
    dispatch(resetResult())
    dispatch(startGame(quest.info._id))
    if (quest.result) {
      setGameStarted(true)
    }
    return false
  }
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="/comon/css/info-quiz.css"
        />
      </Helmet>
      {quest.info !== null && (
        <div className="info-quiz">
          <div className="row full">
            <div className="col-12 col-md-3 left-component">
              <img src={quest.info.img_path} className="image-quiz" />
              <div style={{ padding: '10px' }}>
                <h1 className="title__heading">{quest.info.title}</h1>
                <p>{quest.info.like.length} yêu thích</p>
                {quest.info.questions.length !== 0 && (
                  <div
                    onClick={startGameHandle}
                    className="button-info button-play">
                    Bắt đầu
                  </div>
                )}
                <div className="button-info button-add">Thêm câu hỏi</div>
                <div class="section-title">
                  {quest.info.is_public
                    ? 'Thử thách công khai'
                    : 'Thử thách không công khai'}{' '}
                </div>
                <p style={{ marginTop: '10px' }}>{quest.info.description}</p>
              </div>
            </div>

            <div className="col-12 col-md-9 right-component">
              <b>Câu hỏi (30)</b>
              <div className="quest-main">
                <div className="quest-item">
                  <div className="question-media">
                    <div className="question-media__text">
                      <span className="question-media__number">Cau 1</span>
                      <div className="question-media__text-inner-wrapper">
                        AI laf triue phu
                      </div>
                    </div>
                    <div className="question-media__image">
                      <div className="question-media__placeholder-image">
                        <span
                          className="question-media__placeholder-image-icon"
                          style={{
                            display: 'inline-block',
                            verticalAlign: 'middle',
                            width: '48px',
                            height: '48px',
                          }}>
                          <svg
                            data-functional-selector="icon"
                            viewBox="0 0 32 32"
                            aria-labelledby="imageTitle imageDesc">
                            <path
                              d="M12,10 L12,8 L15,8 L15,10 L12,10 Z M10,8 L10,10 L7,10 L7,8 L10,8 Z M7,24 L7,12 L24.999,12 L24.997,24 L7,24 Z M15,20 L13,18 L10,22 L22,22 L18,16 L15,20 Z M12,17 C13.1045695,17 14,16.1045695 14,15 C14,13.8954305 13.1045695,13 12,13 C10.8954305,13 10,13.8954305 10,15 C10,16.1045695 10.8954305,17 12,17 Z M25,6 L7,6 C5.897,6 5,6.897 5,8 L5,24 C5,25.103 5.897,26 7,26 L25,26 C26.104,26 27,25.103 27,24 L27,8 C27,6.897 26.104,6 25,6 Z M25,10 L17,10 L17,8 L25,8 L25,10 Z"
                              style={{ fill: ' rgb(255, 255, 255)' }}></path>
                          </svg>
                        </span>
                        <span class="question-media__duration">20 sec</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="quest-item"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
