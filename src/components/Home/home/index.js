import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import * as questActions from '../../../store/quest/action'
import * as categoryActions from '../../../store/category/action'
import { Link } from 'react-router-dom'
import { objectIdToDate } from './../../../utils/date'
const Home = () => {
  const dispatch = useDispatch()
  const category = useSelector((state) => state.category)
  const quest = useSelector((state) => state.quest)
  useEffect(() => {
    dispatch(categoryActions.getCategory())
  }, [])

  useEffect(() => {
    category.categories.map((item) => {
      dispatch(questActions.getsQuestCategory(1, item._id))
    })
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
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" type="text/css" href="/comon/css/home.css" />
      </Helmet>
      <div className="home">
        <div class="layout__circle"></div>
        <div class="layout__half-circle"></div>
        <nav
          className="navbar navbar-expand-lg navbar-mainbg"
          style={{
            position: 'fixed',
            width: '100%',
            zIndex: '100',
          }}>
          <a className="navbar-brand navbar-logo" href="#">
            BAMBOO QUEST
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="fas fa-bars text-white" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <div className="hori-selector">
                {/* <div className="left" />
                <div className="right" /> */}
              </div>
              <li className="nav-item active">
                <a className="nav-link" href="javascript:void(0);">
                  <i className="fas fa-tachometer-alt" />
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0);">
                  <i className="far fa-address-book" />
                  User
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div
          className="container animate__animated animate__bounceIn"
          style={{ marginTop: '100px', marginBottom: '30px' }}>
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
            return (
              <div key={index}>
                {/* content */}
                <div style={{ textAlign: 'center' }}>
                  <b
                    style={{
                      color: '#e21b3c',
                      fontSize: '1em',
                      fontSize: '1.5em',
                    }}>
                    {category.categories[index] &&
                      category.categories[index].description}
                  </b>
                </div>
                <div className="container-card ">
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
                    return (
                      <Link
                        to={`/quest/info/${itemQuiz._id}`}
                        className="bamboo-card ">
                        <div className="card-content">
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
                              <b>{itemQuiz.title && itemQuiz.title}</b>
                              <p>
                                {itemQuiz.description && itemQuiz.description}
                              </p>
                            </p>
                            <p className="text-created">
                              {objectIdToDate(itemQuiz._id)}
                            </p>
                            <p className="user-created">{itemQuiz.author}</p>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
                <br />
                {/* content */}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default React.memo(Home)
