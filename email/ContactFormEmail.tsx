import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = {
    message:string,
    senderEmail:string,
    subject: string,
}

export default function ContactFormEmail({
    message, senderEmail, subject
}: ContactFormEmailProps) {
  return (
    <Html>
        <Head />
        <Preview>New message from your portfolio site</Preview>
        <Tailwind>
            <Body className='bg-gray-100 text-black rounded'>
                <Container>
                    <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
                        <Heading className='leading-tight'>{subject}</Heading>
                        <Text className='text-lg'>{message}</Text>
                        <Hr />
                        <Text>The sender&apos;s email is: {senderEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}
