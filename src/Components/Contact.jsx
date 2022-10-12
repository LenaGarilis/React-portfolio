import React from "react";
import ScreenHeading from "./Utilities/ScreenHeading";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  console.log(formData);

  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const [messageSent, setMessageSent] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setMessageSent(true);
  };
  return (
    <section class="main-sec" id="contact">
      <div class="content contact">
        <div class="contact-container">
          <div class="contactInfo">
            <div>
              <ScreenHeading title={"Contact me"} />
              <ul class="contact-icons">
                <li>
                  <span>Ahlerstedt, Germany</span>
                </li>
                <li>
                  <span>elenagarilis@web.de</span>
                </li>
                <li>
                  <span>+49 1525 5623463</span>
                </li>
              </ul>
            </div>
          </div>

          {messageSent ? (
            <div className="success-submit-message">
              <ScreenHeading title={"Thank you"} />
            </div>
          ) : (
            <form class="contactForm" onSubmit={handleSubmit}>
              <ScreenHeading title={"Send a message"} />
              <div class="formBox">
                <div class="inputBox w50">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <span>First Name</span>
                </div>
                <div class="inputBox w50">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  <span>Last Name</span>
                </div>
                <div class="inputBox w50">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <span>Email </span>
                </div>
                <div class="inputBox w50">
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <span>Mobile</span>
                </div>
                <div class="inputBox w100">
                  <textarea
                    id=""
                    cols="30"
                    rows="10"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <span>Write your message here ...</span>
                </div>

                <button className="submit-button inputBox w100">
                  <h4>Send message</h4>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
