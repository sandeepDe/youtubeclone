import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookie from 'js-cookie'
import {GrClose} from 'react-icons/gr'
import {BiSearch} from 'react-icons/bi'
import Header from '../Header'
import VideoItem from '../VideoItem'
import MainContext from '../../context/MainContext'
import SideBar from '../SideBar'

import {
  HomeMain,
  HomeInnerTwo,
  HomeBanner,
  BannerImg,
  BannerBtn,
  BannerText,
  BannerPlanBtn,
  VideoListUl,
  VideoSearch,
  VideoListDiv,
  VideoSearchDiv,
  VideoSearchBtn,
  LoaderContainer,
  ErrorContainer,
  ErrorImg,
  RetryBtn,
  ErrorHeading,
  ErrorDesc,
} from './styledComponents'

const apiStatus = {
  init: 'INITIAL',
  fail: 'FAILURE',
  success: 'SUCCESS',
  loading: 'PENDING',
}

class Home extends Component {
  state = {videoList: [], searchInput: '', apiState: apiStatus.init}

  componentDidMount() {
    this.getVideos()
  }

  onRetry = () => {
    this.getVideos()
  }

  closeBanner = () => {
    document.getElementById('banner').style.display = 'none'
  }

  getVideos = async () => {
    this.setState({apiState: apiStatus.loading})
    const {searchInput} = this.state
    const myToken = Cookie.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${myToken}`,
      },
    }
    try {
      const response = await fetch(apiUrl, options)
      const data = await response.json()

      const getFormat = obj => ({
        name: obj.name,
        profileImageUrl: obj.profile_image_url,
      })
      const updatedList = data.videos.map(each => ({
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
        channel: getFormat(each.channel),
      }))
      this.setState({videoList: updatedList, apiState: apiStatus.success})
    } catch (error) {
      this.setState({apiState: apiStatus.fail})
    }
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  loaderEle = () => (
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

  noSearchResult = () => (
    <MainContext.Consumer>
      {value => {
        const {activeTheme} = value
        return (
          <ErrorContainer>
            <ErrorImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <ErrorHeading theme={activeTheme}>
              No Search results found
            </ErrorHeading>
            <ErrorDesc theme={activeTheme}>
              Try different key words or remove search filter
            </ErrorDesc>
            <RetryBtn onClick={this.onRetry} type="button">
              Retry
            </RetryBtn>
          </ErrorContainer>
        )
      }}
    </MainContext.Consumer>
  )

  renderVideoList = () => {
    const {videoList, searchInput} = this.state
    return (
      <>
        <MainContext.Consumer>
          {value => {
            const {activeTheme} = value

            return (
              <>
                <VideoSearchDiv>
                  <VideoSearch
                    type="search"
                    onChange={this.onSearchInput}
                    placeholder="Search"
                    value={searchInput}
                    theme={activeTheme}
                  />
                  <VideoSearchBtn
                    data-testid="searchButton"
                    onClick={this.getVideos}
                    theme={activeTheme}
                  >
                    <BiSearch
                      size="20px"
                      color={activeTheme === 'DARK' ? '#ffffff' : null}
                    />
                  </VideoSearchBtn>
                </VideoSearchDiv>
                {videoList.length === 0 ? (
                  this.noSearchResult()
                ) : (
                  <VideoListUl>
                    {videoList.map(each => (
                      <VideoItem key={each.id} details={each} />
                    ))}
                  </VideoListUl>
                )}
              </>
            )
          }}
        </MainContext.Consumer>
      </>
    )
  }

  renderFailureView = () => (
    <MainContext.Consumer>
      {value => {
        const {activeTheme} = value
        return (
          <ErrorContainer>
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
            <RetryBtn onClick={this.onRetry} type="button">
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
        return this.loaderEle()
      case apiStatus.success:
        return this.renderVideoList()
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
              <HomeMain data-testid="home" theme={activeTheme}>
                <SideBar />
                <HomeInnerTwo>
                  <HomeBanner data-testid="banner" id="banner">
                    <BannerBtn data-testid="close" onClick={this.closeBanner}>
                      <GrClose />
                    </BannerBtn>
                    <BannerImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <BannerText>Buy Nxt Watch Premium</BannerText>
                    <BannerPlanBtn>GET IT NOW</BannerPlanBtn>
                  </HomeBanner>
                  <VideoListDiv theme={activeTheme}>
                    {this.renderEverything()}
                  </VideoListDiv>
                </HomeInnerTwo>
              </HomeMain>
            </>
          )
        }}
      </MainContext.Consumer>
    )
  }
}

export default Home
