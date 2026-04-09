const screens = [...document.querySelectorAll(".screen")];
const navButtons = [...document.querySelectorAll("[data-target]")];
const themeButton = document.getElementById("themeButton");
const noirButton = document.getElementById("noirButton");
const noirHint = document.getElementById("noirHint");
const sockCounter = document.getElementById("sockCounter");
const replyCard = document.getElementById("replyCard");
const questionButtons = [...document.querySelectorAll(".choice-button")];
const experimentButtons = [...document.querySelectorAll(".experiment-button")];
const experimentResult = document.getElementById("experimentResult");
const appActions = [...document.querySelectorAll(".app-action")];
const guidedChips = [...document.querySelectorAll(".guided-chip")];
const mamaeHudSocks = document.getElementById("mamaeHudSocks");
const mamaeHudQuestion = document.getElementById("mamaeHudQuestion");
const mamaeHudExperiment = document.getElementById("mamaeHudExperiment");
const contactList = document.getElementById("contactList");
const messageList = document.getElementById("messageList");
const threadName = document.getElementById("threadName");
const threadStatus = document.getElementById("threadStatus");
const threadAvatar = document.getElementById("threadAvatar");
const threadMood = document.getElementById("threadMood");
const threadHint = document.getElementById("threadHint");
const threadBadge = document.getElementById("threadBadge");
const composerName = document.getElementById("composerName");
const quickReplies = document.getElementById("quickReplies");
const memoryNote = document.getElementById("memoryNote");
const quickButtons = [...document.querySelectorAll(".quick-button")];
const phoneActionButtons = [...document.querySelectorAll(".icon-button")];
const walkCounter = document.getElementById("walkCounter");
const walkResult = document.getElementById("walkResult");
const vovoHudWalk = document.getElementById("vovoHudWalk");
const vovoHudRoutine = document.getElementById("vovoHudRoutine");
const vovoHudStyle = document.getElementById("vovoHudStyle");
const trailButtons = [...document.querySelectorAll(".trail-button")];
const routineCounter = document.getElementById("routineCounter");
const routineResult = document.getElementById("routineResult");
const routineButtons = [...document.querySelectorAll(".routine-button")];
const styleButtons = [...document.querySelectorAll(".style-button")];
const styleResult = document.getElementById("styleResult");
const wardrobeButtons = [...document.querySelectorAll(".wardrobe-button")];
const wardrobeResult = document.getElementById("wardrobeResult");
const quartoHudLook = document.getElementById("quartoHudLook");
const quartoHudDecor = document.getElementById("quartoHudDecor");
const quartoHudNoir = document.getElementById("quartoHudNoir");
const decorButtons = [...document.querySelectorAll(".decor-button")];
const decorCounter = document.getElementById("decorCounter");
const decorResult = document.getElementById("decorResult");
const roomNoirButtons = [...document.querySelectorAll(".room-noir-button")];
const roomNoirResult = document.getElementById("roomNoirResult");
const jadeButtons = [...document.querySelectorAll(".jade-button")];
const jadeResult = document.getElementById("jadeResult");
const jardimHudJade = document.getElementById("jardimHudJade");
const jardimHudMagic = document.getElementById("jardimHudMagic");
const jardimHudGarden = document.getElementById("jardimHudGarden");
const magicButtons = [...document.querySelectorAll(".magic-button")];
const magicResult = document.getElementById("magicResult");
const gardenButtons = [...document.querySelectorAll(".garden-button")];
const gardenResult = document.getElementById("gardenResult");
const journalPageButtons = [...document.querySelectorAll(".journal-page-button")];
const journalCard = document.getElementById("journalCard");
const cadernoHudPage = document.getElementById("cadernoHudPage");
const cadernoHudMood = document.getElementById("cadernoHudMood");
const cadernoHudMemory = document.getElementById("cadernoHudMemory");
const moodButtons = [...document.querySelectorAll(".mood-button")];
const moodResult = document.getElementById("moodResult");
const memoryButtons = [...document.querySelectorAll(".memory-button")];
const memoryResult = document.getElementById("memoryResult");
const assetSlots = [...document.querySelectorAll("[data-asset-slot]")];

const assetBasePath = "assets/ilustracoes/";
const assetAliases = {
  "dashboard/world-map-scene": ["dashboard/world-map-scene.webp"],
  "dashboard/cora-portrait": ["dashboard/cora-portrait.webp"],
  "dashboard/agata-portrait": ["dashboard/agata-portrait.webp"],
  "dashboard/vovo-portrait": ["dashboard/vovo-portrait.webp", "dashboard/agnes-portrait.webp"],
  "dashboard/jade-portrait": ["dashboard/jade-portrait.webp"],
  "dashboard/noir-portrait": ["dashboard/noir-portrait.webp"],
  "dashboard/tia-ingrid-portrait": ["dashboard/tia-ingrid-portrait.webp"],
  "dashboard/bruxilia": ["dashboard/bruxilia.webp"],
  "dashboard/vassourinhas": ["dashboard/vassourinhas.webp"],
  "dashboard/luna-clara": ["dashboard/luna-clara.webp"],
  "dashboard/agnes-portrait": ["dashboard/agnes-portrait.webp"],
  "casa-mamae/mamae-house-scene": ["casa-mamae/mamae-house-scene.webp"],
  "casa-mamae/kitchen-props-sheet": ["casa-mamae/kitchen-props-sheet.webp"],
  "casa-mamae/cora-agata-dialogue": ["casa-mamae/cora-agata-dialogue.webp"],
  "casa-vovo/vovo-house-scene": ["casa-vovo/vovo-house-scene.webp"],
  "casa-vovo/vovo-props-sheet": ["casa-vovo/vovo-props-sheet.webp"],
  "casa-vovo/vovo-routine-icons": ["casa-vovo/vovo-routine-icons.webp"],
  "quarto-cora/quarto-overview-scene": ["quarto-cora/quarto-overview-scene.webp"],
  "quarto-cora/wardrobe-sheet": ["quarto-cora/wardrobe-sheet.webp"],
  "quarto-cora/room-props-sheet": ["quarto-cora/room-props-sheet.webp"],
  "jardim-sete-luas/jardim-overview-scene": ["jardim-sete-luas/jardim-overview-scene.webp"],
  "jardim-sete-luas/magic-elements-sheet": ["jardim-sete-luas/magic-elements-sheet.webp"],
  "jardim-sete-luas/jade-director-scene": ["jardim-sete-luas/jade-director-scene.webp"],
  "caderno-cora/open-journal-scene": ["caderno-cora/open-journal-scene.webp"],
  "caderno-cora/memory-objects-sheet": ["caderno-cora/memory-objects-sheet.webp"],
  "caderno-cora/journal-tabs-sheet": ["caderno-cora/journal-tabs-sheet.webp"],
  "bruxozap/phone-portraits-sheet": ["bruxozap/phone-portraits-sheet.webp"]
};

const visibleThreadKeys = ["mamae", "pai", "tia-ingrid", "colegas"];

const noirPositions = [
  { top: "26px", left: "28px" },
  { top: "42px", left: "calc(100% - 104px)" },
  { top: "calc(100% - 100px)", left: "20%" },
  { top: "calc(100% - 92px)", left: "calc(100% - 120px)" }
];

const noirHints = [
  "Noir ouviu um barulho na janela e correu para lá.",
  "Noir decidiu vigiar a maquete das cidades.",
  "Noir foi descansar perto dos brinquedos invisíveis.",
  "Noir achou um cantinho perfeito para observar tudo."
];

const walkMessages = {
  1: "Boa escolha: o portão azul é o começo mais seguro do passeio.",
  2: "Vocês seguem pelo ipê amarelo, onde o caminho fica calmo e familiar.",
  3: "Chegar ao banco com vista para o lago rende uma pausa gostosa com o vovô."
};

const routineMessages = {
  1: "Abrir a janela primeiro deixa o quarto e o peito respirarem juntos.",
  2: "A cama arrumada faz o quarto parecer pronto para um dia tranquilo.",
  3: "Café com pão quentinho: a rotina ganha cheiro de aconchego.",
  4: "As plantas recebem água e o dia termina de acordar com delicadeza."
};

const magicRecipes = {
  "planta|água": "Planta + água: um broto espreguiça e cresce devagar, como quem acorda feliz.",
  "planta|fogo": "Planta + fogo: a folha murcha e a turma aprende que nem toda mistura combina.",
  "planta|vento": "Planta + vento: sementes se soltam e dançam pelo ar procurando outro lugar para crescer.",
  "água|água": "Água + água: a tigela transborda e a sala inteira ri da poça cintilante.",
  "água|fogo": "Água + fogo: sobe uma nuvem morna que desenha um coração no teto.",
  "água|vento": "Água + vento: gotinhas giram em espiral e viram uma chuva bem comportada.",
  "fogo|água": "Fogo + água: sobe uma névoa macia que cheira a chá recém-passado.",
  "fogo|fogo": "Fogo + fogo: o brilho aumenta rápido demais e a professora lembra de ir com calma.",
  "fogo|vento": "Fogo + vento: faíscas correm em círculos, mas apagam antes de assustar.",
  "vento|água": "Vento + água: pequenas ondas respondem como se o lago soubesse conversar.",
  "vento|fogo": "Vento + fogo: a chama dança alto e depois se acalma ao ouvir um feitiço baixinho.",
  "vento|vento": "Vento + vento: a sala vira um redemoinho de páginas e risadas."
};

const threads = {
  mamae: {
    name: "Mamae",
    avatar: "M",
    group: "familia",
    mood: "familia • acolhimento",
    hint: "Perguntas carinhosas, fotos do dia e brincadeiras magicas para deixar Cora acompanhada.",
    badge: "💜",
    teaser: "Lembra de respirar com a barriga. \uD83D\uDC9C",
    time: "09:12",
    unread: 1,
    status: "online agora",
    note: "Quando a conversa e com a mamae, o cuidado vem misturado com coragem e imaginacao.",
    messages: [
      { from: "family", type: "text", text: "Bom dia, minha bruxinha fedorentinha. 💜 Como esta seu coracao hoje?", time: "08:51" },
      { from: "cora", type: "text", text: "Acordei com um pedacinho de saudade hoje. 🥺", time: "08:52" },
      { from: "family", type: "text", text: "Tudo bem sentir saudade, viu? A gente pode sentir falta e continuar vivendo coisas bonitas agora. ✨", time: "08:53" },
      { from: "family", type: "photo", title: "Ceu de Bruxilia 🌙", caption: "Olha a cor do ceu hoje. Pensei em voce na mesma hora. 💜", time: "08:55" },
      { from: "family", type: "text", text: "Vamos brincar de alguma coisa pelo Bruxozap? 🧪✨", time: "08:57" }
    ],
    extras: {
      foto: { from: "family", type: "photo", title: "Cozinha baguncada ✨", caption: "A cozinha ta um caos bonito hoje. Acho que essa panela esta tentando me dizer alguma coisa. 🫧", time: "09:12" },
      quiz: { from: "family", type: "text", text: "Quiz de magia! O que voce acha que acontece se eu misturar 💧 + 🐸 + 🌿 ? ✨", time: "09:13" },
      adesivo: { from: "family", type: "sticker", text: "Caldeirao sorridente ativado. ✨💜", time: "09:14" },
      carinho: { from: "meta", type: "meta", text: 'Mamae respondeu: "Estou longe, mas meu colo encontra voce pelo som da minha voz." 💜', time: "09:15" },
      pergunta: { from: "family", type: "text", text: "Como foi a aula hoje? Aconteceu alguma coisa engraçada ou estranha? 😊", time: "09:16" }
    },
    replies: [
      {
        label: "A aula foi estranha",
        messages: [
          { from: "cora", type: "text", text: "A aula foi estranha hoje. ??", time: "09:17" },
          { from: "family", type: "text", text: "Hum... estranha como? Me conta com calma, eu quero saber de verdade. ??", time: "09:18" }
        ]
      },
      {
        label: "Quero brincar",
        messages: [
          { from: "cora", type: "text", text: "Quero brincar sim. ?", time: "09:17" },
          { from: "family", type: "text", text: "Entao vamos de quiz de magia. Voce acha que essa mistura vira uma planta puladora ou uma sopa que canta? ??", time: "09:18" }
        ]
      },
      {
        label: "To com saudade",
        messages: [
          { from: "cora", type: "text", text: "To com saudade tambem. ??", time: "09:17" },
          { from: "family", type: "text", text: "Eu sei, meu amor. Enquanto isso, eu fico aqui pertinho pelo Bruxozap. ??", time: "09:18" }
        ]
      },
      {
        label: "Me explica melhor",
        messages: [
          { from: "cora", type: "text", text: "Me explica melhor?", time: "09:17" },
          { from: "family", type: "text", text: "As vezes a gente sente muita coisa ao mesmo tempo, e tudo bem entender devagar. ??", time: "09:18" }
        ]
      }
    ],
    actions: {
      audio: { from: "meta", type: "meta", text: 'Voce abriu o audio da mamae e ouviu panelas, risos e um "saudade de voce" bem baixinho.', time: "09:18" },
      call: { from: "meta", type: "meta", text: "A ligacao dura pouco, mas basta para Cora lembrar que amor tambem mora na rotina.", time: "09:19" },
      video: { from: "meta", type: "meta", text: "Na videochamada, mamae mostra o laboratorio baguncado e faz careta para arrancar um sorriso.", time: "09:20" }
    }
  },
  pai: {
    name: "Papai",
    avatar: "P",
    group: "familia",
    mood: "familia • risada",
    hint: "Com o papai, a conversa vira saudade boa, foto engraçada e bobagem carinhosa.",
    badge: "📸",
    teaser: "Manda foto sua depois 😄",
    time: "09:02",
    unread: 0,
    status: "visto ha 2 min",
    note: "Com o papai, a distancia fica mais leve porque sempre cabe uma foto boba, uma risada ou um elogio.",
    messages: [
      { from: "family", type: "text", text: "Oi, meu amor 💜 Tava com saudade de voce.", time: "08:56" },
      { from: "family", type: "photo", title: "Nuvem em forma de sapo", caption: "Me fala a verdade: isso parece um sapo ou um pao voador? 📸", time: "08:57" },
      { from: "cora", type: "text", text: "Parece um sapo-pao 😄", time: "08:58" },
      { from: "family", type: "text", text: "Resposta correta. Eu nao entendo nada de magia, mas entendo que voce e a bruxinha mais linda do mundo ✨", time: "09:00" }
    ],
    extras: {
      foto: { from: "family", type: "photo", title: "Foto boba do dia", caption: "Vi isso e pensei: a Cora ia rir comigo agora. 😄", time: "09:02" },
      quiz: { from: "family", type: "text", text: "Pergunta importantissima: chapeu de panela conta como equipamento de bruxo? 😂", time: "09:03" },
      adesivo: { from: "family", type: "sticker", text: "Missao do papai: arrancar uma risada 😄", time: "09:04" },
      carinho: { from: "meta", type: "meta", text: 'Papai respondeu: "Nao entendo magia, mas entendo quando minha menina esta fazendo falta." 💜', time: "09:05" },
      pergunta: { from: "family", type: "text", text: "Me conta uma coisa boa do seu dia? Ou duas. Ou cinco. 📷", time: "09:06" }
    },
    replies: [
      {
        label: "Me manda foto",
        messages: [
          { from: "cora", type: "text", text: "Me manda foto 😄", time: "09:07" },
          { from: "family", type: "text", text: "Obedecendo imediatamente. Se tiver nuvem estranha, melhor ainda. 📸", time: "09:08" }
        ]
      },
      {
        label: "Voce e bobo",
        messages: [
          { from: "cora", type: "text", text: "Voce e muito bobo 😂", time: "09:07" },
          { from: "family", type: "text", text: "Obrigado. Esse e meu talento principal. 🤪", time: "09:08" }
        ]
      },
      {
        label: "To com saudade",
        messages: [
          { from: "cora", type: "text", text: "To com saudade tambem 💜", time: "09:07" },
          { from: "family", type: "text", text: "Entao fechou: eu mando foto, voce manda emoji e a saudade fica mais pequena. ✨", time: "09:08" }
        ]
      },
      {
        label: "Hahaha",
        messages: [
          { from: "cora", type: "text", text: "Hahaha 😄", time: "09:07" },
          { from: "family", type: "text", text: "Pronto. Objetivo do dia concluido com sucesso. 🫶", time: "09:08" }
        ]
      }
    ],
    actions: {
      audio: { from: "meta", type: "meta", text: 'No audio, o papai ri da propria piada e pergunta se chapeu de panela conta como magia.', time: "09:09" },
      call: { from: "meta", type: "meta", text: "Na ligacao, ele pede tres noticias da Cora e comemora cada uma como se fosse premio.", time: "09:10" },
      video: { from: "meta", type: "meta", text: "Na videochamada, ele vira a camera para mostrar uma nuvem engraçada e espera a teoria oficial da Cora.", time: "09:11" }
    }
  },
  "tia-ingrid": {
    name: "Tia Ingrid",
    avatar: "TI",
    group: "familia",
    mood: "familia • estilo",
    hint: "Tia Ingrid conversa sobre moda magica, quarto, passeios e detalhes que fazem Cora se sentir especial.",
    badge: "✨",
    teaser: "Vamos achar o look perfeito para hoje?",
    time: "08:40",
    unread: 2,
    status: "digitando...",
    note: "Com a Tia Ingrid, o carinho aparece em detalhes, elogios e no jeito divertido de ajudar Cora a se expressar.",
    messages: [
      { from: "family", type: "text", text: "Cora, pensei em voce quando vi uma fita lila brilhando na vitrine.", time: "08:34" },
      { from: "cora", type: "text", text: "Eu ia usar no cabelo ou amarrar no caderno. Acho que nos dois.", time: "08:35" },
      { from: "family", type: "photo", title: "Trio de acessorios", caption: "Qual deles parece mais com a sua coragem hoje?", time: "08:36" },
      { from: "family", type: "text", text: "Estilo tambem e um jeito de contar quem voce e.", time: "08:38" }
    ],
    extras: {
      foto: { from: "family", type: "photo", title: "Espelho encantado", caption: "Mais uma ideia de look para testar depois. ✨", time: "08:40" },
      quiz: { from: "family", type: "text", text: "Pergunta importante: hoje voce esta mais chapeu estrelado, cardiga lila ou botas brilhantes? 👒", time: "08:41" },
      adesivo: { from: "family", type: "sticker", text: "Espelho encantado com estrelinhas ✨", time: "08:42" },
      carinho: { from: "meta", type: "meta", text: 'Tia Ingrid respondeu: "Voce nao precisa combinar com tudo. Basta combinar com voce." 💜', time: "08:43" },
      pergunta: { from: "family", type: "text", text: "Quer que eu pense com voce uma ideia fofa para o seu quarto? 🌙", time: "08:44" }
    },
    replies: [
      {
        label: "Me mostra",
        messages: [
          { from: "cora", type: "text", text: "Me mostra 😍", time: "08:45" },
          { from: "family", type: "text", text: "Ja vou separar tres opcoes lindas e uma exagerada so por diversao. ✨", time: "08:46" }
        ]
      },
      {
        label: "Amei",
        messages: [
          { from: "cora", type: "text", text: "Amei 💜", time: "08:45" },
          { from: "family", type: "text", text: "Eu sabia. Isso esta muito com a sua cara. 🌟", time: "08:46" }
        ]
      },
      {
        label: "Fica bonito no quarto?",
        messages: [
          { from: "cora", type: "text", text: "Fica bonito no quarto? 🌙", time: "08:45" },
          { from: "family", type: "text", text: "Fica lindo. Principalmente perto de uma luzinha de lua e do cantinho do Noir. 🐈‍⬛", time: "08:46" }
        ]
      },
      {
        label: "Quero passeio",
        messages: [
          { from: "cora", type: "text", text: "Quero passeio ✨", time: "08:45" },
          { from: "family", type: "text", text: "Fechado. Passeio bonito, roupa fofa e talvez um bichinho estranho pelo caminho. 🐸", time: "08:46" }
        ]
      }
    ],
    actions: {
      audio: { from: "meta", type: "meta", text: "No audio, Tia Ingrid fala baixinho sobre brilho proprio e termina com uma risada gostosa.", time: "08:45" },
      call: { from: "meta", type: "meta", text: "Na ligacao, voces inventam nomes absurdos para roupas de bruxa e acabam rindo das mesmas tres ideias.", time: "08:46" },
      video: { from: "meta", type: "meta", text: "Na videochamada, Tia Ingrid mostra tecidos, fitas e pergunta qual cor parece mais com o humor do dia.", time: "08:47" }
    }
  },
  colegas: {
    name: "Colegas",
    avatar: "CL",
    group: "escola",
    mood: "escola • grupo ativo",
    hint: "O grupo das colegas mistura experimento, evento da escola e suspeitas sobre a Jade.",
    badge: "🧪",
    teaser: "A aula ja comecou a render fofoca magica.",
    time: "07:58",
    unread: 4,
    status: "grupo ativo",
    note: "As conversas com as colegas trazem pertencimento, brincadeira e aquele caos bom de quem divide o mesmo universo.",
    messages: [
      { from: "family", type: "text", text: "A aula de hoje ja rendeu uma teoria sobre por que a planta da janela cresceu torta.", time: "07:50" },
      { from: "cora", type: "text", text: "Foi magia ou foi falta de paciencia da turma?", time: "07:51" },
      { from: "family", type: "video", title: "Corredor da escola", caption: "Um brilho suspeito apareceu perto da sala da diretora.", duration: "0:05", time: "07:54" },
      { from: "family", type: "text", text: "Quando voce souber os nomes certos do grupo, eu guardo tudo aqui bonitinho.", time: "07:58" }
    ],
    extras: {
      foto: { from: "family", type: "photo", title: "Selfie tremida", caption: "Todo mundo junto antes da aula de magia. 📷", time: "08:00" },
      quiz: { from: "family", type: "text", text: "Qual experimento a gente testa na proxima aula: o perigoso ou o muito perigoso? 🧪", time: "08:01" },
      adesivo: { from: "family", type: "sticker", text: "Vassoura sorridente com cara de quem sabe mais do que conta 😏", time: "08:02" },
      carinho: { from: "meta", type: "meta", text: 'Uma colega respondeu: "Te guardamos um lugar perto da janela. Fica melhor quando voce chega." 💜', time: "08:03" },
      pergunta: { from: "family", type: "text", text: "Voce acha que foi a Jade ou a gente esta ficando dramaticas demais? 👀", time: "08:04" }
    },
    replies: [
      {
        label: "Quero participar",
        messages: [
          { from: "cora", type: "text", text: "Quero participar ✨", time: "08:05" },
          { from: "family", type: "text", text: "Otimo. Reuniao importantissima do grupo iniciada agora. 🧪", time: "08:06" }
        ]
      },
      {
        label: "Acho que foi a Jade",
        messages: [
          { from: "cora", type: "text", text: "Acho que foi a Jade 👀", time: "08:05" },
          { from: "family", type: "text", text: "Obrigada. Precisavamos da sua teoria oficial para levar a suspeita a serio. 🤫", time: "08:06" }
        ]
      },
      {
        label: "Me guardem lugar",
        messages: [
          { from: "cora", type: "text", text: "Me guardem lugar 💜", time: "08:05" },
          { from: "family", type: "text", text: "Ja esta guardado. Perto da janela, como sempre. ✨", time: "08:06" }
        ]
      },
      {
        label: "Vamos investigar",
        messages: [
          { from: "cora", type: "text", text: "Vamos investigar 🕵️", time: "08:05" },
          { from: "family", type: "text", text: "Investigacao discreta. Discreta mais ou menos. 😄", time: "08:06" }
        ]
      }
    ],
    actions: {
      audio: { from: "meta", type: "meta", text: "O audio do grupo mistura risadas, cochichos e uma tentativa ruim de cantar o hino da escola.", time: "08:05" },
      call: { from: "meta", type: "meta", text: "A ligacao vira conversa atravessada, todo mundo falando junto, e mesmo assim Cora entende que esta incluida.", time: "08:06" },
      video: { from: "meta", type: "meta", text: "Na videochamada, uma colega gira a camera para mostrar a sala e outra tenta esconder um experimento dando errado.", time: "08:07" }
    }
  }
};

let foundSocks = 0;
let noirIndex = 0;
let currentThread = "mamae";
let walkStep = 1;
let routineStep = 1;

const wardrobeState = {
  occasion: "aula de magia",
  look: "chapéu estrelado"
};

const magicState = {
  first: "planta",
  second: "água"
};

function openScreen(targetId) {
  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.id === targetId);
  });

  navButtons.forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.target === targetId && button.classList.contains("nav-chip")
    );
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getWaveformMarkup() {
  const bars = [45, 65, 32, 58, 80, 40, 72, 36, 60, 44, 70, 28];
  return bars
    .map((height) => `<span style="height:${height}%"></span>`)
    .join("");
}

function renderMediaBubble(message) {
  if (message.type === "audio") {
    const audioControl = message.source
      ? `<audio controls src="${message.source}"></audio>`
      : `<div class="waveform">${getWaveformMarkup()}</div>`;
    return `
      <div class="message-bubble message-bubble--audio">
        <div class="media-card">
          <div class="media-label"><span>${message.title}</span><span>${message.duration}</span></div>
          ${audioControl}
          <small>${message.caption}</small>
        </div>
      </div>
    `;
  }

  if (message.type === "photo") {
    const photoMarkup = message.source
      ? `<img src="${message.source}" alt="${message.title}">`
      : `<div class="media-visual">📷</div>`;
    return `
      <div class="message-bubble message-bubble--photo">
        <div class="media-card">
          ${photoMarkup}
          <div class="media-label"><span>${message.title}</span><span>foto</span></div>
          <small>${message.caption}</small>
        </div>
      </div>
    `;
  }

  if (message.type === "video") {
    const videoMarkup = message.source
      ? `<video controls preload="metadata" poster="${message.poster || ""}" src="${message.source}"></video>`
      : `<div class="media-visual"><span class="video-play">▶</span></div>`;
    return `
      <div class="message-bubble message-bubble--video">
        <div class="media-card">
          ${videoMarkup}
          <div class="media-label"><span>${message.title}</span><span>${message.duration}</span></div>
          <small>${message.caption}</small>
        </div>
      </div>
    `;
  }

  if (message.type === "sticker") {
    return `<div class="message-bubble message-bubble--sticker"><p>${message.text}</p></div>`;
  }

  if (message.type === "meta") {
    return `<div class="message-bubble"><p>${message.text}</p></div>`;
  }

  return `<div class="message-bubble message-bubble--text"><p>${message.text}</p></div>`;
}

function renderContactList() {
  const contactsMarkup = visibleThreadKeys
    .map((key) => [key, threads[key]])
    .map(([key, thread]) => {
      const unread = thread.unread ? `<span class="contact-badge">${thread.unread}</span>` : "";
      const activeClass = key === currentThread ? " active" : "";
      const groupPill = thread.group ? `<span class="contact-pill">${thread.group}</span>` : "";
      return `
        <button class="contact-button${activeClass}" data-thread="${key}" type="button">
          <span class="contact-avatar">${thread.avatar}</span>
          <span class="contact-copy">
            <strong>${thread.name}</strong>
            ${groupPill}
            <small>${thread.teaser}</small>
          </span>
          <span class="contact-meta">
            <span class="contact-time">${thread.time}</span>
            ${unread}
          </span>
        </button>
      `;
    })
    .join("");

  contactList.innerHTML = contactsMarkup;

  [...contactList.querySelectorAll(".contact-button")].forEach((button) => {
    button.addEventListener("click", () => {
      currentThread = button.dataset.thread;
      renderContactList();
      renderQuickReplies(currentThread);
      renderMessages(currentThread);
    });
  });
}

function renderQuickReplies(threadKey) {
  const thread = threads[threadKey];
  const replies = thread.replies || [];

  quickReplies.innerHTML = replies
    .map(
      (reply, index) =>
        `<button class="reply-option" data-thread="${threadKey}" data-index="${index}" type="button">${reply.label}</button>`
    )
    .join("");

  [...quickReplies.querySelectorAll(".reply-option")].forEach((button) => {
    button.addEventListener("click", () => {
      const reply = threads[button.dataset.thread].replies[Number(button.dataset.index)];
      renderMessages(currentThread, reply.messages);
    });
  });
}

function renderMessages(threadKey, extraMessage = null) {
  const thread = threads[threadKey];
  const messages = extraMessage
    ? [
        ...thread.messages,
        ...(
          Array.isArray(extraMessage)
            ? extraMessage
            : [typeof extraMessage === "string" ? { from: "meta", type: "meta", text: extraMessage } : extraMessage]
        )
      ]
    : thread.messages;

  messageList.innerHTML = messages
    .map((message) => {
      const bubbleMarkup = renderMediaBubble(message);
      const avatar = message.from === "cora" ? "C" : thread.avatar;
      const meta = message.from === "meta" ? "" : `<div class="message-meta">${message.time || ""}</div>`;
      const avatarMarkup = message.from === "meta" ? "" : `<span class="bubble-avatar">${avatar}</span>`;
      return `
        <div class="message-row from-${message.from}">
          ${message.from === "cora" ? "" : avatarMarkup}
          <div class="message-stack">
            ${meta}
            ${bubbleMarkup}
          </div>
          ${message.from === "cora" ? avatarMarkup : ""}
        </div>
      `;
    })
    .join("");

  threadName.textContent = thread.name;
  threadStatus.textContent = thread.status;
  threadAvatar.textContent = thread.avatar;
  threadMood.textContent = thread.mood || "conversa • carinho";
  threadHint.textContent = thread.hint || thread.note;
  threadBadge.textContent = thread.badge || "💬";
  composerName.textContent = thread.name;
  memoryNote.textContent = thread.note;
  messageList.scrollTop = messageList.scrollHeight;
}

function loadIllustration(slot, relativePath) {
  const image = new Image();

  image.onload = () => {
    const altText = slot.dataset.assetSlot.split("/").pop().replace(/-/g, " ");
    image.alt = altText;
    image.className = "slot-image";

    if (slot.classList.contains("portrait-slot")) {
      image.classList.add("slot-image--contain");
      slot.textContent = "";
      slot.appendChild(image);
      slot.classList.add("asset-loaded");
      return;
    }

    if (slot.classList.contains("city-preview")) {
      slot.textContent = "";
      slot.appendChild(image);
      slot.classList.add("asset-loaded");
      return;
    }

    if (slot.classList.contains("art-chip")) {
      image.classList.add("slot-image--contain");
      const label = document.createElement("span");
      label.className = "art-chip-label";
      label.textContent = relativePath.split("/").pop();
      slot.textContent = "";
      slot.append(image, label);
      slot.classList.add("asset-loaded");
      return;
    }

    if (slot.classList.contains("art-frame")) {
      slot.prepend(image);
      slot.classList.add("asset-loaded");
    }
  };

  image.src = `${assetBasePath}${relativePath}`;
}

function tryLoadAsset(slot, candidates, index = 0) {
  if (index >= candidates.length) {
    return;
  }

  const image = new Image();

  image.onload = () => {
    loadIllustration(slot, candidates[index]);
  };

  image.onerror = () => {
    tryLoadAsset(slot, candidates, index + 1);
  };

  image.src = `${assetBasePath}${candidates[index]}`;
}

function hydrateAssetSlots() {
  assetSlots.forEach((slot) => {
    const key = slot.dataset.assetSlot;
    const candidates = assetAliases[key] || [`${key}.webp`];
    tryLoadAsset(slot, candidates);
  });
}

function updateWardrobeResult() {
  wardrobeResult.textContent = `Hoje Cora vai para ${wardrobeState.occasion} usando ${wardrobeState.look}: um jeito gostoso de se vestir como quem reconhece o próprio brilho.`;
  quartoHudLook.textContent = wardrobeState.look;
}

function updateDecorResult() {
  const activeItems = decorButtons
    .filter((button) => button.classList.contains("active"))
    .map((button) => button.dataset.label);

  decorCounter.textContent = `${activeItems.length} item${activeItems.length === 1 ? "" : "s"}`;
  quartoHudDecor.textContent = `${activeItems.length} item${activeItems.length === 1 ? "" : "s"}`;
  decorResult.textContent = activeItems.length
    ? `O quarto ganhou o jeitinho da Cora com ${activeItems.join(", ")}.`
    : "O quarto ainda está em branco, esperando o jeitinho da Cora aparecer.";
}

function updateMagicResult() {
  const recipeKey = `${magicState.first}|${magicState.second}`;
  jardimHudMagic.textContent = `${magicState.first} + ${magicState.second}`;
  magicResult.textContent = magicRecipes[recipeKey] || "Essa combinação ainda está sendo estudada pela turma.";
}

function updateJournalCard(button) {
  journalCard.innerHTML = `<strong>${button.dataset.title}</strong><p>${button.dataset.body}</p>`;
  cadernoHudPage.textContent = button.dataset.title.replace("Pagina da ", "").replace("Pagina das ", "");
}

function updateMamaeHudQuestion(button) {
  mamaeHudQuestion.textContent = button.textContent.split("?")[0] || "Pergunta";
}

function updateMamaeHudExperiment(button) {
  mamaeHudExperiment.textContent = button.textContent.replace("Misturar ", "").replace("Adicionar ", "").replace("Mexer com ", "");
}

function updateVovoHudWalk() {
  vovoHudWalk.textContent = walkStep > 3 ? "Passeio completo" : `${Math.max(walkStep - 1, 0)} de 3`;
}

function updateVovoHudRoutine() {
  vovoHudRoutine.textContent = routineStep > 4 ? "Rotina pronta" : `${Math.max(routineStep - 1, 0)} de 4`;
}

function updateStyleHud(button) {
  vovoHudStyle.textContent = button.dataset.style;
}

function updateNoirHud(text) {
  quartoHudNoir.textContent = text;
}

function updateJadeHud(button) {
  jardimHudJade.textContent = button.textContent.slice(0, 26).trim();
}

function updateGardenHud(button) {
  jardimHudGarden.textContent = button.textContent;
}

function updateMoodHud(button) {
  cadernoHudMood.textContent = button.textContent;
}

function updateMemoryHud(button) {
  cadernoHudMemory.textContent = button.textContent;
}

function applyGuidedState(button) {
  const target = document.getElementById(button.dataset.stateTarget);
  if (!target) {
    return;
  }

  if (button.dataset.stateRichtext) {
    target.innerHTML = button.dataset.stateRichtext;
  } else if (button.dataset.stateMessage) {
    target.textContent = button.dataset.stateMessage;
  }
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openScreen(button.dataset.target);
  });
});

appActions.forEach((button) => {
  button.addEventListener("click", () => {
    const siblings = [...button.parentElement.querySelectorAll(".app-action")];
    siblings.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    applyGuidedState(button);
  });
});

guidedChips.forEach((button) => {
  button.addEventListener("click", () => {
    applyGuidedState(button);
  });
});

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("theme-glow");
  themeButton.textContent = document.body.classList.contains("theme-glow")
    ? "Voltar ao modo calmo"
    : "Modo festa";
});

noirButton.addEventListener("click", () => {
  noirIndex = (noirIndex + 1) % noirPositions.length;
  noirButton.style.top = noirPositions[noirIndex].top;
  noirButton.style.left = noirPositions[noirIndex].left;
  noirHint.textContent = noirHints[noirIndex];
  updateNoirHud(noirHints[noirIndex].split(".")[0]);
});

document.querySelectorAll(".sock-item").forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("sock-target")) {
      if (!item.classList.contains("found")) {
        item.classList.add("found");
        foundSocks += 1;
        sockCounter.textContent = foundSocks === 3 ? "Missão completa" : `${foundSocks} de 3`;
        mamaeHudSocks.textContent = foundSocks === 3 ? "Missao completa" : `${foundSocks} de 3`;
      }
      return;
    }

    item.classList.remove("miss");
    void item.offsetWidth;
    item.classList.add("miss");
  });
});

questionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    questionButtons.forEach((choice) => choice.classList.remove("active"));
    button.classList.add("active");
    replyCard.textContent = button.dataset.reply;
    updateMamaeHudQuestion(button);
  });
});

experimentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    experimentButtons.forEach((choice) => choice.classList.remove("active"));
    button.classList.add("active");
    experimentResult.textContent = button.dataset.result;
    updateMamaeHudExperiment(button);
  });
});

trailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const step = Number(button.dataset.step);
    if (step !== walkStep) {
      return;
    }

    if (button.dataset.correct === "true") {
      button.classList.add("done");
      walkResult.textContent = walkMessages[step];
      walkStep += 1;
      walkCounter.textContent = walkStep > 3 ? "Passeio completo" : `${walkStep - 1} de 3`;
      updateVovoHudWalk();

      trailButtons
        .filter((item) => Number(item.dataset.step) === walkStep)
        .forEach((item) => item.classList.remove("hidden"));

      if (walkStep > 3) {
        walkResult.textContent = "Vocês chegaram à pracinha. Vovô sorri e diz que caminhar junto sempre deixa tudo mais fácil.";
      }

      return;
    }

    button.classList.remove("miss");
    void button.offsetWidth;
    button.classList.add("miss");
    walkResult.textContent = "Esse caminho parece apressado demais. Vovô prefere seguir por onde Cora se sente segura.";
  });
});

routineButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const order = Number(button.dataset.order);
    if (order === routineStep) {
      button.classList.add("done");
      button.disabled = true;
      routineResult.textContent = routineMessages[order];
      routineCounter.textContent = order === 4 ? "Rotina pronta" : `${order} de 4`;
      routineStep += 1;
      updateVovoHudRoutine();
      return;
    }

    button.classList.remove("miss");
    void button.offsetWidth;
    button.classList.add("miss");
    routineResult.textContent = "Ainda não é essa etapa. Na casa da vovó, cada coisa tem seu momento.";
  });
});

styleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    styleButtons.forEach((choice) => choice.classList.remove("active"));
    button.classList.add("active");
    styleResult.textContent = `Resultado: ${button.dataset.style}. ${button.dataset.description}`;
    updateStyleHud(button);
  });
});

wardrobeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    wardrobeButtons
      .filter((choice) => choice.dataset.group === button.dataset.group)
      .forEach((choice) => choice.classList.remove("active"));

    button.classList.add("active");
    wardrobeState[button.dataset.group] = button.dataset.value;
    updateWardrobeResult();
  });
});

decorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    updateDecorResult();
  });
});

roomNoirButtons.forEach((button) => {
  button.addEventListener("click", () => {
    roomNoirButtons.forEach((choice) => choice.classList.remove("active"));
    button.classList.add("active");
    roomNoirResult.textContent = button.dataset.response;
    updateNoirHud(button.textContent);
  });
});

jadeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    jadeButtons.forEach((choice) => choice.classList.remove("active"));
    button.classList.add("active");
    jadeResult.textContent = button.dataset.result;
    updateJadeHud(button);
  });
});

magicButtons.forEach((button) => {
  button.addEventListener("click", () => {
    magicButtons
      .filter((choice) => choice.dataset.group === button.dataset.group)
      .forEach((choice) => choice.classList.remove("active"));

    button.classList.add("active");
    magicState[button.dataset.group] = button.dataset.value;
    updateMagicResult();
  });
});

gardenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    gardenButtons.forEach((choice) => choice.classList.remove("active"));
    button.classList.add("active");
    gardenResult.textContent = button.dataset.result;
    updateGardenHud(button);
  });
});

journalPageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    journalPageButtons.forEach((choice) => choice.classList.remove("active"));
    button.classList.add("active");
    updateJournalCard(button);
  });
});

moodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    moodButtons.forEach((choice) => choice.classList.remove("active"));
    button.classList.add("active");
    moodResult.textContent = button.dataset.result;
    updateMoodHud(button);
  });
});

memoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    memoryButtons.forEach((choice) => choice.classList.remove("active"));
    button.classList.add("active");
    memoryResult.textContent = button.dataset.result;
    updateMemoryHud(button);
  });
});

quickButtons.forEach((button) => {
  button.addEventListener("click", () => {
    renderMessages(currentThread, threads[currentThread].extras[button.dataset.extra]);
  });
});

phoneActionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    renderMessages(currentThread, threads[currentThread].actions[button.dataset.action]);
  });
});

updateWardrobeResult();
updateDecorResult();
updateMagicResult();
updateJournalCard(journalPageButtons[0]);
updateVovoHudWalk();
updateVovoHudRoutine();
updateStyleHud(styleButtons[0]);
updateNoirHud("Observando");
updateJadeHud(jadeButtons[0]);
updateGardenHud(gardenButtons[0]);
updateMoodHud(moodButtons[0]);
updateMemoryHud(memoryButtons[0]);
updateMamaeHudQuestion(questionButtons[0]);
mamaeHudSocks.textContent = "0 de 3";
mamaeHudExperiment.textContent = "Esperando";
renderContactList();
renderQuickReplies(currentThread);
renderMessages(currentThread);
hydrateAssetSlots();
