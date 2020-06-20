import React, { useState, useEffect } from 'react'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { URL } from '../../common/constants'
import {
  updateCategory,
  changeStatusRunning,
} from '../../store/category/action'
import { createCollectionSchema } from '../../common/validation'
import './comon/styles.css'

export default React.memo(function Collection() {
  const dispatch = useDispatch()
  const history = useHistory()

  const admin = useSelector((state) => state.admin)

  const category = useSelector((state) => state.category)

  const data = admin.allCollection[category.itemSeleted]

  const [newImg, setNewImg] = useState({
    img_path: null,
  })
  const [submit, setSubmit] = useState(false)

  useEffect(() => {
    dispatch(changeStatusRunning(false))
  }, [])

  useEffect(() => {
    if (category.itemSeleted === -1) {
      history.push('/dashboard/category')
    }
  }, [])

  useEffect(() => {
    if (submit) {
      if (category.update) {
        alert('Bạn đã tạo thành công')
        history.push(URL.DASHBOARD.COLLECTION)
      } else {
        alert('Tạo không thành công, vui lòng kiểm tra!')
        setSubmit(false)
      }
    }
  }, [submit])

  if (category.itemSeleted === -1) {
    return <></>
  }

  const onUploadImage = async (event) => {
    let reader = new FileReader()
    reader.onloadend = () => {
      setNewImg({
        ...newImg,
        img_path: reader.result,
      })
    }
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0])
    }
  }

  const onSubmit = (value) => {
    const { title, description } = value
    const category = {
      _id: data._id,
      name: title,
      description,
      img_path: newImg.img_path ? newImg.img_path : undefined,
    }
    dispatch(updateCategory({ category }))
    setSubmit(true)
    dispatch(changeStatusRunning(true))
  }

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800">Thể loại</h1>
      <div className="shadow mb-4">
        <div className="card-header py-3">
          <div className="container register-form">
            <div className="form">
              <div className="note">
                <p>Thông tin</p>
              </div>
              <FormInput
                newImg={newImg}
                onUploadImage={onUploadImage}
                onSubmit={onSubmit}
                category={category}
                data={data}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

const FormInput = ({ onSubmit, onUploadImage, newImg, category, data }) => {
  return (
    <Formik
      initialValues={{
        title: data.name,
        description: data.description,
        img_path: '',
      }}
      enableReinitialize
      validationSchema={createCollectionSchema}
      onSubmit={onSubmit}>
      {(formik) => {
        return (
          <Form
            method="post"
            style={{ height: '100%', width: '100%' }}
            onSubmit={formik.handleSubmit}
            className="form-content">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <p>Tên thể loại</p>
                  <Field
                    maxLength="50"
                    placeholder="Vui lòng nhập tiêu đề ( giới hạn 50 ký tự ) *"
                    name="title"
                    value={formik.values.title}
                    onChange={(e) => formik.handleChange(e)}
                    className={
                      formik.touched.title && formik.errors.title
                        ? 'is-invalid form-control'
                        : 'form-control'
                    }
                    type="text"
                  />
                  <ErrorMessage
                    name="title"
                    className="p-l-20 invalid-feedback"
                    component="div"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <p>Mô tả</p>
                  <Field
                    maxLength="50"
                    placeholder="Vui lòng nhập mô tả ( giới hạn 50 ký tự ) *"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    className={
                      formik.touched.description && formik.errors.description
                        ? 'is-invalid form-control'
                        : 'form-control'
                    }
                    type="description"
                  />
                  <ErrorMessage
                    name="description"
                    className="p-l-20 invalid-feedback"
                    component="div"
                  />
                </div>
              </div>
            </div>
            <div className="row profile-img">
              <div className="col-12 choice-img">
                <div className="full form-group">
                  <div className="full ">
                    <img
                      className="img-upload p-b-10"
                      src={
                        newImg.img_path
                          ? newImg.img_path
                          : data.img_path
                          ? data.img_path
                          : '/images/img_quest_default.png'
                      }
                    />
                    <div className="text-center full">
                      <Field
                        component="input"
                        type="file"
                        id="files"
                        name="img_path"
                        onChange={(e) => {
                          formik.handleChange(e)
                          onUploadImage(e)
                        }}
                        hidden={true}
                      />
                      <label
                        for="files"
                        className="label-input file file-upload-btn ">
                        Choose a Photo
                      </label>
                    </div>
                  </div>
                  <ErrorMessage
                    name="img_path"
                    className="p-l-20 form-control-feedback"
                    style={{ color: 'red' }}
                    component="div"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-primary "
                disabled={category.running}>
                {category.running ? 'Đang cập nhật ...' : 'Cập nhật'}
              </button>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}
