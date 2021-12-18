import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom'
import {Component} from 'react'
import MainContext from './context/MainContext'

import './App.css'

import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

class App extends Component {
  state = {
    activeTheme: 'LIGHT',
    savedVideo: [],
    likedVideo: [],
    disLikedVideo: [],
  }

  componentDidMount() {
    const getSaved = JSON.parse(localStorage.getItem('saved'))
    const getLiked = JSON.parse(localStorage.getItem('liked'))
    const getDisliked = JSON.parse(localStorage.getItem('disliked'))

    if (getSaved === null) {
      this.setState({savedVideo: []}, this.toLocalStorage)
    } else {
      this.setState({savedVideo: getSaved}, this.toLocalStorage)
    }

    if (getLiked === null) {
      this.setState({likedVideo: []}, this.toLocalStorage)
    } else {
      this.setState({likedVideo: getLiked}, this.toLocalStorage)
    }

    if (getDisliked === null) {
      this.setState({disLikedVideo: []}, this.toLocalStorage)
    } else {
      this.setState({disLikedVideo: getDisliked}, this.toLocalStorage)
    }
  }

  changeTheme = () => {
    const {activeTheme} = this.state
    if (activeTheme === 'LIGHT') {
      this.setState({activeTheme: 'DARK'})
    } else if (activeTheme === 'DARK') {
      this.setState({activeTheme: 'LIGHT'})
    }
  }

  toSaved = obj => {
    const {savedVideo} = this.state
    const isThere = savedVideo.some(each => each.id === obj.id)

    if (!isThere) {
      this.setState(
        prevState => ({savedVideo: [...prevState.savedVideo, obj]}),
        this.toLocalStorage,
      )
    } else {
      const newData = savedVideo.filter(each => each.id !== obj.id)
      this.setState({savedVideo: newData}, this.toLocalStorage)
    }
  }

  toLocalStorage = () => {
    const {savedVideo, likedVideo, disLikedVideo} = this.state
    localStorage.setItem('saved', JSON.stringify(savedVideo))
    localStorage.setItem('liked', JSON.stringify(likedVideo))
    localStorage.setItem('disliked', JSON.stringify(disLikedVideo))
  }

  toLiked = id => {
    const {likedVideo, disLikedVideo} = this.state
    const isSaved = disLikedVideo.includes(id)
    const isLiked = likedVideo.includes(id)

    if (isSaved && !isLiked) {
      const newAry = disLikedVideo.filter(each => each !== id)
      this.setState({disLikedVideo: newAry}, this.toLocalStorage)
      this.setState(
        prevState => ({likedVideo: [...prevState.likedVideo, id]}),
        this.toLocalStorage,
      )
    } else {
      const isInLiked = likedVideo.includes(id)
      if (isInLiked) {
        console.log('Nothing to add')
      } else {
        this.setState(
          prevState => ({
            likedVideo: [...prevState.likedVideo, id],
          }),
          this.toLocalStorage,
        )
      }
    }
  }

  toDislike = id => {
    const {likedVideo, disLikedVideo} = this.state
    const isSaved = disLikedVideo.includes(id)
    const isLiked = likedVideo.includes(id)

    if (!isSaved && isLiked) {
      const newAry = likedVideo.filter(each => each !== id)
      this.setState({likedVideo: newAry}, this.toLocalStorage)
      this.setState(
        prevState => ({
          disLikedVideo: [...prevState.disLikedVideo, id],
        }),
        this.toLocalStorage,
      )
    } else {
      const isInLiked = disLikedVideo.includes(id)
      if (isInLiked) {
        console.log('Nothing to add')
      } else {
        this.setState(
          prevState => ({
            disLikedVideo: [...prevState.disLikedVideo, id],
          }),
          this.toLocalStorage,
        )
      }
    }
  }

  render() {
    const {
      activeTheme,
      savedVideo,
      reactedVideo,
      likedVideo,
      disLikedVideo,
    } = this.state
    return (
      <MainContext.Provider
        value={{
          activeTheme,
          changeTheme: this.changeTheme,
          savedVideo,
          reactedVideo,
          addToSaved: this.toSaved,
          addToLiked: this.toLiked,
          addToDisliked: this.toDislike,
          likedVideo,
          disLikedVideo,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute path="/trending" component={Trending} />
            <ProtectedRoute path="/gaming" component={Gaming} />
            <ProtectedRoute path="/videos/:id" component={VideoItemDetails} />
            <ProtectedRoute path="/saved-videos" component={SavedVideos} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </MainContext.Provider>
    )
  }
}

export default App
