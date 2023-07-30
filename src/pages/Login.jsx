import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authentication, logout } from '../redux/slice/authSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.auth.user)
    console.log("State", user.isAuthenticated);
    return (
        <>
            <div>Login {`${user.isAuthenticated} ${user.name}`}</div>
            <button onClick={()=> [dispatch(authentication()), navigate("/")]}>Click</button>
        </>
    )
}

export default Login