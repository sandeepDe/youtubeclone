import styled from 'styled-components'

export const HomeMain = styled.div`
  min-height: 89vh;
  height: 100%;
  display: flex;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: ${props =>
    props.theme === 'DARK' ? '#0f0f0f' : '#f9f9f9 '};
  @media (max-width: 768px) {
    height: 100vh;
  }
`

export const HomeInnerTwo = styled.div`
  width: 84%;
  height: 89vh;
  overflow: auto;
  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
  }
`

export const HomeBanner = styled.div`
  height: 300px;
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: 1450px;
  background-position: 130px;
  padding: 30px 20px;
`

export const BannerImg = styled.img`
  height: 50px;
  margin: 0;
  margin-left: -10px;
`

export const BannerBtn = styled.button`
  height: 30px;
  position: relative;
  left: 97%;
  bottom: 50px;
  background-color: transparent;
  border: none;
`

export const BannerText = styled.p`
  font-size: 25px;
  padding: 0 10px;
  width: 450px;
  margin-top: 15px;
  @media (max-width: 768px) {
    width: 60%;
  }
`

export const BannerPlanBtn = styled.button`
  height: 40px;
  border: 1px solid;
  background-color: transparent;
  padding: 0 30px;
  margin-left: 10px;
  margin-top: 60px;
  font-weight: 600;
  font-size: 15px;
`

export const VideoListDiv = styled.div`
  padding: 35px 40px;
  background-color: ${props =>
    props.theme === 'DARK' ? '#0f0f0f' : '#eff2f4'};
  border-top-left-radius: 12px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    padding-top: 30px;
    // background-color: red;
  }
`

export const VideoSearchDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 450px;
  margin-bottom: 30px;
  border: solid px #94a3b8;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const VideoSearch = styled.input`
  height: 40px;
  width: 100%;
  outline: none;
  border: solid 1px #94a3b8;
  border-right: none;
  padding: 10px;
  background-color: transparent;
  color: ${props => (props.theme === 'DARK' ? '#eff2f4' : '#0f0f0f')};
  @media (max-width: 768px) {
    width: 75%;
  }
`

export const VideoSearchBtn = styled.button`
  height: 40px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: solid 1px #94a3b8;
  background-color: ${props => (props.theme === 'DARK' ? '#212121' : null)};
`

export const VideoListUl = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
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
