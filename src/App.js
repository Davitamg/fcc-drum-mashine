import React from "react";
import "./App.css";
import DrumPad from "./components/DrumPad"
import data from "./components/data"


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: 'Click To Play Music'
     }
  }
  handleDisplay = display => this.setState({display})
  render() {
    return (
     <div id="drum-machine">
       <div id="display" >{this.state.display}</div>
        <div id="drum-pads">
              {data.map(d=> (
                <DrumPad 
                  id={d.id}
                  keyTrigger={d.keyTrigger}
                  src={d.src}
                  handleDisplay={this.handleDisplay}

                  />
              ))}
          
        </div>
      </div>
    )
  }
}

export default App;
