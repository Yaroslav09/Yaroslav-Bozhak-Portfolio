import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import CV from "../.././assets/CV_BOZHAK_YAROSLAV.pdf";
import facebook_logo from "../.././assets/facebook.png";
import linkedin_logo from "../.././assets/linkedin.png";
import github_logo from "../.././assets/github.png";
import gmail_logo from "../.././assets/gmail.png";
import cv_logo from "../.././assets/CV.png";
import "./contact.css";

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wmaxr5c", "template_1tlh39j", form.current, {
        publicKey: "WiPPmDFT5SIyu0fiZ",
      })
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        (error) => {
          alert("Failed to send the message, please try again", error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="container contact-page">
        <h2>Contact me</h2>
        <div className="contact-block">
          <div className="social-media">
            <ul>
              <li>
                <img src={linkedin_logo} alt="linkedin logo" />
                <a
                  href="https://www.linkedin.com/in/yaroslav-bozhak/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/yaroslav-bozhak
                </a>
              </li>
              <li>
                <img src={facebook_logo} alt="facebook logo" />
                <a
                  href="https://www.facebook.com/yaroslav.bozhak/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  facebook.com/yaroslav.bozhak
                </a>
              </li>
              <li>
                <img src={github_logo} alt="github logo" />
                <a
                  href="https://github.com/Yaroslav09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/Yaroslav09
                </a>
              </li>
              <li>
                <img src={gmail_logo} alt="gmail logo" />
                <a href="mailto:yaroslavbozhak.work@gmail.com">
                  yaroslavbozhak.work@gmail.com
                </a>
              </li>
              <li>
                <img src={cv_logo} alt="cv logo" />
                <a href={CV} download="CV_YaroslavBozhak_RoR" target="_blank">
                  Download My CV
                </a>
              </li>
            </ul>
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="form-top">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="form-top">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="send-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
