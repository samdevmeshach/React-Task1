import React from 'react'
import Register from '../auth/Register'
function AdditionalDetails() {
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
                            <input type="text" class="form-control" placeholder="EMPLOYEE NAME" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="OFFICE EMAIL" />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="TOTAL EXPERIENCE" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="OFFICE PHONE" />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="DO YOU HAVE ANY EXISTING DEBT?" />
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
                            <input type="text" class="form-control" placeholder="BANK ACCOUNT NUMBER" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="BRANCH NAME" />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="IFSC CODE" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="BANK NAME" />
                        </div>
                    </div>
                </div>
            </div>
        </Register>
    )
}

export default AdditionalDetails
