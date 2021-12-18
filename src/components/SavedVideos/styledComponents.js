import styled from 'styled-components'

export const SavedMain = styled.div`
  min-height: 89vh;
  height: 100%;
  display: flex;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: ${props =>
    props.theme === 'DARK' ? '#0f0f0f' : '#f9f9f9'};
`

export const SavedInner = styled.div`
  width: 84%;
  height: 89vh;
  overflow: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const SavedTopBar = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 80px;
  background-color: ${props =>
    props.theme === 'DARK' ? '#181818' : '#f1f1f1'};
`
export const SavedBarImg = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 55px;
  margin-right: 20px;
  background-color: ${props =>
    props.theme === 'DARK' ? '#0f0f0f' : '#e1e9f0'};
`
export const SavedBarTitle = styled.h1`
  color: ${props => (props.theme === 'DARK' ? '#ffffff' : '#000000')};
`

export const SavedVideoListUl = styled.ul`
  list-style: none;
  padding: 50px 80px;
  background-color: ${props =>
    props.theme === 'DARK' ? '#0f0f0f' : '#f9f9f9'};
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
  padding: 50px 0;
  background-color: ${props =>
    props.theme === 'DARK' ? '#0f0f0f' : '#eff2f4'};
`
export const ErrorImg = styled.img`
  height: 420px;
  margin-left: -30px;
  margin-bottom: 35px;
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
