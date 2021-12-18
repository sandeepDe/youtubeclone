import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import Cookie from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {BiSun} from 'react-icons/bi'
import {FiLogOut, FiMenu} from 'react-icons/fi'
import {AiFillHome, AiOutlineClose} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import MainContext from '../../context/MainContext'
import './index.css'

import {
  HeaderMain,
  WebsiteLogo,
  HeaderUl,
  HeaderLi,
  UserIcon,
  LogoutBtn,
  ModalContainer,
  ModalHeading,
  ModalBtnContainer,
  ModalBtn,
  ThemeBtn,
  ResDiv,
  LogoutBtnPop,
  LogoutBtnP,
  SideBarUl,
  SideBarLi,
  ModalContainerHam,
  CloseBtn,
} from './styledComponents'

const Header = props => (
  <MainContext.Consumer>
    {value => {
      const {activeTheme, changeTheme} = value
      const onClickTheme = () => {
        changeTheme()
      }
      const logOutConf = () => {
        Cookie.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }
      const {history} = props
      const activeTab = history.location.pathname
      return (
        <HeaderMain theme={activeTheme}>
          <Link to="/">
            <WebsiteLogo
              src={
                activeTheme === 'DARK'
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <HeaderUl>
            <HeaderLi>
              <ThemeBtn
                data-testid="theme"
                type="button"
                onClick={onClickTheme}
              >
                {activeTheme === 'DARK' ? (
                  <BiSun size="25px" color="#ffffff" />
                ) : (
                  <FaMoon size="25px" />
                )}
              </ThemeBtn>
            </HeaderLi>
            <HeaderLi>
              <UserIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <ResDiv>
                <Popup
                  trigger={
                    <LogoutBtn type="button">
                      <FiMenu
                        color={activeTheme === 'DARK' ? '#ffffff' : '#000000'}
                        size="28px"
                      />
                    </LogoutBtn>
                  }
                  modal
                  className="popup-content-ham"
                >
                  {close => (
                    <ModalContainerHam theme={activeTheme}>
                      <CloseBtn type="button" onClick={close}>
                        <AiOutlineClose
                          color={activeTheme === 'DARK' ? '#eff2f4' : '#383838'}
                          size="30px"
                        />
                      </CloseBtn>

                      <SideBarUl>
                        <SideBarLi
                          path={activeTab === '/'}
                          id="/"
                          bgColor={
                            activeTheme === 'DARK' ? '#383838' : '#eff2f4'
                          }
                        >
                          <AiFillHome
                            size="30px"
                            color={activeTab === '/' ? '#FF031C' : '#928F91'}
                            pointerEvents="none"
                          />
                          <Link
                            style={{
                              color:
                                activeTheme === 'DARK' ? '#eff2f4' : '#383838',
                              marginLeft: '18px',
                              textDecoration: 'none',
                              fontSize: '25px',
                            }}
                            to="/"
                            theme={activeTheme}
                          >
                            Home
                          </Link>
                        </SideBarLi>
                        <SideBarLi
                          id="/trending"
                          path={activeTab === '/trending'}
                          bgColor={
                            activeTheme === 'DARK' ? '#383838' : '#eff2f4'
                          }
                        >
                          <HiFire
                            size="30px"
                            color={
                              activeTab === '/trending' ? '#FF031C' : '#928F91'
                            }
                            pointerEvents="none"
                          />
                          <Link
                            style={{
                              color:
                                activeTheme === 'DARK' ? '#eff2f4' : '#383838',
                              marginLeft: '18px',
                              textDecoration: 'none',
                              fontSize: '25px',
                            }}
                            to="/trending"
                            theme={activeTheme}
                          >
                            Trending
                          </Link>
                        </SideBarLi>
                        <SideBarLi
                          id="/gaming"
                          path={activeTab === '/gaming'}
                          bgColor={
                            activeTheme === 'DARK' ? '#383838' : '#eff2f4'
                          }
                        >
                          <SiYoutubegaming
                            size="30px"
                            color={
                              activeTab === '/gaming' ? '#FF031C' : '#928F91'
                            }
                            pointerEvents="none"
                          />
                          <Link
                            style={{
                              color:
                                activeTheme === 'DARK' ? '#eff2f4' : '#383838',
                              marginLeft: '18px',
                              textDecoration: 'none',
                              fontSize: '25px',
                            }}
                            to="/gaming"
                            theme={activeTheme}
                          >
                            Gaming
                          </Link>
                        </SideBarLi>
                        <SideBarLi
                          id="/saved-videos"
                          path={activeTab === '/saved-videos'}
                          bgColor={
                            activeTheme === 'DARK' ? '#383838' : '#eff2f4'
                          }
                        >
                          <MdPlaylistAdd
                            size="30px"
                            color={
                              activeTab === '/saved-videos'
                                ? '#FF031C'
                                : '#928F91'
                            }
                            pointerEvents="none"
                          />
                          <Link
                            style={{
                              color:
                                activeTheme === 'DARK' ? '#eff2f4' : '#383838',
                              marginLeft: '18px',
                              textDecoration: 'none',
                              fontSize: '25px',
                            }}
                            to="/saved-videos"
                            theme={activeTheme}
                          >
                            Saved Video
                          </Link>
                        </SideBarLi>
                      </SideBarUl>
                    </ModalContainerHam>
                  )}
                </Popup>
              </ResDiv>
            </HeaderLi>
            <HeaderLi>
              <Popup
                trigger={
                  <LogoutBtn type="button">
                    <LogoutBtnP>Logout</LogoutBtnP>
                    <LogoutBtnPop type="button">
                      <FiLogOut
                        color={activeTheme === 'DARK' ? '#ffffff' : '#000000'}
                        size="28px"
                      />
                    </LogoutBtnPop>
                  </LogoutBtn>
                }
                modal
                className="popup-content"
              >
                {close => (
                  <ModalContainer theme={activeTheme}>
                    <ModalHeading theme={activeTheme}>
                      Are you sure, you want to logout
                    </ModalHeading>

                    <ModalBtnContainer className="actions">
                      <ModalBtn
                        type="button"
                        className="button"
                        onClick={close}
                      >
                        Cancel
                      </ModalBtn>
                      <ModalBtn
                        type="button"
                        blue
                        className="button"
                        onClick={() => {
                          logOutConf()
                          close()
                        }}
                      >
                        Confirm
                      </ModalBtn>
                    </ModalBtnContainer>
                  </ModalContainer>
                )}
              </Popup>
            </HeaderLi>
          </HeaderUl>
        </HeaderMain>
      )
    }}
  </MainContext.Consumer>
)

export default withRouter(Header)
