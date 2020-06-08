import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './comon/styles.css'
import Dropdown from './comon/Dropdown'
import { createUserSchema } from '../../common/validation'
import * as adminAction from '../../store/admin/action'

import { Form, Field, ErrorMessage, Formik } from 'formik'

export default function CreateUser() {
  const dispatch = useDispatch()

  const [roles, setRoles] = useState([])
  const [roleSelected, setRoleSelected] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)

  const admin = useSelector((state) => state.admin)

  React.useEffect(() => {
    dispatch(adminAction.getRole())
  }, [])

  React.useEffect(() => {
    if (admin.roles.length > 0) {
      var items = []
      for (var role of admin.roles) {
        const item = {
          label: role.name,
          value: role._id.toString(),
        }
        items.push(item)
      }
      setRoles(items)
    }
  }, [admin.roles])

  React.useEffect(() => {
    if (isSubmit) {
      if (admin.createUser.status) {
        alert('Bạn đã tạo thành công!')
      } else {
        alert('Email đã tồn tại, vui lòng kiểm tra lại !')
        setIsSubmit(false)
      }
    }
  }, [admin.createUser])

  const [newImg, setNewImg] = useState({
    img_path: null,
  })

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

  const onSubmit = (values) => {
    setIsSubmit(true)
    dispatch(adminAction.changeStatusRunning(true))
    if (roleSelected) {
      dispatch(
        adminAction.createUser(
          values.email,
          values.password,
          values.name,
          roleSelected
        )
      )
    }
  }

  const onChange = (values) => {
    setRoleSelected(values.value)
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
              <Formik
                initialValues={{
                  email: '',
                  name: '',
                  password: '',
                  img_path: '',
                }}
                enableReinitialize
                validationSchema={createUserSchema}
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
                            <Field
                              maxLength="50"
                              placeholder="Vui lòng nhập email ( giới hạn 50 ký tự ) *"
                              name="email"
                              value={formik.values.email}
                              onChange={formik.handleChange}
                              className={
                                formik.touched.email && formik.errors.email
                                  ? 'is-invalid form-control'
                                  : 'form-control'
                              }
                              type="text"
                            />
                            <ErrorMessage
                              name="email"
                              className="p-l-20 invalid-feedback"
                              component="div"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <Field
                              maxLength="50"
                              placeholder="Vui lòng nhập password ( giới hạn 50 ký tự ) *"
                              name="password"
                              value={formik.values.password}
                              onChange={formik.handleChange}
                              className={
                                formik.touched.password &&
                                formik.errors.password
                                  ? 'is-invalid form-control'
                                  : 'form-control'
                              }
                              type="password"
                            />
                            <ErrorMessage
                              name="password"
                              className="p-l-20 invalid-feedback"
                              component="div"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <Field
                              maxLength="50"
                              placeholder="Vui lòng nhập tên *"
                              name="name"
                              value={formik.values.name}
                              onChange={formik.handleChange}
                              className={
                                formik.touched.name && formik.errors.name
                                  ? 'is-invalid form-control'
                                  : 'form-control'
                              }
                              type="name"
                            />
                            <ErrorMessage
                              name="name"
                              className="p-l-20 invalid-feedback"
                              component="div"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            {/* <NavMenu /> */}
                            <Dropdown options={roles} onChange={onChange} />
                            {isSubmit && !roleSelected && (
                              <p style={{ color: 'red' }}>Vui lòng chọn role</p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row profile-img">
                        <div className="col-12 choice-img">
                          <div className="full form-group">
                            <div className="full ">
                              <img
                                className="img-upload"
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
                                  onChange={onUploadImage}
                                  hidden={true}
                                />
                                <label
                                  for="files"
                                  className="label-input file file-upload-btn ">
                                  Choose a Photo
                                </label>
                              </div>
                            </div>
                            {newImg.img_path === null ? (
                              <ErrorMessage
                                name="img_path"
                                className="p-l-20 form-control-feedback"
                                style={{ color: 'red' }}
                                component="div"
                              />
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btnSubmit"
                          disabled={admin.running}>
                          {admin.running
                            ? 'Đang tạo người dùng ...'
                            : 'Tạo người dùng'}
                        </button>
                      </div>
                    </Form>
                  )
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
