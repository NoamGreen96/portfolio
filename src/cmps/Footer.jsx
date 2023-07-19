import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

export function Footer() {


  return (
    <footer>
      <a href="#" className="footer-logo">Noamg</a>

      <ul className="parmalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href="https://www.facebook.com/noam.green.420/">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/">
          <FiInstagram />
        </a>
      </div>

      <div className="footer-copyright">
        <small>&copy; Noam Green. All rights reserved</small>
      </div>

    </footer>
  )
}