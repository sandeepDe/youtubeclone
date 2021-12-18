import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import MainContext from '../../context/MainContext'

import {
  SideBarMain,
  SideBarUl,
  SideBarLi,
  SideBarLastLi,
  SideBarImg,
  SideContactP,
  SideContactDiv,
} from './styledComponents'

class SideBar extends Component {
  onLink = event => {
    const {history} = this.props
    history.push(event.target.id)
  }

  render() {
    const {history} = this.props
    const activeTab = history.location.pathname
    return (
      <MainContext.Consumer>
        {value => {
          const {activeTheme} = value
          return (
            <SideBarMain theme={activeTheme}>
              <SideBarUl>
                <SideBarLi
                  path={activeTab === '/'}
                  id="/"
                  //   onClick={this.onLink}
                  bgColor={activeTheme === 'DARK' ? '#383838' : '#eff2f4'}
                >
                  <AiFillHome
                    size="20px"
                    color={activeTab === '/' ? '#FF031C' : '#928F91'}
                    pointerEvents="none"
                  />
                  <Link
                    style={{
                      color: activeTheme === 'DARK' ? '#eff2f4' : '#383838',
                      marginLeft: '18px',
                      textDecoration: 'none',
                      fontSize: '18px',
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
                  //   onClick={this.onLink}
                  bgColor={activeTheme === 'DARK' ? '#383838' : '#eff2f4'}
                >
                  <HiFire
                    size="20px"
                    color={activeTab === '/trending' ? '#FF031C' : '#928F91'}
                    pointerEvents="none"
                  />
                  <Link
                    style={{
                      color: activeTheme === 'DARK' ? '#eff2f4' : '#383838',
                      marginLeft: '18px',
                      textDecoration: 'none',
                      fontSize: '18px',
                    }}
                    to="/trending"
                    theme={activeTheme}
                  >
                    Trending
                  </Link>
                </SideBarLi>
                <SideBarLi
                  id="/gaming"
                  //   onClick={this.onLink}
                  path={activeTab === '/gaming'}
                  bgColor={activeTheme === 'DARK' ? '#383838' : '#eff2f4'}
                >
                  <SiYoutubegaming
                    size="20px"
                    color={activeTab === '/gaming' ? '#FF031C' : '#928F91'}
                    pointerEvents="none"
                  />
                  <Link
                    style={{
                      color: activeTheme === 'DARK' ? '#eff2f4' : '#383838',
                      marginLeft: '18px',
                      textDecoration: 'none',
                      fontSize: '18px',
                    }}
                    to="/gaming"
                    theme={activeTheme}
                  >
                    Gaming
                  </Link>
                </SideBarLi>
                <SideBarLi
                  id="/saved-videos"
                  //   onClick={this.onLink}
                  path={activeTab === '/saved-videos'}
                  bgColor={activeTheme === 'DARK' ? '#383838' : '#eff2f4'}
                >
                  <MdPlaylistAdd
                    size="20px"
                    color={
                      activeTab === '/saved-videos' ? '#FF031C' : '#928F91'
                    }
                    pointerEvents="none"
                  />
                  <Link
                    style={{
                      color: activeTheme === 'DARK' ? '#eff2f4' : '#383838',
                      marginLeft: '18px',
                      textDecoration: 'none',
                      fontSize: '18px',
                    }}
                    to="/saved-videos"
                    theme={activeTheme}
                  >
                    Saved videos
                  </Link>
                </SideBarLi>
                <SideBarLastLi>
                  <SideContactP theme={activeTheme}>CONTACT US</SideContactP>
                  <SideContactDiv>
                    <SideBarImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                    />
                    <SideBarImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                    />
                    <SideBarImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                    />
                  </SideContactDiv>
                  <SideContactP theme={activeTheme}>
                    Enjoy! Now to see your channels and recommendations!
                  </SideContactP>
                </SideBarLastLi>
              </SideBarUl>
            </SideBarMain>
          )
        }}
      </MainContext.Consumer>
    )
  }
}
export default withRouter(SideBar)
