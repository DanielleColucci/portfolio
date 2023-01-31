import '../styles/Home.css'
import Headshot from '../assets/headshot.jpeg'

const Home = () => {
  return (
    <main>
      <div id="content-container">
        <div className="header">
          <p><span className='bg'>Hello there, </span>my name is</p>
          <h1><span>Danielle Colucci</span></h1>
          <p>A Boston-based <span className='bg'>software engineer</span> with a passion for problem solving and an eye for detail</p>
        </div>
        <img src={Headshot} alt="profile" />
      </div>
    </main>
  )
}

export default Home