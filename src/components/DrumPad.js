    import React from "react";

class DrumPad extends React.Component {
    componentDidMount(){
      document.addEventListener('keydown', this.handleKeydown)
      window.focus()
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeydown)
    }
    handleKeydown = e => {
      if(e.keyCode === this.props.keyTrigger.charCodeAt()) {
        this.audio.play()
        this.audio.currentTime = 0
        this.props.handleDisplay(this.props.id)
      }
    }
    
    handleClick = () => {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
   render(){
      return(
        <div className ="drum-pad" id={this.props.id} onClick={this.handleClick}>
          <h1>{this.props.keyTrigger}</h1>
            <audio 
              ref={ref => this.audio = ref}
              className="clip"
              src={this.props.src} 
              id={this.props.keyTrigger}>
  
            </audio>
        </div>
      )
    }
  }

  export default DrumPad;
