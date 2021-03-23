import React,{useState} from 'react'
import Sidebar from '../core/Sidebar'
import Backbtn from '../core/Backbtn'
import Menu from '../core/Menu'
import logo from '../assets/images/logo1.png'
import '../assets/css/main.css'
const Register = ({children}) => {

    const RegistrationForm = () => (
        <div className="lists">
            <div className="list list1 m-2" id="head">
                <img src={logo} alt="" width="30" height="30" />
                <label>OPTACREDIT</label>
            </div>
            <div className="list sidebar" id="side">
                <Sidebar />
            </div>
            <div className="list list3" id="row1">
                <Backbtn />
            </div>
            <div className="list list4" id="row2">
                <Menu />
            </div>
            <div className="list list5" id="row3">
                {children}
            </div>
        </div>
    )

    return (
        <div>
            {RegistrationForm()}
        </div>
    )
}
export default Register

