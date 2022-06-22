import React from "react";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    message: "",
  });

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
    <section className="sectionContainer">
      {messageSent ? (
        <div>
          <h2>Thank You</h2>
        </div>
      ) : (
        <form className="contactContainer" onSubmit={handleSubmit}>
          <h1>Contact me</h1>
          <input
            type="text"
            placeholder="Your name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            placeholder="Your e-mail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            placeholder="Your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <button className="btn home-button mt-5">
            <h4>Send message</h4>
          </button>
          {/* we can add property type="submit" */}
        </form>
      )}
    </section>
  );
}
