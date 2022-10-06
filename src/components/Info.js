import React from 'react'
import imageAbout from '../images/IMG_6689.jpeg'
const Info = () => {
  return (
    <div className="info">
      <img src={imageAbout} alt="Profile" />
      <h1 className="info--name">Ran Pol</h1>
      <h3 className="info--role">Software Developer</h3>
      <p>randypol.com</p>
      <button class="info--button button-email" type="button">
        Email
      </button>
      <button class="info--button button-linkedin" type="button">
        LinkedIn
      </button>
    </div>
  )
}

export default Info