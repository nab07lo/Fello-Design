import { useEffect } from 'react';

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-obsidian pt-32 pb-20 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-sans text-4xl font-bold uppercase tracking-tighter text-silver mb-8">Política de Privacidade</h1>
        
        <div className="prose prose-invert prose-p:font-mono prose-p:text-sm prose-p:text-silver/70 prose-headings:font-sans prose-headings:text-silver prose-a:text-silver hover:prose-a:text-gray-dark">
          <p className="mb-6">
            A sua privacidade é importante para nós. É política da Boundless respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Boundless, e outros sites que possuímos e operamos.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">1. Informações que coletamos</h2>
          <p className="mb-6">
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">2. Uso de informações</h2>
          <p className="mb-6">
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">3. Compartilhamento de dados</h2>
          <p className="mb-6">
            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">4. Links externos</h2>
          <p className="mb-6">
            O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">5. Consentimento</h2>
          <p className="mb-6">
            Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados. O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais.
          </p>
          
          <p className="mt-12 text-xs text-silver/50">
            Esta política é efetiva a partir de Março de 2026.
          </p>
        </div>
      </div>
    </main>
  );
}
