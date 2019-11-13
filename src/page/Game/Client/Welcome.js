import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'

class Welcome extends Component {
  render() {
    const { game } = this.props;
    if (game) {
      if (game.newQuestion) {
        let { from } = this.props.location.state || { from: { pathname: "/client/play" } };
        return <Redirect to={from} />
      }
    }
    return (
      <div className='welcome center-div' style={{ justifyContent: 'center' }}>
        <div >
          <h3 className='welcome-text'>BẠN ĐÃ THAM GIA VÀO CUỘC THI</h3>
          <h3 className='welcome-text'>HÃY ĐỢI NGƯỜI CHƠI KHÁC ...</h3>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
