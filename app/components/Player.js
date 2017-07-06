import React from 'react';
import SpotifyPlayer from 'react-spotify-player';

class Player extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentSong: null
    }
  }

  componentDidMount() {
    
  }

  render() {
    // size may also be a plain string using the presets 'large' or 'compact' 
    const size = 'compact';
    // {
    //   width: '100%',
    //   height: 200,
    // };
    const view = 'list'; // or 'coverart' 
    const theme = 'black'; // or 'white' 
    return (
      <div className="player">
        <SpotifyPlayer
          uri="spotify:track:6VDfg9kdGhEb4McPwJpp5t"
          size={size}
          view={view}
          theme={theme} />
      </div>
      )
  }
}

module.exports = Player;