import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row, Container, Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import '../Parcing.css';

export default function Parcing() {
  return(
    <Container className="main-container">
    <Row className="col1">
      <Col className="col1">
          <Card className="standard-card" style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title className="card-title">GOLD</Card.Title>
              <Card.Title className="card-pricing mt-3"><span className="currency">$</span>50/mo</Card.Title>
              <Card.Text className="mt-5">
              (For Individuals)
              </Card.Text>
            </Card.Body>
            <div className="text-center mt-3">
              <Button className="buy-button">Buy Now</Button>
            </div>
            <Card.Text className="mt-4">
              <ul style={{textAlign: 'left'}}>
                <li>Can search products</li>
                <li>Visual Representation</li>
                <li>Products based on customer reviews</li>
                <li>Email Support</li>
                <li>Payment every month</li>
              </ul>
              <h1 style={{color: 'transparent',}}>hy</h1>
              </Card.Text>
          </Card>

      </Col>
      
      <Col className="col2">
      <Card className="standard-card" style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title className="card-title">DIAMOND</Card.Title>
              <Card.Title className="card-pricing mt-3"><span className="currency">$</span>200/mo</Card.Title>
              <Card.Text className="mt-5">
              (For Virtual Assistants and Professionals)
              </Card.Text>
            </Card.Body>
            <div className="text-center mt-3">
              <Button className="buy-button">Buy Now</Button>
            </div>
            <Card.Text className="mt-4">
              <ul style={{textAlign: 'left'}}>
                <li>Can search products based on customer reviews</li>
                <li>Visual Representation based on customer reviews</li>
                <li>Product review based on weekly sales</li>
                <li>Email Support</li>
                <li>Visual Representation based on weekly sales</li>
                <li>Payment every month</li>
              </ul>
              
              </Card.Text>
          </Card>
      </Col>
      
      <Col className="col3">
          <Card className="standard-card" style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title className="card-title">PLATINUM</Card.Title>
              <Card.Title className="card-pricing mt-3"><span className="currency">$</span>700/lt</Card.Title>
              <Card.Text className="mt-5">
              (For Business & Teams)
              </Card.Text>
            </Card.Body>
            <div className="text-center mt-3">
              <Button className="buy-button">Buy Now</Button>
            </div>
            <Card.Text className="mt-4 card-bottom">
            <ul style={{textAlign: 'left'}}>
                <li>Can search products based on customer reviews</li>
                <li>Visual Representation based on customer reviews</li>
                <li>Product review based on weekly sales</li>
                <li>Visual Representation based on weekly sales</li>
                <li>Recommendation of top 10 products</li>
                <li>Lifetime access</li>
              </ul>
              
              </Card.Text>
          </Card>
      </Col>
    </Row>
  </Container>
  )
}
