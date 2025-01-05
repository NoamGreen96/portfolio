import Me from '../../assets/img/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import { AboutP } from '../../services/about.service'

export function About() {
  
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className='about-card'>
              <FaAward className='about-icon' />
              <h5>Cartificent</h5>
              <small>Coding Academy Bootcamp</small>
            </article>
            <article className='about-card'>
              <VscFolderLibrary className='about-icon' />
              <h5>Projects</h5>
              <small>6+ completed</small>
            </article>
          </div>
         <AboutP/>
        </div>
      </div>
    </section>
  )
}