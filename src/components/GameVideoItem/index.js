import {Link} from 'react-router-dom'
import MainContext from '../../context/MainContext'
import {
  VideoItemMain,
  VideoThumb,
  VideoDetailDiv,
  VideoDetailTextDiv,
  VideoTitle,
  VideoDetailUnderText,
  VideoViewsAgo,
} from './styledComponent'

const GameVideoItem = props => {
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
                  <VideoViewsAgo>
                    <VideoDetailUnderText
                      theme={activeTheme}
                    >{`${details.viewCount} Watching Worldwide`}</VideoDetailUnderText>
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

export default GameVideoItem
