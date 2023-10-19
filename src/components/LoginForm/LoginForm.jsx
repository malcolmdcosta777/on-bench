import { useState } from 'react';
import FormInput from '../common/FormInput';
import { validateEmail, validateName, validatePassword, validatePhoneNumber } from '../../utils/formValidate';
import './LoginForm.css';

// 1. create simple login form. 
// Fields: 1. Full Name 2. Phone number 3. Email Address 4. Password. 
// Apply validation: like name should not contain any of the aphaet or number, phone number should only be numers, email must contain domain name ie. .com, .cin etc
// at least 8 characters, a number etc.

// 2. @nd task. Think about storing of this signup information somewhere. Search out for this, what concepts are available in react/react native to achieve this.


const LoginForm = () => {



    const [formInputs, setFormInputs] = useState({
        username: "",
        phoneNumber: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        username: "",
        phoneNumber: "",
        email: "",
        password: "",
    });



    const handleSubmit = (event) => {
        event.preventDefault();
        //validateForm();

        let errorPresent = false;

        for (const property in errors) {
            // console.log(`${property}: ${errors[property]}`);
            if (errors[property]) {
                errorPresent = true;
            }
        }


        if (errorPresent) return;  //if error present prevent form submission


        //store jwt after server call
        const jwtToken = { username: formInputs.username, email: formInputs.email };
        localStorage.setItem('jwtToken', JSON.stringify(jwtToken));

    };


    const handleChange = (event) => {
        const { name, value } = event.target;
        const obj = { ...formInputs, [name]: value };
        setFormInputs(obj);
        validateForm(obj, name);
    };






    const validateForm = (obj, propertyName) => {
        const { username, phoneNumber, email, password } = obj;

        let allErrors = { ...errors };

        if (propertyName === "username") {
            allErrors.username = validateName(username);
        } else if (propertyName === "phoneNumber") {
            allErrors.phoneNumber = validatePhoneNumber(phoneNumber);
        } else if (propertyName === "email") {
            allErrors.email = validateEmail(email);
        } else if (propertyName === "password") {
            allErrors.password = validatePassword(password);
        }


        setErrors(allErrors);

    };







    return (
        <>
            <div className='container'>
                <div className="card form-container">

                    <form onSubmit={handleSubmit}>

                        <FormInput
                            error={errors.username}
                            name={"username"}
                            label={"Name"}
                            type={"text"}
                            value={formInputs.username}
                            onChange={handleChange}
                        />


                        <FormInput
                            error={errors.phoneNumber}
                            name={"phoneNumber"}
                            label={"Phone number"}
                            type={"number"}
                            value={formInputs.phoneNumber}
                            onChange={handleChange}
                        />


                        <FormInput
                            error={errors.email}
                            name={"email"}
                            label={"Email Address"}
                            type={"email"}
                            value={formInputs.email}
                            onChange={handleChange}
                        />


                        <FormInput
                            error={errors.password}
                            name={"password"}
                            label={"Password"}
                            type={"password"}
                            value={formInputs.password}
                            onChange={handleChange}
                        />


                        <div className="form-button">
                            <button className="btn btn--secondary" type='submit'>Log In</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginForm;