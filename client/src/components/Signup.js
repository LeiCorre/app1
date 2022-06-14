import React, {forwardRef, useEffect, useState} from "react"
import DatePicker, { CalendarContainer } from "react-datepicker";
import xIcon from "../assets/icons/x-solid.svg";
import backArrow from "../assets/icons/arrow-left-long-solid.svg";
import "react-datepicker/dist/react-datepicker.css";
import catIcon from "../assets/icons/cat.svg"
var PhoneNumber = require('awesome-phonenumber');
const countryCodes = require('../../src/assets/countries.json')

//https://stackoverflow.com/questions/64882223/im-having-trouble-with-react-datepicker-position for correcting an issue where the datepicker wasn't sitting on top


  

function SignUp () {

    let codeSort = countryCodes.sort((a, b) => a.code.localeCompare(b.code))

    let cc = codeSort.map((x, i) => {
        return <option key={i}>{x.code}</option>
    })

    const nameInput = React.useRef(null);

    const datePi = React.useRef(null);

    const phoneInput = React.useRef(null);

    const ccInput = React.useRef(null);

    const emailInput = React.useRef(null);

    const nextButton = React.useRef(null);

    const [startDate, setStartDate] = useState(null);
 
    const theDate = new Date();

    const theDateStr = theDate.toString()

    const dateString = theDateStr.slice(4, 15)

    const [count, setCount] = React.useState(0)

    const [ nameFilled, setNameFilled ] = React.useState(false)

    const [ numValid, setNumValid ]  = React.useState(false)

    const numberValidator = () => {
        let cCode = ccInput.current.value;

        let phone = phoneInput.current.value;
        let phoneError = document.getElementById('whats-your-number')

        let numberValidator = new PhoneNumber(phone, cCode)
        console.log(numberValidator.isValid())

        if (numberValidator.isValid()) {
            setNumValid(true)
            phoneInput.current.classList.remove('input-error')
            phoneError.classList.replace('display-inline', 'display-none')
        } else {
            setNumValid(false)
            phoneInput.current.classList.add('input-error')
            phoneError.classList.replace('display-none', 'display-inline')
        }
    }

    const emailValidator = () => {

        // https://qawithexperts.com/article/javascript/email-validation-using-javascript-with-or-without-regex/317
        let email = emailInput.current.value;
        let emailError = document.getElementById('whats-your-email')


        if (email.includes('@') === false || email.length < 2 || email.includes('..') ) {
            emailInput.current.classList.add('input-error');
            emailError.classList.replace('display-none', 'display-inline')
        } else {
            emailInput.current.classList.remove('input-error');
            emailError.classList.replace('display-inline', 'display-none')
        }
    }

    const enableButton = () => {

        let name = nameInput.current.value;

        if (name.length > 0 && numValid === true) {
            nextButton.current.disabled = false;
        } else {
            nextButton.current.disabled = true;
        }
        
    }


    const changeFocus = (event) => {
        event.target.previousElementSibling.focus()
    }

    const changeFocusName = (event) => {
        event.target.previousElementSibling.previousElementSibling.focus()
    }


    const placeholderOnFocus = event => {
        let length = event.target.value.length;
        if (length > 0) {
            event.target.nextElementSibling.classList.replace('signup-placeholder', 'filled-input')
        } else {
            event.target.nextElementSibling.classList.replace('filled-input', 'signup-placeholder')
        }
    }

    const nameErrorInput = () => {
        let ele = document.getElementById('whats-your-name');
        if (nameFilled === true && count === 0) {
            nameInput.current.classList.add('input-error')
            ele.classList.replace('display-none', 'display-inline')  
        } else {
            nameInput.current.classList.remove('input-error') 
            ele.classList.replace('display-inline', 'display-none')
        }
        
    }
    

    const namePlaceholderOnFocus = event => {
        let length = event.target.value.length;
        let name = event.target.nextElementSibling.nextElementSibling;
        
        if (length > 0) {
            name.classList.add('filled-input')
            name.classList.remove('signup-placeholder')
        } else {
            name.classList.remove('filled-input')
            name.classList.add('signup-placeholder')
        }

        nameErrorInput(event)
    }
    

    const counter = event => {
        setCount(event.target.value.length)

        if (count > 0) {
            setNameFilled(true)
            console.log(nameInput.current.value)
        }
        
    } 


    useEffect(() => {
        nameErrorInput()
    }, [count, nameFilled])

    useEffect(()=> {
        enableButton()
    }, [numValid])


    function phoneEmailTog (e) {
        let phone = document.getElementById("signup-field-2")
        let email = document.getElementById("signup-field-3")
        let p1 = document.getElementById('pet1')
        let p2 = document.getElementById('pet2')

        e.preventDefault()

        if (phone.classList.contains("signup-toggle-vis")) {
            phone.classList.replace("signup-toggle-vis", "signup-toggle-non")
            email.classList.replace("signup-toggle-non", "signup-toggle-vis")
            p1.classList.replace('signup-toggle-vis', 'signup-toggle-non')
            p2.classList.replace('signup-toggle-non', 'signup-toggle-vis')
            
        } else {
            email.classList.replace("signup-toggle-vis", "signup-toggle-non")
            phone.classList.replace("signup-toggle-non", "signup-toggle-vis")
            p1.classList.replace('signup-toggle-non', 'signup-toggle-vis')
            p2.classList.replace('signup-toggle-vis', 'signup-toggle-non')
        }

    }

    const closeModal = () => {
        document.getElementsByClassName('signup')[0].classList.replace('display-inline', 'display-none')
        document.getElementsByClassName('portal-side-pic-con')[0].classList.remove('portal-display-none');
        document.getElementsByClassName('portal-login')[0].classList.remove('portal-display-none');
    }
  

    function nameOnChange (event) {
        enableButton();
        counter(event);
    }

    const DateInput = forwardRef(({value, onClick}, dateref) => (
        <input className='date-input' onClick={onClick} ref={dateref} defaultValue={value} required />
    ))

    function nextTab () {
        let sfc1 = document.getElementsByClassName('sfc-1')[0]
        let sfc2 = document.getElementsByClassName('sfc-2')[0]
        let backArrow = document.getElementsByClassName('backArrow')[0]
        let xsignup = document.getElementsByClassName('x-signup')[0]

        sfc1.classList.add('display-none')
        sfc2.classList.remove('display-none')
        backArrow.classList.remove('display-none')
        xsignup.classList.add('display-none')
    }

    const prevTab = () => {
        let sfc1 = document.getElementsByClassName('sfc-1')[0]
        let sfc2 = document.getElementsByClassName('sfc-2')[0]
        let backArrow = document.getElementsByClassName('backArrow')[0]
        let xsignup = document.getElementsByClassName('x-signup')[0]

        sfc2.classList.add('display-none')
        sfc1.classList.remove('display-none')
        backArrow.classList.add('display-none')
        xsignup.classList.remove('display-none')
    }



    return (
        <div className="signup display-none">
            <div className='signup-box-overlay'></div>
            <div className='signup-box'>
              <img className="xIcon x-signup" src={xIcon} alt='' onClick={closeModal} />
                <img className="backArrow display-none" src={backArrow} alt='' onClick={prevTab} />
                <img className="signup-login-icon" src={catIcon} alt="" />
                
                <form className="signup-form">
                    <div className="signup-form-scroll sfc-1"> 
                        <h1 className="create-account">Create your account</h1>
                        <div className='signup-input-wrap'>
                            <input name='Name' id="signup-name" ref={nameInput} onChange={nameOnChange} onFocus={namePlaceholderOnFocus} onBlur={namePlaceholderOnFocus} maxLength="50" />
                            <span className='signup-name-char'> {count} / 50</span>
                            <span className="signup-placeholder" id='signup-placeholder-name' onClick={changeFocusName}>Name</span>
                            <span className='input-error-message display-none' id='whats-your-name'>&nbsp;What's your name?</span>
                        </div>
                        <br />
                    
                        <div className='signup-input-wrap signup-toggle-vis' id="signup-field-2">
                            <input name="Phone" type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" ref={phoneInput} id="signup-phone" onChange={numberValidator} onFocus={placeholderOnFocus} onBlur={placeholderOnFocus} />
                            <span className="signup-placeholder" id='signup-placeholder-phone' onClick={changeFocus}>Phone</span>
                            <span className="input-error-message display-none" id='whats-your-number'>Please enter a valid phone number</span>
                            <span className='country-code-asterisk'>*</span>
                            <span className='country-code-info'>Country of Phone Number</span>
                            <select className='country-code' ref={ccInput} onChange={numberValidator} required>{cc}</select>
                        </div>

                        <div className='signup-input-wrap signup-toggle-non' id="signup-field-3">
                            <input name="Email"  type='email' ref={emailInput} id="signup-email" onFocus={placeholderOnFocus} onBlur={placeholderOnFocus} onChange={emailValidator} />
                            <span className="signup-placeholder" id='signup-placeholder-email' onClick={changeFocus}>Email</span>
                            <span className="input-error-message display-none" id='whats-your-email'>Please enter a valid email</span>
                        </div>  
                        <br />
                        <div className="right-align">
                            <button className="phone-email-toggle signup-toggle-vis" id="pet1" onClick={phoneEmailTog}>Use email instead</button>
                            <button className="phone-email-toggle signup-toggle-non" id='pet2' onClick={phoneEmailTog}>Use phone instead</button>  
                        </div>

                        <br/>
                        <h2 className="dob">Date of Birth</h2>
                        <p className="dob-info">This will not be shown publicly.  Confirm your own age even if this account is for a business, a pet or something else.</p>
                        <div className='signup-input-wrap signup-input-wrap-dob'>
                            <DatePicker 
                                ref={datePi}
                                selected={startDate} 
                                onChange={(date) => setStartDate(date)}  
                                showYearDropdown 
                                yearDropdownItemNumber={100} 
                                showMonthDropdown 
                                scrollableYearDropdown 
                                dropdownMode="select" 
                                maxDate={new Date(dateString)} 
                                popperPlacement='top-start' 
                                showPopperArrow={false} 
                                customInput={<DateInput/>} 
                                popperProps={{strategy: 'fixed'}}
                            />

                            
                            <span className="signup-placeholder-dob">MM/DD/YYYY</span>
                        </div>
                    </div>

                    <div className='signup-form-scroll sfc-2 display-none'>
                        <h1 className='customize-your-experience'>Customize your experience</h1> 
                        <h3>Track where you see Cattr content across the web</h3> 
                        <div className='signup-check'>
                            <p className='signup-info'>Cattr uses this data to personalize your experience. This web browsing history will never be stored with your name, email, or phone number.</p>
                            <div className='checkbox-wrap'>
                                <input className='signup-checkbox' type="checkbox" />
                            </div>
                        </div>
                        <p>By signing up you agree to our Terms, Privacy Policy, and Cookie Use. Twitter may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy. Learn more</p>
                    </div> 
                    
                   <button className='signup-next' ref={nextButton} value="Next" onClick={nextTab}>Next</button>
                   {/*  <input type="submit" className='signup-next' ref={nextButton} value="Next" onClick={nextTab}/>*/}
                
                </form>
            </div>
    
        </div>
    )


}

export default SignUp;