import type { I18nSchema } from "@/shared/types/i18n.types";
import { icons, images } from "@/shared/utils/i18n-imports";

export const en: I18nSchema = {
  header: {
    navigation: {
      advantages: "Adventages",
      instruction: "How to order",
      contacts: "Contacts",
      portfolio: "Portfolio",
    },
  },
  hero: {
    about: {
      stats: {
        clients: {
          firstPart: "100+",
          secondPart: "Satisfied Clients",
        },
      },
      title: {
        firstPart: "Development",
        secondPart: "Studio",
      },
      description:
        "We develop reliable and modern digital solutions. We actively support the growth and stability of your business.",
      contactsButton: "Get in touch",
      portfolioButton: "Portfolio",
    },
  },
  products: [
    "Bots",
    "Sites",
    "Scripts",
    "Automation",
    "AI Bots",
    "Landing pages",
    "VPN",
    "Parsers",
    "CRM Systems",
    "Applications",
    "Signal Bots",
  ],
  products2: [
    "Blockchain",
    "Trading Bots",
    "Coins (Crypto)",
    "E-commerce",
    "Automation",
    "Applications",
    "Smart contracts",
    "Mobile applications",
    "Bots",
    "VPN",
    "AI Bots",
  ],
  advantages: {
    title: {
      firstPart: "Our",
      secondPart: "Advantages",
    },
    subtitle:
      "With us, you won't worry about servers, bugs, and technical limitations - we'll take care of all these issues.",
    cards: [
      {
        Icon: icons.Zap,
        title: "Speed",
        desc: "We are not delaying the development process - the first results are already visible at the start.  We deliver on time, even when the task is more difficult than it seemed.",
      },
      {
        Icon: icons.Shield,
        title: "Safety",
        desc: "We don't compromise - each project goes through a multi-level review. We put security in the foundation, not add it at the end.",
      },
      {
        Icon: icons.CircleDollarSign,
        title: "Pricing",
        desc: "We offer solutions for any budget without loss of quality. Pay for the result, not for the team's hours of work.",
      },
    ],
  },
  instruction: {
    title: {
      firstPart: "How",
      secondPart: "to Order",
    },
    subtitle:
      "It's easier than you think: a short guide for those who value their time.",
    currentStep: "You're here now",
    steps: {
      firstStep: {
        title: "Project Specifications",
        description:
          "We will help you create and select references for your project.",
      },
      secondStep: {
        title: "Payment",
        description: "We accept a 50% prepayment before starting work",
      },
      tertiaryStep: {
        title: "Intermediate result",
        description: "Evaluate the result and edit it if necessary.",
      },
      fourthStep: {
        title: "Making edits",
        description: "We bring the result to the ideal",
      },
      fifthStep: {
        title: "Finished work",
        description: "The product is completely ready for use",
      },
    },
  },
  growth: {
    title: {
      firstPart: "We are growing",
      secondPart: "together",
    },
    subtitle: "We are getting stronger with each new project",
    growthSteps: [
      {
        title: "First projects",
        desc: "We started with small tasks - scripts, bots, and simple integrations. Each project became an experience that formed the basis of our expertise.",
      },
      {
        title: "Stack Expansion",
        desc: "We went beyond simple solutions and started taking on complex system tasks, server infrastructure, and fullstack development. The stack has grown, and so have the quality requirements.",
      },
      {
        title: "Major clients",
        desc: "Customers came with serious tasks: CRM, payment integrations, VPN infrastructure under load. We have learned how to work in conditions of high demands and tight deadlines.",
      },
      {
        title: "KillCode today",
        desc: "KillCode is a team that closes tasks of any complexity: from MVP to enterprise solutions. We don't just write code - we build products that work.",
      },
    ],
  },
  contacts: {
    title: {
      firstPart: "Work with",
      secondPart: "Us",
    },
    description:
      "An individual approach to each client, we try to immerse ourselves in the subject of the project as much as possible and implement it taking into account all the subtleties.",
    trustItems: [
      "Prompt response",
      "Free consultation",
      "Support at all stages",
    ],
    formFields: {
      name: "Name",
      contact: "Contact",
      message: "Project description...",
      send: "Submit",
      loading: "Loading...",
      sent: "Submitted",
    },
    contactItems: [
      {
        Icon: icons.GmailIcon,
        title: "Our Email",
        value: "studio@killcode.dev",
        link: "https://mail.google.com/mail/?view=cm&fs=1&to=studio@killcode.dev&su=Title&body=Text",
        ariaLabel: "Email",
      },
      {
        Icon: icons.TelegramIcon,
        title: "Our Telegram",
        value: "@killcodeteam",
        link: "https://t.me/killcodestudio",
        ariaLabel: "Telegram",
      },
      {
        Icon: icons.XIcon,
        title: "Our Twitter",
        value: "@killcodestudio",
        link: "https://x.com/killcodeteam",
        ariaLabel: "Twitter",
      },
    ],
    errorMessages: {
      name: {
        error: "Enter your name",
      },
      contact: {
        firstError: "Enter your contact",
        secondError: "The minimum contact length is 2 characters",
      },
      message: {
        firstError: "Enter your message",
        secondError: "The minimum message length is 5 characters",
      },
    },
  },
  portfolio: [
    {
      img: images.project1,
      title: "RAG-система для банковской платформы",
      desc: "Разработали RAG-систему для банковской платформы, которая обрабатывает обращения клиентов на основе базы знаний из документов, регламентов и FAQ - векторный поиск в связке с языковой моделью обеспечивает точные ответы без галлюцинаций и полное соответствие корпоративным стандартам.",
      cost: 1000,
      stack: [
        "Python",
        "OpenAI API",
        "PostgreSQL",
        "pgvector",
        "FastAPI",
        "Embeddings",
        "Vector Search",
        "RAG",
      ],
    },
    {
      img: images.project2,
      title: "Автоматическая выдача заказов - яндекс маркет",
      desc: "Реализовали комплексную автоматизацию для 3 магазинов: скрипт отправляет покупателю письмо с инструкцией по активации, бот пересылает уведомления о новых заказах в Telegram-группу продавцов и автоматически перенаправляет сообщения из чата для связи с продавцом.",
      cost: 400,
      stack: ["Python", "Aiogram", "Script", "Automation"],
    },
    {
      img: images.project3,
      title: "CRM для маркетплейсов",
      desc: "По заказу клиента разрабатываем CRM-систему для работы с популярными агрегаторами, начав с интеграции Wildberries - первого этапа в рамках поэтапной разработки. Внутри системы реализован единый интерфейс для просмотра всех чатов и транзакций с возможностью управления ими в режиме реального времени.",
      cost: 1500,
      stack: [
        "React",
        "TypeScript",
        "Tailwind",
        "Go",
        "PostgreSQL",
        "Rest api",
        "WebSocket",
        "Wildberries Api",
      ],
    },
    {
      img: images.project4,
      title: "VPN на Marzban",
      desc: "Развернули мульти-нодовую VPN-инфраструктуру на базе Marzban с серверами в России, Латвии, Германии, Турции и других странах - все конфиги Xray-core, Nginx, SSL и Docker писались вручную, результатом стала стабильная система с поддержкой VLESS, Reality и обхода блокировок (включая белые списки) под реальных пользователей.",
      cost: 500,
      stack: ["Marzban", "Xray-core", "Vless", "Trojan", "Nginx", "VPN"],
    },
    {
      img: images.project5,
      title: "Телеграмм бот для цифрового магазина",
      desc: "Реализовали в этом заказе систему баланса , пополнение по карте/спб, систему приема заявок на заказ, автоматический скрипт для захода на акк, админку для добавления промокодов, выключения/отключения автокода, создания новых товаров и рассылки. ",
      cost: 500,
      stack: ["Python", "Aiogram", "Script", "Mysql"],
    },
    {
      img: images.project6,
      title: "Телеграмм бот с нейросетями",
      desc: "Разработали Telegram-бота с поддержкой текста и изображений, встроенное мини-приложение на базе полноценного сайта и бэкенд на FastAPI - несмотря на комплексность задачи, вся связка bot-логики, веб-интерфейса и серверной части была реализована за 5 рабочих дней.",
      cost: 750,
      stack: ["Python", "Aiogram", "React", "Fastapi", "Mysql"],
    },
    {
      img: images.project7,
      title: "Телеграмм бот для уникализации постов",
      desc: "Для реализации написали бота, который через библиотеку и подключенный к боту акк ловит сообщения из тгк и отправляет их в группу для дальнейшего выбора действий. Между моментом пересылки в группу есть прослойка в виде нейронки, которая делает текст уникальным. Снизу под постом идет новая актуальная ссылка на тгк",
      cost: 200,
      stack: ["Python", "Aiogram", "OpenAi", "Telethon"],
    },
    {
      img: images.project8,
      title: "Платёжные страницы Tilda",
      desc: "Разработали кастомную платёжную страницу на Tilda с нуля - стандартных блоков не хватало, поэтому сверстали собственный фронтенд по дизайну клиента и написали бэкенд на Python для обработки платежей, совместив возможности платформы с кастомной логикой и обойдя её ограничения.",
      cost: 250,
      stack: ["Tilda", "Python", "Html", "Css", "Fastapi"],
    },

    {
      img: images.project9,
      title: "Дизайн для сайта по продаже подписок PS/EA",
      desc: "Реализовали макет дизайна в Figma с учетом предпочтений клиента",
      cost: 150,
      stack: ["Figma"],
    },
    {
      img: images.project10,
      title: "Автоматизация Яндекс Маркет",
      desc: 'Скрипт парсит жанры игр со страниц PlayStation Store и записывает их в Excel-файл. Затем второй скрипт берёт эти данные и через апи Яндекс.Маркет массово обновляет характеристику "Жанр" у товаров в трёх магазинах. По сути - автоматизация ручной работы по заполнению жанров игр на ЯМ.',
      cost: 100,
      stack: ["Python", "Api", "Script"],
    },
    {
      img: images.project11,
      title: "Телеграмм скрипт",
      desc: "Скрипт подключается к аккаунту через Telethon, выбирает случайное изображение из папки и устанавливает его как фото профиля через загрузку файла и запрос обновления аватарки. Затем он получает сущность канала, проверяет наличие аккаунта среди участников и если подписки нет - подписывается на канал",
      cost: 50,
      stack: ["Python", "Telethon"],
    },
  ],
  footer: {
    slogan: "We help you scale your business - quickly and safely",
    contacts: [
      {
        Icon: icons.TelegramIcon,
        link: "https://t.me/killcodestudio",
        ariaLabel: "Telegram",
      },
      {
        Icon: icons.GmailIcon,
        link: "https://mail.google.com/mail/?view=cm&fs=1&to=studio@killcode.dev&su=Title&body=Text",
        ariaLabel: "Email",
      },
      {
        Icon: icons.XIcon,
        link: "https://x.com/killcodestudio",
        ariaLabel: "Twitter",
      },
    ],
  },
};
