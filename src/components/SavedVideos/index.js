import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import MainContext from '../../context/MainContext'
import VideoListItem from '../VideoListItem'
import SideBar from '../SideBar'
import {
  SavedMain,
  SavedInner,
  SavedTopBar,
  SavedBarImg,
  SavedBarTitle,
  SavedVideoListUl,
  LoaderContainer,
  ErrorContainer,
  ErrorImg,
  ErrorHeading,
  ErrorDesc,
} from './styledComponents'

const apiStatus = {
  init: 'INITIAL',
  fail: 'FAILURE',
  success: 'SUCCESS',
  loading: 'PENDING',
}

class Trending extends Component {
  state = {apiState: apiStatus.init}

  componentDidMount() {
    this.setState({apiState: apiStatus.loading})
    setTimeout(() => {
      this.setState({apiState: apiStatus.success})
    }, 70)
  }

  renderNoVideo = () => (
    <MainContext.Consumer>
      {value => {
        const {activeTheme} = value
        return (
          <ErrorContainer theme={activeTheme}>
            <ErrorImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <ErrorHeading theme={activeTheme}>
              No saved videos found
            </ErrorHeading>
            <ErrorDesc theme={activeTheme}>
              Save your videos by clicking a button
            </ErrorDesc>
          </ErrorContainer>
        )
      }}
    </MainContext.Consumer>
  )

  loaderElement = () => (
    <MainContext.Consumer>
      {value => {
        const {activeTheme} = value
        return (
          <LoaderContainer className="loader-container" data-testid="loader">
            <Loader
              type="ThreeDots"
              color={activeTheme === 'DARK' ? '#ffffff' : '#00000'}
              height="50"
              width="50"
            />
          </LoaderContainer>
        )
      }}
    </MainContext.Consumer>
  )

  renderTrendingList = () => (
    <MainContext.Consumer>
      {value => {
        const {activeTheme, savedVideo} = value
        return (
          <>
            {savedVideo.length === 0 ? (
              <>
                <SavedTopBar data-testid="banner" theme={activeTheme}>
                  <SavedBarImg theme={activeTheme}>
                    <HiFire size="55px" color="#ff031c" />
                  </SavedBarImg>
                  <SavedBarTitle theme={activeTheme}>
                    Saved Videos
                  </SavedBarTitle>
                </SavedTopBar>
                <ErrorContainer theme={activeTheme}>
                  <ErrorImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <ErrorHeading theme={activeTheme}>
                    No saved videos found
                  </ErrorHeading>
                  <ErrorDesc theme={activeTheme}>
                    Save your videos by clicking a button
                  </ErrorDesc>
                </ErrorContainer>
              </>
            ) : (
              <>
                <SavedTopBar data-testid="banner" theme={activeTheme}>
                  <SavedBarImg theme={activeTheme}>
                    <HiFire size="55px" color="#ff031c" />
                  </SavedBarImg>
                  <SavedBarTitle theme={activeTheme}>
                    Saved Videos
                  </SavedBarTitle>
                </SavedTopBar>
                <SavedVideoListUl theme={activeTheme}>
                  {savedVideo.map(each => (
                    <VideoListItem key={each.id} details={each} />
                  ))}
                </SavedVideoListUl>
              </>
            )}
          </>
        )
      }}
    </MainContext.Consumer>
  )

  renderEverything = () => {
    const {apiState} = this.state
    switch (apiState) {
      case apiStatus.loading:
        return this.loaderElement()
      case apiStatus.success:
        return this.renderTrendingList()
      default:
        return null
    }
  }

  render() {
    return (
      <MainContext.Consumer>
        {value => {
          const {activeTheme} = value
          return (
            <>
              <Header />
              <SavedMain data-testid="savedVideos" theme={activeTheme}>
                <SideBar />
                <SavedInner>{this.renderEverything()}</SavedInner>
              </SavedMain>
            </>
          )
        }}
      </MainContext.Consumer>
    )
  }
}

export default Trending
