import styled from 'styled-components'

export const NfMain = styled.div`
  min-height: 89vh;
  height: 100%;
  display: flex;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: ${props =>
    props.theme === 'DARK' ? '#0f0f0f' : '#f9f9f9'};
`

export const NfInner = styled.div`
  width: 84%;
  height: 89vh;
  overflow: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
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
