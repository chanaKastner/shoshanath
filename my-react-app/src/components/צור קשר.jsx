import '../style/contact.css'
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export const Contact = () => {
    const form = useRef();
    const [userName, setName] = useState('');
    const [userEmail, setEmail] = useState('');
    const [userMessage, setMessage] = useState('');


    const notify = () => toast.success('ההודעה נשלחה בהצלחה!\n אנו נשתדל לחזור אליכם בהקדם.\n שושנת העמקים');

    //פונקציה לשליחת מייל
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_kjh3a7h', 'template_aleywkg', form.current, 'Hl-Z7y6EcDXUStMCg')
            .then((result) => {
                console.log(result.text);
                setEmail("");
                setMessage("");
                setName("");
                notify();
            },
                (error) => {
                    console.log(error.text);
                });
    };
    return <>
        <section className='sec'>
            <div className="section-header">
                <div className="cont">
                    <h2 id="h2_contact">צור קשר</h2>
                    <p>.שושנת העמקים זמינה אליכם בכל עת, יחס אישי, מחירים הוגנים, שירות משלוחים לכל חלקי הארץ
                    </p>
                    <p>שעות פתיחה: בוקר -  10:00-13:30 | ערב - 19:00-22:00 |  יום שישי – 10:00-13:00 </p>
                </div>
            </div>
            <div className="cont">
                <div className="row">
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <i className="fa-solid fa-map-marker-alt"></i>
                            </div>
                            <div className="contact-info-content">
                                <h4>כתובת</h4>
                                <p>רשב"י 15, מודיעין עילית</p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <i className="fa-solid fa-phone-alt"></i>
                            </div>
                            <div className="contact-info-content">
                                <h4>טלפון</h4>
                                <p>08-9744553 / 0533191206</p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="contact-info-content">
                                <h4>דוא"ל</h4>
                                <p>9744553@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <form action="" id="contact-form" ref={form} onSubmit={sendEmail}>
                            <h2>דברו איתנו</h2>
                            <div className="input-box">
                                <input type="text" required="true" name="from_name" value={userName} onChange={(e) => { setName(e.target.value) }} />
                                <span>שם</span>
                            </div>

                            <div className="input-box">
                                <input type="email" required="true" name="from_email" value={userEmail} onChange={(e) => { setEmail(e.target.value) }} />
                                <span>דוא"ל</span>
                            </div>

                            <div className="input-box">
                                <textarea required="true" name="message" value={userMessage} onChange={(e) => { setMessage(e.target.value) }}></textarea>
                                <span>ההודעה שלך...</span>
                            </div>

                            <div className="input-box">
                                <input type="submit" value="שלח" name="" />
                                <Toaster
                                    containerStyle={{
                                        position: 'relative',
                                    }} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <iframe src="https://maps.google.com/maps?q=%D7%A8%D7%A9%D7%91%22%D7%99+15+%D7%9E%D7%95%D7%93%D7%99%D7%A2%D7%99%D7%9F+%D7%A2%D7%99%D7%9C%D7%99%D7%AA&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
                className='maps' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </>
}