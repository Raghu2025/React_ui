import React from 'react'
import {Link} from 'react-router-dom'
import './Menu.css'
const Menu = () => {
  return (
    <>

     <div className="container">
        <div className="navigation">
         <div className="bar"><i className="fas fa-bars"></i></div>
            <ul className="navigation-list">
                <li><Link to="/add"><i className="nico fad fa-plus"></i><span className="listitem">Add Table</span></Link></li>
                <li><Link to="/edit"><i className="nico fas fa-edit"></i><span className="listitem">Edit Table</span></Link></li>
                <li><Link to="/list"><i className="nico fas fa-list"></i><span className="listitem">Table List</span></Link></li>
               
            </ul>
        </div>
        

    </div> 


   
    
    </>
  )
}

export default Menu