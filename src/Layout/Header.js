import React from 'react'
import Logo from '../media/svg/Logo'
import Link from "../components/Link"
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  console.log(location.pathname)

  return (
    <div className="header">
      <Logo />
      <div className="links">
        <Link to="/control" isActive={location.pathname === '/control'} >Control</Link>
        <Link to="/dashboard" isActive={location.pathname === '/dashboard'}>Dashboard</Link>
      </div>
    </div>
  )
}

export default Header
