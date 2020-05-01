import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { createQuestionSchema } from '../../common/validation'
export default React.memo(function () {
  const onSubmit = (value) => {
    console.log(value)
  }
  const [image, setImage] = useState()
  const onUploadImage = (event) => {
    let reader = new FileReader()
    reader.onloadend = () => {
      setImage(reader.result)
    }
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0])
    }
  }
  const handleSubmitForm = (formik) => {}
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
          correctId: '1',
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
                  <button className="create-question" type="submit">
                    Tạo câu hỏi
                  </button>
                  <button
                    className="create-question"
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
                      <div className="row" style={{ margin: 0 }}>
                        <div className="col-12 col-md-6">
                          <div className="col-12 press-ans">
                            <div className="ans-bg ans-bg-a">
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
                          <div className="col-12 press-ans ">
                            <div className="ans-bg ans-bg-b">
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
                          <div className="col-12 press-ans">
                            <div className="ans-bg ans-bg-c">
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
                          <div className="col-12 press-ans">
                            <div className="ans-bg ans-bg-d">
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
                      {/* <div className="col-12" style={{ padding: 0 }}>
                        <div
                          onClick={() => handleSubmitForm(formik)}
                          className="update-btn"
                          disabled={formik.isSubmitting}>
                          Tạo thử thách
                        </div>
                      </div> */}
                      <div className="col-12 correct-id">
                        <p style={{ marginRight: '10px' }}>Đáp án đúng</p>
                        <Field
                          as="select"
                          name="correctId"
                          className="correctid">
                          <option value="1">A</option>
                          <option value="2">B</option>
                          <option value="3">C</option>
                          <option value="4">D</option>
                        </Field>
                      </div>
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
// /* eslint-disable react/prop-types */
// import React, { Component } from 'react'
// import './style.css'
// import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom'
// import * as questActions from '../../store/quest/action'

// class CreateQuestion extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       newQuestion: {
//         correct_id: 0,
//       },
//       statusPublic: false,
//       toInfo: false,
//     }
//   }

//   onType = event => {
//     this.setState({
//       submit: false,
//       error: '',
//       newQuestion: {
//         ...this.state.newQuestion,
//         [event.target.name]: event.target.value,
//       },
//     })
//   }

//   onUploadImage = async event => {
//     if (event.target.files[0]) {
//       this.setState({
//         img_path: URL.createObjectURL(event.target.files[0]),
//       })
//     }
//     let reader = new FileReader()
//     reader.onloadend = () => {
//       this.setState({
//         newQuestion: {
//           ...this.state.newQuestion,
//           img_path: reader.result,
//         },
//       })
//     }
//     if (event.target.files[0]) {
//       reader.readAsDataURL(event.target.files[0])
//     }
//   }

//   onSubmit = event => {
//     event.preventDefault()
//     const { answer1, answer2, answer3, answer4 } = this.state.newQuestion
//     if (answer1 && answer2 && answer3 && answer4) {
//       let ans = [answer1, answer2, answer3, answer4]
//       this.setState(
//         {
//           newQuestion: {
//             ...this.state.newQuestion,
//             ans,
//           },
//         },
//         () => {
//           const { info } = this.props.quest
//           const infoUser = this.props.user.info
//           const isOwnner =
//             info && infoUser ? info._id_author===infoUser._id : false
//           if (!isOwnner) {
//             alert('Bạn không có quyền thay đổi câu hỏi!')
//           } else {
//             this.props.addQuestion({ ...this.state.newQuestion, _id: info._id })
//             this.setState({
//               toInfo: true,
//             })
//           }
//         }
//       )
//     } else {
//       alert('Hãy điền hết các trường')
//     }
//   }
//   UNSAFE_componentWillMount() {
//     let param = this.props.location.pathname
//     this.props.getQuestInfo(
//       param.slice(param.lastIndexOf('/') + 1, param.length)
//     )
//   }
//   render() {
//     const { img_path, toInfo } = this.state
//     let { correct_id } = this.state.newQuestion
//     let param = this.props.location.pathname
//     const { from } = this.props.location.state || {
//       from: {
//         pathname:
//           '/quest/info/' +
//           param.slice(param.lastIndexOf('/') + 1, param.length),
//       },
//     }
//     if (toInfo) {
//       return <Redirect to={from} />
//     }
//     return (
//       <div style={{ marginTop: '50px' }}>
//         {/* <Menu /> */}
//         <div className="create-quest">
//           <form>
//             <div className="container editItem">
//               <div className="row" style={{ textAlign: 'left' }}>
//                 <div className="col-12 col-sm-6 col-md-6 ">
//                   <div className="form-group">
//                     <b style={{ color: '#c7166d' }}>CÂU HỎI</b>
//                     <input
//                       type="email"
//                       className="form-control"
//                       id="exampleInputEmail1"
//                       name="quiz"
//                       aria-describedby="emailHelp"
//                       placeholder="Câu hỏi"
//                       onChange={this.onType}
//                       style={{height:'4em'}}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <b style={{ color: '#c7166d' }}>THỜI GIAN TRẢ LỜI (GIÂY)</b>
//                     <input
//                       type="number"
//                       className="form-control col-6"
//                       id="exampleInputPassword1"
//                       name="duration"
//                       placeholder="0"
//                       onChange={this.onType}
//                     />
//                   </div>
//                   <div className="">
//                     <div className="row">
//                       <div className="col-6">
//                         <div className="form-group">
//                           <b style={{ color: '#c7166d' }}>ĐIỂM TRẢ LỜI ĐÚNG</b>
//                           <input
//                             type="number"
//                             className="form-control"
//                             id="exampleInputPassword1"
//                             name="correct_point"
//                             placeholder="0"
//                             style={{ width: '50%' }}
//                             onChange={this.onType}
//                           />
//                         </div>
//                       </div>
//                       <div className="col-6">
//                         <div className="form-group">
//                           <b style={{ color: '#c7166d' }}>ĐIỂM TRẢ LỜI SAI</b>
//                           <input
//                             type="number"
//                             className="form-control"
//                             id="exampleInputPassword1"
//                             name="incorrect_point"
//                             placeholder="0"
//                             style={{ width: '50%' }}
//                             onChange={this.onType}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-12 col-sm-6 col-md-6 ">
//                   <div className="upLoadImage">
//                     <input
//                       type="file"
//                       style={{ background: 'none', width: '100%' }}
//                       onChange={this.onUploadImage}
//                     />
//                     <br />
//                     <div style={{ marginTop: '10px' }}>
//                       <div className="row">
//                         <div className="col-1"></div>
//                         <div
//                           className="col-10 center-div"
//                           style={{ height: '200px', background: '#fff' }}>
//                           <img
//                             style={{
//                               objectFit: 'contain',
//                               width: '100%',
//                               height: '100%',
//                             }}
//                             alt="img_question"
//                             src={img_path ? img_path : '/images/img_quest_default.png'}
//                           />
//                         </div>
//                         <div className="col-1"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <br />
//             <div className="col-12  answers" style={{ margin: '2em 0' }}>
//               <h3>VUI LÒNG NHẬP ĐÁP ÁN</h3>
//             </div>
//             <div
//               className="answers"
//               style={{ padding: '0 2em', marginBottom: '20px' }}>
//               <div className="row">
//                 <div className="col-12 col-sm-6 col-md-6">
//                   <div
//                     className="col-12  answer-edit answer-edit-1 center-div"
//                     style={{ width: '100%' }}>
//                     <div className="row" style={{ width: '100%' }}>
//                       <div className="col-2 col-md-1 input-answer">A</div>
//                       <div
//                         className="col-10 col-md-11 input-answer"
//                         style={{ whiteSpace: 'pre-wrap' }}>
//                         <input
//                           maxLength="20"
//                           name="answer1"
//                           placeholder="Nhập đáp án(Tối đa 20 kí tự)"
//                           style={{
//                             background: 'none',
//                             color: '#fff',
//                             width: '100%',
//                           }}
//                           onChange={this.onType}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-12 col-sm-6 col-md-6 ">
//                   <div
//                     className="col-12 answer-edit answer-edit-2 center-div"
//                     style={{ width: '100%' }}>
//                     <div className="row" style={{ width: '100%' }}>
//                       <div className="col-2 col-md-1 input-answer">B</div>
//                       <div
//                         className="col-10 col-md-11 input-answer"
//                         style={{ whiteSpace: 'pre-wrap' }}>
//                         <input
//                           maxLength="20"
//                           name="answer2"
//                           placeholder="Nhập đáp án(Tối đa 20 kí tự)"
//                           style={{
//                             background: 'none',
//                             color: '#fff',
//                             width: '100%',
//                           }}
//                           onChange={this.onType}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-12 col-sm-6 col-md-6 ">
//                   <div
//                     className="col-12 answer-edit answer-edit-3 center-div"
//                     style={{ width: '100%' }}>
//                     <div className="row" style={{ width: '100%' }}>
//                       <div className="col-2 col-md-1 input-answer">C</div>
//                       <div
//                         className="col-10 col-md-11 input-answer"
//                         style={{ whiteSpace: 'pre-wrap' }}>
//                         <input
//                           maxLength="20"
//                           name="answer3"
//                           placeholder="Nhập đáp án(Tối đa 20 kí tự)"
//                           style={{
//                             background: 'none',
//                             color: '#fff',
//                             width: '100%',
//                           }}
//                           onChange={this.onType}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-12 col-sm-6 col-md-6 ">
//                   <div
//                     className="col-12 answer-edit answer-edit-4 center-div"
//                     style={{ width: '100%' }}>
//                     <div className="row" style={{ width: '100%' }}>
//                       <div className="col-2 col-md-1 input-answer">D</div>
//                       <div
//                         className="col-10 col-md-11 input-answer"
//                         style={{ whiteSpace: 'pre-wrap' }}>
//                         <input
//                           name="answer4"
//                           maxLength="20"
//                           placeholder="Nhập đáp án(Tối đa 20 kí tự)"
//                           style={{
//                             background: 'none',
//                             color: '#fff',
//                             width: '100%',
//                           }}
//                           onChange={this.onType}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <h3 style={{ marginBottom: '15px' }}>Chọn đáp án đúng</h3>
//             <div style={{ marginBottom: '20px' }}>
// <input
//   type="radio"
//   name="correct-answer"
//   defaultValue={0}
//   id="radio-one"
//   className="form-radio form-radio-1"
//   checked={correct_id===0}
//   onClick={e =>
//     this.setState({
//       newQuestion: {
//         ...this.state.newQuestion,
//         correct_id: e.target.value,
//       },
//     })
//   }
// />
// <label htmlFor="radio-one" style={{ marginRight: '10px' }}>
//   A
// </label>
//               <input
//                 type="radio"
//                 name="correct-answer"
//                 defaultValue={1}
//                 id="radio-two"
//                 className="form-radio form-radio-2"
//                 checked={correct_id===1}
//                 onClick={e =>
//                   this.setState({
//                     newQuestion: {
//                       ...this.state.newQuestion,
//                       correct_id: e.target.value,
//                     },
//                   })
//                 }
//               />
//               <label htmlFor="radio-two" style={{ marginRight: '10px' }}>
//                 B
//               </label>
//               <input
//                 type="radio"
//                 name="correct-answer"
//                 defaultValue={2}
//                 id="radio-three"
//                 className="form-radio form-radio-3"
//                 checked={correct_id===2}
//                 onClick={e =>
//                   this.setState({
//                     newQuestion: {
//                       ...this.state.newQuestion,
//                       correct_id: e.target.value,
//                     },
//                   })
//                 }
//               />
//               <label htmlFor="radio-three" style={{ marginRight: '10px' }}>
//                 C
//               </label>
//               <input
//                 type="radio"
//                 name="correct-answer"
//                 defaultValue={3}
//                 id="radio-four"
//                 className="form-radio form-radio-4"
//                 checked={correct_id===3}
//                 onClick={e =>
//                   this.setState({
//                     newQuestion: {
//                       ...this.state.newQuestion,
//                       correct_id: e.target.value,
//                     },
//                   })
//                 }
//               />
//               <label htmlFor="radio-four" style={{ marginRight: '10px' }}>
//                 D
//               </label>
//             </div>
//             <div className="row">
//               <div className="col-12 col-sm-3 col-md-3"></div>
//               <div className="col-12 col-sm-6 col-md-6">
//                 <input
//                   type="submit"
//                   value="Tạo câu hỏi"
//                   className="btn btn-info btn-block"
//                   onClick={this.onSubmit}
//                   style={{ cursor: 'pointer' }}
//                 />
//               </div>
//               <div className="col-12 col-sm-3 col-md-3"></div>
//             </div>
//           </form>
//           <div className="col-12" style={{ height: '50px' }}></div>
//         </div>
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => ({
//   ...state,
// })

// const mapDispatchToProps = {
//   addQuestion: questActions.addQuestion,
//   getQuestInfo: questActions.getInfoQuest,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion)
