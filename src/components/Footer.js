import React from 'react'
import facebook from '../images/DigitalBusiness/FacebookIcon.svg'
import github from '../images/DigitalBusiness/GitHubIcon.svg'
import InstaGram from '../images/DigitalBusiness/InstagramIcon.svg'
import twitter from '../images/DigitalBusiness/TwitterIcon.svg'

const Footer = () => {
  return (
    <div className='footerSection'>
      <img src={facebook} alt="FacebookIcon" />
      <img src={github} alt="GithubIcon" />
      <img src={InstaGram} alt="InstagramIcon" />
      <img src={twitter} alt="TwitterIcon" />
    </div>
  )
}

export default Footer
