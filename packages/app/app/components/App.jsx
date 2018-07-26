import React from 'react';
import comp, { Button, Progress } from '@base/ui'

export default class App extends React.Component {
  render() {
    return (
      <div id="content">
        <h5>Time to <a href="https://facebook.github.io/react/">React</a>.</h5>
        <Button.Button>Click Me!</Button.Button>
        <Progress.Loading />
      </div>
    );
  }
}
