import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './auth/Login'
import Register from './application/PersonalDetails'
import AdditionalDetails from './application/AdditionalDetails'
import Reference from './application/Reference'
import DocumentUpload from './application/DocumentUpload'

import ForgotPassword from './auth/ForgotPassword'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/additionaldetails" exact component={AdditionalDetails} />
                <Route path="/reference" exact component={Reference} />
                <Route path="/documentupload" exact component={DocumentUpload} />
                <Route path="/forgotpassword" exact component={ForgotPassword} />
            </Switch>
        </BrowserRouter>
    );
}


export default Routes;