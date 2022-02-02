import React, { useState } from "react";
import "../styles/contacts.css";
import "../styles/mediaContacts.css";
import { init } from '@emailjs/browser';
init("user_KVJhRPFhfajvxvGtBWgNI");

let Contacts = () => {
  let github = require("../images/github.png");
  let linkedIn = require("../images/linkedin.png");
  let mail = require("../images/mail.png");
  let phone = require("../images/phone.png");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isEmail = () => {
    let mail = document.querySelector('#not-mail');
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
      mail.style.display = "none";
      return true
    } else {
      mail.style.display = "block";
      return false;
    }
  }

  const failMessage = () => {

    let formMess = document.querySelector(".form-message");
    formMess.innerHTML = 'Merci de remplir correctement les champs requis *';
    formMess.style.background = 'rgb(253,87,87)';
    formMess.style.opacity = '1';

    document.querySelector('#name').classList.add('error');
    document.querySelector('#name').value = ''
    document.querySelector('#email').classList.add('error');
    document.querySelector('#email').value = ''
    document.querySelector('#message').classList.add('error');
  }

  const successMessage = () => {
    let formMess = document.querySelector(".form-message");

    formMess.innerHTML = 'Message envoyé ! Je vous recontacte au plus vite !';
    formMess.style.background = "#00c1ec";
    formMess.style.opacity = '1';

    document.querySelector('#name').classList.remove('error');
    document.querySelector('#email').classList.remove('error');
    document.querySelector('#message').classList.remove('error');

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && isEmail() && message) {

      sendFeedback("template_9qdf7y9", {
        name,
        email,
        message,
      });
    } else {
      failMessage()
    }
  };

  const sendFeedback = (templateId, variables) => {

    window.emailjs
      .send("service_i5cincl", templateId, variables)
      .then((res) => {
        successMessage();
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) => {
          failMessage("Une erreur s'est produite, veuillez réessayer.");
        }
      )
  };


  return (
    <>
      <div id="center">
        <section>
          <div>
            <div>
              <h1 id="contactsTitle">Contacts</h1>
            </div>
            <div id="divPhoneNumber">
              <img id="phone" src={phone} alt="" />
              <p id="contactsPhone">06 23 50 32 93</p>
            </div>
          </div>
        </section>
        <section id="form">
          <div id="form2">
            <form className="contact-form">
              <h2>Me contacter</h2>
              <div className="form-content">
                <div className="email-content">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Votre nom *"
                    value={name}
                    autoComplete="off"
                  />
                </div>
                <div className="email-content">
                  <label id="not-mail">Email non valide</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre email *"
                    value={email}
                    autoComplete="off"
                  />
                </div>
                <textarea
                  id="message"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Votre message *"
                  value={message}
                />
              </div>
              <input
                className="button"
                type="button"
                value="Envoyer"
                onClick={handleSubmit}
              />
              <div className="form-message"></div>
            </form>
          </div>
        </section>
        <section>
          <div id="iconsContacts">
            <a href="https://github.com/Aekyu" target="_blank">
              <img id="iconsGit" src={github} alt="githubLink" />
            </a>
            <a href="https://www.linkedin.com/in/baptisteclms/" target="_blank">
              <img id="iconsLinkedIn" src={linkedIn} alt="linkedInLink" />
            </a>
            <a href="mailto:baptiste.clms@gmail.com" target="_blank">
              <img id="iconsMail" src={mail} alt="mailLink" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contacts;
