import React from 'react'
import '../assets/css/sidebar.css'
const Backbtn = () =>  {
    return (
        <div className="mt-3">
            <button className="back"><i class="fas fa-chevron-left"></i></button>
            <label> List of all Application <span>&#62;&#62;Create New</span></label>
        </div>
    )
}

export default Backbtn
