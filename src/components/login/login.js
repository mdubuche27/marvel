import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Login = () => {

    const [ username, setusername ] = useState('')
    const [ password, setpassword ] = useState('')
    const history = useHistory()

    const onSubmit= e => {
        e.preventDefault()
        console.log(username)
        console.log(password)

        axios({
            method:'POST',
            url:'https://easy-login-api.herokuapp.com/users/login',
            data: {
                username: username,
                password: password
            }
        })
        .then(res => {
            localStorage.setItem('token', res.headers['x-access-token'])
            history.push('/characters')
        })
        .catch(err =>
            console.log(err)
        )
    }

  return (
    <StyledForm onSubmit={onSubmit}>
        <StyledSpan>SignIn</StyledSpan>
        <StyledInput onChange={e => {setusername(e.target.value)}} placegolder="username" type='text'></StyledInput>
        <StyledInput onChange={e => {setpassword(e.target.value)}}placegolder="password" type='password'></StyledInput>
        <StyledInput type='submit'></StyledInput>    
    </StyledForm>
  )
}

const StyledSpan = styled.span`
    color: blue;
    margin-bottom: 15px;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledInput = styled.input`
    margin: 6px 0px;
    border-radius: 2px;
    border: none;
`
export default Login