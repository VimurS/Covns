import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';
import './landingPage.css';
import NavBar from "../navBar/navBar"
import Contact from "../contact/contact"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cow from "../../img/cow.jpg";
import cowlove from "../../img/cowlove.jpg";
import cowcalf from "../../img/cowcalf.jpg";
import milk from "../../img/milk.png";
import feedingcalf from "../../img/feedingcalf.jpg";
import farmmilk from "../../img/farmmilk.png";
import delivery from "../../img/delivery.png";
import testmilk from "../../img/testmilk.png";
import newmap from "../../img/newmap.png";
import loc from "../../img/loc.png";
import locss from "../../img/locss.png";

const LandingPage = () => {

  const words = ['Famous', 'Reliable', 'Prominent', 'Affordable'];
  const texts = ["from Coimbatore's local farms to your homes", "The Milk for Everyone", "Drink organic, support local farmers.", "Farmers' passion, your daily nutrition.", "Caring for the land, nurturing with milk.", "Nourishing bodies, supporting farmers.", "Sustainable farming, wholesome milk."];

  const [currentWord, setCurrentWord] = useState(words[0]);
  const [currentText, setCurrentText] = useState(texts[0]);
  const [currentImg, setCurrentImg] = useState(cowcalf);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = words.indexOf(currentWord);
      const nextIndex = (currentIndex + 1) % words.length;
      setCurrentWord(words[nextIndex]);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentWord]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = texts.indexOf(currentText);
      const nextIndex = (currentIndex + 1) % texts.length;
      setCurrentText(texts[nextIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentText]);


  useEffect(() => {
    const imgInterval = setInterval(() => {
      setCurrentImg((prevImg) => {
        switch (prevImg) {
          case cowcalf:
            return cowlove;
          case cowlove:
            return cow;
          case cow:
            return feedingcalf;
          case feedingcalf:
            return cowcalf;
          default:
            return cowcalf;
        }
      });
    }, 7000);

    return () => clearInterval(imgInterval);
  }, []);


  return (
    <div>
      <NavBar />
      <div className=" container landingPage" style={{ minWidth: "0px", width: "100%" }}>
        <div className='headSec introContent'>
          <div className='introContent'>
            <p className='introText'>Co<span className='Vspan'>v</span>n<span className='apoSpan'>'</span>s</p>
            <p className='scroll'># {currentText}</p>
            <p className='introText2'>Coimbatore's Most {currentWord} Milk Service</p>
            <p className='introText3'>Free Delivery for areas we cover. check our delivery locations</p>
            <button className='buyBtn'>Get Sample Now</button>
          </div>
          <img className='introImg' src={currentImg}></img>
        </div>
        {/* intro ends here */}

        <Container fluid className='midSec'>
          <div className='middleSec'>
            <p className='process'> Our Process</p>
            <div className='processDiv'>

              <div className='process1'>
                <img src={farmmilk}></img>
                <p>we have a trusted resource of local farmers who supply us with the 100% organic, adulteration free, No water added, highest quality of cow milk on daily basis</p>
              </div>

              <div className='process2'>
                <img src={testmilk}></img>
                <p>Consumers rightfully expect fresh, safe, and nutritious milk on their tables. To meet these expectations, we are committed to testing the quality of our milk each day. </p>
              </div>

              <div className='process3'>
                <img src={milk}></img>
                <p>After comprehensive assessment of the milk's quality, only the finest gallons of milk will be packed. The sachets are then ready to be delivered to our valued consumers </p>
              </div>

              <div className='process4'>
                <img src={delivery}></img>
                <p>From milking to packing, all these steps are completed within just 4 hours. We offer free and fast home delivery, ensuring that our customers enjoy the freshest milk available.</p>
              </div>
            </div>
          </div>

        </Container>

        
        <Container>
          <div className='Delivery'>
            <div className='delLoc'>
              <h3>Delivery Locations</h3>
              <div className='locss'>
                <div className='location'><img src={loc}></img> R.S.Puram</div>
                <div className='location'><img src={loc}></img> Poo Market</div>
                <div className='location'><img src={loc}></img> Gandhipark</div>
                <div className='location'><img src={loc}></img> Telugu Street</div>
                <div className='location'><img src={loc}></img> Sullivan Street</div>
                <div className='location'><img src={loc}></img> Raja Street</div>
                <div className='location'><img src={loc}></img> R.G. Street</div>
                <div className='location'><img src={loc}></img> Sukrawarpet</div>
                <div className='location'><img src={loc}></img> Chokkampudur</div>
                <div className='location'><img src={loc}></img>Ponnaiyaraja Puram</div>
                <div className='location'><img src={loc}></img>  Shivalaya</div>
                <div className='location'><img src={loc}></img> Chetty Street</div>
                <div className='location'><img src={loc}></img> Selvapuram</div>
                <div className='location'><img src={loc}></img> TelunguPalayam</div>
                <div className='location'><img src={loc}></img> Perur</div>
              </div>
              {/* <img src={locss}></img> */}
            </div>
            <img className='cityCBE' src={newmap}></img>
          </div>
        </Container>

        <Container style={{ height: '100%' }}>
          <div className='commonDiv' style={{ display: 'flex', alignItems: 'stretch', height: '100%' }}>
            <div className='benefitsSec' style={{ flex: 1 }}>
              <h4>Benefits of <span className='coSpan'>Co</span><span className='Vspan2'>v</span><span className='coSpan'>n</span><span className='apoSpan2'>'</span><span className='coSpan'>s</span> milk</h4>
              <ul>
                <li>100% Organic Fresh Milk</li>
                <li>No Added Water</li>
                <li>No Added Chemicals</li>
                <li>Clean and Hygienic</li>
                <li>A2 Milk (Native Breed's)</li>
                <li>Free Home Delivery</li>
                <li>Processed within 4 hours</li>
              </ul>
            </div>

            <div className='priceSec' style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h4 style={{ marginBottom: 'auto' }}>Pricing:</h4>
              <Card className='priceCesCard' style={{ width: '15rem', marginTop: 'auto' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title>500 ML</Card.Title>
                  <Card.Text>
                    ₹ 35 ONLY
                  </Card.Text>
                  <Button variant="dark">Order Now</Button>
                </Card.Body>
              </Card>
              <Card className='priceCesCard' style={{ width: '15rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title>1 Litre</Card.Title>
                  <Card.Text>
                    ₹ 70 ONLY
                  </Card.Text>
                  <Button variant="dark">Order Now</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>


        <Contact />

      </div>
    </div>
  );
}

export default LandingPage;