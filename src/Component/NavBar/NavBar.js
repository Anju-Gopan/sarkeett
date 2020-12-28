import React from 'react'
import logo from './Imges/sarkeett-logo.png'
import './NavBar.css'
export default function NavBar() {
    return (
        <div>
            <div className="navbar">
                <div className="navbar__first">
                    <div className="navbar__first_elmeant el-1">
                        <img src={logo} alt="" />
                    </div>
                    <div className="navbar__first_elmeant el-2">
                        <h1>SARKEETT</h1>
                    </div>    
                </div>
                <div className="navbar__last">
                    <div className="navbar__last__elmeant">
                        <button className="button">
                            
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
