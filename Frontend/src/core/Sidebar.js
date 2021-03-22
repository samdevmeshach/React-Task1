import React from 'react'
import '../assets/css/sidebar.css'
import navlogo from '../assets/images/navlogo.png'
const Sidebar = () => {
    return (
        <div>
            <nav>
                <div className="image mt-3">
                    <img src={navlogo} alt=""/>
                </div>
                <div className="mt-2">
                    <select>
                        <option>Ajesh</option>
                    </select>
                </div>
                <div className="setting mt-4">
                    <i class="fas fa-bell"></i>
                    <i class="fas fa-cog"></i>
                </div>
                <div className="menu mt-4">
                    <li className="mt-3">
                        <i class="fas fa-file-alt"></i>
                        <h5>Application</h5>
                    </li>
                    <li className="mt-3">
                        <i class="fas fa-user-tie"></i>
                        <h5>Co-Lender</h5>
                    </li>
                    <li className="mt-3">
                        <i class="fas fa-box-open"></i>
                        <h5>Product</h5>
                    </li>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar
