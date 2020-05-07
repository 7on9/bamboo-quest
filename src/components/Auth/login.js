import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginSchema } from '../../common/validation'
import { CONTENT_TYPE } from './comon/constant'

export default function Login(props) {
  const user = useSelector((state) => state.user)

  const handleSubmit = (value) => {
    props.handleLogin(value.email, value.password)
    props.setIsSubmitLogin(true)
  }
  const handleChangePage = () => {
    props.handleChangePage(CONTENT_TYPE.REGISTER)
  }
  console.log(user.running)
  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          name: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}>
        {({
          handleSubmit,
          values,
          isSubmitting,
          handleChange,
          touched,
          errors,
        }) => (
          <Form className="login100-form validate-form">
            <span className="login100-form-title">Đăng nhập</span>

            {!props.isCorrect && (
              <div className="alert alert-danger" role="alert">
                Sai email hoặc password
              </div>
            )}
            <div
              className={
                touched.email && errors.email
                  ? 'wrap-input100 validate-input is-invalid form-control'
                  : 'wrap-input100 validate-input'
              }
              data-validate="Valid email is required: ex@abc.xyz">
              <Field
                as="input"
                className="input100"
                type="text"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
              />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true" />
              </span>
            </div>
            <div style={{ color: 'red', textAlign: 'left' }}>
              <ErrorMessage name="email" />
            </div>
            <div
              className={
                touched.password && errors.password
                  ? 'wrap-input100 validate-input is-invalid form-control'
                  : 'wrap-input100 validate-input'
              }
              data-validate="Password is required">
              <Field
                as="input"
                className="input100"
                type="password"
                name="password"
                placeholder="Mật khẩu"
                value={values.password}
                autocomplete="on"
              />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true" />
              </span>
            </div>
            <div style={{ color: 'red', textAlign: 'left' }}>
              <ErrorMessage name="password" />
            </div>
            <div className="container-login100-form-btn">
              <button
                className="login100-form-btn"
                type="submit"
                disabled={user.running}>
                {user.running ? 'Đang đăng nhập ...' : 'Đăng nhập'}
              </button>
            </div>
            <div className="text-center p-t-12">
              <Link className="txt2">Quên mật khẩu?</Link>
            </div>
            <div className="text-center p-t-136">
              <Link
                to="#"
                style={{ cursor: 'pointer' }}
                onClick={handleChangePage}
                className="txt2 change_state">
                Đăng ký
                <i
                  className="fa fa-long-arrow-right m-l-5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
