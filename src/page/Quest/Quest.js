import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import * as authAction from '../../store/auth/action';
import Info from './Info';
import Create from './Create';
import ChangeQuestion from './ChangeQuestion';
import { Menu } from '../../components';

class Quest extends Component {
  componentWillMount(){
    if (localStorage.getItem("token")) {
      if (!this.props.user.email) {
        this.props.verify();
        if (this.props.user.token === null) {
          this.setState({
            authenticated: false
          })
        }else{
          this.setState({
            authenticated: true
          })
        }
      }
    } else {
      this.setState({
        authenticated: false
      })
      console.log("tạch");
    }
  }

  componentDidMount(){
    // this.props.getAllGuests();
    // this.props.getAllMeetings();
    window.scrollTo(0, 0);
  }
  render() {
    // try {
    //   if(this.state.authenticated === false){
    //     const { from } = this.props.location.state || { from: { pathname: "/" } };
    //     return <Redirect to={from} />
    //   }
    // } catch (error) {
    //   if(this.state === null){
    //     // window.location.reload();
    //     // const { from } = this.props.location.state || { from: { pathname: "/home" } };
    //     // return <Redirect to={from} />
    //   }
    // }
    return (
      <div className='home'>
        <Menu email={this.props.user.info ? this.props.user.info.email : 'email'}/>
        <div style={{ marginTop: '70px'}}/>
        <Switch>
          <Route path="/quest/info/:id" component={Info} />
          <Route path="/quest/create" component={Create} />
          <Route path="/quest/add" component={ChangeQuestion} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  verify: authAction.verify
}

export default connect(mapStateToProps, mapDispatchToProps)(Quest)
