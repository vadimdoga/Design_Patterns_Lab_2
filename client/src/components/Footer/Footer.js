import React from 'react';
import './css/Footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <h2>Contact Us</h2>
      <form className="footer__form">
        <label className="footer__form__label">
          Name: 
          <input type="text" placeholder="Patrick"/>
        </label>
        <label className="footer__form__label">
          Email: 
          <input type="email" placeholder="patrick@spongebob.com"/>
        </label>
        <label className="footer__form__label">
          Message:
          <textarea type="text" placeholder="Tell us how do you feel!"/>
        </label>
      </form>
    </div>
  );
}

export default Footer;
