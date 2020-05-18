/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Helmet from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import * as questActions from '../../store/quest/action'
import * as categoryActions from '../../store/category/action'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { questSchema } from '../../common/validation'
import { Multiselect } from 'multiselect-react-dropdown'

export default function Create() {
  const dispatch = useDispatch()
  const history = useHistory()
  const quest = useSelector((state) => state.quest)
  const [newQuest, setNewQuest] = useState({
    img_path: quest.info ? quest.info.img_path : null,
    is_public: quest.info ? quest.info.is_public : false,
  })
  const [selectCategory, setSelectCategory] = useState([])
  const [submit, setSubmit] = useState(false)
  const category = useSelector((state) => state.category)

  const togglePublic = () => {
    setNewQuest({
      ...newQuest,
      is_public: !newQuest.is_public,
    })
  }
  const onUploadImage = async (event) => {
    let reader = new FileReader()
    reader.onloadend = () => {
      setNewQuest({
        ...newQuest,
        img_path: reader.result,
      })
    }
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0])
    }
  }

  useEffect(() => {
    dispatch(questActions.changeStatusRunning(false))
    dispatch(categoryActions.getCategory())
  }, [])

  useEffect(() => {
    if (submit) {
      if (quest.quest) {
        alert('Bạn đã tạo thử thách thành công')
        history.push('/user/quest/')
      } else {
        alert('Tạo thử thách không thành công, vui lòng kiểm tra!')
      }
    }
  }, [quest.quest])

  const onSubmit = (values) => {
    var categoryArr = []
    selectCategory.forEach((item) => {
      categoryArr.push(item._id)
    })
    dispatch(questActions.changeStatusRunning(true))
    if (quest.info) {
      //TODO
    } else {
      dispatch(
        questActions.createQuest({
          title: values.title,
          description: values.description,
          is_public: newQuest.is_public,
          img_path: newQuest.img_path ? newQuest.img_path : undefined,
          category: categoryArr,
        })
      )
    }
  }

  const handleSubmitForm = async (formik) => {
    await setSubmit(true)
    formik.submitForm()
  }

  const handleSelectCategory = (selectedList) => {
    setSelectCategory(selectedList)
  }

  const selectedListCategory = () => {
    if (quest.info) {
      if (quest.info.category.length > 0) {
        var arrCategory = []
        quest.info.category.forEach((item) => {
          const categoryItem = category.categories.find(
            (element) => element._id === item
          )
          arrCategory.push(categoryItem)
        })
        return arrCategory
      } else {
        return []
      }
    }
    return []
  }
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="/comon/css/create-quiz.css"
        />
      </Helmet>
      <div className="create-quiz">
        <div className="container content">
          <Formik
            initialValues={{
              description: quest.info ? quest.info.description : '',
              title: quest.info ? quest.info.title : '',
            }}
            enableReinitialize
            validationSchema={questSchema}
            onSubmit={(values) => {
              onSubmit(values)
            }}>
            {(formik) => {
              return (
                <Form
                  method="post"
                  style={{ height: '100%', width: '100%' }}
                  onSubmit={formik.handleSubmit}>
                  <div className="col-12 press-quest">
                    <Field
                      maxLength="50"
                      placeholder="Vui lòng nhập trên cuộc thi ( giới hạn 50 ký tự )"
                      name="title"
                      onChange={formik.handleChange}
                      value={formik.values.title}
                      className="input-title"
                    />
                  </div>
                  <ErrorMessage name="title" className="p-l-20" />
                  <div className="col-12" style={{ marginTop: '15px' }}>
                    <div className="row">
                      <div className="col-12 col-md-2">
                        <div className="form-group switch-public">
                          <label>
                            {newQuest.is_public ? 'Công khai' : 'Bí mật'}
                          </label>
                          <div className="center-div">
                            <label className="switch">
                              <input
                                type="checkbox"
                                value={newQuest.is_public}
                                onClick={togglePublic}
                                name="is_public"
                              />
                              <span className="slider round" />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-8 choice-img">
                        <div className="full">
                          <div className="full">
                            <img
                              className="img-upload"
                              src={
                                newQuest.img_path
                                  ? newQuest.img_path
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
                                for="files"
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
                  <div className="row" style={{ marginTop: '15px' }}>
                    <div className="col-2"></div>
                    <div className="col-8">
                      <Multiselect
                        options={category.categories ? category.categories : []} // Options to display in the dropdown
                        displayValue="name"
                        onSelect={handleSelectCategory}
                        onRemove={handleSelectCategory}
                        placeholder={'Vui lòng chọn thể loại'}
                        selectedValues={selectedListCategory()}
                      />
                    </div>
                    <div className="col-2"></div>
                  </div>

                  <div className="col-12 press-quest">
                    <Field
                      type="text"
                      maxLength="100"
                      placeholder="Vui lòng nhập mô tả cuộc thi"
                      style={{ marginLeft: '10px', width: '100%' }}
                      name="description"
                      onChange={formik.handleChange}
                      value={formik.values.description}
                    />
                  </div>
                  <ErrorMessage
                    name="description"
                    className="p-l-20"
                    component="div"
                  />
                  <div className="col-12" style={{ padding: 0 }}>
                    {quest.info ? (
                      <div
                        onClick={() => handleSubmitForm(formik)}
                        className="update-btn"
                        disabled={quest.running}>
                        {quest.running ? 'Đang chỉnh sửa ...' : 'Chỉnh sửa'}
                      </div>
                    ) : (
                      <div
                        onClick={() => handleSubmitForm(formik)}
                        className="update-btn"
                        disabled={quest.running}>
                        {quest.running
                          ? 'Đang tạo thử thách ...'
                          : 'Tạo thử thách'}
                      </div>
                    )}
                  </div>
                </Form>
              )
            }}
          </Formik>
        </div>
      </div>
    </div>
  )
}
