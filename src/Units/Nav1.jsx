import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav1() {
  return (
    <div className="  pt-3 pb-3 bg-primary">
    <div>
    <nav>
       <ul  className="nav nav-pills flex-column flex-sm-row">
          <li className="nav-item">
             <Link className="flex-sm-fill text-sm-center nav-link text-light" aria-current="page"  to="/">Home</Link>
          </li>
          <li className="nav-item">
             <Link className="flex-sm-fill text-sm-center nav-link text-light" aria-current="page" to="/Login">Login</Link>
          </li>
          <li className="nav-item">
             <Link className="flex-sm-fill text-sm-center nav-link text-light" aria-current="page" to="/Registration">Registration</Link>
          </li>
          <li className="nav-item">
             <Link className="flex-sm-fill text-sm-center nav-link text-light" aria-current="page"  to="/Order">Order</Link>
          </li>
          <li className="nav-item">
             <Link className="flex-sm-fill text-sm-center nav-link text-light" aria-current="page" to="/Payment">Payment</Link>
          </li>
          <li className="nav-item">
             <Link className="flex-sm-fill text-sm-center nav-link text-light" aria-current="page"  to="/ProductListing">ProductListings</Link>
          </li>
          <li className="nav-item">
             <Link className="flex-sm-fill text-sm-center nav-link text-light" aria-current="page"  to="/Userdetails">Userdetails</Link>
          </li>
       </ul>
 </nav>
 </div>
 </div>
 );
};
  

