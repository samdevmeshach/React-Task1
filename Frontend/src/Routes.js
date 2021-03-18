import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" exact component={Register} />
            </Switch>
        </BrowserRouter>
    );
}


export default Routes;