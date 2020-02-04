import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const opacityStyle = {
      opacity: this.props.opacity
    }
    const calculatedOpacity = this.props.opacity - 0.1
    return this.props.opacity < 0.2 ? null : (
      <div className="color-box" style={opacityStyle}>
        <ColorBox opacity={calculatedOpacity}/>
      </div>
    )
  }

}

