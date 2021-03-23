
import React from 'react'
import Register from '../auth/Register'
function Reference() {
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
                            <input type="text" class="form-control" placeholder="*REFERENCE NAME 1" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="ADDRESS" />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="PHONE NUMBER" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="CITY" />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="STATE" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="PINCODE" />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="*REFERENCE NAME 2" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="ADDRESS" />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="PHONE NUMBER" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="CITY" />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="STATE" />
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

export default Reference
