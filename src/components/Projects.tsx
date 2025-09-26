import { ExternalLink, Github, Play, Smartphone, TrendingUp, Heart, DollarSign } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'DashInvest',
      subtitle: 'App de Investimentos',
      description: 'Aplicativo Flutter para controle de investimentos com clean architecture, gráficos interativos e análise de portfólio em tempo real.',
      longDescription: 'Desenvolvido com foco em performance e escalabilidade, utilizando princípios de clean architecture. Inclui dashboard personalizado, histórico de transações e notificações push.',
      icon: <TrendingUp className="w-6 h-6" />,
      image: '/projects/dashinvest.jpg', // Placeholder
      technologies: ['Flutter', 'Dart', 'Firebase', 'Clean Architecture', 'BLoC Pattern'],
      features: [
        'Dashboard interativo com gráficos',
        'Controle de portfólio em tempo real', 
        'Histórico detalhado de transações',
        'Notificações push personalizadas'
      ],
      status: 'Concluído',
      github: 'https://github.com/lucasrocha0402/dashinvest',
      demo: 'https://dashinvest-demo.vercel.app',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 2,
      title: 'App Financeiro',
      subtitle: 'Controle Pessoal',
      description: 'Aplicativo completo para controle de receitas e despesas com gráficos dinâmicos, categorização inteligente e autenticação segura.',
      longDescription: 'Sistema robusto de controle financeiro pessoal com integração Firebase/Supabase, análise de gastos por categoria e relatórios mensais detalhados.',
      icon: <DollarSign className="w-6 h-6" />,
      image: '/projects/app-financeiro.jpg', // Placeholder  
      technologies: ['Flutter', 'Supabase', 'PostgreSQL', 'Charts', 'Auth'],
      features: [
        'Controle de receitas e despesas',
        'Gráficos e relatórios detalhados',
        'Categorização automática',
        'Sincronização em nuvem'
      ],
      status: 'Em desenvolvimento',
      github: 'https://github.com/lucasrocha0402/app-financeiro',
      demo: null,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 3,
      title: 'LifePlus',
      subtitle: 'Questionário de Saúde',
      description: 'App de questionários de saúde com cálculo de expectativa de vida, backend Supabase com triggers PL/pgSQL e dashboard administrativo.',
      longDescription: 'Plataforma completa de avaliação de saúde com algoritmos avançados de cálculo, backend robusto e interface administrativa para análise de dados.',
      icon: <Heart className="w-6 h-6" />,
      image: '/projects/lifeplus.jpg', // Placeholder
      technologies: ['Flutter', 'Supabase', 'PL/pgSQL', 'Triggers', 'Dashboard'],
      features: [
        'Questionários dinâmicos de saúde',
        'Cálculo de expectativa de vida',
        'Backend com triggers e funções',
        'Dashboard administrativo'
      ],
      status: 'Concluído',
      github: 'https://github.com/lucasrocha0402/lifeplus',
      demo: 'https://lifeplus-app.vercel.app',
      color: 'from-red-500 to-pink-600'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma seleção dos projetos que desenvolvi, mostrando diferentes tecnologias 
            e soluções para problemas reais.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  {/* Placeholder for project image */}
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center">
                    <div className={`p-8 rounded-full bg-gradient-to-r ${project.color} text-white`}>
                      <Smartphone className="w-16 h-16" />
                    </div>
                  </div>
                  
                  {/* Overlay with demo/github links */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-xl transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-4">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                        >
                          <Play className="w-5 h-5 text-primary-600" />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                      >
                        <Github className="w-5 h-5 text-gray-700" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-1/2 space-y-6">
                {/* Status Badge */}
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Concluído' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {project.status}
                  </span>
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                    {project.icon}
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-primary-600 font-semibold text-lg">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Principais Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-md text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                      Ver Demo
                      <ExternalLink className="ml-2" size={18} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 hover:border-primary-600 hover:text-primary-600 font-semibold rounded-lg transition-colors duration-200"
                  >
                    Código Fonte
                    <Github className="ml-2" size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gray-50 rounded-xl p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Gostou dos projetos?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Estes são apenas alguns exemplos do meu trabalho. Tenho outros projetos em desenvolvimento 
            e sempre aberto a novos desafios!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Vamos conversar?
            <ExternalLink className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
