import React from 'react';
import './css/SocialElement.css'

const SocialElement = (props) => {
  return (
    <a className="social" href={props.href} target="_blank" rel="noopener noreferrer">
      <img alt={props.alt} src={props.src} />
    </a>
  );
}

export default SocialElement;
