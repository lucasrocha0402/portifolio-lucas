'use client'

import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  MessageCircle,
  Coffee,
  Calendar
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'seu.email@exemplo.com',
      link: 'mailto:seu.email@exemplo.com',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'WhatsApp',
      value: '+55 (11) 99999-9999',
      link: 'https://wa.me/5511999999999',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Localização',
      value: 'Brasil - Remoto',
      link: null,
      color: 'from-blue-500 to-cyan-600'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/seu-usuario',
      color: 'hover:text-gray-900',
      description: 'Veja meus projetos'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://linkedin.com/in/seu-perfil',
      color: 'hover:text-blue-600',
      description: 'Conecte-se comigo'
    }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contato via Portfólio')
    const body = encodeURIComponent(`
Nome: ${formData.name}
Email: ${formData.email}

Mensagem:
${formData.message}
    `)
    
    window.location.href = `mailto:seu.email@exemplo.com?subject=${subject}&body=${body}`
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes. 
            Entre em contato e vamos conversar sobre como posso ajudar!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center group">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} text-white mr-4 group-hover:scale-110 transition-transform duration-200`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-900 hover:text-primary-600 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Redes Sociais</h4>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group`}
                  >
                    <div className={`mr-4 text-gray-600 ${social.color} transition-colors duration-200`}>
                      {social.icon}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{social.name}</p>
                      <p className="text-sm text-gray-600">{social.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-primary-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-primary-900 mb-4 flex items-center">
                <Coffee className="w-5 h-5 mr-2" />
                Que tal um café?
              </h4>
              <p className="text-primary-700 text-sm mb-4">
                Adoro discutir projetos interessantes e trocar ideias sobre tecnologia!
              </p>
              <a
                href="https://calendly.com/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
              >
                <Calendar className="w-4 h-4 mr-1" />
                Agendar conversa
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-600 text-white rounded-lg mr-4">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Envie uma Mensagem</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="Sobre o que você gostaria de conversar?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none"
                    placeholder="Conte-me sobre seu projeto ou oportunidade..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Enviar Mensagem
                  <Send className="ml-2" size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl p-12">
          <h3 className="text-2xl font-bold mb-4">Pronto para começar seu projeto?</h3>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Estou disponível para projetos freelance, oportunidades full-time ou 
            qualquer colaboração interessante que envolva tecnologia!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:seu.email@exemplo.com"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Mail className="mr-2" size={20} />
              Enviar Email
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold rounded-lg transition-colors duration-200"
            >
              <MessageCircle className="mr-2" size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
