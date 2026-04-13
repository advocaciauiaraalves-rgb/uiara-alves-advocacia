# Design Spec — Uiara Alves Advocacia

**Data:** 2026-04-13
**Versão:** 1.0

---

## 1. Visão Geral

Site institucional one-page para o escritório **Uiara Alves Advocacia**, especializado em ações reparadoras contra planos de saúde, com foco em cirurgias pós-bariátrica. O objetivo principal é posicionar Uiara Alves como referência nacional na especialidade, convertendo visitantes em clientes via WhatsApp e construindo autoridade online.

**Stack:** Next.js 14 (App Router) + Tailwind CSS, hospedado na Vercel.

---

## 2. Identidade Visual

### Paleta de Cores
| Papel              | Hex       | Uso                                      |
|--------------------|-----------|------------------------------------------|
| Primária (ouro)    | `#C9A84C` | Botões, destaques, bordas, ícones        |
| Ouro claro         | `#E8C84A` | Gradiente da logo, hover states          |
| Preto elegante     | `#1A1A1A` | Títulos, textos principais               |
| Fundo branco       | `#FFFFFF` | Fundo padrão                             |
| Fundo off-white    | `#F9F7F4` | Seções alternadas                        |
| Texto secundário   | `#4A4A4A` | Parágrafos, legendas                     |

### Tipografia
- **Títulos:** `Playfair Display` (Google Fonts) — serifada, elegante
- **Corpo e UI:** `Inter` (Google Fonts) — moderna, legível
- **Destaques/CTA:** `Inter SemiBold` (600)

### Logo
- Arquivo: `uiara alves_Logomarca_advogada.cdr` (fornecido pela cliente)
- Exportar em SVG e PNG (fundo transparente) para uso no site
- Monograma UA: curva dourada (U) + pico angular preto (A)

---

## 3. Estrutura de Seções (One-Page)

### 3.1 Header (fixo, sticky)
- Logo UA à esquerda
- Menu de navegação por âncoras: `Início` · `Sobre` · `Especialidade` · `Como Funciona` · `Contato`
- Botão direito: **"Falar no WhatsApp"** (fundo dourado `#C9A84C`, texto preto)
- Fundo branco com sombra suave ao fazer scroll
- Mobile: menu hamburguer

### 3.2 Hero
- Layout: foto da advogada (escritório) à direita + conteúdo textual à esquerda
- Overlay escuro suave na foto; detalhe/linha dourada vertical
- **Tagline:** *"Seu plano de saúde negou? Você tem direito — e eu luto por ele."*
- **Subtítulo:** *"Especialista em ações reparadoras contra planos de saúde. Atendimento digital em todo o Brasil."*
- CTA primário: `Consulta pelo WhatsApp` (dourado)
- CTA secundário: `Conheça minha história` (link âncora para seção Sobre)
- Background: branco com elemento decorativo dourado sutil

### 3.3 Sobre Uiara
- Foto profissional da advogada à esquerda
- Texto da bio à direita (texto fornecido pela cliente, ver seção 6)
- Bloco de destaque visual com borda dourada: *"Também sou paciente bariátrica — e essa vivência transforma a minha advocacia."*
- Fundo off-white `#F9F7F4`

### 3.4 Especialidade
- Título: *"Luto pelo seu direito à saúde"*
- Subtítulo: *"Atuação focada, estratégica e humana nas causas que envolvem planos de saúde"*
- 3 cards com ícones dourados minimalistas:
  1. **Cirurgias reparadoras pós-bariátrica** — Dermolipectomia, mamoplastia, braquioplastia e demais procedimentos negados após grande perda de peso
  2. **Negativas abusivas de planos de saúde** — Cobertura negada para tratamentos, exames e internações previstos em contrato ou lei
  3. **Tratamentos e procedimentos negados** — Medicamentos, terapias e procedimentos essenciais recusados indevidamente
- Fundo branco

### 3.5 Como Funciona
- Título: *"Do problema à solução em 3 passos"*
- Layout horizontal (desktop) / vertical (mobile), 3 etapas conectadas por linha dourada:
  1. **01 · Consulta** — Me conte sua situação pelo WhatsApp. Análise inicial gratuita.
  2. **02 · Estratégia** — Avalio seu caso e monto a melhor estratégia jurídica personalizada.
  3. **03 · Ação** — Atuamos para garantir seu direito com agilidade, técnica e comprometimento.
- CTA ao final: `Iniciar minha consulta`
- Fundo off-white

### 3.6 Resultados *(placeholder — depoimentos futuros)*
- Título: *"O que dizem nossos clientes"*
- Layout de cards em carrossel preparado para vídeos e depoimentos escritos
- Estado inicial: placeholder elegante com mensagem *"Em breve, histórias reais de quem recuperou seu direito."*
- Fundo branco com detalhe dourado

### 3.7 Contato
- Título: *"Fale com a gente"*
- Subtítulo: *"Atendimento digital em todo o Brasil"*
- Dois blocos de contato:
  - Botão WhatsApp 1: (85) 99151-6028
  - Botão WhatsApp 2: (85) 99256-3399
  - E-mail: advocaciauiaraalves@gmail.com
  - Instagram: @uiaralves
  - Endereço: Av. Humberto Monte, 2929, Sala 607, Torre Norte, Pici, Fortaleza-CE, CEP 60440-593 (link Google Maps)
- Formulário de contato simples: Nome · Telefone · Mensagem · Botão Enviar
- Envio do formulário via **Formspree** (serviço gratuito, sem backend próprio) para advocaciauiaraalves@gmail.com
- Fundo off-white

### 3.8 Footer
- Logo UA (versão pequena)
- *"Uiara Alves Advocacia — OAB/CE 22.546"*
- Links de navegação
- *"© 2026 Uiara Alves Advocacia. Todos os direitos reservados."*
- Aviso legal: *"As informações contidas neste site têm caráter informativo e não constituem consulta jurídica."*
- Fundo preto `#1A1A1A`, texto branco/cinza claro

---

## 4. Componentes de UX

- **Botão WhatsApp flutuante:** fixo no canto inferior direito, sempre visível, ícone WhatsApp + pulso suave
- **Scroll suave:** navegação por âncoras com `scroll-behavior: smooth`
- **Animações:** fade-in suave nas seções ao fazer scroll (Framer Motion ou CSS Intersection Observer)
- **Responsividade:** mobile-first, breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- **SEO:** meta tags, Open Graph, sitemap.xml, robots.txt, Google Analytics (GA4)

---

## 5. Informações de Contato

| Canal       | Dado                                         |
|-------------|----------------------------------------------|
| WhatsApp 1  | (85) 99151-6028                              |
| WhatsApp 2  | (85) 99256-3399                              |
| E-mail      | advocaciauiaraalves@gmail.com                |
| Instagram   | @uiaralves                                   |
| Endereço    | Av. Humberto Monte, 2929, Sala 607, Torre Norte, Pici, Fortaleza-CE, CEP 60440-593 |
| OAB         | OAB/CE 22.546                                |

---

## 6. Conteúdo — Texto "Sobre Uiara"

> Sou Uiara Alves, advogada especialista em Direito da Saúde, e dedico minha atuação à defesa de pacientes diante de negativas abusivas de planos de saúde, com destaque para casos que envolvem cirurgias reparadoras após grande perda de peso.
>
> Minha advocacia é marcada não apenas pela técnica e pela estratégia, mas também pela vivência. Também sou paciente bariátrica, e isso me permite compreender, de forma real e profunda, os impactos dessa jornada e a importância de uma atuação jurídica séria, sensível e comprometida com resultados.
>
> No Uiara Alves Advocacia, prezamos por um serviço de excelência, com atendimento próximo, atuação direta e soluções jurídicas conduzidas com responsabilidade, agilidade e clareza. A tecnologia também faz parte da nossa forma de atuar, permitindo um acompanhamento moderno, eficiente e acessível, com atendimento digital em todo o Brasil.
>
> Nossa equipe é formada por profissionais preparados para oferecer um suporte qualificado, humano e atento às particularidades de cada caso, sempre com foco na melhor estratégia para a proteção do direito à saúde e da dignidade do cliente.
>
> Aqui, cada demanda é tratada com seriedade, sensibilidade e compromisso. Porque por trás de cada processo, existe uma história que merece ser respeitada e um direito que precisa ser defendido com firmeza.

---

## 7. Domínio

Cliente ainda não possui domínio. Sugestões para registro no Registro.br:
- `uiaraalves.adv.br`
- `uiaraalvesadvocacia.com.br`
- `uiaraalves.com.br`

---

## 8. Critérios de Sucesso

1. Site publicado na Vercel com domínio personalizado
2. Google PageSpeed Insights > 90 (mobile e desktop)
3. Meta tags e Open Graph configurados corretamente
4. Botão WhatsApp funcional nos dois números
5. Formulário de contato funcional
6. Layout totalmente responsivo (mobile/tablet/desktop)
7. Seção de depoimentos preparada para adição futura de vídeos

---

## 9. Fora do Escopo (v1)

- Blog / conteúdo editorial
- Área do cliente / login
- Integração com CRM
- Depoimentos em vídeo (adicionados em v2)
- Versão em inglês
