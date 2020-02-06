import React, { Component } from 'react';
import Comment from './Comment'
// are we missing an import?

export default class BlogPost extends Component {
  render() {

    // const comments = [
    //   "When we speak we are afraid our words will not be heard or welcomed. But when we are silent, we are still afraid. So it is better to speak. - Audrey Lorde",
    //   "I am no longer accepting the things I cannot change. I am changing the things I cannot accept. - Angela Davis",
    //   "If you don't understand, ask questions. If you're uncomfortable about asking questions, say you are uncomfortable about asking questions and then ask anyway. It's easy to tell when a question is coming from a good place. Then listen some more. Sometimes people just want to feel heard. Here's to possibilities of friendship and connection and understanding. - Chimamanda Ngozi Adichie"
    // ]

    return (
      <div id="blog-post" className="wrapper">
        Just like moons and like suns,<br />
        With the certainty of tides,<br />
        Just like hopes springing high,<br />
        Still I'll rise.<br />
        -Maya Angelou<br />


        <Comment commentText={"Tell my wifi love her"} />
        <Comment commentText={"Ken M was here"} />
        <Comment commentText={"Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself."} />

      </div>
    );
  }
}
