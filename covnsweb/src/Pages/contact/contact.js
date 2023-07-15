import React from 'react';
import ReactDOM from 'react-dom/client';
import './contact.css';
import Container from 'react-bootstrap/Container';
import insta from "../../img/instagram.png";
import wa from "../../img/whatsapp.png";
import twitter from "../../img/twitter.png";
import mail from "../../img/gmail.png";

const Contact = () => {

    return (
        <>

            <Container >
                <div>
                    <div style={{ backgroundColor: "black", color: "black" }}><h5>color</h5></div>
                    <h2 className='newH2'>Get In Touch</h2>
                    <div className='contactss'>


                        <div className='connectu' style={{ display: "inline-block", width: "40%" }}>
                            <h4 className='contactH4 '>Connect with us</h4>
                            <div className='smedia'>
                                <img src={insta}></img>
                                <a href='https://instagram.com/covnsmilk?igshid=MzNlNGNkZWQ4Mg==' target='blank'> covnsmilk</a>
                            </div>
                            <div className='smedia'>
                                <img src={wa}></img>
                                <a href=''> +91 9xxxxxxxxx</a>
                            </div>
                            <div className='smedia'>
                                <img src={twitter}></img>
                                <a href='https://twitter.com/covnsmilk?t=o8RiSdSDS0tMMZBb83xe5Q&s=09' target='blank'>  covnsmilk</a>
                            </div>
                            <div className='smedia'>
                                <img src={mail}></img>
                                <a href='mailto:covnsmilk@gmail.com'>covnsmilk@gmail.com</a>
                            </div>
                        </div>
                        <div className='abtCovn'>
                            <h4 className='abtCovn-heading'>About <span className='coSpan2'>Co</span><span className='Vspan2'>v</span><span className='coSpan2'>n</span><span className='apoSpan2'>'</span><span className='coSpan2'>s</span></h4>
                            <p className='abtCovn-content'>
                                Covn's is a pioneering startup based in Coimbatore, founded by two enthusiastic and forward-thinking youngsters.
                                Their vision is to provide the local community with access to high-quality organic milk.
                                <br></br>
                                By providing the local community with access to organic milk, Covn's aims to create a positive impact on people's health and lifestyle choices.
                                They recognize the importance of consuming nutritious and wholesome products that contribute to overall well-being.<br></br>
                                Organic milk is known for its rich nutritional profile, including higher levels of vitamins, minerals, and healthy fats,
                                which can support optimal health and development.
                                Covn's also serves as a catalyst for change, inspiring others to consider the impact of their food choices and opt for organic products.
                                Through their innovative startup, they aim to educate and empower the community about the benefits of organic farming and the significance of supporting local farmers.
                            </p>
                        </div>
                    </div>
                    <p className='footer'>Covn's Milk © 2023 - All Rights Reserved</p>
                    <p className='footer'>Developed with ❤️ in Coimbatore </p>

                </div>
            </Container>
        </>
    )
}

export default Contact;