import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {

  	const opacity = this.props.opacity
    return opacity < 0.2 ? null : (
    	<div style={{opacity: opacity}}>
    		<ColorBox opacity={opacity - .1} />
    	</div>
    )
  }
}