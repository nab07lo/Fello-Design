export type ProjectImage = {
  url: string;
  span: 'full' | 'half';
};

export type Project = {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  role: string;
  description: string;
  heroImage: string;
  images: ProjectImage[];
  nextProjectId?: string;
};

export const projectsData: Record<string, Project> = {
  'vellin-studio': {
    id: 'vellin-studio',
    title: 'VELLIN STUDIO',
    category: 'BRANDING & DIGITAL',
    client: 'Vellin Architecture',
    year: '2024',
    role: 'Art Direction, UI/UX, Development',
    description: 'A complete digital transformation for a high-end architecture firm. We created a brutalist yet refined digital presence that reflects their physical work. The goal was to translate the tactile feeling of concrete and steel into a digital experience, utilizing stark contrasts, bold typography, and fluid motion.',
    heroImage: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop',
    images: [
      { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop', span: 'full' },
      { url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop', span: 'half' },
      { url: 'https://images.unsplash.com/photo-1600607687931-cecebd808ceb?q=80&w=1000&auto=format&fit=crop', span: 'half' },
      { url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop', span: 'full' },
    ],
    nextProjectId: 'aether-app',
  },
  'aether-app': {
    id: 'aether-app',
    title: 'AETHER APP',
    category: 'UI/UX DESIGN',
    client: 'Aether Tech',
    year: '2023',
    role: 'Product Design, Interaction',
    description: 'A conceptual meditation app using generative AI to create personalized soundscapes and visual environments based on biometric data. The interface was designed to be as invisible as possible, allowing the content to take center stage.',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop',
    images: [
      { url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop', span: 'full' },
      { url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop', span: 'half' },
      { url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop', span: 'half' },
      { url: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=2000&auto=format&fit=crop', span: 'full' },
    ],
    nextProjectId: 'nexus-campaign',
  },
  'nexus-campaign': {
    id: 'nexus-campaign',
    title: 'NEXUS CAMPAIGN',
    category: 'ART DIRECTION',
    client: 'Nexus Global',
    year: '2024',
    role: 'Creative Direction, 3D Motion',
    description: 'A global campaign exploring the intersection of human emotion and artificial intelligence through surreal 3D landscapes. We crafted a visual language that felt both alien and deeply familiar.',
    heroImage: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop',
    images: [
      { url: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=2000&auto=format&fit=crop', span: 'full' },
      { url: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1000&auto=format&fit=crop', span: 'half' },
      { url: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1000&auto=format&fit=crop', span: 'half' },
      { url: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=2000&auto=format&fit=crop', span: 'full' },
    ],
    nextProjectId: 'lumina-brand',
  },
  'lumina-brand': {
    id: 'lumina-brand',
    title: 'LUMINA',
    category: 'IDENTITY',
    client: 'Lumina Cosmetics',
    year: '2023',
    role: 'Brand Identity, Packaging',
    description: 'A futuristic cosmetics brand identity focusing on bioluminescence and sustainable, lab-grown ingredients. The packaging design utilizes light-reactive materials to create a dynamic unboxing experience.',
    heroImage: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2000&auto=format&fit=crop',
    images: [
      { url: 'https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=2000&auto=format&fit=crop', span: 'full' },
      { url: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1000&auto=format&fit=crop', span: 'half' },
      { url: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1000&auto=format&fit=crop', span: 'half' },
      { url: 'https://images.unsplash.com/photo-1571781526291-c477ebfd024b?q=80&w=2000&auto=format&fit=crop', span: 'full' },
    ],
    nextProjectId: 'vellin-studio',
  }
};
