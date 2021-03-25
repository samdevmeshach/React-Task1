import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import Register from '../auth/Register'
import {validateText} from '../auth/validate'
const PersonalDetails = () => {

    let history = useHistory();
    const [value,setValue] = useState({
        firstname:'',
        lastname:'',
        dob:'',
        phone:'',
        tenure:'',
        gender:'',
        email:'',
        loanamount:'',
        panNo:'',
        aadharNo:'',
        voterId:'',
        voterIdState:'',
        passport:'',
        drivingLicenceState:'',
        drivingLicence:'',
        presentAddress:'',
        presentCity:'',
        presentState:'',
        presentPincode:'',
        permanentAddress:'',
        permanentCity:'',
        permanentState:'',
        permanentPincode:''
    })

    const {
        firstname,
        lastname,
        dob,
        phone,
        tenure,
        gender,
        email,
        loanamount,
        panNo,
        aadharNo,
        voterId,
        voterIdState,
        passport,
        drivingLicenceState,
        drivingLicence,
        presentAddress,
        presentCity,
        presentState,
        presentPincode,
        permanentAddress,
        permanentCity,
        permanentState,
        permanentPincode
    } = value

    const handleChange = name => event => {
        setValue({...value,[name]:event.target.value})  
        console.log(JSON.stringify(value))
    }


    const validate = (event) => {
        // event.preventDefault();
        if(
            validateText(firstname)&& 
            validateText(lastname)&&
            validateText(dob)&&
            validateText(phone)&&
            validateText(tenure)&&
            validateText(gender)&&
            validateText(email)&&
            validateText(loanamount)&&
            validateText(panNo)&&
            validateText(aadharNo)&&
            validateText(voterId)&&
            validateText(voterIdState)&&
            validateText(passport)&&
            validateText(drivingLicenceState)&&
            validateText(drivingLicence)&&
            validateText(presentAddress)&&
            validateText(presentCity)&&
            validateText(presentState)&&
            validateText(presentPincode)&&
            validateText(permanentAddress)&&
            validateText(permanentCity)&&
            validateText(permanentState)&&
            validateText(permanentPincode))
            {
                history.push("/additionaldetails")
        }
        else{
            alert("All field are mandatory")
        }
    }

    return (
        <Register>
            <div className="m-4 form">
                <div className="box">
                    <h6 className="m-3">
                        PERSONAL DETAILS
                        <p></p>
                    </h6>
                    <div className="row g-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("firstname")} value={firstname} placeholder="FIRST NAME" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("lastname")} value={lastname} placeholder="LAST NAME" />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("dob")} value={dob} placeholder="DOB" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("phone")} value={phone} placeholder="PHONE" />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("tenure")} value={tenure} placeholder="TENURE" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("gender")} value={gender} placeholder="GENDER" />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("email")} value={email} placeholder="EMAIL ID" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("loanamount")} value={loanamount} placeholder="LOAN AMOUNT REQUIRED" />
                        </div>
                    </div>
                </div>
                <div className="box mt-4">
                    <h6 className="m-3">
                        IDENTITY DETAILS
                        <p></p>
                    </h6>
                    <div className="row g-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("panNo")} value={panNo} placeholder="PERMANENT ACCOUNT NUMBER ( PAN )" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("aadharNo")} value={aadharNo} placeholder="AADHAR NUMBER" />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("voterId")} value={voterId} placeholder="VOTER ID" />
                        </div>
                        <div class="col-md-6">
                            <select id="inputState" onChange={handleChange("voterIdState")} class="form-select">
                                <option selected>VOTER ID STATE</option>
                                <option>...</option>
                            </select>
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("passport")} value={passport} placeholder="PASSPORT" />
                        </div>
                        <div class="col-md-6">
                            <select id="inputState" onChange={handleChange("drivingLicenceState")} class="form-select">
                                <option selected>DRIVING LICENCE STATE</option>
                                <option>...</option>
                            </select>
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("drivingLicence")} value={drivingLicence} placeholder="DRIVING LICENCE" />
                        </div>
                    </div>
                </div>
                <div className="box mt-4">
                    <h6 className="m-3">
                        ADDRESS
                        <p></p>
                    </h6>
                    <div className="row g-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("presentAddress")} value={presentAddress} placeholder="PRESENT ADDRESS" />
                        </div>
                        <div class="col-md-6">
                            <select id="inputState" onChange={handleChange("presentCity")} class="form-select">
                                <option selected>CITY</option>
                                <option>...</option>
                            </select>
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <select id="inputState" onChange={handleChange("presentState")} class="form-select">
                                <option selected>STATE</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("presentPincode")} value={presentPincode} placeholder="PINCODE" />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("permanentAddress")} value={permanentAddress} placeholder="PERMANENT ADDRESS" />
                        </div>
                        <div class="col-md-6">
                            <select id="inputState" onChange={handleChange("permanentCity")} class="form-select">
                                <option selected>CITY</option>
                                <option>...</option>
                            </select>
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                    <div class="col-md-6">
                            <select id="inputState" onChange={handleChange("permanentState")} class="form-select">
                                <option selected>STATE</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("permanentPincode")} value={permanentPincode} placeholder="PINCODE" />
                        </div>
                        <button onClick={validate} className="btn btn-primary">Next</button>
                    </div>
                </div>
            </div>
        </Register>
    )
}

export default PersonalDetails
