import React,{useState} from 'react'
import '../assets/css/sidebar.css'
const Backbtn = () =>  {
    
    const [show,setShow] = useState(true)
    const hidenav = (event) => {
        event.preventDefault();
        if(show == true){
            document.getElementById("head").style.cssText="display:none"
            document.getElementById("side").style.cssText="display:none"
            document.getElementById("row1").style.marginLeft="-9%"
            document.getElementById("row2").style.marginLeft="-9%"
            document.getElementById("row3").style.marginLeft="-9%"
        }else{
            
            document.getElementById("head").style.cssText="display:block;"
            document.getElementById("side").style.cssText="display:block;"
            document.getElementById("row1").style.marginLeft="0%"
            document.getElementById("row2").style.marginLeft="0%"
            document.getElementById("row3").style.marginLeft="0%"
        }
        setShow(!show)
    }
    
    return (
        <div className="mt-3">
            {
                show ? <button onClick={hidenav} className="back"><i class="fas fa-chevron-left"></i></button> : <button onClick={hidenav} className="back"><i class="fas fa-chevron-right"></i></button>
            }
            <label className="backcontent"> List of all Application <span>&#62;&#62;Create New</span></label>
        </div>
    )
}

export default Backbtn
