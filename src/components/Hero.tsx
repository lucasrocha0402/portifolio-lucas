import { ArrowDown, Download, ExternalLink } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="animate-fade-in">
            <div className="mb-4">
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                👋 Olá! Eu sou desenvolvedor
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Lucas
              <span className="block text-primary-600">Desenvolvedor</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-600">
                Full Stack
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Especializado em <strong>Flutter</strong>, <strong>C#/.NET</strong>, <strong>React Native</strong> e <strong>QA</strong>.
              Transformo ideias em soluções mobile e web robustas, com foco em clean architecture e melhores práticas.
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Flutter', 'C#/.NET', 'React Native', 'Supabase', 'Azure', 'Docker', 'QA'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Ver Projetos
                <ExternalLink className="ml-2" size={20} />
              </a>
              
              <a
                href="/cv-lucas-dev.pdf"
                target="_blank"
                className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Download CV
                <Download className="ml-2" size={20} />
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-primary-600">2+</div>
                <div className="text-gray-600 text-sm">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600">5</div>
                <div className="text-gray-600 text-sm">Projetos Desenvolvidos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600">15+</div>
                <div className="text-gray-600 text-sm">Tecnologias Dominadas</div>
              </div>
            </div>
          </div>

          {/* Right side - Image/Avatar */}
          <div className="animate-slide-up lg:justify-self-end">
            <div className="relative">
              {/* Placeholder for profile image */}
              <div className="w-80 h-80 mx-auto lg:w-96 lg:h-96 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-8xl lg:text-9xl">👨‍💻</div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full opacity-20"></div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-red-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#skills" className="text-gray-400 hover:text-primary-600 transition-colors duration-200">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
