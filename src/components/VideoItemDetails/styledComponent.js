import styled from 'styled-components'

export const VDMain = styled.div`
  min-height: 89vh;
  height: 100%;
  display: flex;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: ${props =>
    props.theme === 'DARK' ? '#0f0f0f' : '#f9f9f9'};
  @media (max-width: 768px) {
    height: 100vh;
  }
`

export const VDInner = styled.div`
  background-color: ${props =>
    props.theme === 'DARK' ? '#0f0f0f' : '#eff2f4'};
  width: 84%;
  height: 89vh;
  overflow: auto;
  padding: 35px;
  @media (max-width: 768px) {
    height: 100vh;
    width: 100%;
    padding: 20px 0;
  }
`

export const VideoPlayerContainer = styled.div`
  height: 677px;
  @media (max-width: 768px) {
    height: 250px;
  }
`

export const VideoPlayerDetailsContainer = styled.div`
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

export const VideoPlayerHeading = styled.p`
  margin-top: 30px;
  font-size: 28px;
  color: ${props => (props.theme === 'DARK' ? '#FFFFFF' : '#000000')};
  @media (max-width: 768px) {
    font-size: 22px;
  }
`

export const VideoDetailUnderText = styled.p`
  color: ${props => (props.theme === 'DARK' ? '#94a3b8' : '#383838')};
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
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

export const LoaderContainer = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ErrorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`
export const ErrorImg = styled.img`
  height: 350px;
  margin-left: -30px;
  margin-bottom: 15px;
`

export const ErrorHeading = styled.h1`
  color: ${props => (props.theme === 'DARK' ? '#FFFFFF' : '#000000')};
`
export const ErrorDesc = styled.p`
  font-size: 25px;
  width: 530px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${props => (props.theme === 'DARK' ? '#94a3b8' : '#383838')};
`
export const RetryBtn = styled.button`
  height: 45px;
  font-size: 18px;
  width: 150px;
  background-color: #4f46e5;
  color: #ffffff;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`
export const ViewLikeDislikeSave = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    height: 90px;
    margin-top: 5px;
  }
`
export const LikeDislikeSave = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Btns = styled.button`
  display: flex;
  width: 90px;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${props => (props.val ? '#2563eb ' : '#64748b')};
`
export const BtnLabel = styled.p`
  font-size: 16px;
  margin-left: 5px;
  color: ${props => (props.val ? '#2563eb ' : '#64748b')};
`

export const Hrline = styled.hr`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 40px;
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
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${props => (props.theme === 'DARK' ? '#FFFFFF' : '#000000')};
`

export const ChannelDes = styled.p`
  color: ${props => (props.theme === 'DARK' ? '#FFFFFF' : '#383838')};
  margin-top: 25px;
  padding-bottom: 120px;
`
export const ChannelSub = styled.p`
  color: ${props => (props.theme === 'DARK' ? '#94a3b8' : '#383838')};
  margin-top: 10px;
`
