import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar";
// import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import '../contact.css';
import Axios from "axios";

export default function Contact() {
    const [emailReg, setEmailReg] = useState("");
    const [subjectReg, setSubjectReg] = useState("");
    const [descriptionReg, setDescriptionReg] = useState("");
    const [fileReg, setFileReg] = useState("");
    Axios.defaults.withCredentials = true;


    const sendMessage = () => {
        Axios.post("http://localhost:3001/api/message", {
          email: emailReg,
          subject: subjectReg,
          description: descriptionReg,
          // file: fileReg,
        }).then((response) => {
          console.log("response");
        });
      };

  return(
   <div>   
        <Navbar />
        <div className="main-div"> 
                
                <div className="image">
                    <h3>Contact Us</h3>
                    <img className="contact-image" src="https://image.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg" alt=""/>
                </div>
                <div className="contact-div">    
                    
                    <br />
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Email address</Form.Label>
                            <Form.Control className="email-password-input"
                             type="email" 
                             placeholder="Enter your email address"
                             onChange={(e) => {
                                setEmailReg(e.target.value);
                              }}
                            />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control className="email-password-input" 
                            type="text"
                            placeholder="Enter Subject here"
                            onChange={(e) => {
                                setSubjectReg(e.target.value);
                              }}
                             />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control className="desc-input"
                             as="textarea" rows={3}
                             onChange={(e) => {
                                setDescriptionReg(e.target.value);
                              }}
                            />
                            <Form.Text className="text-muted">
                            Please enter the details of your request. A member of our support staff will respond as soon as possible
                            </Form.Text>
                        </Form.Group>

                        {/* <Form.Group controlId="formFileLg" className="mb-3">
                            <Form.Label>Attachments  (Optional)</Form.Label><br/>
                            <Form.Control className="input-file"
                             type="file"
                               size="lg"
                              onChange={(e) => {
                                setFileReg(e.target.value);
                              }}
                               />
                        </Form.Group><br /> */}
                    
                        <Button className="button-submit" type="submit" onClick={sendMessage}>
                            Submit
                        </Button>
                    </Form>
                </div>
        </div>
    </div>
  )
}
