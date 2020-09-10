
import React from 'react'
import Link from "../../components/Link"
import { ReactComponent as LogoIcon } from './LogoIcon.svg';
import { useLocation } from 'react-router-dom';

function Logo() {
  const location = useLocation();
  return (
    <div className="logo">
      <Link to="/" isActive={location.pathname === '/'}>
        <LogoIcon />
        <div className="projectName">
          Sentinel
        </div>
      </Link>
    </div>
  )
}

export default Logo


