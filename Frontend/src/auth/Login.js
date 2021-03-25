import React,{useState} from 'react'
import {Link } from 'react-router-dom'
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import '../assets/css/main.css'
import {validateEmail,validatePassword} from './validate'
import logo from '../assets/images/logo1.png'

const Login = () => {

    const [values,setValues] = useState({
        email:'',
        password:'',
        error:'',
        showPassword:false,
        errortxt:'',
        success:''
    })

    

    const {email,password,showPassword,error,errortxt,success} = values;

    const handleChange = name => event => {
        setValues({...values,[name]:event.target.value})
        console.log(values)
    }

    const handleCloseError = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setValues({...values,error: false});
    };
    const handleCloseSuccess = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setValues({...values,success: false});
    };

    const showError = () => (
        <Snackbar open={error} autoHideDuration={6000} onClose={handleCloseError}>
            <Alert onClose={handleCloseError} severity="error">
                {errortxt}
            </Alert>
        </Snackbar>
    )
    const showSuccess = () => (
        <Snackbar open={success} autoHideDuration={6000} onClose={handleCloseSuccess}>
            <Alert onClose={handleCloseSuccess} severity="success">
                Login Successful
            </Alert>
        </Snackbar>
    )

    const login = (event) => {
        event.preventDefault();
        setValues({...values,error:false,loading:true})
        if(validateEmail(email) && validatePassword(password)){
            setValues({...values,success:true})
        }
        else{
            setValues({...values,error:true,errortxt:"Invalid Details"})
        }
    }
    const loginForm = () => (
        <div>
            <div className="heading">
                <label>OPTACREDIT</label>
            </div>
            <div className="bg">
                <div className="logo">
                    <img src={logo} alt="" width="50" height="50" />
                    <label>OPTACREDIT</label>
                </div>
                <div className="row">
                    <div className="col col1">

                    </div>
                    <div className="col">
                        <form className="w-75 login">
                            <h1 className="mb-4">Login</h1>
                            <div className="form-group">
                                <input onChange={handleChange("email")} type="text" className="form-control form-control-lg" value={email} placeholder="User ID" />
                            </div>
                            <div className="from-group mt-3">
                                <input type={showPassword ? "text" : "password"} onChange={handleChange("password")} placeholder="Password" className="form-control form-control-lg" value={password} />
                            </div>
                            <Link to="/forgotpassword">
                                <p className="mt-3">Forgot Password</p>
                            </Link>
                            <button onClick={login} className="btn colo w-50">LOGIN</button>
                        </form>  
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div>
            {loginForm() }
            {showError()}
            {showSuccess()}
        </div>
    )
}
export default Login

