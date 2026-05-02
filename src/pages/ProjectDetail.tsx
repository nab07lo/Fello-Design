import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'motion/react';
import { projectsData } from '../data/projects';
import { ArrowRight } from 'lucide-react';
import MediaRenderer from '../components/MediaRenderer';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id] : null;
  const nextProject = project?.nextProjectId ? projectsData[project.nextProjectId] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-obsidian pt-32 text-silver">
        <h1 className="font-sans text-4xl font-bold uppercase">Projeto não encontrado</h1>
        <Link to="/work" className="mt-8 font-mono text-sm underline">Voltar ao Portfólio</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-obsidian pt-32">
      {/* Hero */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full"
        >
          <MediaRenderer
            src={project.heroImage}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/20 to-obsidian" />
        <div className="absolute inset-0 flex flex-col items-center justify-end p-6 pb-24 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 font-mono text-xs tracking-[0.3em] text-[#e4b504] uppercase"
          >
            // {project.category}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-6xl font-bold uppercase tracking-tighter text-silver md:text-[8rem] leading-none"
          >
            {project.title}
          </motion.h1>
        </div>
      </section>

      {/* Details */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-4 flex flex-col gap-12 border-l border-white/10 pl-8"
          >
            <div>
              <span className="font-mono text-[10px] tracking-widest text-gray-dark uppercase block mb-3">CLIENTE</span>
              <span className="font-sans text-xl text-silver">{project.client}</span>
            </div>
            <div>
              <span className="font-mono text-[10px] tracking-widest text-gray-dark uppercase block mb-3">ANO</span>
              <span className="font-sans text-xl text-silver">{project.year}</span>
            </div>
            <div>
              <span className="font-mono text-[10px] tracking-widest text-gray-dark uppercase block mb-3">PAPEL</span>
              <span className="font-sans text-xl text-silver">{project.role}</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-8 md:pl-12"
          >
            <p className="font-sans text-3xl md:text-5xl leading-[1.2] tracking-tight text-silver/90">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery - Masonry/Editorial Style */}
      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {project.images.map((img, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx % 2 === 0 ? 0 : 0.2 }}
              className={`w-full overflow-hidden rounded-xl bg-graphite ${img.span === 'full' ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              <MediaRenderer
                src={img.url}
                alt={`${project.title} detail ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                style={{ minHeight: img.span === 'full' ? '60vh' : '70vh' }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Next Project / Back */}
      <section className="border-t border-white/10 bg-graphite/30">
        {nextProject ? (
          <Link 
            to={`/project/${nextProject.id}`} 
            className="group relative flex w-full flex-col items-center justify-center overflow-hidden py-32 text-center"
          >
            <div className="absolute inset-0 z-0 bg-obsidian opacity-0 transition-opacity duration-500 group-hover:opacity-80" />
            <div className="absolute inset-0 z-[-1] h-full w-full opacity-0 transition-all duration-700 group-hover:scale-105 group-hover:opacity-30">
              <MediaRenderer 
                src={nextProject.heroImage} 
                alt={nextProject.title}
                className="h-full w-full object-cover"
              />
            </div>
            
            <div className="relative z-10 flex flex-col items-center gap-6">
              <span className="font-mono text-xs tracking-[0.3em] text-[#e4b504] uppercase">
                // PRÓXIMO PROJETO
              </span>
              <div className="flex items-center gap-6">
                <h2 className="font-sans text-5xl font-bold uppercase tracking-tighter text-silver md:text-7xl transition-transform duration-500 group-hover:-translate-x-4">
                  {nextProject.title}
                </h2>
                <ArrowRight className="h-12 w-12 text-silver opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-8" />
              </div>
            </div>
          </Link>
        ) : (
          <div className="py-32 text-center">
            <Link to="/work" className="group inline-flex flex-col items-center gap-4">
              <span className="font-mono text-xs tracking-[0.2em] text-gray-dark uppercase transition-colors group-hover:text-silver">
                // VOLTAR
              </span>
              <span className="font-sans text-4xl font-bold uppercase tracking-tighter text-silver md:text-6xl transition-transform duration-500 group-hover:scale-105">
                VER TODOS OS PROJETOS
              </span>
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
