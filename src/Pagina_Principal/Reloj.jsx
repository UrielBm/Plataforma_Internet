import React, { Component } from 'react';

class Reloj extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }
    render() {
        return (
            <div className="Reloj">
                <h2>Hora: {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Reloj;