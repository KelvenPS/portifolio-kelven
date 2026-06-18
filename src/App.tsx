import './App.css'

function App() {
  const projects = [
    {
      title: "CliniQ Pro",
      category: "Health Tech",
      description:
        "Plataforma completa para gestão de clínicas, prontuário eletrônico, chatbot, laudos cognitivos e automações clínicas.",
      image: "clinicpro.png",
      link: "http://2.25.185.223/login",
      tags: ["React", "Node.js", "PostgreSQL", "WhatsApp"]
    },
    {
      title: "Totem Unimed",
      category: "Autoatendimento",
      description:
        "Interface de autoatendimento para emissão de 2ª via de boletos, reduzindo filas e otimizando o fluxo de atendimento.",
      image: "totemunimed.png",
      link: "https://totemunimed.unimedpatosdeminas.com.br/",
      tags: ["Frontend", "UX", "Docker", "Nginx"]
    },
    {
      title: "Gestão de Desenvolvimento",
      category: "DevOps & Gestão",
      description:
        "Painel centralizado para controle de deploys, tarefas, evolução de projetos e acompanhamento de demandas técnicas.",
      image: "gestaodesenvolvimento.png",
      link: "#",
      tags: ["Dashboard", "Deploy", "Indicadores", "Gestão"]
    },
    {
      title: "Chatbot Light & Agente Clínico",
      category: "Automação Inteligente",
      description:
        "Construtor de fluxos para WhatsApp, menus inteligentes, filas, ações do sistema e agente de IA para atendimento clínico.",
      image: "chatbot.png",
      link: "#",
      tags: ["WhatsApp", "IA", "Baileys", "Fluxos"]
    }
  ]

  const services = [
    {
      number: "01",
      title: "Desenvolvimento de Software",
      description:
        "Criação de sistemas web, painéis administrativos, aplicações internas, APIs e soluções sob medida para operação."
    },
    {
      number: "02",
      title: "Consultoria de Sistemas",
      description:
        "Análise de processos, melhoria de fluxos, implantação de sistemas, integração entre plataformas e sustentação técnica."
    },
    {
      number: "03",
      title: "Dados e Indicadores",
      description:
        "Dashboards, relatórios, análises de desempenho, indicadores estratégicos e transformação de dados em decisão."
    },
    {
      number: "04",
      title: "Automação de Processos",
      description:
        "Automação de tarefas repetitivas, integrações com APIs, WhatsApp, ERP, planilhas, bancos de dados e ferramentas internas."
    }
  ]

  const steps = [
    "Diagnóstico do processo",
    "Mapeamento dos dados",
    "Desenvolvimento da solução",
    "Integração com sistemas",
    "Entrega, suporte e evolução"
  ]

  return (
    <div className="site">
      <div className="background-glow glow-one"></div>
      <div className="background-glow glow-two"></div>

      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-icon">&lt;/&gt;</span>
          <span>Integradata</span>
        </a>

        <nav className="nav-links">
          <a href="#about">Sobre</a>
          <a href="#services">Serviços</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </nav>

        <a
          className="nav-cta"
          href="https://wa.me/5534992142504"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fale comigo
        </a>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-content">
            <div className="eyebrow">
              <span></span>
              Developer • Consultant • Data Analyst
            </div>

            <h1>
              Kelven Silva
              <strong>Software Consultant</strong>
            </h1>

            <p className="hero-description">
              Sou desenvolvedor de software, consultor de sistemas, analista de
              negócios e dados. Pela Integradata, ajudo empresas a conectar
              sistemas, automatizar processos e transformar informações em
              decisões estratégicas.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                Ver projetos
              </a>
              <a href="#contact" className="btn btn-secondary">
                Entrar em contato
              </a>
            </div>

            <div className="hero-metrics">
              <div>
                <strong>+10</strong>
                <span>Soluções e automações</span>
              </div>
              <div>
                <strong>360°</strong>
                <span>Visão técnica e negócio</span>
              </div>
              <div>
                <strong>Data</strong>
                <span>Decisões orientadas por dados</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-card">
              <div className="profile-top">
                <span className="status-dot"></span>
                Disponível para projetos
              </div>

              <div className="profile-image-wrap">
                <img
                  src={`${import.meta.env.BASE_URL}kelven.png`}
                  alt="Kelven Silva"
                  className="profile-image"
                />
              </div>

              <div className="profile-info">
                <h2>Integradata</h2>
                <p>Conectando dados, transformando negócios.</p>
              </div>

              <div className="floating-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>SQL</span>
                <span>APIs</span>
                <span>Dashboards</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-heading">
            <span className="section-kicker">Sobre a Integradata</span>
            <h2>Software, dados e processos trabalhando juntos.</h2>
          </div>

          <div className="about-grid">
            <div className="about-text card-large">
              <p>
                A Integradata nasceu com uma proposta simples e poderosa:
                conectar dados, sistemas e pessoas para gerar eficiência real
                dentro das empresas.
              </p>

              <p>
                Meu trabalho une desenvolvimento de software, análise de
                negócios, integrações, automações e indicadores. O objetivo não
                é apenas criar telas bonitas, mas construir soluções que
                resolvam gargalos, reduzam retrabalho e melhorem a tomada de
                decisão.
              </p>
            </div>

            <div className="about-highlight">
              <h3>Minha atuação</h3>
              <ul>
                <li>Desenvolvimento de plataformas web</li>
                <li>Integração entre sistemas e APIs</li>
                <li>Automação de processos internos</li>
                <li>Dashboards e relatórios estratégicos</li>
                <li>Consultoria para melhoria de fluxo operacional</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="section-heading">
            <span className="section-kicker">O que eu faço</span>
            <h2>Soluções digitais com visão técnica e estratégica.</h2>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-heading projects-heading">
            <div>
              <span className="section-kicker">Portfólio</span>
              <h2>Projetos desenvolvidos e em evolução.</h2>
            </div>
            <p>
              Uma seleção de soluções criadas para resolver problemas reais,
              integrar processos e melhorar a operação.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-image">
                  <img
                    src={`${import.meta.env.BASE_URL}${project.image}`}
                    alt={project.title}
                  />
                  <span>{project.category}</span>
                </div>

                <div className="project-content">
                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Ver projeto
                    <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section strategy">
          <div className="strategy-card">
            <div>
              <span className="section-kicker">Método de trabalho</span>
              <h2>Da análise do problema à solução em produção.</h2>
              <p>
                Cada projeto começa entendendo o processo, os dados disponíveis,
                os gargalos e o resultado esperado. Depois disso, a tecnologia
                entra como meio para gerar eficiência.
              </p>
            </div>

            <div className="steps">
              {steps.map((step, index) => (
                <div className="step" key={step}>
                  <span>{index + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-card">
            <div>
              <span className="section-kicker">Contato</span>
              <h2>Vamos transformar uma ideia em solução?</h2>
              <p>
                Entre em contato para conversar sobre sistemas, automações,
                integrações, dashboards ou melhoria de processos.
              </p>
            </div>

            <div className="contact-actions">
              <a
                href="https://wa.me/5534992142504"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span>WhatsApp</span>
                <strong>34 99214-2504</strong>
              </a>

              <a
                href="mailto:contato.integradata@gmail.com"
                className="contact-link"
              >
                <span>E-mail</span>
                <strong>contato.integradata@gmail.com</strong>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Integradata. Todos os direitos reservados.</p>
        <p>Conectando dados, transformando negócios.</p>
      </footer>
    </div>
  )
}

export default App