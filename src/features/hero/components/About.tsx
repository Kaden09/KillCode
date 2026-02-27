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
    <div className="flex flex-col gap-8 w-[50%] relative ml-10">
      <div className="absolute -top-30 -left-10 z-0">
        <AboutBackgroundGrid />
      </div>
      <div className="flex items-center gap-4 z-99">
        <div className="flex -gap-2">
          <div className="w-9 h-9 bg-neutral-700 rounded-full -mr-4 opacity-0 animate-fade-in-left"></div>
          <div
            className="w-9 h-9 bg-neutral-600 rounded-full -mr-4 opacity-0 animate-fade-in-left"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-9 h-9 bg-neutral-500 rounded-full opacity-0 animate-fade-in-left"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
        <p
          className="text-2xl opacity-0 animate-fade-in-left"
          style={{ animationDelay: "0.2s" }}
        >
          {renderHighlightedText(displayedText)}
          {isTyping && (
            <span className="inline-block w-0.5 h-6 bg-contrast ml-0.5 animate-pulse" />
          )}
        </p>
      </div>
      <h1 className="text-6xl font-semibold z-99 mb-2 animate-fade-in-bottom-100">
        {i18n[language].hero.about.title.firstPart}{" "}
        <span className="text-contrast">
          {i18n[language].hero.about.title.secondPart}
        </span>
      </h1>
      <p
        className="text-secondary-font text-2xl z-99 w-[75%] leading-8 animate-fade-in-bottom-100"
        style={{ animationDelay: "0.1s" }}
      >
        {i18n[language].hero.about.description}
      </p>
      <div className="flex gap-3 z-99 mt-7">
        <a
          href="#contacts"
          className="flex items-center justify-center bg-secondary-bg border border-border rounded-full py-3 px-7 text-xl font-medium hover:bg-secondary-bg-hover duration-150 opacity-0 animate-fade-in-right"
          style={{ animationDelay: "0.1s" }}
        >
          {i18n[language].hero.about.contactsButton}
        </a>
        <Link
          to="/portfolio"
          className="flex items-center justify-center bg-contrast-bg rounded-full text-tertiary-font py-3 text-xl px-9 font-medium hover:bg-contrast-bg-hover duration-150 opacity-0 animate-fade-in-right"
          style={{ animationDelay: "0.2s" }}
        >
          {i18n[language].hero.about.portfolioButton}
        </Link>
      </div>
    </div>
  );
}

export default About;
