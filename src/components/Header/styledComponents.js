import styled from 'styled-components'

export const HeaderMain = styled.div`
  padding: 20px 40px;
  background-color: ${props =>
    props.theme === 'DARK' ? '#212121' : '#ffffff'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 11vh;
  width: 100%;
  @media (max-width: 768px) {
    padding: 20px 10px;
    height: 9vh;
  }
`

export const WebsiteLogo = styled.img`
  height: 40px;
  width: 150px;
  @media (max-width: 768px) {
    height: 30px;
    width: 110px;
  }
`
export const HeaderUl = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  width: 250px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 150px;
  }
`

export const HeaderLi = styled.li``

export const ResDiv = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`

export const UserIcon = styled.img`
  height: 32px;
  @media (max-width: 768px) {
    display: none;
  }
`

export const LogoutBtn = styled.button`
  height: 35px;
  width: 50px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3px;
  @media (min-width: 768px) {
    height: 33px;
    width: 110px;
    border: ${props =>
      props.theme === 'DARK' ? 'solid 2px #ffffff' : 'solid 2px #3b82f6'};
    font-size: 14px;
    color: ${props => (props.theme === 'DARK' ? '#ffffff' : '#3b82f6')};
  }
`

export const LogoutBtnPop = styled.button`
  height: 33px;
  width: 110px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`

export const LogoutBtnP = styled.p`
  font-size: 14px;
  color: ${props => (props.theme === 'DARK' ? '#ffffff' : '#3b82f6')};
  @media (max-width: 768px) {
    display: none;
  }
`

export const ModalContainer = styled.div`
  font-size: 12px;
  background-color: ${props =>
    props.theme === 'DARK' ? '#212121' : '#ffffff'};
  width: 380px;
  height: 165px;
  border-radius: 15px;
  padding: 30px;
`

export const ModalHeading = styled.p`
  width: 100%;
  font-size: 18px;
  font-family: Roboto;
  text-align: center;
  padding: 5px;
  margin-bottom: 20px;
  color: ${props => (props.theme === 'DARK' ? '#ffffff' : '#212121')};
`

export const ModalBtnContainer = styled.div`
  width: 250px;
  padding: 10px 5px;
  margin: auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ModalBtn = styled.button`
  height: 42px;
  width: 110px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  border: 1px solid ${props => (props.blue ? 'transparent' : '#475569')};
  color: ;
  color: ${props => (props.blue ? '#ffffff' : '#475569')};
  background-color: ${props => (props.blue ? '#3b82f6' : 'transparent')};
  cursor: pointer;
`

export const ThemeBtn = styled.button`
  background-color: transparent;
  border: none;
`

export const ModalContainerHam = styled.div`
  font-size: 12px;
  background-color: ${props =>
    props.theme === 'DARK' ? '#212121' : '#ffffff'};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const SideBarUl = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: -50px;
`

export const SideBarLi = styled.li`
  height: 65px;
  padding: 10px 25vw;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  background-color: ${props => (props.path ? props.bgColor : 'transparent')};
  font-weight: ${props => (props.path ? 600 : 400)};
`

export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 20px;
  right: 20px;
`
