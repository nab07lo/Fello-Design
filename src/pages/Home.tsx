import Hero from '../components/Hero';
import Services from '../components/Services';
import GhostPortfolio from '../components/GhostPortfolio';
import Workflow from '../components/Workflow';
import VideoShowcase from '../components/VideoShowcase';
import Pricing from '../components/Pricing';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <VideoShowcase />
      <GhostPortfolio />
      <Workflow />
      <Pricing />
    </main>
  );
}
