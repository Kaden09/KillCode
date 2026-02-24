function Code() {
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
    print(f"Stack: {', '.join(studio.stack)} // {studio}")
    `;

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
    <div className="bg-secondary-bg rounded-4xl pt-5 border border-border">
      <div className="flex items-center">
        <div className="flex gap-3 pl-9">
          <div className="w-3.5 h-3.5 bg-contrast rounded-full"></div>
          <div className="w-3.5 h-3.5 bg-white rounded-full"></div>
          <div className="w-3.5 h-3.5 bg-secondary-font rounded-full"></div>
        </div>
        <p className="text-secondary-font ml-80">Killcode.py</p>
      </div>
      <pre className="whitespace-pre-wrap">{highlightWords(pythonCode)}</pre>
    </div>
  );
}

export default Code;
