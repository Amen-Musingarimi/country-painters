import { useState } from 'react';
import classes from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorSubject, setErrorSubject] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      fetch('https://formspree.io/f/mzbqzrae', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }

    if (!name) {
      setErrorName('Name is required');
      return;
    }
    setErrorName(' ');

    if (!email) {
      setErrorEmail('Email is required');
      return;
    }
    setEmail('');
    if (!subject) {
      setErrorEmail('Subject is required');
      return;
    }
    setErrorSubject('');
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorEmail('Email is not valid');
    } else {
      setErrorEmail(' ');
    }
    if (!message) {
      setErrorMessage('Message is required');
    } else {
      setErrorMessage(' ');
    }
  };

  return (
    <div className={classes.formContainer}>
      <h3 className={classes.formHeading}>Get In Touch With Us</h3>
      <form noValidate onSubmit={handleSubmit}>
        <div className={classes.inputWrapper}>
          <label className={classes.labelCont}>
            <p className={classes.formLabel}>Your Name</p>
            <spa className={classes.formLabel}>*</spa>
          </label>
          {errorName && <p className={classes.erroMessage}>{errorName}</p>}
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            name="full-name"
            className={classes.input}
            required
          />
        </div>

        <div className={classes.inputWrapper}>
          <label className={classes.labelCont}>
            <p className={classes.formLabel}>Your Email</p>
            <spa className={classes.formLabel}>*</spa>
          </label>
          {errorEmail && <p className={classes.erroMessage}>{errorEmail}</p>}
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            className={classes.input}
            required
          />
        </div>

        <div className={classes.inputWrapper}>
          <label className={classes.labelCont}>
            <p className={classes.formLabel}>Your Subject</p>
            <spa className={classes.formLabel}>*</spa>
          </label>
          {errorEmail && <p className={classes.erroMessage}>{errorSubject}</p>}
          <input
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            name="subject"
            className={classes.input}
            required
          />
        </div>

        <div className={classes.inputWrapper}>
          <label className={classes.labelCont}>
            <p className={classes.formLabel}>Your Message</p>
            <spa className={classes.formLabel}>*</spa>
          </label>
          {errorMessage && (
            <p className={classes.erroMessage}>{errorMessage}</p>
          )}
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            name="message"
            rows={6}
            className={classes.messageInput}
            required
          />
        </div>

        <button className={classes.submitButton}>SUBMIT</button>
      </form>
    </div>
  );
};

export default ContactForm;
