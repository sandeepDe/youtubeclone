import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import MainContext from '../../context/MainContext'
import {
  VideoItemMain,
  VideoThumb,
  VideoDetailDiv,
  VideoDetailTextDiv,
  VideoTitle,
  VideoDetailUnderText,
  JustDot,
  VideoViewsAgo,
} from './styledComponent'

const VideoListItem = props => {
  const {details} = props
  return (
    <MainContext.Consumer>
      {value => {
        const {activeTheme} = value
        return (
          <Link style={{textDecoration: 'none'}} to={`/videos/${details.id}`}>
            <VideoItemMain>
              <VideoThumb src={details.thumbnailUrl} alt="video thumbnail" />
              <VideoDetailDiv>
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
            </VideoItemMain>
          </Link>
        )
      }}
    </MainContext.Consumer>
  )
}

export default VideoListItem
