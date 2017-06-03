import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  render () {
    return(
      <div>
        <h1>Song Portal</h1>
      </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('base'));