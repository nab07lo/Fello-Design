import { useEffect } from 'react';

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-obsidian pt-32 pb-20 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-sans text-4xl font-bold uppercase tracking-tighter text-silver mb-8">Termos de Serviço</h1>
        
        <div className="prose prose-invert prose-p:font-mono prose-p:text-sm prose-p:text-silver/70 prose-headings:font-sans prose-headings:text-silver prose-a:text-silver hover:prose-a:text-gray-dark">
          <h2 className="text-2xl font-bold mt-10 mb-4">1. Termos</h2>
          <p className="mb-6">
            Ao acessar ao site Boundless, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">2. Uso de Licença</h2>
          <p className="mb-6">
            É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Boundless, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
          </p>
          <ul className="list-disc pl-6 mb-6 font-mono text-sm text-silver/70">
            <li className="mb-2">modificar ou copiar os materiais;</li>
            <li className="mb-2">usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
            <li className="mb-2">tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Boundless;</li>
            <li className="mb-2">remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
            <li className="mb-2">transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">3. Isenção de responsabilidade</h2>
          <p className="mb-6">
            Os materiais no site da Boundless são fornecidos 'como estão'. Boundless não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">4. Limitações</h2>
          <p className="mb-6">
            Em nenhum caso a Boundless ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Boundless, mesmo que Boundless ou um representante autorizado da Boundless tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">5. Precisão dos materiais</h2>
          <p className="mb-6">
            Os materiais exibidos no site da Boundless podem incluir erros técnicos, tipográficos ou fotográficos. Boundless não garante que qualquer material em seu site seja preciso, completo ou atual. Boundless pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Boundless não se compromete a atualizar os materiais.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">6. Links</h2>
          <p className="mb-6">
            A Boundless não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Boundless do site. O uso de qualquer site vinculado é por conta e risco do usuário.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">Modificações</h2>
          <p className="mb-6">
            A Boundless pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
          </p>
          
          <p className="mt-12 text-xs text-silver/50">
            Estes termos são efetivos a partir de Março de 2026.
          </p>
        </div>
      </div>
    </main>
  );
}
