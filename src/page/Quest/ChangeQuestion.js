import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as questActions from '../../store/quest/action'

class ChangeQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newQuestion: {
        correct_id: 0,
      },
      statusPublic: false,
      toInfo: false,
    }
  }

  onType = event => {
    this.setState({
      submit: false,
      error: '',
      newQuestion: {
        ...this.state.newQuestion,
        [event.target.name]: event.target.value,
      },
    })
    console.log(this.state)
  }

  onUploadImage = async event => {
    if (event.target.files[0]) {
      this.setState({
        img: URL.createObjectURL(event.target.files[0]),
      })
    }
    let reader = new FileReader()
    reader.onloadend = () => {
      this.setState({
        newQuestion: {
          ...this.state.newQuestion,
          img: reader.result,
        },
      })
    }
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0])
    }
  }

  onSubmit = event => {
    event.preventDefault()
    const { answer1, answer2, answer3, answer4 } = this.state.newQuestion
    if (answer1 && answer2 && answer3 && answer4) {
      let ans = [answer1, answer2, answer3, answer4]
      this.setState(
        {
          newQuestion: {
            ...this.state.newQuestion,
            ans,
          },
        },
        () => {
          const { info } = this.props.quest
          const infoUser = this.props.user.info
          const isOwnner =
            info && infoUser ? info._id_author == infoUser._id : false
          if (!isOwnner) {
            alert('Bạn không có quyền thay đổi câu hỏi!')
          } else {
            this.props.addQuestion({ ...this.state.newQuestion, _id: info._id })
            this.setState({
              toInfo: true,
            })
          }
        }
      )
    } else {
      alert('Hãy điền hết các trường')
    }
  }
  componentWillMount() {
    let param = this.props.location.pathname
    console.log(param.slice(param.lastIndexOf('/') + 1, param.length))
    this.props.getQuestInfo(
      param.slice(param.lastIndexOf('/') + 1, param.length)
    )
  }
  render() {
    const { img, toInfo } = this.state
    let { correct_id } = this.state.newQuestion
    let param = this.props.location.pathname
    const { from } = this.props.location.state || {
      from: {
        pathname:
          '/quest/info/' +
          param.slice(param.lastIndexOf('/') + 1, param.length),
      },
    }
    if (toInfo) {
      return <Redirect to={from} />
    }
    return (
      <div style={{ marginTop: '50px' }}>
        {/* <Menu /> */}
        <div className="create-quest">
          <form>
            <div className="container editItem">
              <div className="row" style={{ textAlign: 'left' }}>
                <div className="col-12 col-sm-6 col-md-6 ">
                  <div className="form-group">
                    <b style={{ color: '#c7166d' }}>CÂU HỎI</b>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      name="quiz"
                      aria-describedby="emailHelp"
                      placeholder="Câu hỏi"
                      onChange={this.onType}
                    />
                  </div>
                  <div className="form-group">
                    <b style={{ color: '#c7166d' }}>THỜI GIAN TRẢ LỜI (GIÂY)</b>
                    <input
                      type="number"
                      className="form-control col-6"
                      id="exampleInputPassword1"
                      name="duration"
                      placeholder="0"
                      onChange={this.onType}
                    />
                  </div>
                  <div className="">
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group">
                          <b style={{ color: '#c7166d' }}>
                            {' '}
                            ĐIỂM TRẢ LỜI ĐÚNG{' '}
                          </b>
                          <input
                            type="number"
                            className="form-control"
                            id="exampleInputPassword1"
                            name="correct_point"
                            placeholder="0"
                            style={{ width: '50%' }}
                            onChange={this.onType}
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <b style={{ color: '#c7166d' }}>ĐIỂM TRẢ LỜI SAI</b>
                          <input
                            type="number"
                            className="form-control"
                            id="exampleInputPassword1"
                            name="incorrect_point"
                            placeholder="0"
                            style={{ width: '50%' }}
                            onChange={this.onType}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 ">
                  <div className="upLoadImage">
                    <input
                      type="file"
                      style={{ background: 'none', width: '100%' }}
                      onChange={this.onUploadImage}
                    />
                    <br />
                    <div style={{ marginTop: '10px' }}>
                      <div className="row">
                        <div className="col-1"></div>
                        <div
                          className="col-10 center-div"
                          style={{ height: '200px', background: '#fff' }}>
                          <img
                            style={{
                              objectFit: 'contain',
                              width: '100%',
                              height: '100%',
                            }}
                            src={img ? img : '/images/img_quest_default.png'}
                          />
                        </div>
                        <div className="col-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="col-12  answers" style={{ margin: '2em 0' }}>
              <h3>VUI LÒNG NHẬP ĐÁP ÁN</h3>
            </div>
            <div
              className="answers"
              style={{ padding: '0 2em', marginBottom: '20px' }}>
              <div className="row">
                <div className=" col-12 col-sm-6 col-md-6">
                  <div
                    className="col-12  answer-edit answer-edit-1 center-div"
                    style={{ width: '100%' }}>
                    <div className="row" style={{ width: '100%' }}>
                      <div className="col-2 col-md-1 input-answer">A</div>
                      <div
                        className="col-10 col-md-11 input-answer"
                        style={{ whiteSpace: 'pre-wrap' }}>
                        <input
                          maxLength="20"
                          name="answer1"
                          placeholder="Nhập đáp án(Tối đa 20 kí tự)"
                          style={{
                            background: 'none',
                            color: '#fff',
                            width: '100%',
                          }}
                          onChange={this.onType}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 ">
                  <div
                    className="col-12 answer-edit answer-edit-2 center-div"
                    style={{ width: '100%' }}>
                    <div className="row" style={{ width: '100%' }}>
                      <div className="col-2 col-md-1 input-answer">B</div>
                      <div
                        className="col-10 col-md-11 input-answer"
                        style={{ whiteSpace: 'pre-wrap' }}>
                        <input
                          maxLength="20"
                          name="answer2"
                          placeholder="Nhập đáp án(Tối đa 20 kí tự)"
                          style={{
                            background: 'none',
                            color: '#fff',
                            width: '100%',
                          }}
                          onChange={this.onType}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 ">
                  <div
                    className="col-12 answer-edit answer-edit-3 center-div"
                    style={{ width: '100%' }}>
                    <div className="row" style={{ width: '100%' }}>
                      <div className="col-2 col-md-1 input-answer">C</div>
                      <div
                        className="col-10 col-md-11 input-answer"
                        style={{ whiteSpace: 'pre-wrap' }}>
                        <input
                          maxLength="20"
                          name="answer3"
                          placeholder="Nhập đáp án(Tối đa 20 kí tự)"
                          style={{
                            background: 'none',
                            color: '#fff',
                            width: '100%',
                          }}
                          onChange={this.onType}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 ">
                  <div
                    className="col-12 answer-edit answer-edit-4 center-div"
                    style={{ width: '100%' }}>
                    <div className="row" style={{ width: '100%' }}>
                      <div className="col-2 col-md-1 input-answer">D</div>
                      <div
                        className="col-10 col-md-11 input-answer"
                        style={{ whiteSpace: 'pre-wrap' }}>
                        <input
                          name="answer4"
                          maxLength="20"
                          placeholder="Nhập đáp án(Tối đa 20 kí tự)"
                          style={{
                            background: 'none',
                            color: '#fff',
                            width: '100%',
                          }}
                          onChange={this.onType}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 style={{ marginBottom: '15px' }}>Chọn đáp án đúng</h3>
            <div style={{ marginBottom: '20px' }}>
              <input
                type="radio"
                name="correct-answer"
                defaultValue={0}
                id="radio-one"
                className="form-radio form-radio-1"
                checked={correct_id == 0}
                onClick={e =>
                  this.setState({
                    newQuestion: {
                      ...this.state.newQuestion,
                      correct_id: e.target.value,
                    },
                  })
                }
              />
              <label htmlFor="radio-one" style={{ marginRight: '10px' }}>
                A
              </label>
              <input
                type="radio"
                name="correct-answer"
                defaultValue={1}
                id="radio-one"
                className="form-radio form-radio-2"
                checked={correct_id == 1}
                onClick={e =>
                  this.setState({
                    newQuestion: {
                      ...this.state.newQuestion,
                      correct_id: e.target.value,
                    },
                  })
                }
              />
              <label htmlFor="radio-one" style={{ marginRight: '10px' }}>
                B
              </label>
              <input
                type="radio"
                name="correct-answer"
                defaultValue={2}
                id="radio-one"
                className="form-radio form-radio-3"
                checked={correct_id == 2}
                onClick={e =>
                  this.setState({
                    newQuestion: {
                      ...this.state.newQuestion,
                      correct_id: e.target.value,
                    },
                  })
                }
              />
              <label htmlFor="radio-one" style={{ marginRight: '10px' }}>
                C
              </label>
              <input
                type="radio"
                name="correct-answer"
                defaultValue={3}
                id="radio-one"
                className="form-radio form-radio-4"
                checked={correct_id == 3}
                onClick={e =>
                  this.setState({
                    newQuestion: {
                      ...this.state.newQuestion,
                      correct_id: e.target.value,
                    },
                  })
                }
              />
              <label htmlFor="radio-one" style={{ marginRight: '10px' }}>
                D
              </label>
            </div>
            <div className="row">
              <div className="col-12 col-sm-3 col-md-3"></div>
              <div className="col-12 col-sm-6 col-md-6">
                <input
                  type="submit"
                  value="Tạo câu hỏi"
                  className="btn btn-info btn-block"
                  onClick={this.onSubmit}
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <div className="col-12 col-sm-3 col-md-3"></div>
            </div>
          </form>
          <div className="col-12" style={{ height: '50px' }}></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = {
  addQuestion: questActions.addQuestion,
  getQuestInfo: questActions.getInfoQuest,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeQuestion)
