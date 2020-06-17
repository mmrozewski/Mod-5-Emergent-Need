import React from "react"
import Home from "./Home"
import { Route, Redirect } from "react-router-dom"


export default function PrivateRoute({component: Component, ...props}) {
    const { user, hospital, center } = props
    
    
    
    return <Route {...props} render={(routerProps) => {
        return localStorage.token ? <Component {...routerProps} user={user} hospital={hospital} center={center} /> : <Redirect to="/login" />
    }} />
}

// export default function PrivateRoute(props) {
//     const {user} = props
//     return <Route {...props} render={(routerProps) => {
//                 return localStorage.token ? <Home {...routerProps} user={user} /> : <Redirect to="/login" />
//             }} />
// }