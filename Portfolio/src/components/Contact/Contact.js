// import React, { useState } from "react";
// import { ContactWrapper, Email } from "./ContactElements";
// import { MdContentCopy } from "react-icons/md";
// import { IconButton, Tooltip } from "@mui/material";
// import Zoom from '@mui/material/Zoom';

// import ScrollAnimation from "react-animate-on-scroll";
// function Contact() {
//   const [showTooltip, setShowTooltip] = useState(false);
//   const copyToClipboard = () => {
//     navigator.clipboard.writeText("naveenmallireddi1919@gmail.com");
//     setShowTooltip(true);
//     setTimeout(() => {
//       setShowTooltip(false);
//     }, 700);
//   };

//   return (
//     <ContactWrapper id="contact">

//       <div className="Container">
//         <div className="SectionTitle">Get In Touch</div>
//         <ScrollAnimation animateIn="fadeIn" >
//           <div className="BigCard">
//             <Email>
//               <div style={{ display: 'flex', alignItems: 'center', columnGap: '20px', rowGap: '10px', flexWrap: 'wrap', justifyContent: 'center' }} >
//                 <span>naveenmallireddi1919@gmail.com</span>
//                 <Tooltip
//                   PopperProps={{
//                     disablePortal: true,
//                   }}
//                   open={showTooltip}
//                   onClose={() => setShowTooltip(false)}
//                   title="Copied!"
//                   TransitionComponent={Zoom}
//                   disableFocusListener
//                   disableHoverListener
//                   disableTouchListener
//                   placement="bottom"
//                 >
//                   <IconButton  onClick={copyToClipboard} >
//                     <MdContentCopy size={25} style={{ cursor: 'pointer', color: "#151418" }}/>
//                   </IconButton>
//                 </Tooltip>
//               </div>
//               <a
//                 className="btn PrimaryBtn btn-shadow"
//                 href="mailto:pedro.sales.muniz@gmail.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Send Email
//               </a>
//             </Email>
//           </div>
//         </ScrollAnimation>

//       </div>
//     </ContactWrapper>
//   );
// }

// export default Contact;

// import React, { useState } from "react";
// import { ContactWrapper, Email } from "./ContactElements";
// import { MdContentCopy } from "react-icons/md";
// import { IconButton, Tooltip } from "@mui/material";
// import Zoom from '@mui/material/Zoom';

// import ScrollAnimation from "react-animate-on-scroll";
// function Contact() {
//   const [showTooltip, setShowTooltip] = useState(false);
//   const copyToClipboard = () => {
//     navigator.clipboard.writeText("naveenmallireddi1919@gmail.com");
//     setShowTooltip(true);
//     setTimeout(() => {
//       setShowTooltip(false);
//     }, 700);
//   };

//   return (
//     <ContactWrapper id="contact">

//       <div className="Container">
//         <div className="SectionTitle">Get In Touch</div>
//         <ScrollAnimation animateIn="fadeIn" >
//           <div className="BigCard">
//             <Email>
//               <div style={{ display: 'flex', alignItems: 'center', columnGap: '20px', rowGap: '10px', flexWrap: 'wrap', justifyContent: 'center' }} >
//                 <span>naveenmallireddi1919@gmail.com</span>
//                 <Tooltip
//                   PopperProps={{
//                     disablePortal: true,
//                   }}
//                   open={showTooltip}
//                   onClose={() => setShowTooltip(false)}
//                   title="Copied!"
//                   TransitionComponent={Zoom}
//                   disableFocusListener
//                   disableHoverListener
//                   disableTouchListener
//                   placement="bottom"
//                 >
//                   <IconButton  onClick={copyToClipboard} >
//                     <MdContentCopy size={25} style={{ cursor: 'pointer', color: "#151418" }}/>
//                   </IconButton>
//                 </Tooltip>
//               </div>
//               <a
//                 className="btn PrimaryBtn btn-shadow"
//                 href="mailto:pedro.sales.muniz@gmail.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Send Email
//               </a>
//             </Email>
//           </div>
//         </ScrollAnimation>

//       </div>
//     </ContactWrapper>
//   );
// }

// export default Contact;


import React from "react";
import './index.css'
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

export default function Contactus() {
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!(formData.name && formData.email && formData.message)) {
      alert("Something went wrong!");
      return;
    }
     
    try {
      const response = await axios.post(
        "http://localhost:5000/api/submitForm",
        formData
      );
      console.log(response.data.message); // Log the response from the backend

      alert(`Thanks ${formData.name}, I will shortly connect with you!`);
    } catch (error) {
      console.error("Error submitting the form:", error);

      alert("Backend Server was not Running while submitting the form.");
    }
    

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="main-container">
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <div>
                <h1 className="aboutme-heading">Contact me</h1>
              </div>
            </Col>
            <Col md={12} id="contact" className="mt-3">
              <Row>
                <Col md={4}>
                  <div className="contacts-form" data-aos="fade-up">
                    <form>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="username" className="label-class">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-input input-class"
                          id="username"
                          name="name"
                          aria-describedby="emailHelp"
                          placeholder="Enter your name"
                          value={formData.name || ""}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="email" className="label-class">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-input input-class"
                          name="email"
                          id="email"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                          value={formData.email || ""}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="userMessage" className="label-class">
                          Message
                        </label>
                        <textarea
                          className="form-message input-class"
                          id="userMessage"
                          name="message"
                          rows="3"
                          placeholder="Enter message"
                          value={formData.message || ""}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="submit-btn">
                        <button
                          type="submit"
                          className="submitBtn"
                          onClick={handleSubmit}
                        >
                          Submit
                          <AiOutlineSend className="send-icon" />
                        </button>
                      </div>
                    </form>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}