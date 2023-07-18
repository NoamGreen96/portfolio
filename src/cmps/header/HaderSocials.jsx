import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

export function HeaderSocial() {


  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/noamgr/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/NoamGreen96" target="_blank">
        <FaGithub /></a>
    </div>
  )
}