import React from 'react'
import Register from '../auth/Register'
import TextField from '@material-ui/core/TextField';
const PersonalDetails = () => {
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
                            <input type="text" class="form-control" placeholder="FIRST NAME" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="LAST NAME" />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="DOB" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="PHONE" />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="TENURE" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="GENDER" />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="EMAIL ID" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="LOAN AMOUNT REQUIRED" />
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
                            <input type="text" class="form-control" placeholder="PERMANENT ACCOUNT NUMBER ( PAN )" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="AADHAR NUMBER" />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="VOTER ID" />
                        </div>
                        <div class="col-md-6">
                            <select id="inputState" class="form-select">
                                <option selected>VOTER ID STATE</option>
                                <option>...</option>
                            </select>
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="PASSPORT" />
                        </div>
                        <div class="col-md-6">
                            <select id="inputState" class="form-select">
                                <option selected>DRIVING LICENCE STATE</option>
                                <option>...</option>
                            </select>
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="DRIVING LICENCE" />
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
                            <input type="text" class="form-control" placeholder="PRESENT ADDRESS" />
                        </div>
                        <div class="col-md-6">
                            <select id="inputState" class="form-select">
                                <option selected>CITY</option>
                                <option>...</option>
                            </select>
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <select id="inputState" class="form-select">
                                <option selected>STATE</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="PINCODE" />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="PERMANENT ADDRESS" />
                        </div>
                        <div class="col-md-6">
                            <select id="inputState" class="form-select">
                                <option selected>CITY</option>
                                <option>...</option>
                            </select>
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                    <div class="col-md-6">
                            <select id="inputState" class="form-select">
                                <option selected>STATE</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="PINCODE" />
                        </div>
                    </div>
                </div>
            </div>
        </Register>
    )
}

export default PersonalDetails
