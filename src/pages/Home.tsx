import CoursePlatform from "../components/AfterHero";
import Banner from "../components/Banner";
import PromoBanner from "../components/BeforeFooter";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <section>


      <section>
        <Navbar />
      </section>



      <section>
        <Banner />
      </section>



      <section>
        <Hero/>
      </section>



      <section>
        <CoursePlatform/>
      </section>




      <section>
        <PromoBanner/>
      </section>




      <section>
        <Footer/>
      </section>






    </section>
  );
};

export default Home;
