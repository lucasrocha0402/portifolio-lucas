import { Briefcase, Calendar, MapPin, Award, TrendingUp, Users, Code } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Desenvolvedor Júnior',
      company: 'Startup de Tecnologia',
      location: 'Remoto',
      period: '2024 - Presente',
      duration: '5+ meses',
      type: 'Full-time',
      description: 'Desenvolvimento full stack com foco em aplicações web e mobile usando React, TypeScript e tecnologias modernas.',
      achievements: [
        'Aprendizado rápido em TSX, Git avançado e Prisma ORM',
        'Múltiplas entregas em produção com zero bugs críticos',
        'Implementação de funcionalidades complexas em React',
        'Colaboração efetiva em equipe ágil usando metodologias Scrum',
        'Refatoração de código legacy melhorando performance em 30%'
      ],
      technologies: ['React', 'TypeScript', 'Prisma', 'Git', 'Node.js', 'PostgreSQL'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 2,
      title: 'Desenvolvedor Flutter',
      company: 'Projetos Freelance',
      location: 'Remoto',
      period: '2023 - 2024',
      duration: '1+ ano',
      type: 'Freelance',
      description: 'Desenvolvimento de aplicações mobile multiplataforma com Flutter, integrações com APIs REST e bancos de dados.',
      achievements: [
        'Desenvolveu 3+ aplicações mobile completas',
        'Implementação de clean architecture e padrões avançados',
        'Integração com Firebase, Supabase e APIs REST',
        'Deploy e publicação na Google Play Store',
        'Satisfação de 100% dos clientes com entregas no prazo'
      ],
      technologies: ['Flutter', 'Dart', 'Firebase', 'Supabase', 'REST APIs', 'SQLite'],
      color: 'from-green-500 to-emerald-600'
    }
  ]

  const skills = [
    { name: 'Aprendizado Rápido', icon: <TrendingUp className="w-5 h-5" /> },
    { name: 'Trabalho em Equipe', icon: <Users className="w-5 h-5" /> },
    { name: 'Clean Code', icon: <Code className="w-5 h-5" /> },
    { name: 'Entrega no Prazo', icon: <Award className="w-5 h-5" /> }
  ]

  const education = [
    {
      title: 'Tecnologia da Informação',
      institution: 'Universidade/Curso Técnico',
      period: '2020 - 2023',
      description: 'Formação sólida em programação, banco de dados, redes e desenvolvimento de software.'
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Experiência Profissional
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Minha jornada como desenvolvedor, com foco em crescimento contínuo 
            e entrega de soluções de qualidade.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary-200"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10 mt-6"></div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${exp.color} text-white`}>
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        exp.type === 'Full-time' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <p className="text-primary-600 font-semibold mb-4">{exp.company}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period} • {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Principais Conquistas:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-md text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills & Soft Skills */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional Skills */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Competências Profissionais</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center p-4 bg-primary-50 rounded-lg"
                >
                  <div className="text-primary-600 mr-3">{skill.icon}</div>
                  <span className="font-medium text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Educação</h3>
            {education.map((edu, index) => (
              <div key={index} className="border-l-4 border-primary-500 pl-6 pb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{edu.title}</h4>
                <p className="text-primary-600 font-medium mb-2">{edu.institution}</p>
                <p className="text-gray-600 text-sm mb-3">{edu.period}</p>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            ))}

            {/* Certifications placeholder */}
            <div className="mt-8 p-4 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg">
              <h4 className="font-semibold text-primary-900 mb-2">🏆 Próximos Passos</h4>
              <p className="text-primary-700 text-sm">
                Sempre em busca de novas certificações e conhecimentos para me manter atualizado 
                com as melhores práticas do mercado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
