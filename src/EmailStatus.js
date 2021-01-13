import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BallBeat } from 'react-pure-loaders';
import FormButton from './FormButton';


const Status = ({ handleEmailSent, iconName, color, text, buttonName, sendingEmail }) => {
    return (
        <div className="contact-email-status">
            {
                sendingEmail ?
                    <div className="center-email-status">
                        {text}
                        <BallBeat
                            color={color}
                            loading={sendingEmail}
                        />
                    </div > :
                    <div className="center-email-status">
                        <FontAwesomeIcon icon={iconName} size={"10x"} color={color} />
                        {text}
                        <FormButton
                            title={buttonName}
                            type="button"
                            height={50}
                            onSubmit={buttonName !== "OK" ? handleEmailSent : () => {
                                handleEmailSent();
                                window.scrollTo({ behavior: "smooth", top: true })
                            }} />
                    </div>
            }
        </div>
    )
}
export default function EmailStatus({ emailSent, sendingEmail, handleButtonClick }) {

    return (
        <div className="contact-email-status">
            {
                sendingEmail ?
                    <Status text="sending email ..." color="rgb(176 ,191, 184)" sendingEmail={sendingEmail} />
                    :
                    emailSent ? <Status buttonName="OK" text="email sent sucessfully!" iconName="check" color="green" handleEmailSent={handleButtonClick} /> :
                        <Status buttonName="Try Again" text=" something went wrong!" iconName="exclamation-triangle" color="orange" handleEmailSent={handleButtonClick} />

            }
        </div>

    )
}