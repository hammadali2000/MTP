import React, {useEffect} from 'react';
import Footer from '../Footer';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Row, Col, Container, Card} from 'react-bootstrap';
import CountUp from 'react-countup';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import '../About.css';
import Aos from "aos";
import "aos/dist/aos.css";

import Navbar from "../Navbar";

export default function About() {

  useEffect(()=>{
    Aos.init({duration:1800});
  }, []);

  return(
      <div>
        <Navbar />
        <div>
          <img className='main-image' src="https://i1.wp.com/csengineermag.com/wp-content/uploads/2020/07/AdobeStock_298001885-2.jpeg?resize=1068%2C500&ssl=1" alt="Trulli" width="100%" height="400" />
          {/* https://i0.wp.com/madisonpac.com/wp-content/uploads/2020/02/Banner-Contact-Us-1.jpg?ssl=1 */}
          <div className='image-text'>
              <h1 className='headings' data-text='About'>MEET THE PRODUCT</h1>
              <Button className='contact'>Get Started</Button>{' '}
              <Button className='contact'>Contact Us</Button>{' '}
          </div>
        </div>

          <div>
            <h2></h2>
          </div>
          <div className="second-part">
          <Container className='counts' data-aos="fade-up">
          <Row className="mt-5">
              <Col ls={12} sm={6}>
                  <Container className='left-text'>
                      <h3>The Opportunities for Sellers on Amazon are Incredible</h3>
                      <p>There’s no question about who the biggest fish in the e-commerce sea is; Amazon dominates the marketplace. We built Helium 10 to help everyone capitalize on the Amazon opportunity, from seasoned entrepreneurs to bustling enterprises to anyone who just wants to be their own boss.</p>
                  </Container>
              </Col>


              <Col ls={12} sm={6}>
                <Container className="right-image">
                  <img src="https://www.helium10.com/app/themes/helium10/assets/img/about-us/about-us_01.svg" width="auto" height="300px" />
                </Container>
              </Col>
          </Row>
          </Container>
        </div>
        <Container className='success' data-aos="fade-right">
          <h2 className="next-heading">We Have Served</h2>
          <Row className='mt-5'>
            <Col sm={4}  md={4} className="col">
                <Card style={{ width: '18rem' }} className="about-card">
                    <Card.Body>
                      <Card.Title className="icon-design"><AiIcons.AiOutlineUser /></Card.Title>
                      <Card.Text>
                      <CountUp className="count" duration={2} end={100} />
                      </Card.Text>
                      <Card.Title className="about-card-title">Daily Visitors</Card.Title>
                    </Card.Body>
                </Card>
            </Col>


            <Col sm={4}  md={4} className="col">
                <Card style={{ width: '18rem' }} className="about-card">
                    <Card.Body>
                      <Card.Title className="icon-design"><AiIcons.AiFillHome /> </Card.Title>
                      <Card.Text>
                      <CountUp className="count" duration={2} end={20} />
                      </Card.Text>
                      <Card.Title className="about-card-title">Registered Seller</Card.Title>
                    </Card.Body>
                </Card>
            </Col>


            <Col sm={4}  md={4} className="col">
                <Card style={{ width: '18rem' }} className="about-card">
                    <Card.Body>
                      <Card.Title className="icon-design"><AiIcons.AiFillStar /></Card.Title>
                      <Card.Text>
                      <CountUp className="count" duration={2} end={5}  />
                      </Card.Text>
                      <Card.Title className="about-card-title">Overall Rating</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
          </Row>
        </Container>
        
        
        <Container className="team">
            <h2 className="next-heading">Our Team</h2>
          <Row className="mt-5">
            <Col sm={4}  md={4}>
              <Card style={{ width: '18rem' }} className="main-card-team">
                <Card.Img className="card-image" variant="top" src='./images/img-2.jpg'/>
                <Card.Body>
                  <Card.Title className="card-title">Hammad Ali Jahangir</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>


            <Col sm={4}  md={4}>
              <Card style={{ width: '18rem' }} className="main-card-team">
                <Card.Img className="card-image" variant="top" src="https://images.pexels.com/photos/40997/mona-lisa-leonardo-da-vinci-la-gioconda-oil-painting-40997.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                <Card.Body>
                  <Card.Title>Aqib Ali</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>


            <Col sm={4}  md={4}>
              <Card style={{ width: '18rem' }} className="main-card-team" >
                <Card.Img className="card-image" variant="top" src="https://images.pexels.com/photos/40997/mona-lisa-leonardo-da-vinci-la-gioconda-oil-painting-40997.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                <Card.Body>
                  <Card.Title>Afaq Tariq</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
  )
}
