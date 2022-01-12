import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFoundContent">
                <h1>Désolé</h1>
                <NavLink exact to="/">
                <i className="fas fa-home"><FaHome/></i>
                <span>Acceuil</span>
                </NavLink>
            
            </div>
        </div>
    );
};

export default NotFound;