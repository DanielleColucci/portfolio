import '../styles/Home.css'
import Headshot from '../assets/headshot.jpeg'

const Home = () => {
  return (
    <>
      <div className="header">
        <p>Hi, I am</p>
        <h1>Danielle Colucci</h1>
        <p>Research Biologist turned Software Engineer</p>
      </div>
      <img src={Headshot} alt="profile" />
    </>
  )
}

export default Home