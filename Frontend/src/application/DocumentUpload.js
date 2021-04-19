import React from 'react'
import Register from '../auth/Register'
import '../assets/css/main.css'
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
                        <div className="cont">
                            <input type="file"  id="file"/>
                            <label for="file">
                                <div className="icon"><i class="fas fa-cloud-upload-alt"></i></div>
                                <div className="lab">UPLOAD FILE</div>
                            </label>
                        </div>
                        <div className="cont">
                            <input type="file"  id="addnew"/>
                            <label for="addnew">
                                <div className="icon"><i class="fas fa-plus"></i></div>
                                <div className="lab">ADD NEW</div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </Register>
    )
}

export default DocumentUpload