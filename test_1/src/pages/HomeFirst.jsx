import React, { useState } from 'react';
import '../styles/sass/main.scss';
import Button from '../components/Button';
import Form from '../components/Form';


function HomeFirst() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='homeScreen'>
            <h1>Balecouille je veux juste du texte de merde</h1>
            <section>
                {!isActive && (
                    <Button label="S'inscrire" onClick={() => setIsActive(true)} className={`${isActive ? 'animationLTopButton' : ''} buttonHome`}/> 
                )}
                {isActive && (
                    <Form className={`${isActive ? 'animationLTopForm' : ''} formBlock`}/>
                )}  
            </section>
        </div>
    );
}

export default HomeFirst;