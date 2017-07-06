import React from 'react';
import Player from './Player';
import Unsplash, { toJson } from 'unsplash-js';

function Credit(props) {
  return (
    <div className="credit">
      <p>Photo by 
      <a href={"https://unsplash.com/" + "@" + props.currentUsername + "?utm_source=songportal&utm_medium=referral&utm_campaign=api-credit"}> {props.currentPhotographer}</a> / 
      <a href={"https://unsplash.com/?utm_source=songportal&utm_medium=referral&utm_campaign=api-credit"}> Unsplash</a></p>
    </div>
  )
}

class Window extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentPhoto: null,
      currentPhotographer: '',
      currentUsername: ''
    }
  }

  componentDidMount() {
    const unsplash = new Unsplash({
      applicationId: UNSPLASH_APPID,
      secret: UNSPLASH_SECRET,
      callbackUrl: UNSPLASH_CALLBACK
    });

    unsplash.photos.getRandomPhoto({ query: "water" })
      .then(toJson)
      .then(json => {
        this.setState(
          {
            currentPhoto: json.urls.full,
            currentPhotographer: json.user.first_name + ' ' + json.user.last_name,
            currentUsername: json.user.username
          }
        )
    });    
  }

  render() {
    let divStyle;
    {!this.state.currentPhoto ? 
      divStyle = {
        backgroundColor: '#000000',
        height: '100vh'
      }
      : 
      divStyle = {
        background: 'transparent url(' + this.state.currentPhoto + ') no-repeat 50% 50%',
        height: '100vh'
      }
    }

    return (
      <div 
        className="window"
        style = {divStyle}>

        <h1 className="title">SongPortal</h1>

        <Player />

        <Credit 
          currentUsername={this.state.currentUsername} 
          currentPhotographer={this.state.currentPhotographer} />

      </div>
    )
  }
}

module.exports = Window;