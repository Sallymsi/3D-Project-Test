import React, { useState } from 'react';
import '../styles/sass/main.scss';
import Button from '../components/Button';
import Form from '../components/Form';
import FormRegister from '../components/FormRegister';


function HomeFirst() {
    const [isActive, setIsActive] = useState(false);
    const [isActiveRegister, setIsActiveRegister] = useState(false);

    return (
        <div className='homeScreen'>
            <h1>Êtes-vous prêt ?</h1>
            {!isActiveRegister && !isActiveRegister && (
                <Button label="Se connecter" onClick={() => setIsActiveRegister(true)} className="buttonRegister"/>
            )}
            {isActiveRegister && isActiveRegister && (
                <Button label="S'inscrire" onClick={() => setIsActiveRegister(false)} className="buttonRegister"/>
            )}
            <section>
                {(!isActive && !isActiveRegister && (
                    <Button label="S'inscrire" onClick={() => setIsActive(true)} className={`${isActive ? 'animationLTopButton' : ''} buttonHome`}/> 
                ))}
                {isActive && !isActiveRegister && (
                    <Form className={`${isActive ? 'animationLTopForm' : ''} formBlock`}/>
                )}
                {isActiveRegister && (
                    <FormRegister />
                )} 
            </section>
        </div>
    );
}

export default HomeFirst;