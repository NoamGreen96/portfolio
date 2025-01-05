import { BiCheck } from 'react-icons/bi'

export function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Service</h2>
      <div className="container services-container">
        <div className="service">
          <div className="service-head">
            <h3>Web developer</h3>
          </div>

          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon' />
              <p>Custom Web App Development</p>
            </li>
            <li>
              <BiCheck className='service-list-icon' />
              <p>Responsive Front-End Design</p>
            </li>
            <li>
              <BiCheck className='service-list-icon' />
              <p>Database Management</p>
            </li>
            <li>
              <BiCheck className='service-list-icon' />
              <p>API Development & Integration</p>
            </li>
            <li>
              <BiCheck className='service-list-icon' />
              <p>Performance Optimization</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}