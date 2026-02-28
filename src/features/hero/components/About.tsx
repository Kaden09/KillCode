import { AboutBackgroundGrid } from "@/shared/assets";
import { I18nContext } from "@/shared/context/i18n-context";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";

function About() {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const { language, i18n } = useContext(I18nContext);

  const fullText =
    i18n[language].hero.about.stats.clients.firstPart +
    " " +
    i18n[language].hero.about.stats.clients.secondPart;
  const highlightPart = i18n[language].hero.about.stats.clients.firstPart;

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(typingEffect);
      }
    }, 30);

    return () => clearInterval(typingEffect);
  }, [fullText, highlightPart, language]);

  // Функция для разделения текста на подсвеченную и обычную части
  const renderHighlightedText = (text: string) => {
    if (text.startsWith(highlightPart)) {
      const restOfText = text.slice(highlightPart.length);
      return (
        <>
          <span className="text-contrast">{highlightPart}</span>
          <span>{restOfText}</span>
        </>
      );
    }
    return text;
  };

  return (
    <div className="flex flex-col justify-center items-center w-full gap-2 sm:gap-4 md:gap-4 lg:w-[50%] lg:items-start relative lg:ml-10">
      <div className="absolute min-[1024px]:-top-[25%] min-[1348px]:-top-[50%] lg:-left-10 z-0">
        <AboutBackgroundGrid />
      </div>
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 z-99">
        <div className="hidden sm:flex -gap-2">
          <div className="w-7 sm:w-7 md:w-8 h-7 sm:h-7 md:h-8 bg-neutral-700 rounded-full -mr-4 opacity-0 animate-fade-in-left"></div>
          <div
            className="w-7 sm:w-7 md:w-8 h-7 sm:h-7 md:h-8 bg-neutral-600 rounded-full -mr-4 opacity-0 animate-fade-in-left"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-7 sm:w-7 md:w-8 h-7 sm:h-7 md:h-8 bg-neutral-500 rounded-full opacity-0 animate-fade-in-left"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
        <p
          className="min-[1024px]:text-lg opacity-0 animate-fade-in-left"
          style={{ animationDelay: "0.2s" }}
        >
          {renderHighlightedText(displayedText)}
          {isTyping && (
            <span className="inline-block w-0.5 h-6 bg-contrast ml-0.5 animate-pulse" />
          )}
        </p>
      </div>
      <h1 className="text-2xl min-[400px]:text-4xl min-[600px]:text-5xl min-[1024px]:text-[32px] min-[1200px]:text-[40px] min-[1450px]:text-5xl font-semibold z-99 sm:mb-1 md:mb-2 animate-fade-in-bottom-100">
        {i18n[language].hero.about.title.firstPart}{" "}
        <span className="text-contrast">
          {i18n[language].hero.about.title.secondPart}
        </span>
      </h1>
      <p
        className="text-secondary-font text-center min-[200px]:text-xs min-[350px]:text-sm min-[450px]:text-base min-[600px]:text-lg min-[1024px]:text-base min-[1500px]:text-xl lg:text-start z-99 w-[75%] leading-6 sm:leading-7 md:leading-8 animate-fade-in-bottom-100"
        style={{ animationDelay: "0.1s" }}
      >
        {i18n[language].hero.about.description}
      </p>
      <div className="flex flex-col w-full min-[300px]:w-60 min-[550px]:w-100 lg:w-fit lg:flex-row gap-3 z-99 mt-4 sm:mt-5 md:mt-7">
        <a
          href="#contacts"
          className="flex items-center w-full justify-center bg-secondary-bg border border-border rounded-full py-3 px-9 sm:px-7 min-[200px]:text-sm min-[1024px]:text-sm min-[1200px]:text-base min-[1400px]:text-lg min-[1500px]:text-xl font-medium hover:bg-secondary-bg-hover duration-150 opacity-0 animate-fade-in-right"
          style={{ animationDelay: "0.1s" }}
        >
          {i18n[language].hero.about.contactsButton}
        </a>
        <Link
          to="/portfolio"
          className="flex items-center justify-center bg-contrast-bg rounded-full text-tertiary-font py-3 px-9 font-medium min-[200px]:text-sm min-[1024px]:text-sm min-[1200px]:text-base min-[1400px]:text-lg min-[1500px]:text-xl hover:bg-contrast-bg-hover duration-150 opacity-0 animate-fade-in-right"
          style={{ animationDelay: "0.2s" }}
        >
          {i18n[language].hero.about.portfolioButton}
        </Link>
      </div>
    </div>
  );
}

export default About;
