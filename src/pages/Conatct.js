import React from 'react';
import Navigation from '../components/Navigation';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ImPhone,ImEnvelop } from "react-icons/im";
import { AiFillLinkedin } from "react-icons/ai";


const Conatct = () => {
    return (
        <div className="contact">
            <Navigation/>
            <div className="contactContent">
                
                    <div className="contactBox">
                        <h1>Contactez-moi</h1>
                        <ul>
                            <li>
                                <i className="fas fa-mobile-alt"><ImPhone/></i>
                                <p>0640668687</p>
                                                               
                                
                            </li>
                            <li>
                                <i classname="far fa-encelope"><ImEnvelop/></i>
                                <p>dimitrijacquart@gmail.com</p>
                                
                            </li>
                        </ul>

                    </div>

                    <div className="socialNetwork">
                        <ul>
                            <a href="https://www.linkedin.com/in/dimitri-jacquart-4b1849206/?originalSubdomain=fr" target="_blank" rel="noopener noreferrer">
                                <h4>Linkedin</h4>
                                <i className="fab fa-linkedin"><AiFillLinkedin/></i>
                            </a>
                        </ul>
                    </div>

                </div>
            
            
        </div>
    );
};

export default Conatct;