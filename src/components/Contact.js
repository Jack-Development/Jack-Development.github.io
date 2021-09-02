import React from 'react';
import {FcGoogle} from "react-icons/fc";
import {FaPhone, FaInbox} from "react-icons/fa";

const Contact = () => {
    return (
        <div className={'container p-4'}>
            <div className={'columns'}>
                <div className={'column is-half'}>
                    <div className={'card contactCard'}>
                        <FaPhone size='70' className='faIcon'/>
                        <h2>Phone</h2>
                        <p className={'contactText'}>Due to my personal life, and wanting to keep a divide between my
                            work and social lives, I ask that you refrain from calling or texting my personal phone
                            number. If you need to get into contact with me, then the best way would be to send me an
                            email. If I have worked with you before then I can connect with you on either Slack or
                            Discord, for a quicker reply.</p>
                    </div>
                </div>
                <div className={'column'}>
                    <div className={'card contactCard'}>
                        <FaInbox size='70' className='faIcon'/>
                        <h2>Email</h2>
                        <p className={'contactText'}>If you wish to contact me in regards to my work then you can contact me at:</p>
                        <a href={'mailto:shiltonjackofficial@gmail.com'}>shiltonjackofficial@gmail.com</a>
                        <p className={'contactText'}> or you can click the button below:</p>
                        <a className='button contact-button gmailButton' href='mailto:shiltonjackofficial@gmail.com' target='_blank' rel='noreferrer noopener'>
                            <FcGoogle className='icon'/> <p>Gmail</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;