import React from 'react';
import '../css/Navbar.css'
import { Outlet, Link } from 'react-router-dom';

export default function Navbar(){
  return(
    <div>
      <nav className="w3-bar w3-green">
        <Link to="/login" className="w3-button">Login</Link> || {" "}
        <Link to="/cadastros" className="w3-button">Cadastros</Link> || {" "}
        <Link to="/produtos" className="w3-button">Produtos</Link>
      </nav>
      <Outlet />
    </div>
  )
}
