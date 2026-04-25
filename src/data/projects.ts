export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  role: string;
  coverImage: string;
  gallery: string[];
  description: string;
  fullDescription: string;
}

const generateGallery = (folder: string, prefix: string, count: number, ext: string = 'jpg'): string[] => {
  return Array.from({ length: count }, (_, i) => `/${folder}/${prefix}${i + 1}.${ext}`);
};

/**
 * 💡 COMO ADICIONAR NOVOS PROJETOS E MUDAR TEXTOS:
 * 
 * 1. Crie uma pasta dentro de `public/` com o nome do seu projeto.
 * 2. Coloque as imagens lá dentro (ex: imagem_1.jpg, etc).
 * 3. Adicione uma linha abaixo. Para mudar os textos, basta adicionar `description`, `role`, etc.
 * 
 * Exemplo Simples: { folder: 'Novo Projeto', count: 5 }
 * Exemplo Completo: { 
 *    folder: 'Meu Projeto', 
 *    count: 3, 
 *    description: 'Resumo curto', 
 *    fullDescription: 'História longa do projeto...',
 *    category: 'Design',
 *    role: 'Direção',
 *    year: '2023'
 * }
 */
const projectData: { 
  folder: string; 
  count: number; 
  prefix?: string; 
  ext?: string; 
  category?: string; 
  title?: string;
  description?: string;
  fullDescription?: string;
  role?: string;
  year?: string;
}[] = [
  { 
    folder: 'A MAGIA DO NATAL', 
    count: 33,
    category: 'Fotografia & Direção',
    description: 'Campanha de natal com temática mágica.',
    fullDescription: 'Um ensaio focado na magia e no encantamento do natal. A direção de arte buscou trazer luzes quentes e um clima nostálgico para todas as peças.',
    role: 'Direção de Arte',
    year: '2023'
  },
  { 
    folder: 'ANDALUZIA - LALIBELA', 
    count: 26,
    category: 'Editorial de Moda',
    description: 'Coleção inspirada na região da Andaluzia.',
    fullDescription: 'Editorial fotografado para a Lalibela, trazendo texturas, cores e a essência vibrante do sul da Espanha.',
    role: 'Direção Criativa'
  },
  { folder: 'ANEWMATE - Life style', count: 2 },
  { folder: 'BEACH PHOTOGRAY IA - THAY', count: 11, category: 'AI & Fotografia' },
  { folder: 'BEST SELLERS', count: 7 },
  { folder: 'Blumenau Multimarcas', count: 5 },
  { folder: 'BRUNA MEDEIROS', count: 7 },
  { folder: 'Bruxo Consultoria', count: 2 },
  { folder: 'CARS', count: 9 },
  { folder: 'CATALOG - ANDALUZIA', count: 168, category: 'Catálogo' },
  { folder: 'CHRONOS EXOTIC', count: 1 },
  { folder: 'COMER BEM', count: 1 },
  { folder: 'COTED AZUR', count: 24, category: 'Editorial de Moda' },
  { folder: 'COTED AZUR - CATÁLAGO', count: 55, category: 'Catálogo' },
  { folder: 'DOLCE FAR NIENTE - MARKETING', count: 14 },
  { folder: 'Essenza - Principessa', count: 1 },
  { folder: 'Estampas', count: 8, category: 'Design de Estampa' },
  { folder: 'Eternal Valentine - LALIBELA', count: 17, category: 'Editorial de Moda' },
  { folder: 'Flor de Cerejeira', count: 1 },
  { folder: 'FLYERS - SHOW', count: 4, category: 'Design Gráfico' },
  { folder: 'For basketball player', count: 1 },
  { folder: 'GILUZ - BRAND', count: 1, category: 'Identidade Visual' },
  { folder: 'Giverny - Lalibela', count: 16, category: 'Editorial de Moda' },
  { folder: 'HO SOCCER - OLD WORK', count: 14, category: 'Design Esportivo' },
  { folder: 'IA PHOTOS PRODUCT SHOWCASE', count: 46, category: 'AI & Produto' },
  { folder: 'Isidoro - Advertising', count: 6, category: 'Publicidade' },
  { folder: 'LALIBELA - PARFUM', count: 6, category: 'Fotografia de Produto' },
  { folder: 'LALIBELA - WORKS', count: 60, category: 'Editorial de Moda' },
  { folder: 'Lookbook - Eternal Valentine', count: 52, category: 'Lookbook' },
  { folder: 'LOOKBOOK - GIVERNY', count: 220, category: 'Lookbook' },
  { folder: 'MANUAL DE MARCA - LALIBELA', count: 12, category: 'Identidade Visual' },
  { folder: 'Meliponário', count: 2 },
  { folder: 'Modelo em IA', count: 14, category: 'AI & Moda' },
  { folder: 'Mugs Design', count: 7, category: 'Design de Produto' },
  { folder: 'NONE', count: 4 },
  { folder: 'Ocean INK', count: 4 },
  { folder: 'OHANA - FASHION', count: 1 },
  { folder: 'Pandora - Works', count: 11 },
  { folder: 'Paratempo', count: 1 },
  { folder: 'Patterns', count: 32, category: 'Design de Estampa' },
  { folder: 'Ponto Certo', count: 9 },
  { folder: 'Principessa -18 Anos Editorial', count: 16, prefix: 'behance_img_', ext: 'png', category: 'Editorial de Moda' },
  { folder: 'PRINTS', count: 22, category: 'Print Design' },
  { folder: 'Product Photography', count: 20, category: 'Fotografia de Produto' },
  { folder: 'Provence - LALIBELA', count: 49, category: 'Editorial de Moda' },
  { folder: 'PROVENCE - MARKETING', count: 16, category: 'Marketing' },
  { folder: 'Realta Veículos', count: 5 },
  { folder: 'Samilá', count: 2 },
  { folder: 'Sport Chic - Principessa', count: 7, category: 'Editorial de Moda' },
  { folder: 'THE CITY - LALIBELA', count: 29, category: 'Editorial de Moda' },
  { folder: 'The New Denim', count: 8, category: 'Editorial de Moda' },
  { folder: 'Vacations', count: 14 },
  { folder: 'Valentin - Multimarcas', count: 6 },
  { folder: 'Xis Gaúcho', count: 1 },
  { folder: 'Yasmin Leite - Identidade Visual', count: 1, category: 'Identidade Visual' },
  { folder: 'Zen Balance', count: 2 },
  { folder: 'ÍCONES - PRINCIPESSA', count: 6, category: 'Design Gráfico' },
  { folder: 'ÍCONES ETERNOS - Especial de 18 Anos - AI', count: 16, category: 'AI & Design' },
];

export const projects: Project[] = projectData.map(data => {
  const prefix = data.prefix || 'imagem_';
  const ext = data.ext || 'jpg';
  const id = data.folder.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
  return {
    id,
    title: data.title || data.folder,
    category: data.category || 'Portfolio',
    year: data.year || '2024',
    role: data.role || 'Art Direction',
    description: data.description || `Exploração visual para o projeto ${data.folder}.`,
    fullDescription: data.fullDescription || `Registro completo e evidências visuais referentes ao projeto ${data.folder}, demonstrando a abordagem de design, estética e desenvolvimento do trabalho.`,
    coverImage: `/${data.folder}/${prefix}1.${ext}`,
    gallery: generateGallery(data.folder, prefix, data.count, ext)
  };
});
