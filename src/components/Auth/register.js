import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useSelector } from 'react-redux'
import { registerSchema } from '../../common/validation'
import { Link } from 'react-router-dom'
import { CONTENT_TYPE } from './comon/constant'

export default function Register(props) {
  const user = useSelector((state) => state.user)

  const handleSubmit = (value) => {
    props.handleRegister(value.email, value.password, value.name)
  }
  const handleChangePage = () => {
    props.handleChangePage(CONTENT_TYPE.LOGIN)
  }
  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        password: '',
        reTypePassword: '',
      }}
      enableReinitialize
      validationSchema={registerSchema}
      onSubmit={handleSubmit}>
      {({ errors, touched, handleChange, values, isSubmitting }) => (
        <Form className="login100-form validate-form">
          <span className="login100-form-title">ĐĂNG KÝ</span>
          <div
            className={
              touched.email && errors.email
                ? 'wrap-input100 validate-input is-invalid form-control'
                : 'wrap-input100 validate-input'
            }
            data-validate="Valid email is required: ex@abc.xyz">
            <Field
              className="input100"
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={values.email}
            />
            <span className="focus-input100" />
            <span className="symbol-input100">
              <i className="fa fa-envelope" aria-hidden="true" />
            </span>
          </div>
          <ErrorMessage
            name="email"
            className="invalid-feedback"
            component="div"
          />
          <div
            className={
              touched.name && errors.name
                ? 'wrap-input100 validate-input is-invalid form-control'
                : 'wrap-input100 validate-input'
            }
            data-validate="Valid email is required: ex@abc.xyz">
            <Field
              className="input100"
              type="text"
              name="name"
              placeholder="Họ và tên"
              onChange={handleChange}
              value={values.name}
            />
            <span className="focus-input100" />
            <span className="symbol-input100">
              <i className="fa fa-user" aria-hidden="true" />
            </span>
          </div>
          <ErrorMessage
            name="name"
            className="invalid-feedback"
            component="div"
          />
          <div
            className={
              touched.password && errors.password
                ? 'wrap-input100 validate-input is-invalid form-control'
                : 'wrap-input100 validate-input'
            }
            data-validate="Password is required">
            <Field
              className="input100"
              type="password"
              name="password"
              placeholder="Mật khẩu"
              onChange={handleChange}
              value={values.password}
            />
            <span className="focus-input100" />
            <span className="symbol-input100">
              <i className="fa fa-lock" aria-hidden="true" />
            </span>
          </div>
          <ErrorMessage
            name="password"
            className="invalid-feedback"
            component="div"
          />
          <div className="container-login100-form-btn">
            <button
              type="submit"
              className="login100-form-btn"
              disabled={user.running}>
              {user.running ? 'Đang đăng kí ...' : 'Đăng ký'}
            </button>
          </div>
          <div className="text-center p-t-136">
            <Link
              to="#"
              style={{ cursor: 'pointer' }}
              className="txt2 change_state"
              onClick={handleChangePage}>
              <i className="fa fa-long-arrow-left m-r-5" aria-hidden="true" />
              Đăng nhập
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  )
}
