import React, { useEffect, useState } from 'react'
import "./Contact.css"

import { Formik } from "formik";
import * as Yup from "yup";

import emailjs, { init } from 'emailjs-com';
import EmailStatus from './EmailStatus';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import ReCAPTCHA from "react-google-recaptcha";



const contactSchema = Yup.object().shape({
    contactFirstName: Yup.string().required().label("First Name"),
    contactLastName: Yup.string().required().label("Last Name"),
    contactEmail: Yup.string().email().required().label("Email"),
    contactPhone: Yup.number().required().min(0).max(9999999999).label("Phone").typeError("Phone must be a number"),
    contactMessage: Yup.string().required().label("Message"),


});


const ContactTextArea = ({ label, error, onChange, ...otherprops }) => {
    return (
        <div className="contact-text-area-container">
            <div className="contact-input-label">{label}</div>
            <div className="contact-text-area">
                <textarea onChange={onChange}{...otherprops} />
            </div>
            <div className="contact-text-area-error">
                <p>{error}</p>
            </div>


        </div>
    )
}

const ContactInput = ({ label, error, onChange, ...otherprops }) => {

    return (
        <div className="contact-input-container">
            <div className="contact-input-label"> <p>{label}</p></div>
            <div className="contact-input">
                <input onChange={onChange} {...otherprops} />
            </div>
            <div className="contact-input-error">
                <p>{error}</p>
            </div>


        </div>
    )
}

// height = { 500}
export

    const Form = ({ handleSendingEmail, location }) => {
        const [sendingEmail, setSendingEmail] = useState(false);
        const [emailSent, setEmailSent] = useState(null);
        const [captureResponse, setCaptureResponse] = useState(null);


        function onRecaptureChange(value) {
            if (value) {
                setCaptureResponse(value)
            } else {
                setCaptureResponse(null)
            }
        }

        const sendEmail = (templateId, variables) => {
            try {

                emailjs.send(
                    "service_1mn3ymq",
                    templateId,
                    variables,


                ).then(res => {
                    console.log('Email successfully sent!')
                    // setLoading(false)
                    setSendingEmail(false)
                    setEmailSent(true)
                }).catch(err => {
                    console.error('Oh well, you failed. Here some thoughts on the error that occured:', err)
                    // setLoading(false)
                    setSendingEmail(false)
                    setEmailSent(false)
                })
            } catch (error) {
                console.log("error = " + error)
                // setLoading(false)
                setSendingEmail(false);
                setEmailSent(false)
            }

        }



        return (

            <div className="contact-form">
                {sendingEmail === false && emailSent === null ?
                    <Formik
                        initialValues={{ contactFirstName: "", contactLastName: "", contactEmail: "", contactPhone: "", contactCompany: "", contactMessage: "" }}
                        onSubmit={async (fields, { setFieldError, }) => {
                            // this.preventDefault();
                            if (!captureResponse) {
                                return;
                            }
                            setSendingEmail(true)
                            sendEmail("template_7riie8i", {

                                from_first_name: fields.contactFirstName,
                                from_last_name: fields.contactLastName,
                                reply_to: fields.contactEmail,
                                contact_phone: fields.contactPhone,
                                contact_company: fields.contactCompany,
                                message: fields.contactMessage,
                                "g-recaptcha-response": captureResponse


                            })
                            setCaptureResponse(null);

                        }

                        }
                        validationSchema={contactSchema}
                    >
                        {({ handleChange, handleSubmit, errors }) => (
                            <>
                                <div className="contact-names">
                                    <ContactInput
                                        label="First Name"
                                        onChange={handleChange("contactFirstName")}
                                        error={errors ? errors.contactFirstName : ""}

                                    />
                                    <ContactInput
                                        label="Last Name"
                                        onChange={handleChange("contactLastName")}
                                        error={errors ? errors.contactLastName : ""}
                                    />
                                </div>
                                <div className="contact-email">
                                    <ContactInput
                                        label="Email"
                                        onChange={handleChange("contactEmail")}
                                        error={errors ? errors.contactEmail : ""}
                                    />
                                </div>
                                <div className="contact-number-company">
                                    <ContactInput
                                        label="Contact Number"
                                        onChange={handleChange("contactPhone")}
                                        error={errors ? errors.contactPhone : ""}
                                        minLength={10}
                                        maxLength={10}
                                    />
                                    <ContactInput
                                        label="Company (if applicable)"
                                        onChange={handleChange("contactCompany")}

                                    />
                                </div>
                                <div className="contact-message">
                                    <ContactTextArea
                                        label="Message"
                                        placeholder="Tell us more here. We'll aim to get back to you as soon as possible."
                                        onChange={handleChange("contactMessage")}
                                        error={errors ? errors.contactMessage : ""}
                                    />
                                </div>
                                <div className="contact-send">



                                    <button type="submit" onClick={handleSubmit}>send</button>


                                    <ReCAPTCHA
                                        sitekey="6LdcRCoaAAAAABhj0z2QpTLzO3a6cBSbCkfJG8zW"
                                        onChange={onRecaptureChange}
                                    />


                                </div>



                            </>)}
                    </Formik>

                    :
                    <EmailStatus emailSent={emailSent} sendingEmail={sendingEmail} handleButtonClick={() => setEmailSent(null)} />
                }
            </div>
        )
    }

function Contact() {


    useEffect(() => {
        init("user_j1ADGdHX72eDEfCx1jLGC");
    }, [])
    return (
        <>
            <div className="contact-page-heading">
                Get in touch.
            </div>
            <div className="contact-page-container">

                <div className="contact-form-container">
                    <Form />
                </div>
            </div>
        </>
    )
}

export default Contact;




