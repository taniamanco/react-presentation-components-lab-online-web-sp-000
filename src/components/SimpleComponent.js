import React from 'react';

class simple extends React.component {

    constructor(props) {
    super(props);

    this.state = {
      mood: 'happy'
    };
  }

  handleClick = () => {
    let switchMood = this.state.mood === 'happy' ? 'sad' : 'happy';
    this.setState({mood: switchMood});
  }

  render() {
    return <div onClick={this.handleClick}> {this.state.mood} </div>
  }
}

export default simple;
