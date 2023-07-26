import CV from '../../assets/img/cv.pdf'

export function CTA() {
  return (
    <div className="cta">

      <a href={CV} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>

  )
}