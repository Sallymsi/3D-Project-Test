import React from 'react';
import { useState } from 'react';
import '../styles/sass/main.scss';

const Form = () => {
    const [firstInputValue, setFirstInputValue] = useState('')
    const [lastInputValue, setLastInputValue] = useState('')
    const [emailInputValue, setEmailInputValue] = useState('')
    const [passwordInputValue, setPasswordInputValue] = useState('')
    const [repeatPasswordInputValue, setRepeatPasswordInputValue] = useState('')

    const handleClick = (e) => {
        e.preventDefault();
    };

    return (
        <div className='formBlock'>
            <form method="post" className='form'>
                <div className='formBlockTop'>
                    <div className='inputTop'>
                        <label for="firstName">Nom</label>
                        <input type="text" name="firstName" id="firstName" aria-required="true" value={firstInputValue} onChange={(e) => setFirstInputValue(e.target.value)} required/>
                    </div>
                    <div className='inputTop'>
                        <label for="lastName">Prénom</label>
                        <input type="text" name="lasttName" id="lastName" aria-required="true" value={lastInputValue} onChange={(e) => setLastInputValue(e.target.value)} required/>
                    </div>
                </div>
                <div className='inputForm'>
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" aria-required="true" value={emailInputValue} onChange={(e) => setEmailInputValue(e.target.value)} required/>
                </div>
                <div className='inputForm'>
                    <label for="password">Mot de passe</label>
                    <input type="password" name="password" id="password" aria-required="true" value={passwordInputValue} onChange={(e) => setPasswordInputValue(e.target.value)} required/>
                </div>
                <div className='inputForm'>
                    <label for="repeatPassword">Mot de passe</label>
                    <input type="password" name="repeatPassword" aria-required="true" value={repeatPasswordInputValue} onChange={(e) => setRepeatPasswordInputValue(e.target.value)} required/>
                </div>
                <br></br>
                <div className='buttonForm'>
                    <input type="submit" className='buttonSignin' value="S'inscrire !" id="register" onClick={handleClick}></input>
                </div>
            </form>
        </div>
    );
}

export default Form;