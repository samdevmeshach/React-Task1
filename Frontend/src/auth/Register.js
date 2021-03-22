import React,{useState} from 'react'
import Sidebar from '../core/Sidebar'
import Backbtn from '../core/Backbtn'
import Menu from '../core/Menu'
import logo from '../assets/images/logo1.png'
import '../assets/css/main.css'
const Register = ({children}) => {

    const RegistrationForm = () => (
        <div className="lists">
            <div className="list list1 m-2">
                <img src={logo} alt="" width="30" height="30" />
                <label>OPTACREDIT</label>
            </div>
            <div className="list sidebar">
                <Sidebar />
            </div>
            <div className="list list3">
                <Backbtn />
            </div>
            <div className="list list4">
                <Menu />
            </div>
            <div className="list list5">
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

