import backimage from "../../assets/pictures/blueabstract.jpg"
import catIcon from "../../assets/icons/cat.svg"
import whiteCatIcon from "../../assets/icons/cat-white.svg"
import React, { useState, useEffect } from 'react'
import SignUp from "../Signup"
import SignIn from "../Signin"


//https://freesvgfiles.org/sitting-cat-svg/

function Portal () {
    const [data, setData] = React.useState(null);

    useEffect(() => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);

    function backgroundVisibility () {
        document.getElementsByClassName('portal-side-pic-con')[0].classList.add('portal-display-none');
        document.getElementsByClassName('portal-login')[0].classList.add('portal-display-none');
    }

    const openModal = () => {
        document.getElementsByClassName('signup')[0].classList.replace('display-none', 'display-inline');
        backgroundVisibility();
    }

    const openModal2 = () => {
        document.getElementsByClassName('sign-in')[0].classList.replace('display-none', 'display-inline');
        backgroundVisibility();
    }



    return (
        <div className="portal">
            <div className='portal-side-pic-con' style={{backgroundImage: 'url(' + backimage + ')'}}>
               {/* <img className="portal-side-pic-back" src={backimage} /> */}
                <div className="portal-side-pic">
                    <img className="portal-side-pic" src={whiteCatIcon} alt="Cat" />
                     {/*<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cat" class="svg-inline--fa fa-cat" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M322.6 192C302.4 192 215.8 194 160 278V192c0-53-43-96-96-96C46.38 96 32 110.4 32 128s14.38 32 32 32s32 14.38 32 32v256c0 35.25 28.75 64 64 64h176c8.875 0 16-7.125 16-15.1V480c0-17.62-14.38-32-32-32h-32l128-96v144c0 8.875 7.125 16 16 16h32c8.875 0 16-7.125 16-16V289.9c-10.25 2.625-20.88 4.5-32 4.5C386.2 294.4 334.5 250.4 322.6 192zM480 96h-64l-64-64v134.4c0 53 43 95.1 96 95.1s96-42.1 96-95.1V32L480 96zM408 176c-8.875 0-16-7.125-16-16s7.125-16 16-16s16 7.125 16 16S416.9 176 408 176zM488 176c-8.875 0-16-7.125-16-16s7.125-16 16-16s16 7.125 16 16S496.9 176 488 176z"></path></svg> */}
               </div>
            </div>

            <div className="portal-login">
                <img className="portal-login-icon" src={catIcon} alt="" />
                <h1 className="portal-login-header">Catting Now</h1>
                <h2 className="portal-login-subheader">Join Cattr today.</h2>

              {/*  <button className="portal-login-google">Signup with Google</button> <br />
                <button className="portal-login-apple">Signup with Apple</button> <br />
                or<br /> */}
                <button className="portal-signup" onClick={() => openModal()} >Sign up with Phone or Email</button>
                <br />
                <br />
                <h3>Already have an account?</h3>
                <button className="portal-signin" onClick={()=> openModal2()}>Sign In</button>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Portal;