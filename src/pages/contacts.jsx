import React from "react";
import "../styles/contacts.css";

let Contacts = () => {
  let github = require("../images/github.png");
  let linkedIn = require("../images/linkedin.png");
  let mail = require("../images/mail.png");
  let phone = require("../images/phone.png");
  let photo = require("../images/photo.png");
  return (
    <>
      <section>
        <div>
          <h1 id="contactsTitle">Contacts</h1>
        </div>
        <div id="divPhoneNumber">
          <img id="phone" src={phone} alt="" />
          <p id="contactsPhone">06 23 50 32 93</p>
        </div>
        <div id="divMail">
          <img id="mail" src={mail} alt="" />
          <p id="contactsMail">Baptiste.clms@gmail.com</p>
        </div>
        <div id="pdp">
          <img src={photo} alt="" />
        </div>
      </section>
      <section>
        <div id="iconsContacts">
          <a href="https://github.com/Aekyu">
            <img id="iconsGit" src={github} alt="githubLink" />
          </a>
          <a href="https://www.linkedin.com/in/baptisteclms/">
            <img id="iconsLinkedIn" src={linkedIn} alt="linkedInLink" />
          </a>
          <a href="baptiste.clms@gmail.com">
            <img id="iconsMail" src={mail} alt="mailLink" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Contacts;
