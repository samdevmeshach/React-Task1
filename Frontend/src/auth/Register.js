import React,{useState} from 'react'
const Register = () => {

    const [values,setValues] = useState({
        name:'',
        email:'',
        password:'',
        address:'',
        number:'',
        error:'',
        showPassword:false,
    })
    const {name,email,password,showPassword,address,number} = values;

    const handleChange = name => event => {
        setValues({...values,error:false,[name]:event.target.value})
    }
    const toogle = () => {
        setValues({...values,showPassword:!showPassword})
    }

    const onSubmit = (event) => {
        event.preventDefault();
    }

    const RegistrationForm = () => (
        <div className="container mt-5">
            <h1>Register</h1>
            <form>
                <div className="row">
                    <div className="col-6">
                        <h5 className="text-center text-primary mt-3">Personal Details</h5>
                        <div className="form-group">
                            <label className="text-muted">Name</label>
                            <input onChange={handleChange("name")} type="text" className="form-control" value={name} />
                        </div>
                        <label className="text-muted">Email</label>
                        <div className="input-group">
                            <input type="email" onChange={handleChange("email")} className="form-control" value={email} />
                        </div>
                        <label className="text-muted">Password</label>
                        <div className="input-group">
                            <input type={showPassword ? "text" : "password"} onChange={handleChange("password")} className="form-control" value={password} />
                            <span onClick={toogle} className="input-group-text"><i className={showPassword ? "far fa-eye" : "far fa-eye-slash"} ></i></span>
                        </div>
                        <h5 className="text-center text-primary mt-3">Additional Details</h5>
                        <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Address</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" onChange={handleChange("address")} value={address} rows="3"></textarea>
                        </div>
                        <label className="text-muted">Number</label>
                        <div className="input-group">
                            <input type="number" onChange={handleChange("number")} value={number} className="form-control"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <h5 className="text-center text-primary mt-3">Reference</h5>
                        
                        <h5 className="text-center text-primary mt-3">Document Upload</h5>
                        <div class="mb-3">
                        <label for="formFile" class="text-muted">Upload File</label>
                        <input class="form-control" type="file" id="formFile" />
                        </div>
                        <button onClick={onSubmit} className="btn btn-primary mt-3 float-end">Register</button>
                    </div>
                </div>
                
            </form>  
        </div>
    )

    return (
        <div>
            {RegistrationForm()}
        </div>
    )
}
export default Register

