import React, { useState, useEffect } from 'react'
import './comon/styles.css'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import { createCollectionSchema } from '../../common/validation'
import { useDispatch, useSelector } from 'react-redux'
import { createCollection, changeStatusRunning } from '../../store/admin/action'
export default React.memo(function Collection() {
  const dispatch = useDispatch()
  const admin = useSelector((state) => state.admin)

  const [newImg, setNewImg] = useState({
    img_path: null,
  })
  const [submit, setSubmit] = useState(false)
  useEffect(() => {
    dispatch(changeStatusRunning(false))
  }, [])
  useEffect(() => {
    if (submit) {
      if (admin.myCollection) {
        alert('Bạn đã tạo thành công')
        setSubmit(false)
      } else {
        alert('Tạo không thành công, vui lòng kiểm tra!')
        setSubmit(false)
      }
    }
  }, [admin.result])
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
    const newCategory = { name: title, description, ...newImg }
    dispatch(createCollection({ newCategory }))
    setSubmit(true)
    dispatch(changeStatusRunning(true))
  }

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800">Collection</h1>
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
                admin={admin}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
const FormInput = ({ onSubmit, onUploadImage, newImg, admin }) => {
  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        img_path: '',
      }}
      enableReinitialize
      validationSchema={createCollectionSchema}
      onSubmit={(values) => onSubmit(values)}>
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
                disabled={admin.running}>
                {admin.running ? 'Đang tạo ...' : 'Tạo collection'}
              </button>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}
