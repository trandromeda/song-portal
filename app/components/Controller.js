import SpotifyWebApi from 'spotify-web-api-js';
import React from 'react';

// const spotifyApi = new SpotifyWebApi();

class Controller extends React.Component {
  constructor(props) {
    super()
    this.state - {

    }
  }

  componentDidMount() {
    // spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
    //   if (err) console.error(err);
    //   else console.log('Artist albums', data);
    // });    
  }

  render() {
    return (
      <div>
        <p>Browser</p>
      </div>
    )
  }
}

module.exports = Controller;