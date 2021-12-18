import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import Header from '../Header'

import MainContext from '../../context/MainContext'
import SideBar from '../SideBar'
import {
  VDMain,
  VDInner,
  LoaderContainer,
  ErrorContainer,
  ErrorImg,
  RetryBtn,
  ErrorHeading,
  ErrorDesc,
  VideoPlayerContainer,
  VideoPlayerHeading,
  VideoViewsAgo,
  VideoDetailUnderText,
  JustDot,
  ViewLikeDislikeSave,
  LikeDislikeSave,
  Btns,
  BtnLabel,
  Hrline,
  VideoDetailDiv,
  Channelthumb,
  VideoDetailTextDiv,
  VideoTitle,
  ChannelDes,
  ChannelSub,
  VideoPlayerDetailsContainer,
} from './styledComponent'

const apiStatus = {
  init: 'INITIAL',
  fail: 'FAILURE',
  success: 'SUCCESS',
  loading: 'PENDING',
}

class VideoItemDetails extends Component {
  state = {apiState: apiStatus.init, videoDetail: null}

  componentDidMount() {
    this.getVideoDetails()
  }

  timeDiff = date => {
    const seconds = Math.floor((new Date() - date) / 1000)
    let interval = seconds / 31536000
    if (interval > 1) {
      return `${Math.floor(interval)} years ago`
    }
    interval = seconds / 2592000
    if (interval > 1) {
      return `${Math.floor(interval)} months ago`
    }
    interval = seconds / 86400
    if (interval > 1) {
      return `${Math.floor(interval)} days ago`
    }
    interval = seconds / 3600
    if (interval > 1) {
      return `${Math.floor(interval)} hours ago`
    }
    interval = seconds / 60
    if (interval > 1) {
      return `${Math.floor(interval)} minutes ago`
    }
    return `${Math.floor(seconds)} seconds ago`
  }

  getVideoDetails = async () => {
    this.setState({apiState: apiStatus.loading})
    const {match} = this.props
    const {params} = match
    const apiUrl = `https://apis.ccbp.in/videos/${params.id}`
    const myToken = Cookie.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${myToken}`,
      },
    }

    try {
      const response = await fetch(apiUrl, options)
      const data = await response.json()

      const myVideo = data.video_details
      const gerFormat = obj => ({
        name: obj.name,
        profileImageUrl: obj.profile_image_url,
        subCount: obj.subscriber_count,
      })
      const updatedList = {
        id: myVideo.id,
        description: myVideo.description,
        publishedAt: myVideo.published_at,
        thumbnailUrl: myVideo.thumbnail_url,
        title: myVideo.title,
        videoUrl: myVideo.video_url,
        viewCount: myVideo.view_count,
        channel: gerFormat(myVideo.channel),
      }
      this.setState({videoDetail: updatedList, apiState: apiStatus.success})
    } catch (error) {
      this.setState({apiState: apiStatus.fail})
    }
  }

  loaderElement = () => (
    <MainContext.Consumer>
      {value => {
        const {activeTheme} = value
        return (
          <LoaderContainer data-testid="loader">
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
              We are having some trouble to complete your request. Please try
              again.
            </ErrorDesc>
            <RetryBtn onClick={this.getVideoDetails} type="button">
              Retry
            </RetryBtn>
          </ErrorContainer>
        )
      }}
    </MainContext.Consumer>
  )

  renderVideoPlayer = () => (
    <MainContext.Consumer>
      {value => {
        const {videoDetail} = this.state
        const {
          activeTheme,
          addToSaved,
          savedVideo,
          addToLiked,
          addToDisliked,
          likedVideo,
          disLikedVideo,
        } = value

        /* const checkData = () => {
          try {
            const isInSaved = savedVideo.find(
              each => each.id === videoDetail.id,
            )
            console.log(isInSaved)
            return isInSaved
          } catch {
            return false
          }
        } */

        const onSave = () => {
          addToSaved(videoDetail)
        }
        const onLike = () => {
          addToLiked(videoDetail.id)
        }
        const onDisLike = () => {
          addToDisliked(videoDetail.id)
        }

        /* const isLiked = () => {
          try {
            const data = likedVideo.includes(videoDetail.id)
            return true
          } catch {
            return false
          }
        } */
        const isInSaved = savedVideo.find(each => each.id === videoDetail.id)
        const isLiked = likedVideo.includes(videoDetail.id)
        const isDisLiked = disLikedVideo.includes(videoDetail.id)

        /* const isDisLiked = () => {
          try {
            const data = disLikedVideo.includes(videoDetail.id)
            if (data === null )
          } catch {
            return false
          }
        } */

        return (
          <VideoPlayerContainer>
            <ReactPlayer
              url={videoDetail.videoUrl}
              width="100%"
              height="100%"
              controls
            />
            <VideoPlayerDetailsContainer>
              {' '}
              <VideoPlayerHeading theme={activeTheme}>
                {videoDetail.title}
              </VideoPlayerHeading>
              <ViewLikeDislikeSave>
                <VideoViewsAgo>
                  <VideoDetailUnderText
                    theme={activeTheme}
                  >{`${videoDetail.viewCount} views`}</VideoDetailUnderText>
                  <JustDot theme={activeTheme}>&bull;</JustDot>
                  <VideoDetailUnderText theme={activeTheme}>
                    {this.timeDiff(new Date(videoDetail.publishedAt))}
                  </VideoDetailUnderText>
                </VideoViewsAgo>
                <LikeDislikeSave>
                  <Btns val={isLiked} onClick={onLike}>
                    <BiLike
                      color={isLiked ? '#2563eb ' : '#64748b'}
                      size="25px"
                    />
                    <BtnLabel val={isLiked}>Like</BtnLabel>
                  </Btns>
                  <Btns val={isDisLiked} onClick={onDisLike}>
                    <BiDislike
                      color={isDisLiked ? '#2563eb ' : '#64748b'}
                      size="25px"
                    />
                    <BtnLabel val={isDisLiked}>Dislike</BtnLabel>
                  </Btns>
                  <Btns val={isInSaved !== undefined} onClick={onSave}>
                    <BiListPlus
                      color={isInSaved !== undefined ? '#2563eb ' : '#64748b'}
                      size="25px"
                    />
                    <BtnLabel val={isInSaved !== undefined}>
                      {isInSaved !== undefined ? 'Saved' : 'Save'}
                    </BtnLabel>
                  </Btns>
                </LikeDislikeSave>
              </ViewLikeDislikeSave>
              <Hrline />
              <VideoDetailDiv>
                <Channelthumb
                  src={videoDetail.channel.profileImageUrl}
                  alt="channel logo"
                />
                <VideoDetailTextDiv>
                  <VideoTitle theme={activeTheme}>
                    {videoDetail.channel.name}
                  </VideoTitle>
                  <ChannelSub
                    theme={activeTheme}
                  >{`${videoDetail.channel.subCount} subscribers`}</ChannelSub>
                  <ChannelDes theme={activeTheme}>
                    {videoDetail.description}
                  </ChannelDes>
                </VideoDetailTextDiv>
              </VideoDetailDiv>
            </VideoPlayerDetailsContainer>
          </VideoPlayerContainer>
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
        return this.renderVideoPlayer()
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
              <VDMain data-testid="videoItemDetails" theme={activeTheme}>
                <SideBar />
                <VDInner theme={activeTheme}>{this.renderEverything()}</VDInner>
              </VDMain>
            </>
          )
        }}
      </MainContext.Consumer>
    )
  }
}

export default VideoItemDetails
