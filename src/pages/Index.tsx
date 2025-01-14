import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectProcess from "../components/ProjectProcess";
import Services from "../components/Services";
import Team from "../components/Team";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navbar />
      <Hero />
      <ProjectProcess />
      <Services />
      <Team />
    </div>
  );
};

export default Index;