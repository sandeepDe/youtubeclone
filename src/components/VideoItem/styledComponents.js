import styled from 'styled-components'

export const VideoItemMain = styled.li`
  margin-bottom: 90px;
  width: 360px;
  flex-grow: 0;
  flex-shrink: 1;
  margin-right: 25px;
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    height: 100%;
  }

  @media (max-width: 1366px) {
    width: 300px;
    height: 200px;
    flex-grow: 1;
    margin-bottom: 205px;
  }
`

export const VideoThumb = styled.img`
  height: 220px;
  width: 100%;
  @media (max-width: 1366px) {
    width: 100%;
    height: 250px;
  }
`

export const Channelthumb = styled.img`
  height: 45px;
`

export const VideoDetailDiv = styled.div`
  display: flex;
  margin-top: 15px;
`

export const VideoDetailTextDiv = styled.div`
  margin-left: 15px;
`
export const VideoTitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
  color: ${props => (props.theme === 'DARK' ? '#FFFFFF' : '#000000')};
`
export const VideoDetailUnderText = styled.p`
  color: ${props => (props.theme === 'DARK' ? '#94a3b8' : '#383838')};
`
export const JustDot = styled.p`
  margin: 0 8px;
  margin-top: 5px;
  font-size: 20px;
  color: #94a3b8;
`

export const VideoViewsAgo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`
