import { BsPatchCheckFill } from 'react-icons/bs'

export function Experince() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Exprience</h2>

      {/* FRONTEND */}
      <div className="container experience-container">
        <div className="experince-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-conent">
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Expreinced</small></div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Expreinced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Expreinced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Vue</h4>
                <small className='text-light'>Expreinced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Angular</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* BACKEND */}
        <div className="experince-backend">
          <h3>Backend Development</h3>
          <div className="experience-conent">
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Expreinced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Mongo DB</h4>
                <small className='text-light'>Expreinced</small>
              </div>

            </article>
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}