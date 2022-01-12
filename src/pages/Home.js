import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    
                    <h1>Dimitri Jacquart</h1>
                    <h2>Etudiant ( 21 ans ) </h2>
                    <h4> - Etudiant  en BTS SIO ( services informatiques aux organisations ), option SLAM ( solutions logicielles et applications métiers ),
                        ayant envie d'acquérir de l'expérience.
                         
                    </h4>
                    <h4> - Je donc suis à la Recherche d'un stage de 2ème année ( durée 4 semaines en présentiel ou distanciel).
                         Récemment j'ai découvert que je suis devenu de plus en plus attiré par le domaine du pentest c'est pourquoi j'apprends ce domaine depuis peu de manière autonome et 
                        que je cherche un stage dans ce domaine là.
                    </h4>
                    
                    <div className="pdf">
                        <h2>Voici mon CV ( codé en React.js )</h2>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;