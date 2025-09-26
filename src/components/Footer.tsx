import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side */}
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold mb-2">
              Lucas<span className="text-primary-400">Dev</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Desenvolvedor Full Stack especializado em Flutter, C#/.NET e React Native.
              Transformando ideias em soluções tecnológicas.
            </p>
          </div>

          {/* Right side - Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/lucasrocha0402"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/lucassampaio-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:lukasrocha0402@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center">
            Feito com <Heart size={16} className="mx-1 text-red-500" /> por Lucas
            <span className="mx-2">•</span>
            © 2024 Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
