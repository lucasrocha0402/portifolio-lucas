# 🚀 Portfólio Profissional - Lucas

Um portfólio moderno e responsivo desenvolvido com **Next.js 14**, **TypeScript** e **Tailwind CSS**.

## ✨ Características

- 🎨 Design moderno e responsivo
- ⚡ Performance otimizada com Next.js
- 📱 Mobile-first approach
- 🎯 SEO otimizado
- 🌟 Animações suaves
- 📧 Formulário de contato funcional
- 🔗 Integração com redes sociais

## 🛠️ Tecnologias

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Ícones
- **Vercel** - Deploy (recomendado)

## 🚀 Como usar

### 1. Instalar dependências
```bash
npm install
```

### 2. Executar em modo desenvolvimento
```bash
npm run dev
```

### 3. Acessar o portfólio
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🎨 Personalização

### Informações Pessoais

1. **Header/Navegação** (`src/components/Header.tsx`):
   - Altere os links do GitHub, LinkedIn e email
   - Personalize o nome/logo

2. **Seção Hero** (`src/components/Hero.tsx`):
   - Atualize nome, título e descrição
   - Substitua as tecnologias destacadas
   - Ajuste as estatísticas (anos de experiência, projetos)

3. **Habilidades** (`src/components/Skills.tsx`):
   - Modifique as categorias de skills
   - Ajuste os níveis de cada tecnologia
   - Adicione/remova ferramentas

4. **Projetos** (`src/components/Projects.tsx`):
   - Substitua pelos seus projetos reais
   - Atualize links do GitHub e demos
   - Adicione imagens dos projetos em `/public/projects/`

5. **Experiência** (`src/components/Experience.tsx`):
   - Atualize sua experiência profissional
   - Modifique educação e certificações
   - Ajuste timeline e conquistas

6. **Contato** (`src/components/Contact.tsx`):
   - **IMPORTANTE**: Substitua os placeholders:
     - `seu.email@exemplo.com` → seu email real
     - `https://github.com/seu-usuario` → seu GitHub
     - `https://linkedin.com/in/seu-perfil` → seu LinkedIn
     - `+55 (11) 99999-9999` → seu WhatsApp

### Cores e Visual

O tema usa uma paleta baseada em azul. Para alterar:

1. **Tailwind Config** (`tailwind.config.ts`):
   - Modifique a seção `colors.primary`
   - Ajuste as cores dos gradientes

2. **Componentes**:
   - Busque por `primary-` e substitua pelas cores desejadas
   - Modifique gradientes nos `bg-gradient-to-r`

### SEO e Metadata

Atualize em `src/app/layout.tsx`:
- `title` - Título do site
- `description` - Descrição para mecanismos de busca
- `keywords` - Palavras-chave relevantes
- `openGraph` - Dados para compartilhamento social

## 📸 Adicionando Imagens

1. **Foto de perfil**: Substitua o emoji na seção Hero por uma imagem real
2. **Projetos**: Adicione screenshots em `/public/projects/`
3. **Favicon**: Substitua `/public/favicon.ico`

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório GitHub ao Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático em cada push

### Outras opções
- **Netlify**: Conecte o repositório
- **GitHub Pages**: Configure GitHub Actions
- **Docker**: Use o Dockerfile (se criar)

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── Skills.tsx
    ├── Projects.tsx
    ├── Experience.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

## 🎯 Próximos Passos

- [ ] Adicionar blog/artigos técnicos
- [ ] Implementar modo escuro
- [ ] Adicionar mais animações
- [ ] Integrar com CMS (Contentful/Strapi)
- [ ] Adicionar métricas do GitHub
- [ ] Implementar PWA

## 📞 Suporte

Se tiver dúvidas sobre a personalização, pode me contactar!

---

**⭐ Se gostou do projeto, deixe uma estrela no GitHub!**
