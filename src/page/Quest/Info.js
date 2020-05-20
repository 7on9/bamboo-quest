import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import * as questActions from '../../store/quest/action'
import { startGame, resetResult } from '../../store/socket/socket'
import { objectIdToDate } from '../../utils/date'
import { confirmAlert } from 'react-confirm-alert' // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
export default function Info() {
  const dispatch = useDispatch()
  const history = useHistory()
  const quest = useSelector((state) => state.quest)
  const user = useSelector((state) => state.user)
  const game = useSelector((state) => state.game)
  const [gameStarted, setGameStarted] = useState(false)
  const [ansType, setAnsType] = useState(-1)
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

  const handleShowAns = (i) => {
    if (i !== ansType) {
      setAnsType(i)
    } else {
      setAnsType(-1)
    }
  }

  const handleUpdate = () => {
    history.push('/quest/create')
  }

  const arrayAns = [
    { lable: 'A', className: 'ans-a' },
    { lable: 'B', className: 'ans-b' },
    { lable: 'C', className: 'ans-c' },
    { lable: 'D', className: 'ans-d' },
  ]

  const handleDeleteQuestion = (idQuestion) => {
    dispatch(
      questActions.deleteQuestion({
        _id: quest.info._id,
        id: idQuestion - 1,
      })
    )
  }

  const submit = (_id) => {
    confirmAlert({
      title: 'Xóa câu hỏi',
      message: 'Bạn có chắc chắn muốn xóa câu hỏi này',
      buttons: [
        {
          label: 'Đồng ý',
          onClick: () => handleDeleteQuestion(_id),
        },
        {
          label: 'Không',
          onClick: () => alert('Hủy'),
        },
      ],
    })
  }

  const data = () => {
    return quest.info.questions
      .filter((ii) => ii.deleted === false)
      .map((x) => x)
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
              <div onClick={handleUpdate} className="btn-update">
                <i className="fas fa-pen"></i>
              </div>
              <img
                src={
                  quest.info.img_path
                    ? quest.info.img_path
                    : '/images/img_quest_default.png'
                }
                className="image-quiz"
              />
              <div style={{ padding: '10px' }}>
                <div>
                  <h1 className="title__heading">{quest.info.title}</h1>
                </div>
                <p>{quest.info.description}</p>
                <p>{quest.info.like.length} yêu thích</p>
                <p>
                  <i>Ngày tạo: {objectIdToDate(quest.info._id).toString()}</i>
                </p>
                <div class="section-title">
                  Trạng thái:
                  {quest.info.is_public ? '  công khai' : '  không công khai'}
                </div>
                {quest.info.questions.length !== 0 && (
                  <div
                    onClick={startGameHandle}
                    className="button-info button-play">
                    Bắt đầu
                  </div>
                )}
                {String(quest.info.id_author) ===
                  String(user.info ? user.info._id : '') && (
                  <>
                    <div
                      className="button-info button-add"
                      onClick={handleAddQuestions}>
                      Thêm câu hỏi
                    </div>
                  </>
                )}
              </div>
            </div>
            {data().length === 0 ? (
              'Bạn chưa tạo thử thách nào'
            ) : (
              <div className="col-12 col-md-9 right-component">
                <b>{`Câu hỏi (${quest.info.questions.length})`}</b>
                {data().map((item, i) => {
                  return (
                    <div
                      key={`quiz${i}`}
                      className="quest-main"
                      onClick={() => handleShowAns(i)}>
                      <div className="quest-item">
                        <div className="question-media">
                          <div className="question-media__text">
                            <p className="question-media__number">
                              Câu {i + 1}:
                            </p>
                            <div style={{ whiteSpace: 'nowrap' }}>
                              <b
                                className="question-media__text-inner-wrapper"
                                style={{ display: 'inline-block' }}>
                                {item.quiz ? item.quiz : ''}
                              </b>
                              <i
                                onClick={() => submit(item._id)}
                                className="fas fa-trash btn-delete-question"
                                style={{
                                  color: '#dc3545',
                                  fontSize: '13px',
                                }}></i>
                            </div>
                          </div>
                          <div className="question-media__image">
                            <div className="question-media__placeholder-image">
                              <img
                                src={
                                  item.img_path
                                    ? item.img_path
                                    : '/images/img_quest_default.png'
                                }
                                className="image-question"
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover',
                                }}
                              />
                              <span class="question-media__duration">
                                {item.duration} sec
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {i === ansType && (
                        <div className="array-ans">
                          {item.ans.map((itemAns, i) => {
                            return (
                              <div>
                                <div className="item-ans">
                                  <div
                                    className={`icon-ans ${arrayAns[i].className}`}>
                                    {arrayAns[i].lable}
                                  </div>
                                  <div className="ans-detail">
                                    <p
                                      style={{
                                        float: 'left',
                                        marginRight: '20px',
                                      }}>
                                      {itemAns.content}
                                    </p>
                                    {item.correct_id === itemAns._id ? (
                                      <i
                                        style={{ color: '#57b846' }}
                                        className="fas fa-check"></i>
                                    ) : (
                                      <i
                                        style={{ color: '#dc3545' }}
                                        className="fas fa-times"></i>
                                    )}
                                  </div>
                                </div>
                                {i !== 3 && <div className="line" />}
                              </div>
                            )
                          })}
                        </div>
                      )}
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
