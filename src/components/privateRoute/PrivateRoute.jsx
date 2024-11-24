import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({token, children }) => {


    return (
        <div>
            {
                token ? children : <Navigate to='/login' />
            }
        </div>
    )
}

export default PrivateRoute
