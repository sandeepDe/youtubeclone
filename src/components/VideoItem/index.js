import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

import MainContext from '../../context/MainContext'
import {
  VideoItemMain,
  VideoThumb,
  VideoDetailDiv,
  VideoDetailTextDiv,
  Channelthumb,
  VideoTitle,
  VideoDetailUnderText,
  JustDot,
  VideoViewsAgo,
} from './styledComponents'

const VideoItem = props => {
  const {details} = props

  return (
    <MainContext.Consumer>
      {value => {
        const {activeTheme} = value
        return (
          <VideoItemMain>
            <Link style={{textDecoration: 'none'}} to={`/videos/${details.id}`}>
              <VideoThumb src={details.thumbnailUrl} alt="video thumbnail" />
              <VideoDetailDiv>
                <Channelthumb
                  src={details.channel.profileImageUrl}
                  alt="channel logo"
                />
                <VideoDetailTextDiv>
                  <VideoTitle theme={activeTheme}>{details.title}</VideoTitle>
                  <VideoDetailUnderText theme={activeTheme}>
                    {details.channel.name}
                  </VideoDetailUnderText>
                  <VideoViewsAgo>
                    <VideoDetailUnderText
                      theme={activeTheme}
                    >{`${details.viewCount} views`}</VideoDetailUnderText>
                    <JustDot theme={activeTheme}>&bull;</JustDot>
                    <VideoDetailUnderText theme={activeTheme}>
                      {formatDistanceToNow(new Date(details.publishedAt))}
                    </VideoDetailUnderText>
                  </VideoViewsAgo>
                </VideoDetailTextDiv>
              </VideoDetailDiv>
            </Link>
          </VideoItemMain>
        )
      }}
    </MainContext.Consumer>
  )
}

export default VideoItem
