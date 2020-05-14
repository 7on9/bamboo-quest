import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage, useField } from 'formik'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { initFormikEdit, initFormikEditPassword } from './util'
import { infoSchema, passwordSchema } from '../../common/validation'
import * as User from '../../store/auth/action'
import './styles.css'

const UpdateUser = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((state) => state.user)
  const [imgPath, setImgPath] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)
  const [gender, setGender] = useState(user.info ? user.info.gender : false)

  const onUploadImage = async (event) => {
    if (event.target.files[0]) {
      setImgPath(URL.createObjectURL(event.target.files[0]))
    }
    let reader = new FileReader()
    reader.onloadend = () => {
      setImgPath(reader.result)
    }
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0])
    }
  }

  useEffect(() => {
    if (isSubmit) {
      if (!user.errorUpdate) {
        alert('Bạn đã chỉnh sửa thông tin thành công')
        setIsSubmit(false)
        dispatch(User.resetErrorUpdate())
        history.goBack()
      } else {
        alert('Đã xảy ra lỗi vui lòng thử lại')
        dispatch(User.resetErrorUpdate())
        setIsSubmit(false)
      }
    }
  }, [user.errorUpdate])

  const handleSubmit = (values, type) => {
    if (type === 0) {
      dispatch(
        User.update({
          avatar_path: imgPath !== '' ? imgPath : undefined,
          name: values.name,
          phone: values.phone,
          gender: values.gender ? values.gender : false,
          organization: values.organization,
        })
      )
      setIsSubmit(true)
    } else if (type === 1) {
      dispatch(
        User.update({
          oldPassword: values.oldPassword,
          password: values.newPassword,
        })
      )
      setIsSubmit(true)
    }
    dispatch(User.changeStatusRunning(true))
  }
  const MyRadio = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
      <div
        className={
          meta.touched && meta.error
            ? 'custom-control custom-radio was-validated'
            : 'custom-control custom-radio'
        }>
        <input
          id={label}
          {...field}
          {...props}
          name={props.name}
          type="radio"
          required
          className="form-check-input"
          style={{ backgroundColor: '#17a51e', color: '#17a51e' }}
        />
        <label for={label} className="form-check-label" htmlFor="inlineRadio1">
          {label}
        </label>
        {meta.touched && meta.error ? (
          <div className="invalid-feedback">{meta.error}</div>
        ) : null}
      </div>
    )
  }
  return (
    <div className="container emp-profile">
      <form method="post">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img
                src={
                  imgPath
                    ? imgPath
                    : user.info && user.info.avatar_path
                    ? user.info.avatar_path
                    : '/images/img_quest_default.png'
                }
                alt="avatar"
              />
              <div className="file btn btn-lg btn-primary">
                Change Photo
                <input
                  type="file"
                  style={{ background: 'none', width: '100%' }}
                  onChange={onUploadImage}
                  name="file"
                />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="profile-head profile-header">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true">
                    Thông tin tài khoản
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="password-tab"
                    data-toggle="tab"
                    href="#password"
                    role="tab"
                    aria-controls="password"
                    aria-selected="false">
                    Password
                  </a>
                </li>
              </ul>
              <div className="row">
                <div className="col-md-12">
                  <div className="tab-content profile-tab" id="myTabContent">
                    <Formik
                      initialValues={initFormikEdit(user)}
                      enableReinitialize
                      validationSchema={infoSchema}
                      onSubmit={(values) => handleSubmit(values, 0)}>
                      {({
                        values,
                        errors,
                        touched,
                        handleSubmit,
                        handleChange,
                        isSubmitting,
                      }) => (
                        <Form
                          className="tab-pane fade show active"
                          id="home"
                          role="tabpanel"
                          aria-labelledby="home-tab"
                          onSubmit={handleSubmit}>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <i className="fas fa-envelope icon" />
                              <label htmlFor="inputEmail4">Email</label>
                              <Field
                                type="email"
                                className={
                                  touched.email && errors.email
                                    ? 'is-invalid form-control'
                                    : 'form-control'
                                }
                                name="email"
                                onChange={handleChange}
                                disabled={true}
                                value={values.email}
                              />
                              <ErrorMessage
                                name="email"
                                className="invalid-feedback"
                                component="div"
                              />
                            </div>

                            <div className="form-group col-md-6">
                              <i
                                className="fas fa-user"
                                style={{ marginRight: '15px' }}
                              />
                              <label>Tên</label>
                              <Field
                                as="input"
                                type="text"
                                name="name"
                                className={
                                  touched.name && errors.name
                                    ? 'is-invalid form-control'
                                    : 'form-control'
                                }
                                placeholder="Tên"
                                onChange={handleChange}
                                value={values.name}
                              />
                              <ErrorMessage
                                name="name"
                                className="invalid-feedback"
                                component="div"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <i className="fas fa-venus-mars icon" />
                            <label>Gender</label>
                            <MyRadio
                              name="gender"
                              value={true}
                              onClick={() => setGender(true)}
                              onChange={handleChange}
                              checked={gender}
                              label="Nữ"
                              touched={touched.gender}
                              message={errors.gender}
                            />
                            <MyRadio
                              name="gender"
                              value={false}
                              onClick={() => setGender(false)}
                              checked={!gender}
                              onChange={handleChange}
                              label="Nam"
                              message={errors.gender}
                              touched={touched.gender}
                            />

                            <ErrorMessage
                              name="gender"
                              className="invalid-feedback"
                              component="div"
                            />
                          </div>

                          <div className="form-group">
                            <i className="fas fa-building icon" />
                            <label>Organization</label>
                            <Field
                              type="text"
                              className={
                                touched.organization && errors.organization
                                  ? 'is-invalid form-control'
                                  : 'form-control'
                              }
                              name="organization"
                              placeholder={
                                user.info
                                  ? user.info.organization
                                    ? user.info.organization
                                    : 'Đơn vị công tác'
                                  : null
                              }
                              onChange={handleChange}
                              value={values.organization}
                            />
                            <ErrorMessage
                              name="organization"
                              className="invalid-feedback"
                              component="div"
                            />
                          </div>
                          <div className="form-group">
                            <i className="fas fa-phone icon" />
                            <label>Phone</label>
                            <Field
                              type="text"
                              className={
                                touched.phone && errors.phone
                                  ? 'is-invalid form-control'
                                  : 'form-control'
                              }
                              name="phone"
                              maxLength="10"
                              onChange={handleChange}
                              value={values.phone}
                              placeholder="Số điện thoại"
                            />
                            <ErrorMessage
                              name="phone"
                              className="invalid-feedback"
                              component="div"
                            />
                          </div>
                          <button
                            type="submit"
                            className="col-12 btn btn-block btn-success"
                            style={{ height: '40px' }}
                            disabled={user.running}>
                            <i className="fas fa-edit" />
                            {user.running ? 'Đang Load...' : 'Chỉnh sửa'}
                          </button>
                        </Form>
                      )}
                    </Formik>
                    <Formik
                      initialValues={initFormikEditPassword()}
                      enableReinitialize
                      validationSchema={passwordSchema}
                      onSubmit={(values) => handleSubmit(values, 1)}>
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,
                      }) => (
                        <Form
                          className="tab-pane fade"
                          id="password"
                          role="tabpanel"
                          aria-labelledby="password-tab">
                          <div className="form-group">
                            <i className="fas fa-lock icon" />
                            <label>Mật khẩu hiện tại</label>
                            <Field
                              type="password"
                              className={
                                touched.oldPassword && errors.oldPassword
                                  ? 'is-invalid form-control'
                                  : 'form-control'
                              }
                              name="oldPassword"
                              placeholder={
                                user.info
                                  ? user.info.oldPassword
                                    ? user.info.oldPassword
                                    : 'Mật khẩu'
                                  : null
                              }
                              onChange={handleChange}
                              value={values.oldPassword}
                            />
                            <ErrorMessage
                              name="oldPassword"
                              className="invalid-feedback"
                              component="div"
                            />
                          </div>

                          <div className="form-group">
                            <i className="fas fa-lock icon" />
                            <label>Mật khẩu mới</label>
                            <Field
                              type="password"
                              className={
                                touched.newPassword && errors.newPassword
                                  ? 'is-invalid form-control'
                                  : 'form-control'
                              }
                              name="newPassword"
                              placeholder={
                                user.info
                                  ? user.info.newPassword
                                    ? user.info.newPassword
                                    : 'Mật khẩu'
                                  : null
                              }
                              onChange={handleChange}
                              value={values.newPassword}
                            />
                            <ErrorMessage
                              name="newPassword"
                              className="invalid-feedback"
                              component="div"
                            />
                          </div>
                          <button
                            type="submit"
                            className="col-12 btn btn-block btn-success"
                            style={{ height: '40px' }}
                            disabled={user.running}>
                            <i className="fas fa-edit" />
                            {user.running ? 'Đang Load...' : 'Chỉnh sửa'}
                          </button>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default React.memo(UpdateUser)
