import { I18nContext } from "@/shared/context/i18n-context";
import { useContext, useMemo } from "react";
import type { IPortfolioItem } from "./PortfolioItem";
import firstProject from "@/shared/assets/images/firstProject.jpg";
import secondProject from "@/shared/assets/images/secondProject.jpg";
import thirdProject from "@/shared/assets/images/thirdProject.jpg";
import fourthProject from "@/shared/assets/images/fourthProject.jpg";
import fifthProject from "@/shared/assets/images/fifthProject.webp";
import sixthProject from "@/shared/assets/images/sixthProject.jpg";
import seventhProject from "@/shared/assets/images/seventhProject.png";
import eighthProject from "@/shared/assets/images/eighthProject.jpg";
import ninthProject from "@/shared/assets/images/ninthProject.jpg";
import tenthProject from "@/shared/assets/images/tenthProject.webp";
import eleventhProject from "@/shared/assets/images/eleventhProject.jpg";

export function useData() {
  const { language, i18n } = useContext(I18nContext);

  const data: IPortfolioItem[] = useMemo(
    () => [
      {
        img: eleventhProject,
        title: "RAG-система для банковской платформы",
        desc: "Разработали RAG-систему для банковской платформы, которая обрабатывает обращения клиентов на основе базы знаний из документов, регламентов и FAQ - векторный поиск в связке с языковой моделью обеспечивает точные ответы без галлюцинаций и полное соответствие корпоративным стандартам.",
        cost: 1000,
        technology: [
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
        img: firstProject,
        title: "Автоматическая выдача заказов - яндекс маркет",
        desc: "Реализовали комплексную автоматизацию для 3 магазинов: скрипт отправляет покупателю письмо с инструкцией по активации, бот пересылает уведомления о новых заказах в Telegram-группу продавцов и автоматически перенаправляет сообщения из чата для связи с продавцом.",
        cost: 400,
        technology: ["Python", "Aiogram", "Script", "Automation"],
      },
      {
        img: tenthProject,
        title: "CRM для маркетплейсов",
        desc: "По заказу клиента разрабатываем CRM-систему для работы с популярными агрегаторами, начав с интеграции Wildberries - первого этапа в рамках поэтапной разработки. Внутри системы реализован единый интерфейс для просмотра всех чатов и транзакций с возможностью управления ими в режиме реального времени.",
        cost: 1500,
        technology: [
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
        img: eighthProject,
        title: "VPN на Marzban",
        desc: "Развернули мульти-нодовую VPN-инфраструктуру на базе Marzban с серверами в России, Латвии, Германии, Турции и других странах - все конфиги Xray-core, Nginx, SSL и Docker писались вручную, результатом стала стабильная система с поддержкой VLESS, Reality и обхода блокировок (включая белые списки) под реальных пользователей.",
        cost: 500,
        technology: ["Marzban", "Xray-core", "Vless", "Trojan", "Nginx", "VPN"],
      },
      {
        img: sixthProject,
        title: "Телеграмм бот для цифрового магазина",
        desc: "Реализовали в этом заказе систему баланса , пополнение по карте/спб, систему приема заявок на заказ, автоматический скрипт для захода на акк, админку для добавления промокодов, выключения/отключения автокода, создания новых товаров и рассылки. ",
        cost: 500,
        technology: ["Python", "Aiogram", "Script", "Mysql"],
      },
      {
        img: secondProject,
        title: "Телеграмм бот с нейросетями",
        desc: "Разработали Telegram-бота с поддержкой текста и изображений, встроенное мини-приложение на базе полноценного сайта и бэкенд на FastAPI - несмотря на комплексность задачи, вся связка bot-логики, веб-интерфейса и серверной части была реализована за 5 рабочих дней.",
        cost: 750,
        technology: ["Python", "Aiogram", "React", "Fastapi", "Mysql"],
      },
      {
        img: fourthProject,
        title: "Телеграмм бот для уникализации постов",
        desc: "Для реализации написали бота, который через библиотеку и подключенный к боту акк ловит сообщения из тгк и отправляет их в группу для дальнейшего выбора действий. Между моментом пересылки в группу есть прослойка в виде нейронки, которая делает текст уникальным. Снизу под постом идет новая актуальная ссылка на тгк",
        cost: 200,
        technology: ["Python", "Aiogram", "OpenAi", "Telethon"],
      },
      {
        img: ninthProject,
        title: "Платёжные страницы Tilda",
        desc: "Разработали кастомную платёжную страницу на Tilda с нуля - стандартных блоков не хватало, поэтому сверстали собственный фронтенд по дизайну клиента и написали бэкенд на Python для обработки платежей, совместив возможности платформы с кастомной логикой и обойдя её ограничения.",
        cost: 250,
        technology: ["Tilda", "Python", "Html", "Css", "Fastapi"],
      },

      {
        img: thirdProject,
        title: "Дизайн для сайта по продаже подписок PS/EA",
        desc: "Реализовали макет дизайна в Figma с учетом предпочтений клиента",
        cost: 150,
        technology: ["Figma"],
      },
      {
        img: seventhProject,
        title: "Автоматизация Яндекс Маркет",
        desc: 'Скрипт парсит жанры игр со страниц PlayStation Store и записывает их в Excel-файл. Затем второй скрипт берёт эти данные и через апи Яндекс.Маркет массово обновляет характеристику "Жанр" у товаров в трёх магазинах. По сути - автоматизация ручной работы по заполнению жанров игр на ЯМ.',
        cost: 100,
        technology: ["Python", "Api", "Script"],
      },
      {
        img: fifthProject,
        title: "Телеграмм скрипт",
        desc: "Скрипт подключается к аккаунту через Telethon, выбирает случайное изображение из папки и устанавливает его как фото профиля через загрузку файла и запрос обновления аватарки. Затем он получает сущность канала, проверяет наличие аккаунта среди участников и если подписки нет - подписывается на канал",
        cost: 50,
        technology: ["Python", "Telethon"],
      },
    ],
    [language, i18n],
  );

  return { data };
}
