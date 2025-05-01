import React from 'react';
import registrationStyle from "../css/registration.module.css"
import RegistrationController from "../widgets/registration/RegistrationController"
const Registration = () => {
    return (
        <div className={registrationStyle.registration}>
            <RegistrationController/>
        </div>
    );
};

export default Registration;