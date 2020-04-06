# react-play-button

A React component that gives you a "Play / Stop" button.

### Component props

```js
const propTypes = {
  url: PropTypes.string.isRequired,
  // Whether or not it's currently playing
  active: PropTypes.bool,
  // Callback that will be called when the sample is played
  play: PropTypes.func,
  // Callback that will be called when the sample is stopped
  stop: PropTypes.func,
  // Diameter of the button, in pixels
  size: PropTypes.number,
  // Styles for the outer ring that displays time progress
  progressCircleWidth: PropTypes.number,
  progressCircleColor: PropTypes.string,
  // Various colors for the button elements
  idleBackgroundColor: PropTypes.string,
  activeBackgroundColor: PropTypes.string,
  stopIconColor: PropTypes.string,
  playIconColor: PropTypes.string,
  // How quickly the play icon should morph into the stop icon
  iconAnimationLength: PropTypes.number,
  // How long the audio should be faded in/out when playing/stopping
  fadeInLength: PropTypes.number,
  fadeOutLength: PropTypes.number,
};
```
