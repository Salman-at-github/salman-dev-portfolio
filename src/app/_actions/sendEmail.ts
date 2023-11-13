"use server"
import {Resend} from 'resend';
import React from 'react';
import ContactMeEmail from '../_emails/ContactMeEmail';
import { getErrorMessage } from '../_utils/getError';

const resend = new Resend(process.env.RESEND_API_KEY);



export const sendEmail = async(formData: FormData)=>{
    const senderEmail = formData.get('email')
    const message = formData.get('message')
    if(!senderEmail || typeof(senderEmail) !=='string' || sendEmail.length>100){
        return ({error: "Invalid email"})
    }
    if(!message ||  typeof(message) !=='string' || message.length > 5000){
        return ({error: "Invalid message"})
    }

    let data;
    try {
         data = await resend.emails.send({
            from:"onboarding@resend.dev",
            to:'dev.salman1508@gmail.com',
            subject:'Portfolio Message',
            reply_to:senderEmail,
            // text:`${message}`
            react: React.createElement(ContactMeEmail, {
                propemail: senderEmail,
                propmessage: message
            })
        });
    } catch (error : unknown) {
        return {error: getErrorMessage(error)}
    }
    return {data};
}