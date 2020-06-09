import React, { Component } from 'react'
import Follower from './Follower'

class ListOfFollowers extends Component {
  render() {
    return (
      <div>
        <h4>{`${this.props.userInfo.login}'s Followers`}</h4>
        <div >
          {this.props.followers.map((follower) => (
            <Follower key={follower.id} follower={follower} />
          ))}
        </div>
      </div>
    )
  }
}

export default ListOfFollowers