import React from 'react';
import { useState } from 'react';
import '../styles/sass/main.scss';

const FormRegister = () => {
    const [emailInputValue, setEmailInputValue] = useState('')
    const [passwordInputValue, setPasswordInputValue] = useState('')

    const handleClick = (e) => {
        e.preventDefault();
    };

    return (
        <div className='formBlock'>
            <form method="post" className='form'>
                <div className='inputForm'>
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" aria-required="true" value={emailInputValue} onChange={(e) => setEmailInputValue(e.target.value)} required/>
                </div>
                <div className='inputForm'>
                    <label for="password">Mot de passe</label>
                    <input type="password" name="password" id="password" aria-required="true" value={passwordInputValue} onChange={(e) => setPasswordInputValue(e.target.value)} required/>
                </div>
                <br></br>
                <div className='buttonForm'>
                    <input type="submit" className='buttonSignin' value="S'inscrire !" id="register" onClick={handleClick}></input>
                </div>
            </form>
        </div>
    );
}

export default FormRegister;