
import "../Home/Home.css"
import AboutUs from "../LandingPage/About"
import Categories from "../LandingPage/Categories"
import Footer from "../LandingPage/Footer"
import Hero from "../LandingPage/Hero"
import NavBar from "../NavBar"
// import Select from '../Select/Select'


const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <AboutUs />
      <Categories />
<Footer />
    </div>
  )
}

export default Home