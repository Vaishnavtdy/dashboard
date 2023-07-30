import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute({ children }) {
    const user = useSelector((state => state.auth.user))
    if (!user.isAuthenticated) {
        return (
            <Navigate to="/login" />
        )
    }
    return <Outlet />
}

export default ProtectedRoute