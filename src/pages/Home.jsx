import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/slice/authSlice'

const Home = () => {
    const dispatch = useDispatch()
    return (
        <div>Home
            <button onClick={() => [dispatch(logout())]}>Click</button>
        </div>

    )
}

export default Home