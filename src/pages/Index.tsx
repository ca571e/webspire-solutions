import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectProcess from "../components/ProjectProcess";
import Services from "../components/Services";
import Team from "../components/Team";
import Portfolio from "../components/Portfolio";
import Clients from "../components/Clients";
import ContentHub from "../components/ContentHub";
import Quiz from "../components/Quiz";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <ProjectProcess />
      <Team />
      <Clients />
      <ContentHub />
      <Quiz />
    </div>
  );
};

export default Index;