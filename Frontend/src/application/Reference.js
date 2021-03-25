
import React,{useState} from 'react'
import Register from '../auth/Register'
import {useHistory} from 'react-router-dom'
import {validateText} from '../auth/validate'
function Reference() {

    let history = useHistory();
    const [value,setValue] = useState({
        refName1:'',
        address1:'',
        phoneNo1:'',
        city1:'',
        state1:'',
        pincode1:'',
        refName2:'',
        address2:'',
        phoneNo2:'',
        city2:'',
        state2:'',
        pincode2:''
    })

    const {
        refName1,
        address1,
        phoneNo1,
        city1,
        state1,
        pincode1,
        refName2,
        address2,
        phoneNo2,
        city2,
        state2,
        pincode2
    } = value


    const validate = (event) => {
        // event.preventDefault();
        if(
            validateText(refName1) &&
            validateText(address1) &&
            validateText(phoneNo1) &&
            validateText(city1) &&
            validateText(state1) &&
            validateText(pincode1) &&
            validateText(refName2) &&
            validateText(address2) &&
            validateText(phoneNo2) &&
            validateText(city2) &&
            validateText(state2) &&
            validateText(pincode2)
            

        )
            {
                history.push("/documentupload")
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
                        REFERENCES
                        <p></p>
                    </h6>
                    <div className="row g-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("refName1")} value={refName1} placeholder="*REFERENCE NAME 1" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("address1")} value={address1} placeholder="ADDRESS" />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("phoneNo1")} value={phoneNo1} placeholder="PHONE NUMBER" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("city1")} value={city1} placeholder="CITY" />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("state1")} value={state1} placeholder="STATE" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("pincode1")} value={pincode1} placeholder="PINCODE" />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("refName2")} value={refName2} placeholder="*REFERENCE NAME 2" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("address2")} value={address2} placeholder="ADDRESS" />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("phoneNo2")} value={phoneNo2} placeholder="PHONE NUMBER" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("city2")} value={city2} placeholder="CITY" />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("state2")} value={state2} placeholder="STATE" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" onChange={handleChange("pincode2")} value={pincode2} placeholder="PINCODE" />
                        </div>
                        <button onClick={validate} className="btn btn-primary">Next</button>
                    </div>
                </div>
            </div>
        </Register>
    )
}

export default Reference
