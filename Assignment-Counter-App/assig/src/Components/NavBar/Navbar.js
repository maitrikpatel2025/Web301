import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Button  from '@material-ui/core/Button'
import './Navbar.css'

const NavBar =()=>{

    return (
        <nav className="TopNav navbar navbar-expand-lg">
        <div>
        <MenuIcon/> <Button >Maitrik's Counter App</Button>
        </div>
        <div>
        <Button>About</Button>
        </div>
      </nav>
    )
}
export default NavBar;