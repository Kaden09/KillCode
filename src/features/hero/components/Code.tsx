import { useEffect, useState } from "react";

const pythonCode = `
import this
from datetime import datetime

class KillCode:
  """Where ideas become production"""

  def __init__(self):
      self.since = 2025
      self.stack = ('Solidity', 'React', 'Python', 'Go', '...')
      self._secret_sauce = 0.42  # answer to everything

  def ship(self, idea, tough=False):
      if tough:
          return f"⚡ {idea}? Consider it overengineered"
      return f"🚀 {idea} shipped with ❤️"

  def __repr__(self):
      return f"<KillCode since {self.since} — we eat crypto for breakfast>"

studio = KillCode()
print(studio.ship('DeFi app', tough=True))
print(f"Stack: {', '.join(studio.stack)} // {studio}")`;

function Code() {
  const [displayedCode, setDisplayedCode] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < pythonCode.length) {
        setDisplayedCode(pythonCode.slice(0, i + 1));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(typingEffect);
      }
    }, 6); // Скорость печати

    return () => clearInterval(typingEffect);
  }, []);

  const highlightWords = (text: string) => {
    const redWords = [
      "import",
      "class",
      "def",
      "return",
      "from",
      "True",
      "False",
      "idea",
      "studio",
      "Solidity",
      "React",
      "Python",
      "Go",
      "2025",
      "0.42",
      "if",
    ];
    const grayWords = ["datetime", "this", "=", "self", "print"];
    const allWords = [...redWords, ...grayWords];
    const regex = new RegExp(`\\b(${allWords.join("|")})\\b`, "g");

    return text.split(regex).map((part, index) => {
      if (redWords.includes(part)) {
        return (
          <span key={index} className="text-contrast font-medium">
            {part}
          </span>
        );
      }
      if (grayWords.includes(part)) {
        return (
          <span key={index} className="text-secondary-font">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="relative w-[49%] opacity-0 animate-fade-in-right z-99 hidden lg:block">
      <div className="bg-code-bg rounded-[44px] pt-5 pl-9 pb-5 pr-30 min-[1024px]:min-h-102 min-[1348px]:min-h-127 min-[1650px]:min-h-172 border border-border rounded-r-none border-r-0 relative">
        <div className="flex items-center">
          <div className="flex gap-3">
            <div className="min-[1024px]:w-2.5 min-[1024px]:h-2.5 min-[1650px]:w-3 min-[1650px]:h-3 bg-contrast rounded-full opacity-0 animate-fade-in-bottom-1s"></div>
            <div
              className="min-[1024px]:w-2.5 min-[1024px]:h-2.5 min-[1650px]:w-3 min-[1650px]:h-3 bg-white rounded-full opacity-0 animate-fade-in-bottom-1s"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="min-[1024px]:w-2.5 min-[1024px]:h-2.5 min-[1650px]:w-3 min-[1650px]:h-3 bg-secondary-font rounded-full opacity-0 animate-fade-in-bottom-1s"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
          <p
            className="text-secondary-font min-[1024px]:ml-40 min-[1348px]:ml-50 min-[1600px]:ml-60 opacity-0 min-[1024px]:text-[10px] min-[1450px]:text-[12px] min-[1650px]:text-[17px] animate-fade-in-bottom-1s"
            style={{ animationDelay: "0.3s" }}
          >
            Killcode.py
          </p>
        </div>
        <pre className="whitespace-pre-wrap text-8px min-[1024px]:text-[10px] min-[1100px]:text-[12px] min-[1354px]:text-[13px] min-[1650px]:text-[17px] min-h-full font-mono">
          {highlightWords(displayedCode)}
          {isTyping && (
            <span className="inline-block w-2 h-4 bg-contrast ml-0.5 animate-pulse" />
          )}
        </pre>
      </div>
      <div className="h-full w-15 bg-linear-to-l from-[#141414] to-transparent absolute right-0 top-0 pointer-events-none"></div>
    </div>
  );
}

export default Code;
