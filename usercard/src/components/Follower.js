import React, { Component } from 'react'

// click on a link to go to that persons github card
class Follower extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props.follower
    return (
      <div>
        <div>
          <img src={avatar_url} alt='avatar' />
          <h3>{login}</h3>
          <a href={html_url}>Github</a>
        </div>
      </div>
    )
  }
}

export default Follower