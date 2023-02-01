import Profile from '../assets/profile.jpg'

const About = () => {
  return (
    <main id="about-main">
      <h1 id='about-header'><span>About Danielle</span></h1>
      <div className="content">
        <img src={Profile} alt="profile" />
        <p>I'm Danielle, a full stack software engineer from Boston, MA with a wide range of experience creating innovative applications. I am a fast learner with an analytical, detail-oriented, and logical side that is complemented by my creative and inventive side.</p>

        <p>I am a proud graduate of Providence College, where I received my Bachelor of Science in Mathematics and Biology, and General Assembly, where I received a Software Engineering Immersive Certificate. With a background as a biology researcher, I am excited to combine my new career in software development with my past experience in healthy and life sciences, as well as the resilience these fields instilled in me.</p>
      </div>

      <div>
        <p>I'm also a...</p>
        <div id="icon-grid">
          <div>
            <div>👩🏻‍🍳</div>
            <div>Chef</div>
          </div>
          <div>
            <div>🐈</div>
            <div>Cat Lady</div>
          </div>
          <div>
            <div>🏃🏻‍♀️</div>
            <div>Runner</div>
          </div>
          <div>
            <div>☕️</div>
            <div>Coffee Addict</div>
          </div>
          <div>
            <div>♀️</div>
            <div>Feminist</div>
          </div>
          <div>
            <div>📚</div>
            <div>Book Lover</div>
          </div>
          <div>
            <div>🧶</div>
            <div>Crocheter</div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About