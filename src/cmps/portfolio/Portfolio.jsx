import { ProtfolioProj } from '../../services/portfolio.service'
import IMG1 from '../../assets/img/portfolio1.jpg'
import IMG2 from '../../assets/img/portfolio2.jpg'
import IMG3 from '../../assets/img/portfolio3.jpg'
import IMG4 from '../../assets/img/portfolio4.jpg'
import IMG5 from '../../assets/img/portfolio5.png'
import IMG6 from '../../assets/img/portfolio6.jpg'


export function Portfolio() {


  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {
          ProtfolioProj.map(({ id, img, title, github, demo }) => {
            return (
              <article key={id} className="portfolio-item">
                <div className="portfolio-item-img">
                  <img src={img} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio-item-cta">
                  <a href={github} className="btn">Github</a>
                  <a href={demo} className="btn btn-primary"
                    target='_blank'>
                    Live Demo
                  </a></div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}