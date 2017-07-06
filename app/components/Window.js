import React from 'react';
import Player from './Player';
import Unsplash, { toJson } from 'unsplash-js';

class Window extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentPhoto: null,
      currentPhotographer: ''
    }
  }

  render() {
    const unsplash = new Unsplash({
      applicationId: "0f54ed67488c83cfd7020132c0c66f39439a724452e7d1b61cb22cb1802e4bce",
      secret: "088f1465e458cb90818a9b8fb3ebe9d0365a2c271ab008874a7ec1ad39eb64f5",
      callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
    });

    unsplash.photos.getRandomPhoto({ query: "water" })
      .then(toJson)
      .then(json => {
        console.log(json)
        this.setState(() =>
            currentPhoto: json.urls.regular
            // currentPhotographer: json
        )
    });

    return (
      <div className="window">
        <img src={this.state.currentPhoto}/>
        <h1 className="title">SongPortal</h1>
        <Player />
        <p className="credit">Photo by {this.state.currentPhotographer} / Unsplash</p>
      </div>
    )
  }
}

module.exports = Window;