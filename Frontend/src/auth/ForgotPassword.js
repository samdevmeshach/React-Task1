import React,{useState} from 'react'
import {Link } from 'react-router-dom'
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import '../assets/css/main.css'
import {validateEmail} from './validate'
import logo from '../assets/images/logo1.png'

const ForgotPassword = () => {

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
    }

    const toogle = () => {
        setValues({...values,showPassword:!showPassword})
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
                Check Mail
            </Alert>
        </Snackbar>
    )

    const login = (event) => {
        event.preventDefault();
        setValues({...values,error:false,loading:true})
        if(validateEmail(email)){
            setValues({...values,success:true})
        }
        else{
            setValues({...values,error:true,errortxt:"Invalid Email"})
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
                            <h1>Forgot Password</h1>
                            <p>We will send a reset link to your Email ID to reset your password</p>
                            <div className="form-group">
                                <input onChange={handleChange("email")} type="text" className="form-control" value={email} placeholder="Email ID" />
                            </div>
                            <button onClick={login} className="btn mt-3 colo">SUBMIT</button>
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
export default ForgotPassword

