import styled from 'styled-components'

export const VideoItemMain = styled.li`
  margin-bottom: 90px;
  width: 320px;
  flex-shrink: 1;
  @media (max-width: 1366px) {
    width: 300px;
  }
`

export const VideoThumb = styled.img`
  height: 420px;
  width: 100%;
  flex-shrink: 1;
  @media (max-width: 1366px) {
    width: 280px;
    height: 380px;
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
`

export const VideoViewsAgo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`
