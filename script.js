class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = { volume: 50 };
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleVolumeChange(event) {
    this.setState({ volume: event.target.value });
    const allClips = document.querySelectorAll("audio");
    allClips.forEach(clip => clip.volume = event.target.value / 100);
  }

  handleClick(event) {
    const clip = event.target.firstChild;
    clip.currentTime = 0;
    clip.play();
    document.getElementById("display").innerText = event.target.id;
  }

  handleKeyDown(event) {
    const keys = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];
    if (keys.includes(event.key)) {
      document.getElementById(event.key.toUpperCase()).parentNode.click();
    }
  }

  componentWillMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement(Buttons, { click: this.handleClick, keydown: this.handleKeyPress }), /*#__PURE__*/
      React.createElement(Display, { change: this.handleVolumeChange, power: this.handlePower, volume: this.state.volume })));


  }}


class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "pad-container" }, /*#__PURE__*/
      React.createElement("div", { className: "drum-pad", id: "Heater-1", onClick: this.props.click }, /*#__PURE__*/
      React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", class: "clip", id: "Q", preload: "auto" }), /*#__PURE__*/
      React.createElement("p", null, "Q")), /*#__PURE__*/

      React.createElement("div", { className: "drum-pad", id: "Heater-2", onClick: this.props.click }, /*#__PURE__*/
      React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", class: "clip", id: "W", preload: "auto" }), /*#__PURE__*/
      React.createElement("p", null, "W")), /*#__PURE__*/

      React.createElement("div", { className: "drum-pad", id: "Heater-3", onClick: this.props.click }, /*#__PURE__*/
      React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", class: "clip", id: "E", preload: "auto" }), /*#__PURE__*/
      React.createElement("p", null, "E")), /*#__PURE__*/

      React.createElement("div", { className: "drum-pad", id: "Heater-4", onClick: this.props.click }, /*#__PURE__*/
      React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", class: "clip", id: "A", preload: "auto" }), /*#__PURE__*/
      React.createElement("p", null, "A")), /*#__PURE__*/

      React.createElement("div", { className: "drum-pad", id: "Clap", onClick: this.props.click }, /*#__PURE__*/
      React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", class: "clip", id: "S", preload: "auto" }), /*#__PURE__*/
      React.createElement("p", null, "S")), /*#__PURE__*/

      React.createElement("div", { className: "drum-pad", id: "Open-HH", onClick: this.props.click }, /*#__PURE__*/
      React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", class: "clip", id: "D", preload: "auto" }), /*#__PURE__*/
      React.createElement("p", null, "D")), /*#__PURE__*/

      React.createElement("div", { className: "drum-pad", id: "Kick-n-Hat", onClick: this.props.click }, /*#__PURE__*/
      React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", class: "clip", id: "Z", preload: "auto" }), /*#__PURE__*/
      React.createElement("p", null, "Z")), /*#__PURE__*/

      React.createElement("div", { className: "drum-pad", id: "Kick", onClick: this.props.click }, /*#__PURE__*/
      React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", class: "clip", id: "X", preload: "auto" }), /*#__PURE__*/
      React.createElement("p", null, "X")), /*#__PURE__*/

      React.createElement("div", { className: "drum-pad", id: "Closed-HH", onClick: this.props.click }, /*#__PURE__*/
      React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", class: "clip", id: "C", preload: "auto" }), /*#__PURE__*/
      React.createElement("p", null, "C"))));



  }}


class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "controls" }, /*#__PURE__*/
      React.createElement("div", { id: "display" }), /*#__PURE__*/
      React.createElement("input", { id: "volume", type: "range", min: "1", max: "100", value: this.props.volume, onChange: this.props.change })));


  }}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(DrumMachine, null));