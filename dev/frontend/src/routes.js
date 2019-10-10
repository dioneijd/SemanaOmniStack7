import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Feed from './pages/Feed'
import New  from './pages/New'
import New2 from './pages/Feed/New2'
import Login from './pages/Login/Login'

function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={Feed}/>
            <Route path="/login" component={Login}/>
            <Route path="/new" component={New}/>
            <Route path="/new2" component={New2}/>
        </Switch>
    )
}

export default Routes
