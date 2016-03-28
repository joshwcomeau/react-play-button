import React, { Component } from 'react'
import {render} from 'react-dom'

import PlayButton from '../../src'
import styles from './style.css';


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
    return (
      <div>
        <Header />
        <Content />
        <PlayButton
          url="https://p.scdn.co/mp3-preview/48e52b22229808784102425b7735be8458d687dc"
          active={this.state.playing}
          play={this.togglePlaying}
          stop={this.togglePlaying}
        />
      </div>
    );
  }
}

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.mainHeading}>React PlayButton</h1>
    <div className={styles.headerBorder} />
  </header>
)

const Content = () => (
  <div className={styles.content} />
)

render(<Demo/>, document.querySelector('#demo'))
