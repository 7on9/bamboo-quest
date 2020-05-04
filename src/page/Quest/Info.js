import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import * as questActions from '../../store/quest/action'
import { startGame, resetResult } from '../../store/socket/socket'

export default function Info() {
  const dispatch = useDispatch()
  const history = useHistory()
  const quest = useSelector((state) => state.quest)
  const user = useSelector((state) => state.user)
  const game = useSelector((state) => state.game)
  const [gameStarted, setGameStarted] = useState(false)
  const { id } = useParams()
  useEffect(() => {
    dispatch(questActions.getInfoQuest(id))
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
  const handleAddQuestions = () => {
    history.push('/quest/add')
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
                {String(quest.info.id_author) === String(user.info._id) && (
                  <div
                    className="button-info button-add"
                    onClick={handleAddQuestions}>
                    Thêm câu hỏi
                  </div>
                )}

                <div class="section-title">
                  {quest.info.is_public
                    ? 'Thử thách công khai'
                    : 'Thử thách không công khai'}
                </div>
                <p style={{ marginTop: '10px' }}>{quest.info.description}</p>
              </div>
            </div>
            {quest.info.questions.length === 0 ? (
              'Bạn chưa tạo thử thách nào'
            ) : (
              <div className="col-12 col-md-9 right-component">
                <b>{`Câu hỏi (${quest.info.questions.length})`}</b>
                {quest.info.questions.map((item, i) => {
                  return (
                    <div className="quest-main">
                      <div className="quest-item">
                        <div className="question-media">
                          <div className="question-media__text">
                            <span className="question-media__number">
                              Cau {i + 1}
                            </span>
                            <div className="question-media__text-inner-wrapper">
                              {item.quiz}
                            </div>
                          </div>
                          <div className="question-media__image">
                            <div className="question-media__placeholder-image">
                              <img
                                src={item.img_path}
                                className="image-question"
                              />
                              <span class="question-media__duration">
                                {item.duration} sec
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
                <div className="quest-item"></div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
