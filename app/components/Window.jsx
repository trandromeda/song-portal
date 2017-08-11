import React from 'react';
import Player from './Player';
import Controller from './Controller';
import Unsplash, { toJson } from 'unsplash-js';

const Credit = (props) => (
    <div className='credit'>
      <p>Photo by 
      <a href={'https://unsplash.com/' + '@' + props.currentUsername + '?utm_source=songportal&utm_medium=referral&utm_campaign=api-credit'}> {props.currentPhotographer}</a> / 
      <a href={'https://unsplash.com/?utm_source=songportal&utm_medium=referral&utm_campaign=api-credit'}> Unsplash</a></p>
    </div>
)

let unsplash;

class Window extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentPhoto: null,
      currentPhotographer: '',
      currentUsername: '',
      query: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getRandomPhoto = this.getRandomPhoto.bind(this);
  }

  handleChange(event) {
    this.setState({query: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getRandomPhoto(this.state.query)
  }

  getRandomPhoto(search) {
    unsplash.photos.getRandomPhoto({ query: search })
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

  componentDidMount() {
    unsplash = new Unsplash({
      applicationId: UNSPLASH_APPID,
      secret: UNSPLASH_SECRET,
      callbackUrl: UNSPLASH_CALLBACK
    });

    this.getRandomPhoto('water')
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
      <div className='window' style={divStyle}>
        <h1 className='title'>SongPortal</h1>

        <div className="query">
          <form onSubmit={this.handleSubmit}>
            <label>
            <input
              type='text'
              value={this.state.query}
              onChange={this.handleChange}
            />
            </label>
            <input type='submit' value='Search' />
          </form>
        </div>

        <Player />
        <Credit 
          currentUsername={this.state.currentUsername} 
          currentPhotographer={this.state.currentPhotographer} />
      </div>
    )
  }
}

module.exports = Window;