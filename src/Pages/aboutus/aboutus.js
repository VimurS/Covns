import React from 'react';
import ReactDOM from 'react-dom/client';
import './aboutus.css';
import Contact from "../contact/contact"
import NavBar from "../navBar/navBar"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import founders from '../../img/foundersofcovns.jpg';
import vimur from '../../img/vimurs.jpg';
import vicky from '../../img/vickys.jpg';

const Aboutus = () => {

    return (

        <>
            <NavBar />

            <Container >

                <div>
                    <div className='abtSec'>
                        <div className='willContain'>
                            <h3 className='overview'><span className='coSpan3'>Co</span><span className='Vspan3'>v</span><span className='coSpan3'>n</span><span className='apoSpan3'>'</span><span className='coSpan3'>s</span> Overview</h3>


                            <p className='overviewP'>
                                Covn's is a pioneering startup based in Coimbatore, founded by two forward-thinking youngsters. Their vision is to provide the local community with access to high-quality organic milk.
                                Covn's is more than just a milk supplier. It represents a passionate commitment to organic practices, a dedication to creating a healthier society, and a catalyst for change in the local community.
                                By choosing Covn's, consumers not only enjoy the purest and most nutritious milk but also become part of a movement that supports sustainable agriculture and fosters a closer connection between farmers and consumers.
                            </p>
                        </div>
                        <div className='willContain'>
                            <h3 className='overview'>Our Moto</h3>
                            <p className='overviewP'> Through this initiative, We aim to revolutionize the way people think about food and inspire a shift towards organic products, ultimately leading to a more sustainable and health-conscious society.
                                Furthermore, this initiative seeks to collaborate with various stakeholders.
                                By fostering partnerships and creating a network of like-minded individuals, it can amplify its message and create a collective impact. Together, we can work towards creating a more robust and resilient food system that prioritizes sustainability and health.
                            </p>
                        </div>
                        <h3 className='overviews'>Get To Know Our Founders</h3>
                        <div className='foundr'>
                            <img className='foundersImg' src={founders}></img>
                            <p className='overviewP2'>Covn's, founded in the year 2023 by our esteemed founders Mr. Vimur and Mr. Vignesh, is a small-scale startup dedicated to supplying organic milk to the community. Mr. Vimur, a Software Engineer by profession, and Mr. Vignesh, a Design Engineer by profession, joined forces with a shared vision of providing access to high-quality organic milk to the local community.
                            </p>
                        </div>
                        <h3 className='overview'>Know What Our Founders Got To Say</h3>
                        <Card style={{ padding: "4% 0% 0% 0%", marginBottom: "5%", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>

                            <div id='vim'>

                                <img className='vim' src={vimur}></img>
                                <p><span className='founderTag'>Vimur, Co Founder - <span className='coSpan3'>Co</span><span className='Vspan3'>v</span><span className='coSpan3'>n</span><span className='apoSpan3'>'</span><span className='coSpan3'>s</span></span><br></br>This initiative stems from my deep-rooted belief in the importance of consuming organic products and creating a healthier society, especially in today's modernized world where processed and unhealthy foods have become prevalent.
                                    organic milk offers numerous advantages over conventional milk.
                                </p>
                                {/* <p className='founderTag'>Vimur, Co Founder - Covns</p> */}
                            </div>
                            <div id='vick'>
                                <p><span className='founderTag' >Vignesh, Co Founder - <span className='coSpan3'>Co</span><span className='Vspan3'>v</span><span className='coSpan3'>n</span><span className='apoSpan3'>'</span><span className='coSpan3'>s</span></span><br></br>By providing the local community with access to organic milk through this initiative, We at Covn's aim to create a positive impact on people's health and lifestyle choices. We recognize the importance of consuming nutritious and wholesome products that contribute to overall well-being. </p>
                                <img className='vick' src={vicky}></img>

                            </div>
                            {/* <p className='founderTag'>Vignesh, Co Founder - Covns</p> */}
                        </Card>
                    </div>
                </div>

            </Container>

            <Contact />
        </>
    )
}

export default Aboutus;