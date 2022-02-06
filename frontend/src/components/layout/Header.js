import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="logo">
                            <a href="#"><span style={{color: "#FF9601"}}>NEAR GANG</span><span style={{paddingLeft: "5px",color: "#fff"}}> COUTURE</span></a>
                        </div>
                        <input type="checkbox" id="nav-check"/>
                        <label for="nav-check" className="nav-toggler">
                            <span></span>
                        </label>
                        <nav className="nav">
                            <ul>
                                <li><a href="#idea-section">what we do</a></li>
                                <li><a href="#team-section">who we are</a></li>
                                <li><a href="#gallery">gallery</a></li>
                                <li><a href="https://paras.id/neargangcouture.near/collections" target="_blank">paras collection</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
