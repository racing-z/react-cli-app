import React from 'react'
import {Route,Router,browserHistory} from 'react-router'
import App from '../App'
import home from '../pages/home'

const routerConfig = (
    <Router history={browserHistory}>
        <Route path="app" component={App}></Route>
        <Route path="home" component={home}></Route>
    </Router>
)
export default routerConfig