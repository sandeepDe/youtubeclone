import Header from '../Header'
import MainContext from '../../context/MainContext'
import SideBar from '../SideBar'
import {
  NfMain,
  NfInner,
  ErrorContainer,
  ErrorImg,
  ErrorHeading,
  ErrorDesc,
} from './styledComponent'

const NotFound = () => (
  <MainContext.Consumer>
    {value => {
      const {activeTheme} = value
      return (
        <>
          <Header />
          <NfMain theme={activeTheme}>
            <SideBar />
            <NfInner>
              <ErrorContainer theme={activeTheme}>
                <ErrorImg
                  src={
                    activeTheme === 'DARK'
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                  }
                  alt="not found"
                />
                <ErrorHeading theme={activeTheme}>Page Not Found</ErrorHeading>
                <ErrorDesc theme={activeTheme}>
                  We are sorry, the page you requested could not be found.
                </ErrorDesc>
              </ErrorContainer>
            </NfInner>
          </NfMain>
        </>
      )
    }}
  </MainContext.Consumer>
)

export default NotFound
