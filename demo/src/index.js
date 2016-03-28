import React, { Component } from 'react'
import {render} from 'react-dom'

import PlayButton from '../../src'
import './reset.css';
import styles from './style.css';

const reactLogo = require("./img/react-logo.png");

const Demo = () => (
  <div className={styles.demo}>
    <Header />
    <Content />
    <Footer />
  </div>
)

const Header = () => (
  <header className={styles.header}>
    <img src={reactLogo} className={styles.reactLogo} />
    <h1 className={styles.mainHeading}>
      PlayButton
    </h1>
    <div className={styles.headerBorder} />
  </header>
)

const Footer = () => (
  <footer className={styles.footer}>
    Copyright 2016
  </footer>
)


class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active:                 false,
      size:                   200,
      progressCircleWidth:    12,
      progressCircleColor:    '#78A931',
      idleBackgroundColor:    '#191b1d',
      activeBackgroundColor:  '#191b1d',
      stopIconColor:          '#FFFFFF',
      playIconColor:          '#FFFFFF',
      iconAnimationLength:    450,
      fadeInLength:           0,
      fadeOutLength:          0
    };

    this.togglePlaying = this.togglePlaying.bind(this);
  }

  togglePlaying() {
    this.setState({ active: !this.state.active })
  }


  render() {
    return (
      <section className={styles.content}>
        <div className={styles.playButtonContainer}>
          <PlayButton
            url="https://p.scdn.co/mp3-preview/48e52b22229808784102425b7735be8458d687dc"
            play={this.togglePlaying}
            stop={this.togglePlaying}
            {...this.state}
          />
        </div>
        <div className={styles.playButtonControls}>
          Hiya
        </div>
      </section>
    );
  }
}



render(<Demo/>, document.querySelector('body'))
