import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import ListOfFollowers from './components/ListOfFollowers';

class App extends React.Component {
  constructor(){
    console.log('constructor rendered')
    super()
    this.state = {
      userName: 'kadeem140',
      userInfo: {},
      followers: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    console.log('CDM Rendered')
    this.fetchFollowers(this.state.userName)
  }

  handleChange = (e) => {
    console.log('changing', e.target.value)
    this.setState({ userName: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit', e.target)
  }

  fetchFollowers = (user) => {
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => {
        console.log('result', res)
        return res.json()
      })
      .then((resInfo) => {
        console.log('resInfo', resInfo)
        this.setState({ userInfo: resInfo })
        console.log('userInfo', this.state.userInfo)
        return fetch(this.state.userInfo.followers_url)
      })
      .then((followers) => {
        console.log('followers',followers)
        return followers.json()
      })
      .then((userFollowers) => {
        console.log('usrFollowers',userFollowers)
        this.setState({ followers: userFollowers })
        return userFollowers
      })
      .catch((err) => {
        console.log('There is something wrong!', err)
      })
  }

  render(){
    console.log('Render() rendered')
    return (
      <div className="App">
        <h2>GitHub User Card</h2>
         <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                <h5>FIND A USER:</h5>
                <input
                  type='text'
                  value={this.state.userName}
                  onChange={this.handleChange}
                  placeholder='Github Username'
                />
              </label>
              <button type='submit'>SEARCH</button>
            </form>
          </div>

        <div >
          <img src={this.state.userInfo.avatar_url} alt='avatar' />
          <div>
            <h3>{this.state.userInfo.name}</h3>
            <h5>
              Location:<span>{this.state.userInfo.location}</span>
            </h5>
            <h5>{this.state.userInfo.bio}</h5>
          </div>
          <div>
            <div >
              <h3>{this.state.userInfo.public_repos}</h3>
              <h5>Public Repos</h5>
            </div>
            <div >
              <h3>{this.state.userInfo.followers}</h3>
              <h5>Followers</h5>
            </div>
            <div>
              <h3>{this.state.userInfo.following}</h3>
              <h5> Following</h5>
            </div>
          </div>
        </div>
        <ListOfFollowers
          userName={this.state.userName}
          followers={this.state.followers}
          userInfo={this.state.userInfo}
        />

       
      </div>
    );
   }
  //  */}
}

export default App;
