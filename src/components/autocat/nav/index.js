import React from 'react'
import logo from '../../../images/logo.jpeg';
const Nav=()=>{
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">

    <img src={logo} width="70" height="70"/>

    </a>
  </div>
</nav>

    </>
  )
}

export default Nav;