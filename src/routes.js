import React from 'react'
import {Switch, BrowserRouter, Route} from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Login from './pages/login'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard" exact component={Dashboard}/>
                <Route path="/" component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}