import Image from "next/image";
import Navbar from "./components/navbar/page";
import LeadershipMember from "./components/leadership-member/page";
import CounterIncrement from "./components/counter-increment/page";
import Services from "./pages/services/page";
import Footer from "./components/footer/page";
import Hero from "./components/first-page/page";
import Service from "./components/service/page";
import OurClients from "./components/our-clients/page";
import OurTeam from "./components/our-team/page";
import Testimonials from "./components/testimonials/page";
import AboutusContent from "./components/aboutContent/page";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}

      {/* <div className="home-header">
        <video autoPlay muted loop className="video-background">
          <source
            src="https://www.youtube.com/watch?v=9xwazD5SyVg"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="header-content">
          <h1
            className="text-white"
            style={{ fontSize: "3rem", fontWeight: "bolder" }}
          >
            Engineering for
          </h1>
          <h1
            className="text-white"
            style={{ fontSize: "3rem", fontWeight: "bolder" }}
          >
            Sustainable
          </h1>
          <h1
            className="text-white"
            style={{ fontSize: "3rem", fontWeight: "bolder" }}
          >
            Development
          </h1>
          <h1 className="text-gray-300">
            We engineer infrastructure keeping in mind about the future. We
            build today thinking about tomorrow.
          </h1>
        </div>
      </div> */}
      <Hero />
      <AboutusContent />
      <LeadershipMember />
      <CounterIncrement />
      <OurTeam />
      <Service />
      <Testimonials />
      <OurClients />
    </>
  );
}
