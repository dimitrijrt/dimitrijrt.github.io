import React from 'react';
import Experience from '../components/compétences/Experience';
import Hobbies from '../components/compétences/Hobbies';
import Languages from '../components/compétences/Languages';
import OtherSkills from '../components/compétences/OtherSkills';
import Navigation from '../components/Navigation';

const Compétences = () => {
    return (
        <div className="knowledges">
            <Navigation/>
            <div className="knowledgesContent">
                    <Languages/>
                    <Experience/>
                    <Hobbies/>
                    <OtherSkills/>
               

            </div>
        </div>
    );
};

export default Compétences;