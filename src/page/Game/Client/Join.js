import React, { Component } from 'react'
import '../style.css';
import Sound from 'react-sound';
import {
  Link,
  Redirect
} from "react-router-dom";
import { connect } from 'react-redux'
import { joinGame } from '../../../store/socket/socket';

class Join extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playSound: Sound.status.STOPED,
      toWelcome: false,
      err:false
    }
  }

  onType = event => {
    this.setState({
      submit: false,
      error: '',
      [event.target.name]: event.target.value
    })
  }

  onJoin = event => {
    event.preventDefault();
    const { code, username } = this.state;
    if (code && username) {
      this.setState({
        submit: true,
        error: '',
      });
      joinGame(code, username);
    } else {
      this.setState({
        err:true
      })
    }
  }

  render() {
    const { game } = this.props;
    if (game) {
      if (game.username) {
        let { from } = this.props.location.state || { from: { pathname: "/client/welcome" } };
        return <Redirect to={from} />
      }
    }
    return (
      <div className="c" style={{ background: '#black', width: '100%', height: '100%' }}>
        <Sound
          url={'/music/music.ogg'}
          loop={true}
          playStatus={this.state.playSound}
          autoLoad={true}
          playFromPosition={0/* in milliseconds */}
          onLoad={() => { this.setState({ playSound: Sound.status.PLAYING }) }}
        />
        <div className=' text-right'>
          <Link className='gtHome' to='/auth'>
            <div className='btn-login center-div' >
              Đăng nhập
            </div>
          </Link>
        </div>
        <div id="content">
          <div id="logo">
            <img src="./images/logo.png" style={{ width: '170px', height: '150px' }} alt="logo" />
          </div>
          <div>
            <form method="post" acceptCharset="utf-8">
              <input
                type="text"
                className="text-box"
                name="code"
                placeholder="PIN"
                onChange={this.onType}
              />
              <br />
              <input
                type="text"
                className="text-box"
                name="username"
                placeholder="Username"
                onChange={this.onType}
              />
              <br />
              <button type="submit" className="bt orange" name="submit" style={{ cursor: 'pointer' }} onClick={this.onJoin} >Submit</button>
            </form>
            {this.state.err? <p style={{color:"#a33e00"}}>* Vui lòng nhập đầy đủ thông tin</p>:null}
           
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  joinGame: joinGame
}

export default connect(mapStateToProps, mapDispatchToProps)(Join)