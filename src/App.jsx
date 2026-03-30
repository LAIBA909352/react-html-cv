import Title from "./components/Title";
import ProfileImage from "./components/ProfileImage";
import Contact from "./components/Contact";
import Summary from "./components/Summary";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Awards from "./components/Awards";
import Languages from "./components/Languages";
import BackLink from "./components/BackLink";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Title />
      <ProfileImage />
      <Header/>
      <Contact />
      <Summary />
      <Education />
      <Experience />
      <Skills />
      <Awards />
      <Languages />
      <BackLink />
    </>
  );
}

export default App;