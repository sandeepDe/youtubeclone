import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import MainContext from '../../context/MainContext'

import {
  LoginMain,
  LoginForm,
  WebsiteLogo,
  InputElement,
  InputLabel,
  Checkbox,
  CheckboxDiv,
  LoginBtn,
  ErrorMsg,
  ErrorDiv,
} from './styledComponents'

class Login extends Component {
  state = {
    username: 'rahul',
    password: 'rahul@2021',
    errorMsg: '',
    showErr: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErr: true, errorMsg})
  }

  onUsernameChange = event => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  onLogin = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    // console.log(data.error_msg)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onCheckbox = event => {
    if (event.currentTarget.checked) {
      console.log(event.currentTarget)
      const passInput = document.getElementById('password')
      passInput.type = 'text'
    } else {
      const passInput = document.getElementById('password')
      passInput.type = 'password'
    }
  }

  render() {
    const {errorMsg, showErr, username, password} = this.state
    const gotCookie = Cookies.get('jwt_token')
    if (gotCookie !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <MainContext.Consumer>
        {value => {
          const {activeTheme} = value
          return (
            <LoginMain theme={activeTheme}>
              <LoginForm theme={activeTheme} onSubmit={this.onLogin}>
                <WebsiteLogo
                  src={
                    activeTheme === 'DARK'
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <InputLabel htmlFor="username">USERNAME</InputLabel>
                <InputElement
                  onChange={this.onUsernameChange}
                  placeholder="Username"
                  id="username"
                  type="text"
                  value={username}
                />

                <InputLabel htmlFor="password">PASSWORD</InputLabel>
                <InputElement
                  onChange={this.onPasswordChange}
                  placeholder="Password"
                  id="password"
                  type="password"
                  value={password}
                />

                <CheckboxDiv>
                  <Checkbox
                    onClick={this.onCheckbox}
                    id="show"
                    type="checkbox"
                  />
                  <InputLabel htmlFor="show">Show Password</InputLabel>
                </CheckboxDiv>
                <LoginBtn>Login</LoginBtn>
                <ErrorDiv>
                  {showErr ? <ErrorMsg>{`*${errorMsg}`}</ErrorMsg> : null}
                </ErrorDiv>
              </LoginForm>
            </LoginMain>
          )
        }}
      </MainContext.Consumer>
    )
  }
}

export default Login
