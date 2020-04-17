/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as questActions from '../../store/quest/action'
import { Formik, Form, Field, ErrorMessage, useField } from 'formik'
import { questSchema } from '../../common/error'

class Create extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: '',
      img_path: null,
      newQuest: {
        img_path: null,
        description: '',
        is_public: false,
        title: '',
      },
    }
    this.props.resetResult()
    this.props.changeStatusRunning(false)
  }

  onSubmit = async (e) => {
    this.props.changeStatusRunning(true)
    this.props.createQuest(this.state.newQuest)
  }
  onType = (event) => {
    this.setState({
      submit: false,
      error: '',
      newQuest: {
        ...this.state.newQuest,
        [event.target.name]: event.target.value,
      },
    })
  }

  onUploadImage = async (event) => {
    if (event.target.files[0]) {
      this.setState({
        img_path: URL.createObjectURL(event.target.files[0]),
      })
    }
    let reader = new FileReader()
    reader.onloadend = () => {
      this.setState({
        newQuest: {
          ...this.state.newQuest,
          img_path: reader.result,
        },
      })
    }
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0])
    }
  }

  togglePublic = () => {
    this.setState({
      newQuest: {
        ...this.state.newQuest,
        is_public: !this.state.newQuest.is_public,
      },
    })
  }

  renderSpinner = () => (
    <div className="linear-activity">
      <div className="indeterminate" />
    </div>
  )

  UNSAFE_componentWillMount() {
    this.props.resetResult()
  }
  render() {
    let { img_path } = this.state
    let { is_public } = this.state.newQuest
    if (this.props.quest.result) {
      this.props.resetResult()
      return <Redirect to={'/user/quest/'} />
    }

    return (
      <div className="container_createQuiz">
        <div className="contentCreateQuiz text-left">
          <div className="container" style={{ height: '100%' }}>
            <Formik
              initialValues={{
                description: '',
                title: '',
              }}
              enableReinitialize
              validationSchema={questSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                if (values.title && values.description) {
                  console.log(values)
                  this.onSubmit()
                }
                setSubmitting(true)
                setTimeout(() => {
                  resetForm()
                  setSubmitting(false)
                }, 1000)
              }}>
              {({
                values,
                errors,
                touched,
                handleSubmit,
                handleChange,
                isSubmitting,
              }) => (
                <Form
                  method="post"
                  style={{ height: '100%', width: '100%' }}
                  onSubmit={handleSubmit}>
                  <div className="col-12">
                    <div className="row" style={{ height: '100%' }}>
                      <div
                        className="col-12 col-sm-12 col-md-12"
                        style={{ height: '100%' }}>
                        <div className="form-group ">
                          <label>Tên thử thách</label>
                          <div
                            className={
                              touched.title && errors.title
                                ? 'col center-div is-invalid form-control'
                                : 'col center-div'
                            }
                            style={{
                              width: '100%',
                              height: '50px',
                              border: '3px solid #e2e2e2',
                              borderRadius: '10px',
                              boxShadow: '1px 2px #888888',
                            }}>
                            <Field
                              maxLength="50"
                              placeholder="giới hạn 50 ký tự"
                              style={{ marginLeft: '10px', width: '100%' }}
                              name="title"
                              onChange={handleChange}
                              value={values.title}
                            />
                          </div>
                          <ErrorMessage
                            name="title"
                            className="invalid-feedback p-l-20"
                            component="div"
                          />
                        </div>
                      </div>
                      <div
                        className="col-12 col-sm-12 col-md-12"
                        style={{ height: '100%', flexDirection: 'row' }}>
                        <div className="row ">
                          <div className="col-3 row justify-content-center align-items-center">
                            <div className="form-group">
                              <label>
                                {is_public ? 'Công khai' : 'Bí mật'}
                              </label>
                              <div className="center-div">
                                <label className="switch">
                                  <input
                                    type="checkbox"
                                    value={this.state.statusPublic}
                                    onClick={this.togglePublic}
                                    name="is_public"
                                  />
                                  <span className="slider round" />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="upLoadImage">
                              <br />
                              <div style={{ marginTop: '10px' }}>
                                <div className="row">
                                  <div className="col-1"></div>
                                  <div
                                    className="col-10 center-div"
                                    style={{
                                      height: '250px',
                                      background: '#fff',
                                    }}>
                                    <img
                                      style={{
                                        objectFit: 'contain',
                                        width: '100%',
                                        height: '100%',
                                      }}
                                      src={
                                        img_path
                                          ? img_path
                                          : '/images/img_quest_default.png'
                                      }
                                      alt=""
                                    />
                                  </div>
                                  <div className="col-1"></div>
                                </div>
                              </div>
                              <div className="text-center">
                                <input
                                  type="file"
                                  id="files"
                                  onChange={this.onUploadImage}
                                />
                                <label
                                  for="files"
                                  className="label-input file file-upload-btn">
                                  Choose a Photo
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-3"></div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12">
                        <div className="form-group">
                          <label>Mô tả thử thách</label>
                          <div
                            className={
                              touched.description && errors.description
                                ? 'col center-div is-invalid form-control'
                                : 'col center-div'
                            }
                            style={{
                              width: '100%',
                              height: '5em',
                              border: '3px solid #e2e2e2',
                              borderRadius: '10px',
                              boxShadow: '1px 2px #888888',
                            }}>
                            <Field
                              type="text"
                              maxLength="100"
                              placeholder="giới hạn 100 ký tự"
                              style={{ marginLeft: '10px', width: '100%' }}
                              name="description"
                              onChange={handleChange}
                              value={values.description}
                            />
                          </div>
                          <ErrorMessage
                            name="description"
                            className="invalid-feedback p-l-20"
                            component="div"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12" style={{ width: '100%', height: '' }}>
                    <div className="col-12 text-center">
                      {this.props.quest.running ? (
                        this.renderSpinner()
                      ) : (
                        <input
                          type="submit"
                          style={{ cursor: 'pointer', width: '100%' }}
                          className="btn btn-success col-6 shadow p-3 mb-5 rounded"
                          disabled={isSubmitting}
                        />
                      )}
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div style={{ marginBottom: '30px' }} />
      </div>
    )
  }
}
const styles = {}
const mapStateToProps = (state) => ({
  ...state,
})

const mapDispatchToProps = {
  createQuest: questActions.createQuest,
  changeStatusRunning: questActions.changeStatusRunning,
  resetResult: questActions.resetResult,
}

export default connect(mapStateToProps, mapDispatchToProps)(Create)
