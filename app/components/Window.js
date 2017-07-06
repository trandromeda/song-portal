import React from 'react';
import Player from './Player';

class Window extends React.Component {
  render() {
    return (
      <div className="window">
        <h1 className="title">SongPortal</h1>
        <Player />
      </div>
    )
  }
}

module.exports = Window;