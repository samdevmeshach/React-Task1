import React,{useState} from 'react'
import Register from '../auth/Register'
import {useHistory} from 'react-router-dom'
import {validateText} from '../auth/validate'
const AdditionalDetails = () => {

    let history = useHistory();
    const [value,setValue] = useState({
        empName:'',
        empEmail:'',
        experience:'',
        officePhone:'',
        debt:'',
        bankAccNo:'',
        branchName:'',
        ifscCode:'',
        bankName:''
    })

    const {
        empName,
        empEmail,
        experience,
        officePhone,
        debt,
        bankAccNo,
        branchName,
        ifscCode,
        bankName
    } = value


    const validate = (event) => {
        // event.preventDefault();
        if(
            validateText(empName) &&
            validateText(empEmail) &&
            validateText(experience) &&
            validateText(officePhone) &&
            validateText(debt) &&
            validateText(bankAccNo) &&
            validateText(branchName) &&
            validateText(ifscCode)&&
            validateText(bankName)

        )
            {
                history.push("/reference")
        }
        else{
            alert("All field are mandatory")
        }
    }


    const handleChange = name => event => {
        setValue({...value,[name]:event.target.value})  
        console.log(JSON.stringify(value))
    }


    return (
        <Register>
            <div className="m-4 form">
                <div className="box">
                    <h6 className="m-3">
                        GENERAL INFORMATION
                        <p></p>
                    </h6>
                    <div className="row g-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("empName")} value={empName} placeholder="EMPLOYEE NAME" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("empEmail")} value={empEmail} placeholder="OFFICE EMAIL" />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("experience")} value={experience} placeholder="TOTAL EXPERIENCE" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("officePhone")} value={officePhone} placeholder="OFFICE PHONE" />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("debt")} value={debt} placeholder="DO YOU HAVE ANY EXISTING DEBT?" />
                        </div>
                    </div>
                </div>
                <div className="box mt-3">
                    <h6 className="m-3">
                        BANK DETAILS
                        <p></p>
                    </h6>
                    <div className="row g-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("bankAccNo")} value={bankAccNo} placeholder="BANK ACCOUNT NUMBER" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("branchName")} value={branchName} placeholder="BRANCH NAME" />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("ifscCode")} value={ifscCode} placeholder="IFSC CODE" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("bankName")} value={bankName} placeholder="BANK NAME" />
                        </div>
                        <button onClick={validate} className="btn btn-primary">Next</button>
                    </div>
                </div>
            </div>
        </Register>
    )
}

export default AdditionalDetails
