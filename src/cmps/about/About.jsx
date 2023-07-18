import Me from '../../assets/img/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

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
              <h5>Experience</h5>
              <small>BootCamp cartificent</small>

            </article>

            <article className='about-card'>
              <VscFolderLibrary className='about-icon' />
              <h5>Projects</h5>
              <small>3 completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ullam blanditiis, minima sed aperiam quod, consectetur ipsa sint illum doloremque amet aspernatur enim veritatis, quia suscipit natus? Eum, molestiae aspernatur.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}