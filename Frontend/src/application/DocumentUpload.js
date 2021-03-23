import React from 'react'
import Register from '../auth/Register'
function DocumentUpload() {
    return (
        <Register>
            <div className="m-4 form">
                <div className="box">
                    <h6 className="m-3">
                        REFERENCES
                        <p></p>
                    </h6>
                    <div className="upload">
                        <input type="file" />
                    </div>
                    <div className="upload">
                        <i class="fas fa-plus"></i>
                        <p>ADD NEW</p>
                    </div>
                    <div className="upload"></div>
                </div>
            </div>
        </Register>
    )
}

export default DocumentUpload