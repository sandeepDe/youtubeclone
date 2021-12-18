import {Component} from 'react'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import MainContext from '../../context/MainContext'
import VideoListItem from '../VideoListItem'
import SideBar from '../SideBar'
import {
  TrMain,
  TrInner,
  TrendingTopBar,
  TrendingBarImg,
  TrendingBarTitle,
  TrendingVideoListUl,
  LoaderContainer,
  ErrorContainer,
  ErrorImg,
  ErrorHeading,
  ErrorDesc,
  RetryBtn,
} from './styledComponent'

const apiStatus = {
  init: 'INITIAL',
  fail: 'FAILURE',
  success: 'SUCCESS',
  loading: 'PENDING',
}

class Trending extends Component {
  state = {trendingList: [], apiState: apiStatus.init}

  componentDidMount() {
    this.getTrendings()
  }

  getTrendings = async () => {
    this.setState({apiState: apiStatus.loading})
    const myToken = Cookie.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${myToken}`,
      },
    }

    try {
      const response = await fetch(apiUrl, options)
      const data = await response.json()
      const gerFormat = obj => ({
        name: obj.name,
        profileImageUrl: obj.profile_image_url,
      })
      const updatedList = data.videos.map(each => ({
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
        channel: gerFormat(each.channel),
      }))
      this.setState({trendingList: updatedList, apiState: apiStatus.success})
    } catch {
      this.setState({apiState: apiStatus.fail})
    }
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
            <RetryBtn onClick={this.getTrendings} type="button">
              Retry
            </RetryBtn>
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
        const {activeTheme} = value
        const {trendingList} = this.state
        return (
          <>
            <TrendingTopBar data-testid="banner" theme={activeTheme}>
              <TrendingBarImg theme={activeTheme}>
                <HiFire size="55px" color="#ff031c" />
              </TrendingBarImg>
              <TrendingBarTitle theme={activeTheme}>TRENDING</TrendingBarTitle>
            </TrendingTopBar>
            <TrendingVideoListUl theme={activeTheme}>
              {trendingList.map(each => (
                <VideoListItem key={each.id} details={each} />
              ))}
            </TrendingVideoListUl>
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
              <TrMain data-testid="trending" theme={activeTheme}>
                <SideBar />
                <TrInner>{this.renderEverything()}</TrInner>
              </TrMain>
            </>
          )
        }}
      </MainContext.Consumer>
    )
  }
}

export default Trending
