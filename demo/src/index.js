import React, { Component } from 'react'
import {render} from 'react-dom'

import PlayButton from '../../src'

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };

    this.togglePlaying = this.togglePlaying.bind(this);
  }

  togglePlaying() {
    this.setState({ playing: !this.state.playing })
  }

  render() {
    return <div>
      <h1>react-play-button Demo</h1>
      <PlayButton
        url="https://p.scdn.co/mp3-preview/48e52b22229808784102425b7735be8458d687dc"
        active={this.state.playing}
        play={this.togglePlaying}
        stop={this.togglePlaying}
      />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
