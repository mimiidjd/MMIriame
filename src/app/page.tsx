import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import { projects as allProjects } from '@/data/projects';

export default function Home() {
  // Filter projects to show only the desired ones on the homepage
  const homepageProjects = allProjects.filter(project =>
    [
      "Ohmyglow Beauty - Stage",
      "Affiche Datavisualisation",
      "Agents IA",
      "CodeCore - Blog Laravel"
    ].includes(project.title)
  );

  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects projects={homepageProjects} />
      <Footer />
    </main>
  );
} 