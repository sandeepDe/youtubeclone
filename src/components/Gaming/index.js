import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookie from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import GameVideoItem from '../GameVideoItem'
import MainContext from '../../context/MainContext'
import SideBar from '../SideBar'
import {
  GamingInner,
  GamingMain,
  GamingTopBar,
  GamingBarImg,
  GamingBarTitle,
  GamingVideoListUl,
  LoaderContainer,
  ErrorContainer,
  ErrorImg,
  ErrorHeading,
  ErrorDesc,
  RetryBtn,
} from './styledComponents'

const apiStatus = {
  init: 'INITIAL',
  fail: 'FAILURE',
  success: 'SUCCESS',
  loading: 'PENDING',
}

class Gaming extends Component {
  state = {gamingList: [], apiState: apiStatus.init}

  componentDidMount() {
    this.getGames()
  }

  getGames = async () => {
    this.setState({apiState: apiStatus.loading})
    const myToken = Cookie.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${myToken}`,
      },
    }
    try {
      const response = await fetch(apiUrl, options)
      const gotData = await response.json()
      const updatedData = gotData.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({gamingList: updatedData, apiState: apiStatus.success})
    } catch {
      this.setState({apiState: apiStatus.fail})
    }
  }

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

  renderGameList = () => {
    const {gamingList} = this.state
    return (
      <MainContext.Consumer>
        {value => {
          const {activeTheme} = value
          return (
            <>
              <GamingTopBar data-testid="banner" theme={activeTheme}>
                <GamingBarImg theme={activeTheme}>
                  <SiYoutubegaming size="55px" color="#ff031c" />
                </GamingBarImg>
                <GamingBarTitle theme={activeTheme}>Gaming</GamingBarTitle>
              </GamingTopBar>
              <GamingVideoListUl theme={activeTheme}>
                {gamingList.map(each => (
                  <GameVideoItem key={each.id} details={each} />
                ))}
              </GamingVideoListUl>
            </>
          )
        }}
      </MainContext.Consumer>
    )
  }

  renderFailureView = () => (
    <MainContext.Consumer>
      {value => {
        const {activeTheme} = value
        return (
          <ErrorContainer theme={activeTheme}>
            <ErrorImg
              src={
                activeTheme === 'DARK'
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <ErrorHeading theme={activeTheme}>
              Oops! Something went wrong
            </ErrorHeading>
            <ErrorDesc theme={activeTheme}>
              We are having some trouble
            </ErrorDesc>
            <RetryBtn onClick={this.getGames} type="button">
              Retry
            </RetryBtn>
          </ErrorContainer>
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
        return this.renderGameList()
      case apiStatus.fail:
        return this.renderFailureView()
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
              <GamingMain data-testid="gaming" theme={activeTheme}>
                <SideBar />
                <GamingInner>{this.renderEverything()}</GamingInner>
              </GamingMain>
            </>
          )
        }}
      </MainContext.Consumer>
    )
  }
}

export default Gaming
