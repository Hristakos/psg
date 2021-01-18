import React, { useEffect, useState } from 'react'

import { Formik } from "formik";
import * as Yup from "yup";

import TextInput from './TextInput'
import FormButton from './FormButton';
import TextArea from './TextArea';
import "./ContactUs.css"

import emailjs, { init } from 'emailjs-com';
import EmailStatus from './EmailStatus';

const contactSchema = Yup.object().shape({
    contactName: Yup.string().required().label("Contact Name"),
    contactEmail: Yup.string().email().required().label("Contact Email"),
    contactPhone: Yup.string().required().label("Contact Phone"),
    contactMessage: Yup.string().required().label("Message")
});

export default function ContactUs() {
    const [sendingEmail, setSendingEmail] = useState(false);
    const [emailSent, setEmailSent] = useState(null);

    const sendEmail = (templateId, variables) => {
        try {
            emailjs.send(
                "service_1mn3ymq", templateId,
                variables
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

    useEffect(() => {
        init("user_j1ADGdHX72eDEfCx1jLGC");
    }, [])
    return (
        <div className="contact-us-wrapper">
            {sendingEmail === false && emailSent === null ?
                <div className="contact-us">
                    <Formik
                        initialValues={{ contactName: "", contactEmail: "", contactPhone: "", contactMessage: "" }}
                        onSubmit={async (fields, { setFieldError }) => {
                            setSendingEmail(true)
                            sendEmail("template_7riie8i", { message: fields.contactMessage, from_name: fields.contactName, reply_to: fields.contactEmail, contact_phone: fields.contactPhone })
                        }

                        }
                        validationSchema={contactSchema}
                    >
                        {({ handleChange, handleSubmit, errors }) => (
                            <>
                                <TextInput
                                    height={500}
                                    labelFontSize={10}
                                    label="Contact Name"
                                    placeholder="Enter Contact Name"
                                    iconName={"user"}
                                    name="conteact-name"
                                    onChange={handleChange("contactName")}
                                    error={errors ? errors.contactName : ""}
                                />

                                <TextInput
                                    height={50}
                                    labelFontSize={10}
                                    label="Email"
                                    placeholder="Enter Contact Email"
                                    iconName={"envelope"}
                                    name="contact-email"
                                    onChange={handleChange("contactEmail")}
                                    error={errors ? errors.contactEmail : ""}
                                />

                                <TextInput
                                    height={50}
                                    labelFontSize={10}
                                    label="Phone"
                                    placeholder="Enter Contact Phone"
                                    // capitalize={true}
                                    iconName={"phone"}
                                    name="contact-phone"
                                    onChange={handleChange("contactPhone")}
                                    error={errors ? errors.contactPhone : ""}
                                // screenWidth={containerWidth}
                                />
                                <TextArea
                                    height={200}
                                    placeholder="Please leave a message here and we will get to your enquiry as soon as possible."
                                    error={errors ? errors.contactMessage : ""}
                                    onChange={handleChange("contactMessage")}
                                    fontSize={18}
                                    name="contact-message"

                                />
                                <FormButton
                                    title="submit"
                                    type="submit"
                                    height={50}
                                    onSubmit={handleSubmit} />

                                <div class="g-recaptcha" data-sitekey="6LdcRCoaAAAAABhj0z2QpTLzO3a6cBSbCkfJG8zW"></div>
                            </>)}
                    </Formik>
                </div> :
                <EmailStatus emailSent={emailSent} sendingEmail={sendingEmail} handleButtonClick={() => setEmailSent(null)} />}
        </div>
    )
}
