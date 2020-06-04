/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import { useHistory } from 'react-router-dom'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { createQuestionSchema } from '../../common/validation'
import * as questActions from '../../store/quest/action'

export default React.memo(function () {
  const dispatch = useDispatch()
  const history = useHistory()

  const quest = useSelector((state) => state.quest)
  const [image, setImage] = useState()
  const [isRedirect, setIsRedirect] = useState(false)

  useEffect(() => {
    if (quest.info === null) {
      history.push('/home')
    }
  }, [])

  useEffect(() => {
    if (isRedirect) {
      if (quest.info !== null) {
        alert('Đã tạo thành công')
        history.goBack()
      } else {
        alert('Tạo không thành công, hãy kiểm tra lại')
        setIsRedirect(false)
        dispatch(questActions.changeStatusRunning(false))
      }
    }
  }, [quest])

  useEffect(() => {
    dispatch(questActions.changeStatusRunning(false))
  }, [])
  const onSubmit = (value) => {
    const ans = [value.ansA, value.ansB, value.ansC, value.ansD]
    dispatch(questActions.changeStatusRunning(true))
    const { _id } = quest.info
    setIsRedirect(true)
    dispatch(
      questActions.addQuestion({
        _id,
        ans,
        quiz: value.title,
        img_path: image,
        correct_id: value.correctId,
        correct_point: Number(value.correctPoint),
        incorrect_point: Number(value.incorrectPoint),
        duration: Number(value.time),
      })
    )
  }
  const onUploadImage = (event) => {
    let reader = new FileReader()
    reader.onloadend = () => {
      setImage(reader.result)
    }
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0])
    }
  }
  const handleBack = () => {
    history.goBack()
  }
  const renderSpinner = () => (
    <div className="linear-activity">
      <div className="indeterminate" />
    </div>
  )
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="/comon/css/add-question.css"
        />
      </Helmet>
      <Formik
        initialValues={{
          time: '10',
          correctId: '0',
        }}
        enableReinitialize
        validationSchema={createQuestionSchema}
        onSubmit={onSubmit}>
        {(formik) => {
          return (
            <Form
              method="post"
              style={{ height: '100%', width: '100%' }}
              onSubmit={formik.handleSubmit}>
              <div className="add-question">
                <div className="left">
                  <button
                    className="create-question"
                    type="submit"
                    disabled={quest.running}>
                    {quest.running ? 'Đang tạo ...' : 'Tạo câu hỏi'}
                  </button>
                  <button
                    className="create-question"
                    onClick={handleBack}
                    style={{
                      background: 'rgb(242, 242, 242)',
                      color: 'rgb(0, 0, 0)',
                    }}>
                    Trở về
                  </button>
                </div>
                <div className="right">
                  <div className="create-quiz">
                    <div className="container content">
                      <div className="col-12 press-quest">
                        <Field
                          maxLength="50"
                          placeholder="Vui lòng nhập trên cuộc thi ( giới hạn 50 ký tự )"
                          name="title"
                          value={formik.values.title}
                          className="input-title"
                        />
                      </div>
                      <ErrorMessage name="title" className="p-l-20" />
                      <div className="col-12" style={{ marginTop: '15px' }}>
                        <div className="row">
                          <div className="col-12 col-md-2">
                            <div className="row">
                              <div className="col-4 col-md-12">
                                <p>Thời gian</p>
                                <Field
                                  as="select"
                                  name="time"
                                  className="input-time">
                                  <option selected value="10">
                                    10s
                                  </option>
                                  <option value="15">15s</option>
                                  <option value="20">20s</option>
                                </Field>
                              </div>
                              <div className="col-4 col-md-12">
                                <p>Điểm cộng</p>
                                <Field
                                  type="text"
                                  maxLength="3"
                                  placeholder="Điểm"
                                  className="input-time"
                                  name="correctPoint"
                                  value={formik.values.correctPoint}
                                />
                                <ErrorMessage
                                  name="correctPoint"
                                  className="p-l-20"
                                />
                              </div>

                              <div className="col-4 col-md-12">
                                <p>Điểm trừ</p>
                                <Field
                                  type="text"
                                  maxLength="3"
                                  placeholder="Điểm"
                                  className="input-time"
                                  name="incorrectPoint"
                                  value={formik.values.incorrectPoint}
                                />
                                <ErrorMessage
                                  name="incorrectPoint"
                                  className="p-l-20"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-8 choice-img">
                            <div className="full">
                              <div className="full">
                                <img
                                  className="img-upload"
                                  src={
                                    image
                                      ? image
                                      : '/images/img_quest_default.png'
                                  }
                                />
                                <div className="text-center full">
                                  <input
                                    type="file"
                                    id="files"
                                    onChange={onUploadImage}
                                    hidden={true}
                                  />
                                  <label
                                    htmlFor="files"
                                    className="label-input file upload-btn">
                                    Choose a Photo
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-2"></div>
                        </div>
                      </div>
                      <div className="row" style={{ margin: 0 }}>
                        <div className="col-12 col-md-6">
                          <div className="col-12 press-ans ans-bg-a">
                            <div className="ans-bg">
                              <b>A</b>
                            </div>
                            <Field
                              type="text"
                              maxLength="100"
                              placeholder="Vui lòng nhập đáp án"
                              className="ans"
                              name="ansA"
                              value={formik.values.ansA}
                            />
                          </div>
                          <ErrorMessage name="ansA" className="p-l-20" />
                        </div>

                        <div className="col-12 col-md-6">
                          <div className="col-12 press-ans ans-bg-b">
                            <div className="ans-bg ">
                              <b>B</b>
                            </div>
                            <Field
                              type="text"
                              maxLength="100"
                              placeholder="Vui lòng nhập đáp án"
                              className="ans"
                              name="ansB"
                              value={formik.values.ansB}
                            />
                          </div>
                          <ErrorMessage name="ansB" className="p-l-20" />
                        </div>

                        <div className="col-12 col-md-6">
                          <div className="col-12 press-ans ans-bg-c">
                            <div className="ans-bg ">
                              <b>C</b>
                            </div>
                            <Field
                              type="text"
                              maxLength="100"
                              placeholder="Vui lòng nhập đáp án"
                              className="ans"
                              name="ansC"
                              value={formik.values.ansC}
                            />
                          </div>
                          <ErrorMessage name="ansC" className="p-l-20" />
                        </div>

                        <div className="col-12 col-md-6">
                          <div className="col-12 press-ans ans-bg-d">
                            <div className="ans-bg ">
                              <b>D</b>
                            </div>
                            <Field
                              type="text"
                              maxLength="100"
                              placeholder="Vui lòng nhập đáp án"
                              className="ans"
                              name="ansD"
                              value={formik.values.ansD}
                            />
                          </div>
                          <ErrorMessage name="ansD" className="error" />
                        </div>
                      </div>
                      <div className="col-12 correct-id">
                        <p style={{ marginRight: '10px' }}>Đáp án đúng</p>
                        <Field
                          as="select"
                          name="correctId"
                          className="correctid">
                          <option value="0">A</option>
                          <option value="1">B</option>
                          <option value="2">C</option>
                          <option value="3">D</option>
                        </Field>
                      </div>
                      {quest.running && renderSpinner()}
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
})
