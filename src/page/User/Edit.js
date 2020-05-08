import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage, useField } from 'formik'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { initFormikEdit } from './util'
import { infoSchema } from '../../common/validation'
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
      if (user.info) {
        alert('Bạn đã chỉnh sửa thông tin thành công')
        history.goBack()
      } else {
        alert('Đã xảy ra lỗi vui lòng thử lại')
        setIsSubmit(false)
      }
    }
  }, [user.info])

  const handleSubmit = (values) => {
    dispatch(
      User.update(
        imgPath,
        values.name,
        values.phone,
        values.gender ? values.gender : false,
        values.organization
      )
    )
    dispatch(User.changeStatusRunning(true))
    setIsSubmit(true)
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
                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog'
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
              </ul>
              <div className="row">
                <div className="col-md-12">
                  <Formik
                    initialValues={initFormikEdit(user)}
                    enableReinitialize
                    validationSchema={infoSchema}
                    onSubmit={handleSubmit}>
                    {({
                      values,
                      errors,
                      touched,
                      handleSubmit,
                      handleChange,
                      isSubmitting,
                    }) => (
                      <Form
                        className="tab-content profile-tab"
                        id="myTabContent"
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
                              value={values.email}
                            />
                            <ErrorMessage
                              name="email"
                              className="invalid-feedback"
                              component="div"
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <i className="fas fa-lock icon" />
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
                          disabled={isSubmitting}>
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
      </form>
    </div>
  )
}

export default React.memo(UpdateUser)
// class Edit extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       img_path: '',
//     }
//   }
// onUploadImage = async (event) => {
//   if (event.target.files[0]) {
//     this.setState({
//       img_path: URL.createObjectURL(event.target.files[0]),
//     })
//   }
//   let reader = new FileReader()
//   reader.onloadend = () => {
//     this.setState({
//       newQuest: {
//         ...this.state.newQuest,
//         img_path: reader.result,
//       },
//     })
//   }
//   if (event.target.files[0]) {
//     reader.readAsDataURL(event.target.files[0])
//   }
// }

// handleSubmit = (values) => {
//   this.props.update(
//     this.state.img_path,
//     9898989,
//     values.name,
//     values.phone,
//     values.gender,
//     values.organization
//   )
// }

//   renderEdit() {
//     return (
// <div className="container emp-profile">
//   <form method="post">
//     <div className="row">
//       <div className="col-md-4">
//         <div className="profile-img">
//           <img
//             src={
//               this.props.user.info && this.props.user.info.avatar_path
//                 ? this.props.user.info.avatar_path
//                 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog'
//             }
//             alt="avatar"
//           />
//           <div className="file btn btn-lg btn-primary">
//             Change Photo
//             <input
//               type="file"
//               style={{ background: 'none', width: '100%' }}
//               onChange={this.onUploadImage}
//               name="file"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="col-md-8">
//         <div className="profile-head profile-header">
//           <ul className="nav nav-tabs" id="myTab" role="tablist">
//             <li className="nav-item">
//               <a
//                 className="nav-link active"
//                 id="home-tab"
//                 data-toggle="tab"
//                 href="#home"
//                 role="tab"
//                 aria-controls="home"
//                 aria-selected="true">
//                 Thông tin tài khoản
//               </a>
//             </li>
//           </ul>
//           <div className="row">
//             <div className="col-md-12">
//               <Formik
//                 initialValues={initFormikEdit(this.props.user)}
//                 enableReinitialize
//                 validationSchema={infoSchema}
//                 onSubmit={this.handleSubmit}>
//                 {({
//                   values,
//                   errors,
//                   touched,
//                   handleSubmit,
//                   handleChange,
//                   isSubmitting,
//                 }) => (
//                   <Form
//                     className="tab-content profile-tab"
//                     id="myTabContent"
//                     onSubmit={handleSubmit}>
//                     <div className="form-row">
//                       <div className="form-group col-md-6">
//                         <i className="fas fa-envelope icon" />
//                         <label htmlFor="inputEmail4">Email</label>
//                         <Field
//                           type="email"
//                           className={
//                             touched.email && errors.email
//                               ? 'is-invalid form-control'
//                               : 'form-control'
//                           }
//                           name="email"
//                           onChange={handleChange}
//                           value={values.email}
//                         />
//                         <ErrorMessage
//                           name="email"
//                           className="invalid-feedback"
//                           component="div"
//                         />
//                       </div>

//                       <div className="form-group col-md-6">
//                         <i className="fas fa-lock icon" />
//                         <label>Password</label>
//                         <Field
//                           as="input"
//                           type="password"
//                           name="password"
//                           className={
//                             touched.password && errors.password
//                               ? 'is-invalid form-control'
//                               : 'form-control'
//                           }
//                           placeholder="Password"
//                           onChange={handleChange}
//                           value={values.password}
//                         />
//                         <ErrorMessage
//                           name="password"
//                           className="invalid-feedback"
//                           component="div"
//                         />
//                       </div>
//                     </div>
//                     <div className="form-group">
//                       <i className="fas fa-user icon" />
//                       <label>Tên</label>
//                       <Field
//                         name="name"
//                         className={
//                           touched.name && errors.name
//                             ? 'is-invalid form-control'
//                             : 'form-control'
//                         }
//                         placeholder={
//                           this.props.user.info
//                             ? this.props.user.info.name
//                             : 'Tên'
//                         }
//                         value={values.name}
//                         onChange={handleChange}
//                       />
//                       <ErrorMessage
//                         name="name"
//                         className="invalid-feedback"
//                         component="div"
//                       />
//                     </div>
//                     <div className="form-group">
//                       <i className="fas fa-venus-mars icon" />
//                       <label>Gender</label>
//                       <MyRadio
//                         name="gender"
//                         value={true}
//                         onClick={() => this.setState({ gender: true })}
//                         onChange={handleChange}
//                         checked={this.state.gender}
//                         label="Nữ"
//                         touched={touched.gender}
//                         message={errors.gender}
//                       />
//                       <MyRadio
//                         name="gender"
//                         value={false}
//                         onClick={() => this.setState({ gender: false })}
//                         checked={!this.state.gender}
//                         onChange={handleChange}
//                         label="Nam"
//                         message={errors.gender}
//                         touched={touched.gender}
//                       />

//                       <ErrorMessage
//                         name="gender"
//                         className="invalid-feedback"
//                         component="div"
//                       />
//                     </div>

//                     <div className="form-group">
//                       <i className="fas fa-building icon" />
//                       <label>Organization</label>
//                       <Field
//                         type="text"
//                         className={
//                           touched.organization && errors.organization
//                             ? 'is-invalid form-control'
//                             : 'form-control'
//                         }
//                         name="organization"
//                         placeholder={
//                           this.props.user.info
//                             ? this.props.user.info.organization
//                               ? this.props.user.info.organization
//                               : 'Đơn vị công tác'
//                             : null
//                         }
//                         onChange={handleChange}
//                         value={values.organization}
//                       />
//                       <ErrorMessage
//                         name="organization"
//                         className="invalid-feedback"
//                         component="div"
//                       />
//                     </div>
//                     <div className="form-group">
//                       <i className="fas fa-phone icon" />
//                       <label>Phone</label>
//                       <Field
//                         type="text"
//                         className={
//                           touched.phone && errors.phone
//                             ? 'is-invalid form-control'
//                             : 'form-control'
//                         }
//                         name="phone"
//                         maxLength="10"
//                         onChange={handleChange}
//                         value={values.phone}
//                         placeholder="Số điện thoại"
//                       />
//                       <ErrorMessage
//                         name="phone"
//                         className="invalid-feedback"
//                         component="div"
//                       />
//                     </div>
//                     <button
//                       type="submit"
//                       className="col-12 btn btn-block btn-success"
//                       style={{ height: '40px' }}
//                       disabled={isSubmitting}>
//                       <i className="fas fa-edit" />
//                       {isSubmitting ? 'Đang Load...' : 'Chỉnh sửa'}
//                     </button>
//                   </Form>
//                 )}
//               </Formik>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </form>
// </div>
//     )
//   }
//   render() {
//     return <div className="row">{this.renderEdit()}</div>
//   }
// }

// const mapStateToProps = (state) => ({
//   ...state,
// })

// const mapDispatchToProps = {
//   update: user.update,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Edit)
