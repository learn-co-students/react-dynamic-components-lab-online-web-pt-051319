import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [

    ]
  }

  render() {
    console.log(this)
    let value = this.props.opacity
    if (value >= .2) {
      return (
        <div className="color-box" style={{ opacity: value }}>
          <ColorBox opacity={value - .1} />
        </div>
      )
    }
    else {
      return null
    }

  }

}