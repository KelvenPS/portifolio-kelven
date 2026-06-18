import './App.css'

function App() {
  const projects = [
    {
      title: "CliniQ Pro",
      description: "Plataforma completa para gestão de clínicas, prontuário eletrônico e laudos cognitivos.",
      image: "clinicpro.png",
      link: "http://2.25.185.223/login"
    },
    {
      title: "Totem Unimed",
      description: "Interface de autoatendimento para emissão de 2ª via de boletos, otimizando o fluxo de atendimento.",
      image: "totemunimed.png",
      link: "https://totemunimed.unimedpatosdeminas.com.br/"
    },
    {
      title: "Gestão de Desenvolvimento",
      description: "Painel centralizado para controle de deploys e tarefas de desenvolvimento.",
      image: "gestaodesenvolvimento.png",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-integra-dark text-slate-900 dark:text-gray-100 transition-colors duration-300">
      <main className="max-w-5xl mx-auto px-6 py-20">
        
        {/* Seção Hero: Layout 2 Colunas */}
        <section className="py-10 grid md:grid-cols-2 gap-12 items-center">
          {/* Coluna da Esquerda: Texto */}
          <div className="space-y-6">
            <span className="px-3 py-1 text-sm font-medium text-integra-accent bg-purple-100 dark:bg-purple-900/20 rounded-full">
              Integradata
            </span>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
              I'm Kelven, <br />
              <span className="text-integra-accent">Software Consultant.</span>
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Conectando dados, transformando negócios. Ajudo empresas a automatizarem 
              processos e transformarem dados em decisões estratégicas.
            </p>

            <div className="flex gap-4">
              <button className="px-6 py-3 bg-integra-accent text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                Meus Projetos
              </button>
            </div>
          </div>

          {/* Coluna da Direita: Foto */}
          <div className="flex justify-center md:justify-end">
            <img 
              src={`${import.meta.env.BASE_URL}kelven.png`} 
              alt="Kelven Pereira" 
              className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-purple-500/20 shadow-2xl"
            />
          </div>
        </section>

        {/* Seção de Projetos */}
        <section className="py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Meus Projetos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((proj, i) => (
              <div key={i} className="border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-lg transition-shadow">
                <img 
                  src={`${import.meta.env.BASE_URL}${proj.image}`} 
                  alt={proj.title} 
                  className="rounded-lg mb-4 h-40 w-full object-cover" 
                />
                <h3 className="font-bold text-xl mb-2">{proj.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{proj.description}</p>
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-integra-accent font-medium hover:underline">Ver projeto →</a>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}

export default App