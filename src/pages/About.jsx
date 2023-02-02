import Profile from '../assets/profile.jpg'
import '../styles/About.css'
import { useEffect } from 'react'

const About = () => {
  document.body.classList.remove('prevent-scroll')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main id="about-main">
      <div className="content">
        <div id="info">
          <h1 id='about-header'><span>About Danielle</span></h1>
          <p>I'm Danielle, a full stack software engineer from Boston, MA with a wide range of experience creating innovative applications. I am a fast learner with an analytical, detail-oriented, and logical side that is complemented by my creative and inventive side.</p>

          <p>I am a proud graduate of Providence College, where I received my Bachelor of Science in Mathematics and Biology, and General Assembly, where I received a Software Engineering Immersive Certificate. With a background as a biology researcher, I am excited to combine my new career in software development with my past experience in healthy and life sciences, as well as the resilience these fields instilled in me.</p>
        </div>
        <img src={Profile} alt="profile" />
      </div>

      <div id='details'>
        <h2><span>I'm also a...</span></h2>
        <div id="icon-container">
          <div className='icon-card'>
            <div className='emoji'>👩🏻‍🍳</div>
            <div className='label'>Chef</div>
          </div>
          <div className='icon-card'>
            <div className='emoji'>🐈</div>
            <div className='label'>Cat Lady</div>
          </div>
          <div className='icon-card'>
            <div className='emoji'>🏃🏻‍♀️</div>
            <div className='label'>Runner</div>
          </div>
          <div className='icon-card'>
            <div className='emoji'>☕️</div>
            <div className='label'>Coffee Addict</div>
          </div>
          <div className='icon-card'>
            <div className='emoji'>♀️</div>
            <div className='label'>Feminist</div>
          </div>
          <div className='icon-card'>
            <div className='emoji'>📚</div>
            <div className='label'>Book Lover</div>
          </div>
          <div className='icon-card'>
            <div className='emoji'>🧶</div>
            <div className='label'>Crocheter</div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About