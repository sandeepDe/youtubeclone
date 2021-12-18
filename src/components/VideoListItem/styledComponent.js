import styled from 'styled-components'

export const VideoItemMain = styled.li`
  margin-bottom: 90px;
  flex-shrink: 1;
  display: flex;
  @media (max-width: 1366px) {
    width: 100%;
    height: 200px;
  }
`

export const VideoThumb = styled.img`
  height: 280px;
  width: 500px;
  @media (max-width: 1366px) {
    width: 300px;
    height: 200px;
  }
`

export const VideoDetailDiv = styled.div`
  display: flex;
  margin-top: 15px;
`

export const VideoDetailTextDiv = styled.div`
  margin-left: 15px;
`
export const VideoTitle = styled.p`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 30px;
  color: ${props => (props.theme === 'DARK' ? '#FFFFFF' : '#000000')};
`
export const VideoDetailUnderText = styled.p`
  color: ${props => (props.theme === 'DARK' ? '#94a3b8' : '#383838')};
  font-size: 18px;
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
