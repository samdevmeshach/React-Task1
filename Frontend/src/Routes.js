import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './auth/Login'
import ForgotPassword from './auth/ForgotPassword'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/forgotpassword" exact component={ForgotPassword} />
            </Switch>
        </BrowserRouter>
    );
}


export default Routes;