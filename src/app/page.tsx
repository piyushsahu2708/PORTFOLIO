import Contact from '@/components/sections/contact';
import Experience from '@/components/sections/experience';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects';
import SeoOptimizer from '@/components/sections/seo-optimizer';
import Skills from '@/components/sections/skills';

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <SeoOptimizer />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
