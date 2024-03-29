import { useEffect, useState } from "react";
import "./contact.css";

export default function Contact() {
  const [TF, setTF] = useState(true);

  useEffect(() => {
    setTF(true);
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTF(false);
    setTimeout(function () {
      window.location.replace("/");
    }, 2000);
  };

  return (
    <div className="contact">
      {TF ? (
        <>
          <h1 className="title">Contact</h1>
          <form className="form" onSubmit={handleSubmit}>
            <fieldset className="fieldForName">
              <legend className="nameLegend">Name *</legend>
              <div className="firstName">
                <label className="firstNameLabel">
                  <input type="text" className="firstNameInput" required />
                  <span className="firstNameSpan">First Name</span>
                </label>
              </div>
              <div className="lastName">
                <label className="lastNameLabel">
                  <input type="text" className="lastNameInput" required />
                  <span className="lastNameSpan">Last Name</span>
                </label>
              </div>
            </fieldset>

            <div className="email">
              <label className="emailLabel">Email *</label>
              <input type="email" className="emailInput" required />
            </div>

            <div className="subject">
              <label className="subjectLabel">Subject *</label>
              <input type="text" className="subjectInput" required />
            </div>

            <div className="message">
              <label className="messageLabel">Message *</label>
              <textarea className="messageTextarea" required></textarea>
            </div>

            <div className="btn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </>
      ) : (
        <h1 className="title">Thanks For Contacting Us...</h1>
      )}
    </div>
  );
}
