//your code here
import React, { Component } from 'react';

export default class Colmment extends Component {

  render() {
    return (
      <div className="comment" style={{opacity: null /*replace null with the value*/}}>
        {/* your conditional code here! */}
        {this.props.commentText}
      </div>
    )
  }

}

