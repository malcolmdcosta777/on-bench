export const validateName = (username) => {

    let errorMsg = "";


    const nameRegex = /^[a-zA-Z\s]+$/;
    //allows whitespace, lowercase, uppercase, 
    //+ 1 0r more charcs
    //$ end of string

    if (!username.trim()) {
        errorMsg = "name is required";
    } else if (username.length < 10) {
        errorMsg = "name too short";
    } else if (!username.match(nameRegex)) {
        errorMsg = "please enter a valid name";
    } else {
        errorMsg = ""
    }

    return errorMsg;

};


export const validatePhoneNumber = (phoneNumber) => {

    
    let errorMsg = "";

    const phoneNumberRegex = /^\d+$/; //not needed if have given input type as number but still added cause asked

    //d+ same as  [0-9] , one or more digits

    if (!phoneNumber.trim()) {
        errorMsg = "phone number is required";
    } else if (!phoneNumber.match(phoneNumberRegex)) {
        errorMsg = "please enter a valid mob no";
    } else if (phoneNumber.length !== 10) {
        errorMsg = "phone number must be 10 digits";
    } else {
        errorMsg = ""
    }


    return errorMsg;

};


export const validateEmail = (email) => {

    let errorMsg = "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    // ^ start of the string.
    // [^\s@]+  one or more characters that are not whitespace (\s) or @.
    // @  "@" symbol.
    // \. dot (.).
    // [^\s@]{2,} at least two characters that are not whitespace (\s) or @ --> domain name has at least two characters.
    //$ end of string

    if (!email.trim()) {
        errorMsg = "email is required"
    } else if (!email.match(emailRegex)) {
        errorMsg = "please enter a valid email"
    } else {
        errorMsg = ""
    }


    return errorMsg;
};


export const validatePassword = (password) => {

    let errorMsg = "";

    if (!password.trim()) {
        errorMsg = "password is required"
    } else if (password.length < 5) {
        errorMsg = "password too short"
    } else {
        errorMsg = ""
    }

    return errorMsg;
};