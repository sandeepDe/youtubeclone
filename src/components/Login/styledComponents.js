import styled from 'styled-components'

export const LoginMain = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  background-color: ${props => (props.theme === 'DARK' ? '#212121' : 'white')};
`

export const LoginForm = styled.form`
  height: 450px;
  width: 400px;
  margin: auto;
  box-shadow: ${props =>
    props.theme === 'DARK'
      ? '2px 2px 20px -2px rgba(255,255,255,0.77)'
      : 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'};
  padding: 35px 40px;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.theme === 'DARK' ? 'black' : 'white')};
  border-radius: 8px;
  @media (max-width: 800px) {
    height: 550px;
    padding: 40px 20px;
  }
`
export const InputElement = styled.input`
  height: 40px;
  border: 1px solid #94a3b8;
  border-radius: 2px;
  margin-bottom: 30px;
  padding: 10px;
  background-color: transparent;
  color: #94a3b8;
  ::placeholder {
    color: #94a3b8;
  }
  @media (max-width: 800px) {
    height: 60px;
  }
`
export const Checkbox = styled.input`
  height: 15px;
  width: 15px;
  border: 1px solid #64748b;
  border-radius: 2px;
  margin-right: 5px;
  margin-top: -5px;
  @media (max-width: 800px) {
    height: 30px;
    width: 30px;
  }
`

export const CheckboxDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  margin-top: -15px;
  margin-bottom: 25px;
  @media (max-width: 800px) {
    margin-top: -10px;
  }
`

export const InputLabel = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: #94a3b8;
  margin-bottom: 5px;
  @media (max-width: 800px) {
    font-size: 15px;
    margin-bottom: 8px;
  }
`

export const WebsiteLogo = styled.img`
  height: 45px;
  width: 180px;
  align-self: center;
  margin-bottom: 65px;
  @media (max-width: 800px) {
    margin-bottom: 80px;
  }
`

export const LoginBtn = styled.button`
  background-color: #3b82f6;
  height: 50px;
  border: none;
  color: #ffffff;
  cursor: pointer;

  font-size: 15px;
  font-weight: 600;
  border-radius: 5px;
  @media (max-width: 800px) {
    height: 60px;
    margin-top: 30px;
  }
`

export const ErrorDiv = styled.div`
  height: 30px;
  width: 100%;
  margin-top: 5px;
`

export const ErrorMsg = styled.p`
  color: red;
  font-size: 13px;
`
