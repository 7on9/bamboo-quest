import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import * as questActions from '../../../store/quest/action'
import * as categoryActions from '../../../store/category/action'
import * as authAction from '../../../store/auth/action'
import { useHistory } from 'react-router-dom'
import { objectIdToDate } from './../../../utils/date'
import 'pretty-checkbox'
// import { Menu } from '../common/menu'
import { Menu } from '../../../components'

const Home = () => {
  const [heart, setHeart] = useState([])
  const dispatch = useDispatch()
  const history = useHistory()
  const category = useSelector((state) => state.category)
  const quest = useSelector((state) => state.quest)
  const user = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(categoryActions.getCategory())
    dispatch(questActions.resetQuiz())
  }, [])

  useEffect(() => {
    if (!user.info) {
      dispatch(authAction.verify())
    }
  }, [])

  useEffect(() => {
    if (!quest.isGetQuiz) {
      category.categories.map((item) => {
        dispatch(questActions.getsQuestCategory(1, item._id))
      })
    }
  }, [category])

  const chanePage = (index, type) => {
    const data = quest.questPublic[index]
    dispatch(
      questActions.getsQuestCategory(
        type === 0 ? data.page - 1 : data.page + 1,
        category.categories[index]._id,
        index
      )
    )
  }

  const likeOrNot = (_id, status, count) => {
    dispatch(questActions.likePublicQuest(_id))
    var items = [...heart]
    const findId = items.findIndex(
      (item) => item.id.toString() === _id.toString()
    )
    if (findId !== -1) {
      items[findId].count = items[findId].status
        ? items[findId].count - 1
        : items[findId].count + 1
      items[findId].status = !items[findId].status
    } else {
      const countQues = status ? count - 1 : count + 1
      items.push({ id: _id, status: !status, count: countQues })
    }
    setHeart(items)
  }

  return (
    <div>
      <Helmet>
        <link rel="stylesheet" type="text/css" href="/comon/css/home.css" />
      </Helmet>
      <div className="home">
        <div class="layout__circle"></div>
        <div class="layout__half-circle"></div>
        <Menu />
        <div
          className="container animate__animated animate__bounceIn"
          style={{ marginTop: '50px', marginBottom: '40px' }}>
          {/* search */}
          <div className=" search-content "></div>
          <div className="row" style={{ marginBottom: '30px' }}>
            <div className="col-12 col-md-2" />
            <div className="col-12 col-md-8">
              <div style={{ position: 'relative' }}>
                <input className="search-box"></input>
                <div className="search-btn">
                  <div className="search-content-icon">
                    <i
                      style={{ color: '#333' }}
                      className="fas fa-search search-icon"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2" />
          </div>
          {/* search */}
          {quest.questPublic.map((item, index) => {
            const cat = category.categories.find(
              (itemCat) =>
                itemCat._id.toString() === item._idCategory.toString()
            )
            return (
              <>
                {item.quest.length === 0 ? (
                  <></>
                ) : (
                  <div key={index}>
                    {/* content */}
                    <div style={{ textAlign: 'center' }}>
                      <b
                        style={{
                          color: '#e21b3c',
                          fontSize: '1em',
                          fontSize: '1.5em',
                        }}>
                        {cat.description}
                      </b>
                    </div>
                    <div
                      className="container-card "
                      style={{ position: 'relative' }}>
                      {item.page !== 1 && (
                        <div
                          className="pre-card"
                          onClick={() => chanePage(index, 0)}>
                          <div className="pre-card-btn">{'<'}</div>
                        </div>
                      )}

                      {item.quest.length > 3 && (
                        <div
                          className="next-card"
                          onClick={() => chanePage(index, 1)}>
                          <div className="next-card-btn">{'>'}</div>
                        </div>
                      )}

                      {item.quest.map((itemQuiz) => {
                        var _idUser = user.info
                          ? itemQuiz.like.find(
                              (userId) =>
                                userId.toString() === user.info._id.toString()
                            )
                          : false
                        var heartStatus = heart.find(
                          (questId) => questId.id === itemQuiz._id
                        )

                        return (
                          <div className="bamboo-card ">
                            {user.token ? (
                              <div style={{ position: 'relative' }}>
                                <div
                                  class="pretty p-icon p-toggle p-plain "
                                  style={{
                                    position: 'absolute',
                                    pointerEvents: 'fill',
                                    top: 20,
                                    right: 1,
                                  }}>
                                  {heartStatus ? (
                                    <input
                                      type="checkbox"
                                      checked={heartStatus.status}
                                      onClick={() => {
                                        likeOrNot(
                                          itemQuiz._id,
                                          heartStatus.status,
                                          itemQuiz.like.length
                                        )
                                      }}
                                    />
                                  ) : (
                                    <input
                                      type="checkbox"
                                      checked={_idUser ? true : false}
                                      onClick={() => {
                                        likeOrNot(
                                          itemQuiz._id,
                                          _idUser,
                                          itemQuiz.like.length
                                        )
                                      }}
                                    />
                                  )}

                                  <div class="state p-off">
                                    <i class="icon fa fa-heart-o "></i>
                                    <label className="state"></label>
                                  </div>
                                  <div class="state p-on p-danger-o">
                                    <i class="icon fa fa-heart"></i>
                                    <label className="state"></label>
                                  </div>
                                </div>
                              </div>
                            ) : null}
                            <div
                              className="card-content"
                              style={{
                                pointerEvents: 'stroke',
                              }}
                              onClick={() =>
                                history.push(`/quest/info/${itemQuiz._id}`)
                              }>
                              <div className="card-image">
                                <img
                                  className="card-image-item"
                                  src={
                                    itemQuiz.img_path
                                      ? itemQuiz.img_path
                                      : '/images/img_quest_default.png'
                                  }
                                />
                              </div>
                              <div className="card-item-content">
                                <p>
                                  <b className="card-item-content-title">
                                    {itemQuiz.title && itemQuiz.title}
                                  </b>
                                  <p>
                                    {itemQuiz.description &&
                                      itemQuiz.description}
                                  </p>
                                  <p>
                                    Lượt thích:{' '}
                                    {heartStatus
                                      ? heartStatus.count
                                      : itemQuiz.like.length}
                                  </p>
                                </p>
                                <p className="text-created">
                                  {objectIdToDate(itemQuiz._id)}
                                </p>
                                <p className="user-created">
                                  {itemQuiz.author}
                                </p>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    <br />
                    {/* content */}
                  </div>
                )}
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default React.memo(Home)
