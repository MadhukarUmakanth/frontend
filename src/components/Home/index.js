import './index.css'
import Header from '../Header'

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png"
          alt="home"
          className="home-img"
        />
        <h1 className="home-heading">Home</h1>
      </div>
    </>
  )
}

export default Home
