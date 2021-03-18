import React,{useState} from 'react'
import {Link } from 'react-router-dom'
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

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
        setValues({...values,error:false,[name]:event.target.value})
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
                Login Successful
            </Alert>
        </Snackbar>
    )

    const login = (event) => {
        event.preventDefault();
        setValues({...values,error:false,loading:true})
        if (typeof email !== "undefined") 
        {

            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (pattern.test(email)) 
            {
                if(typeof password !== undefined)
                {
                    var pat = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/);
                    if(!pat.test(password))
                    {
                        setValues({...values,error:true,errortxt:"Invalid Password"})
                    }
                    else
                    {
                        setValues({...values,success:true})
                    }
                }
            }
            else
            {
                setValues({...values,error:true,errortxt:"Invalid Email"})
            }
        }
    }
    const loginForm = () => (
        <div className="container mt-5">
            <h1>Login</h1>
            <form>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange("email")} type="text" className="form-control" value={email} />
            </div>
            <div className="input-group mt-3">
                <input type={showPassword ? "text" : "password"} onChange={handleChange("password")} className="form-control" value={password} />
                <span onClick={toogle} className="input-group-text"><i className={showPassword ? "far fa-eye" : "far fa-eye-slash"} ></i></span>
            </div>
            <button onClick={login} className="btn btn-primary mt-3">Login</button>
            <Link to="/register" >
                <button className="btn btn-primary mt-3">Register</button>
            </Link>
            </form>  

        </div>
    )

    return (
        <div>
            {loginForm()}
            {showError()}
            {showSuccess()}
        </div>
    )
}
export default Login

