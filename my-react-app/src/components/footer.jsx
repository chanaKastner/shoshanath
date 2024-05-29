import { useLocation, useNavigate } from 'react-router-dom'
import '../style/footer.css'
export const Footer = () => {
    let navigate = useNavigate();
    const location = useLocation();
    const fillColor = location.pathname === '/contact' ? 'footer-wave-path_contact' : 'footer-wave-path';
    return <>
        <div className="pg-footer">
            <footer className="footer">
                <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
                    <path className={fillColor} d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
                    ></path>
                </svg>
                <div className="footer-content">
                    <div className="footer-content-column">
                        <ul>
                            <p className="footer-header">   שושנת העמקים זמינה אליכם בכל עת     <i className="fa-regular fa-clock"></i></p>
                            <p> בוקר -  10:00-13:30 | ערב - 19:00-22:00 |  יום שישי – 10:00-13:00 </p>

                            <div>
                                <li className='icons'>
                                    <div className="icon-circle"><i className="a fa-solid fa-dollar-sign"></i></div>
                                    <div className="icon-circle"> <i className="a fa-solid fa-hand-holding-heart"></i></div>
                                    <div className="icon-circle"><i className="a fa-solid fa-shipping-fast" ></i></div>
                                </li>
                                <li className='icons'>
                                    <div className='icon-words'><p >מחירים הוגנים </p></div>
                                    <div className='icon-words'><p>יחס אישי </p></div>
                                    <div className='icon-words'><p>שירות משלוחים</p></div>
                                </li>
                                {/* <li className='icons'>
                                    <div className='icon-word'><p >לכל חלקי הארץ</p></div>
                                </li> */}
                            </div>
                        </ul>
                    </div>
                    <div className="footer-content-column">
                        <h2 >יש לכם שאלה?</h2>
                        <p >אנחנו כאן בשביל לענות לכם!</p>
                        <a className="footer-call-to-action-button button" href="#" target="_self"
                            onClick={() => navigate(`../contact`)}><span class="spot"></span> צרו קשר </a>
                        <br />
                        <p style={{ direction: "ltr" }}>08 - 9744553 / 0533191206</p>
                        <p style={{ direction: "ltr" }}>9744553@gmail.com</p>
                    </div>
                    <div className="footer-social-links">
                        <svg className="footer-social-amoeba-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 54">
                            <path className="footer-social-amoeba-path" d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"></path>
                            <defs>
                                <linearGradient id="my-cool-gradient" x2="1" y2="1">
                                    {/* <stop offset="0%" stop-color="#fecd69" /> */}
                                    <stop offset="40%" stop-color="#BCA661" />
                                    {/* <stop offset="0%" stop-color="#fecd69" /> */}

                                    <stop offset="100%" stop-color="#C2AE68" />
                                    {/* <stop offset="100%" stop-color="#fff2d7" /> */}
                                </linearGradient>
                            </defs>
                        </svg>
                        <a className="footer-social-link linkedin" >
                            <i className="fa-regular fa-thumbs-up" style={{ marginRight: "-15px" }}></i>
                        </a>
                        <a className="footer-social-link twitter" >
                            <i className="fa-solid fa-shipping-fast" style={{ marginRight: "-15px", marginTop: "10px" }}></i>
                        </a>
                        <a className="footer-social-link youtube" >
                            <i className="fa-solid fa-handshake" style={{ marginRight: "-17px", marginTop: "5px" }}></i>
                        </a>
                        <a className="footer-social-link github">
                            <i className="fa-solid fa-gift" style={{ marginRight: "-15px", marginTop: "9px" }}></i>
                        </a>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="footer-copyright-wrapper">
                        <p className="footer-copyright-text">
                            <a className="footer-copyright-link"> ©2024 | Designed By: Chana Kastner | All rights reserved </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    </>
}