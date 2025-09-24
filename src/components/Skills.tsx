import { 
  Smartphone, 
  Server, 
  Cloud, 
  Database, 
  Code, 
  TestTube,
  GitBranch,
  Container,
  Settings
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend & Mobile',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-blue-500 to-purple-600',
      skills: [
        { name: 'Flutter', level: 90 },
        { name: 'React Native', level: 85 },
        { name: 'Xamarin', level: 70 },
        { name: 'React/Next.js', level: 80 },
        { name: 'TypeScript', level: 85 },
      ]
    },
    {
      title: 'Backend & APIs',
      icon: <Server className="w-8 h-8" />,
      color: 'from-green-500 to-teal-600',
      skills: [
        { name: 'C#/.NET', level: 90 },
        { name: 'NestJS', level: 80 },
        { name: 'APIs REST', level: 95 },
        { name: 'Supabase', level: 85 },
        { name: 'PostgreSQL', level: 80 },
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'Docker Swarm', level: 80 },
        { name: 'Azure', level: 75 },
        { name: 'Traefik', level: 70 },
        { name: 'CI/CD', level: 75 },
      ]
    },
    {
      title: 'Ferramentas & QA',
      icon: <TestTube className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Testes Automatizados', level: 80 },
        { name: 'RabbitMQ', level: 70 },
        { name: 'N8n', level: 75 },
        { name: 'Prisma', level: 85 },
      ]
    }
  ]

  const tools = [
    { name: 'VS Code', icon: <Code className="w-6 h-6" /> },
    { name: 'Git', icon: <GitBranch className="w-6 h-6" /> },
    { name: 'Docker', icon: <Container className="w-6 h-6" /> },
    { name: 'Supabase', icon: <Database className="w-6 h-6" /> },
    { name: 'Azure', icon: <Cloud className="w-6 h-6" /> },
    { name: 'N8n', icon: <Settings className="w-6 h-6" /> },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Habilidades & Tecnologias
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experiência sólida em desenvolvimento full stack, com foco em mobile e web.
            Sempre buscando as melhores práticas e tecnologias mais atuais.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Ferramentas do Dia a Dia</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-primary-600 mb-2">{tool.icon}</div>
                <span className="text-sm font-medium text-gray-700">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Highlight */}
        <div className="mt-16 bg-primary-600 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">💡 Destaque Profissional</h3>
          <p className="text-primary-100 text-lg max-w-3xl mx-auto">
            Atualmente trabalhando como <strong>Desenvolvedor Júnior</strong> em startup há 5 meses,
            com aprendizado acelerado em <strong>TSX</strong>, <strong>Git</strong>, <strong>Prisma</strong> 
            e <strong>React</strong>. Várias entregas em produção e evolução constante!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
