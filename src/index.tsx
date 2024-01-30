import * as React from "react";
import * as ReactDOM from "react-dom";
import Timer from "./StopWatch";
import Button from "./StopWatchButton";

//import "./styles.css";

interface AppState {
  time: number;
  timer: number | undefined;
}
class App extends React.Component<{}, AppState> {
  public readonly state = {
    time: 0,
    timer: 0
  };

  start = (time: number): void => {
    clearInterval(this.state.timer);
    let timer: number = window.setInterval(() => {
      let time = this.state.time + 1;
      this.setState({
        time
      });
    }, 1000);
    return this.setState({
      time,
      timer
    });
  };
  stop = (): void => {
    clearInterval(this.state.timer);
    this.setState({
      timer: undefined
    });
  };
  reset = (): void => {
    clearInterval(this.state.timer);
    this.setState({
      time: 0,
      timer: undefined
    });
  };
  render() {
    const { time, timer } = this.state;
    return (
      <div className="App">
        <h1>STOPWATCH</h1>
        <div className="timer-wrapper">
          <Timer time={time} />
          <div className="button-wrapper">
            <Button
              time={time}
              title={timer ? "stop" : "start"}
              onClick={timer ? this.stop : this.start}
            />
            <Button title="reset" onClick={this.reset} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));