import React from 'react'
import {Link, Redirect, withRouter} from 'react-router-dom'

const isActive = (history,path) =>{
    if(history.location.pathname === path){
        return {borderBottom:"3px solid green"}
    }
    else{
        return {border:"none"}
    }
}


const Menu = ({history}) => {
    return (
        <div className="menubar">
            <div>
                <Link className="nav-link" style={isActive(history,"/register")} to="/register">
                    PERSONAL DETAILS
                </Link>       
                <Link className="nav-link" style={isActive(history,"/additionaldetails")} to="/additionaldetails">
                    ADDITIONAL DETAILS
                </Link>       
                <Link className="nav-link" style={isActive(history,"/reference")} to="/reference">
                    REFERENCE
                </Link>       
                <Link className="nav-link" style={isActive(history,"/documentupload")} to="/documentupload">
                    DOCUMENT UPLOAD
                </Link>       
            </div>
        </div>
    )
}

export default withRouter(Menu)
