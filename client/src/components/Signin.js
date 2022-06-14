import React, {useEffect, useState} from "react"
import xIcon from "../assets/icons/x-solid.svg";
import catIcon from "../assets/icons/cat.svg"

function SignIn () {

    function closeModal () {
        document.getElementsByClassName('sign-in')[0].classList.replace('display-inline', 'display-none');
        document.getElementsByClassName('portal-side-pic-con')[0].classList.remove('portal-display-none');
        document.getElementsByClassName('portal-login')[0].classList.remove('portal-display-none');
    }

    const changeFocus = (event) => {
        event.target.previousElementSibling.focus()
    }

    return (
        <div className='sign-in display-none'>
            <div className='signin-box-overlay' />
            <div className='signin-box'>
                <img className='xIcon x-signin' src={xIcon} alt='' onClick={closeModal} />
                <img src={catIcon} alt='' className='signin-login-icon' />
                
                <form className='signin-form'>
                    <div className="signin-form-scroll">
                        <h1 className='login-account'>Sign in to Cattr</h1>
                        <div className='signin-input-wrap'>
                            <input name='user-id' id='signin-user-id' />
                            <span className='signin-placeholder' id='signin-placeholder-id' onClick={changeFocus}>Phone, email, or username</span>
                        </div>
                        <br />
                    <input type="submit" className='signin-next' value="Next" />
                    <br />
                    <br />
                    <button className='forgot-password'>Forgot password?</button>
                    <br />
                    <br />
                    <p className='dont-have-account'>Don't have an account? Sign up</p>
                    </div>

                </form>

            </div>
        </div>
    )

}

export default SignIn;