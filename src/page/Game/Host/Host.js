import React, { Component } from 'react'
import Sound from 'react-sound'
import { Switch, Route } from 'react-router-dom'
import './styles.css'
import Entry from './Entry'
import Ready from './Ready'
import Question from './Question'
import Result from './Result'
import ScoreBoard from './ScoreBoard'
import Helmet from 'react-helmet'

class Host extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playSound: Sound.status.STOPED,
    }
  }
  componentDidMount() {}

  render() {
    return (
      <div className="a">
        <Helmet>
        <link rel="stylesheet" type="text/css" href="/comon/css/util.css"/>
        <link rel="stylesheet" type="text/css" href="/comon/css/main.css"/>
        </Helmet>
        <Sound
          url={'/music/music.ogg'}
          loop={true}
          playStatus={this.state.playSound}
          autoLoad={true}
          playFromPosition={0 /* in milliseconds */}
          onLoad={() => {
            this.setState({ playSound: Sound.status.PLAYING })
          }}
        />
        <Switch>
          <Route exact path="/host" component={Entry} />
          <Route path="/host/ready" component={Ready} />
          <Route path="/host/question" component={Question} />
          <Route path="/host/result" component={Result} />
          <Route path="/host/ranking" component={ScoreBoard} />
        </Switch>
      </div>
    )
  }
}

export default Host
