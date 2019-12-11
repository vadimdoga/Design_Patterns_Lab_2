import React from 'react';
import './css/Footer.css'
import SocialElement from './SocialElement/SocialElement'
import facebook_icon from '../../assets/footer_icons/facebook.png'
import instagram_icon from '../../assets/footer_icons/instagram.png'
import twitter_icon from '../../assets/footer_icons/twitter.png'
import youtube_icon from '../../assets/footer_icons/youtube.png'

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
          <p>Message:</p>
          <textarea type="text" rows="6" cols="80" placeholder="Tell us how do you feel!"/>
        </label>
        <input className="footer__form_submitButton" type="submit"></input>
      </form>
      <div className="footer__social">
        <SocialElement 
          alt="facebook"
          src={facebook_icon}
          href="https://www.facebook.com/"
        />
        <SocialElement 
          alt="instagram"
          src={instagram_icon}
          href="https://www.instagram.com/"
        />
        <SocialElement 
          alt="twitter"
          src={twitter_icon}
          href="https://twitter.com/?lang=en"
        />
        <SocialElement 
          alt="youtube"
          src={youtube_icon}
          href="https://www.youtube.com/"
        />
      </div>
    </div>
  );
}

export default Footer;
