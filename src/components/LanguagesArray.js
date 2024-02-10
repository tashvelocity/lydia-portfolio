import { useState, useEffect } from "react";

const parseLanguages = (mdContent) => {
  const s = [];
  const lines = mdContent.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      const name = line.substr(3).trim();
      const tags = lines[++i].split(":")[1].trim();
      let description = "";
      const list = [];
      while (lines[++i] && !lines[i].startsWith("- List:")) {
        description += lines[i].trim() + "\n";
      }
      const listDesc = lines[++i].trim();
      while (lines[++i] && lines[i].startsWith("  - ")) {
        const listLine = lines[i].split("- ");
        const listText = listLine[1].trim();
        list.push({ text: listText });
      }

      s.push({
        name,
        tags: [tags],
        description,
        list,
        listDesc
      });
    }
  }

  return s;
};

const LanguagesArray = () => {
  const [Languages, setLanguages] = useState([]);

  useEffect(() => {
    fetch("/content/Languages.md")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch markdown content");
        }
        return response.text();
      })
      .then((mdContent) => {
        setLanguages(parseLanguages(mdContent));
      })
      .catch((error) => {
        console.error("Error fetching markdown content:", error);
      });
  }, []);

  return Languages;
};

export default LanguagesArray;
