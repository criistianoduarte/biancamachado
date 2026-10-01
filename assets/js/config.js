/*
 * Todos os dados editáveis do site ficam aqui.
 * Para mudar telefone, textos dos temas ou respostas do FAQ, edite este arquivo
 * e salve. Não é preciso mexer no index.html.
 *
 * Valores entre {{CHAVES}} ainda precisam ser confirmados com a Bianca.
 */
window.CONFIG = {
  nome: "Bianca Machado",
  titulo: "Psicóloga",
  crp: "CRP 08/24363",
  abordagem: "Terapia Cognitivo-Comportamental (TCC)",
  clinicaDesde: "2017",
  modalidade: "Exclusivamente online",
  publico: "Mulheres",

  whatsapp: "554196591160", // +55 41 9659-1160 (só dígitos, com 55 + DDD)
  whatsappMsg: "Olá, Bianca! Vim pelo seu site e gostaria de agendar uma sessão.",
  instagram: "https://www.instagram.com/biancamachadopsicologa/",
  avaliacoesUrl: "", // link do Google Meu Negócio; vazio = link oculto
  email: "", // e-mail profissional; vazio = não exibido
  dominio: "{{https://www.dominio.com.br}}",

  // Seção "O que podemos cuidar juntas". A ordem aqui é a ordem no site.
  temas: [
    {
      titulo: "Maternidade",
      frase: "Amo ser mãe, mas às vezes sinto que me perdi de mim.",
      texto: "Acolhemos os desafios da maternidade, a sobrecarga, a culpa e as mudanças na forma como você se percebe e se relaciona consigo mesma.",
    },
    {
      titulo: "Ansiedade",
      frase: "Minha cabeça nunca descansa. Fico antecipando tudo o que pode dar errado.",
      texto: "Entendemos o que alimenta essa preocupação e construímos recursos para você reagir com mais calma e segurança.",
    },
    {
      titulo: "Autoestima e autocobrança",
      frase: "Nada do que eu faço parece suficiente. Sou muito dura comigo mesma.",
      texto: "Trabalhamos a forma como você se enxerga, para reconhecer seu valor sem depender da aprovação dos outros.",
    },
    {
      titulo: "Esgotamento e burnout",
      frase: "Estou sempre cansada. Sinto que estou só sobrevivendo.",
      texto: "Olhamos para a sua rotina e seus limites, buscando recuperar energia e um ritmo de vida possível.",
    },
    {
      titulo: "Relacionamentos",
      frase: "Acabo em relações que me fazem mal e me anulo para não ficar sozinha.",
      texto: "Você passa a compreender seus padrões e a construir vínculos com espaço para as suas necessidades.",
    },
    {
      titulo: "Luto e perdas",
      frase: "O mundo continuou, e eu fiquei parada no dia em que perdi alguém.",
      texto: "Um lugar seguro para viver a dor no seu tempo e seguir carregando essa história com mais cuidado.",
    },
    {
      titulo: "Transições de vida",
      frase: "Minha vida mudou tanto que ainda não sei quem eu sou agora.",
      texto: "Caminhamos pelas mudanças para que você se reorganize e faça escolhas alinhadas a quem é hoje.",
    },
  ],

  // Perguntas frequentes. A primeira aparece aberta.
  faq: [
    {
      pergunta: "Como saber se eu preciso de terapia?",
      resposta: "Não é preciso estar em crise. Se algo tem pesado, se repetido ou atrapalhado sua rotina, isso já é motivo suficiente para buscar ajuda.",
    },
    {
      pergunta: "Terapia online funciona?",
      resposta: "Sim. As pesquisas mostram resultados semelhantes aos do atendimento presencial, com a vantagem de você não precisar se deslocar. Basta um lugar reservado e uma conexão estável.",
    },
    {
      pergunta: "Você atende apenas mulheres?",
      resposta: "Sim. Meu atendimento é exclusivamente online e voltado para mulheres.",
    },
    {
      pergunta: "Quanto tempo dura cada sessão?",
      resposta: "{{ex.: 50 minutos, geralmente uma vez por semana.}}",
    },
    {
      pergunta: "Você atende por convênio?",
      resposta: "{{Resposta real. Se for particular: \"O atendimento é particular. Emito recibo para você solicitar reembolso ao seu plano, quando ele oferece essa opção.\"}}",
    },
    {
      pergunta: "Quanto custa?",
      resposta: "Os valores são informados diretamente pelo WhatsApp.",
    },
    {
      pergunta: "O que falo na terapia fica em sigilo?",
      resposta: "Sim. O sigilo é um dever ético da psicóloga, previsto no Código de Ética Profissional do Psicólogo.",
    },
    {
      pergunta: "Não sei o que falar na primeira sessão. E agora?",
      resposta: "Tudo bem. É comum não saber por onde começar, e eu vou te ajudar nesse início.",
    },
  ],
};
