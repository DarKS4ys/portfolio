"use server"

import React from "react"

import { Resend } from "resend"
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData ) => {

    const message = formData.get('message');
    const senderEmail = formData.get('senderEmail');
    const subject = 'You received the following message from the contact form'

    // validation

    if(!validateString(senderEmail, 450)) {
        return {
            error: "Invalid sender email"
        }
    }
    
    if(!validateString(message, 3000)) {
        return {
            error: "Invalid message"
        }
    }

    let data;
    try {
        data = await resend.emails.send({
            from: 'Contact Form <stoic@stoiccord.com>',
            to: 'melihyardim1057@gmail.com',
            subject: 'You received the following message from the contact form',
            reply_to: senderEmail as string,
            // text: message as string
            react: React.createElement(ContactFormEmail, {message: message as string, senderEmail: senderEmail as string, subject: subject as string})
            
        })
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    }

    return {
        data
    }
}