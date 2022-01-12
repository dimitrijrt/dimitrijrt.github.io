import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome,FaAddressBook } from 'react-icons/fa';
import { FcWorkflow } from "react-icons/fc";
import { AiFillLinkedin } from "react-icons/ai";

const Navigations = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/moi.jpg" alt="profil-pic"/>
                    <h3>Dimitri Jacquart</h3>
                </div>
            </div>
        {/*lien Home*/}
        <div className="navigation">
            <ul>
                <li>
                    <NavLink exact to="/" activeclassName="navActive">
                        <i className="fas fa-home"><FaHome/></i>
                        <span>Acceuil</span>
                    </NavLink>
                </li>
            
        

        {/*lien cométences*/}
        
                <li>
                    <NavLink exact to="/competences" activeclassName="navActive">
                        <i className="fas fa-mountain"><FcWorkflow/></i>
                        <span>Compétences</span>
                    </NavLink>
                </li>
        
        
        {/*lien contact*/}
        
                <li>
                    <NavLink exact to="/contact" activeclassName="navActive">
                        <i className="fas fa-addres-book"><FaAddressBook/></i>
                        <span>Contact</span>
                    </NavLink>
                </li>
            </ul>
        </div>

        <div className="socialNetwork">
            <ul>
                
                    <a href="https://www.linkedin.com/in/dimitri-jacquart-4b1849206/?originalSubdomain=fr" target="_blank"
                    rel="noopener noreferrer"><i className="fab fa-linkedin"><AiFillLinkedin/></i></a>
                    
                
                    
                
            </ul>
        </div>

            
        </div>
    );
};

export default Navigations;