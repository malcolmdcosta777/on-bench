export const validateName = (username, allErrors) => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    //allows whitespace, lowercase, uppercase, 
    //+ 1 0r more charcs
    //$ end of string

    if (!username.trim()) {
        allErrors.username = "name is required";
    } else if (username.length < 10) {
        allErrors.username = "name too short";
    } else if (!username.match(nameRegex)) {
        allErrors.username = "please enter a valid name";
    } else {
        allErrors.username = ""
    }



};


export const validatePhoneNumber = (phoneNumber, allErrors) => {
    const phoneNumberRegex = /^\d+$/; //not needed if have given input type as number but still added cause asked

    //d+ same as  [0-9] , one or more digits

    if (!phoneNumber.trim()) {
        allErrors.phoneNumber = "phone number is required";
    } else if (!phoneNumber.match(phoneNumberRegex)) {
        allErrors.phoneNumber = "please enter a valid mob no";
    } else if (phoneNumber.length !== 10) {
        allErrors.phoneNumber = "phone number must be 10 digits";
    } else {
        allErrors.phoneNumber = ""
    }

};


export const validateEmail = (email, allErrors) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    // ^ start of the string.
    // [^\s@]+  one or more characters that are not whitespace (\s) or @.
    // @  "@" symbol.
    // \. dot (.).
    // [^\s@]{2,} at least two characters that are not whitespace (\s) or @ --> domain name has at least two characters.
    //$ end of string

    if (!email.trim()) {
        allErrors.email = "email is required"
    } else if (!email.match(emailRegex)) {
        allErrors.email = "please enter a valid email"
    } else {
        allErrors.email = ""
    }

};


export const validatePassword = (password, allErrors) => {

    if (!password.trim()) {
        allErrors.password = "password is required"
    } else if (password.length < 5) {
        allErrors.password = "password too short"
    } else {
        allErrors.password = ""
    }

};