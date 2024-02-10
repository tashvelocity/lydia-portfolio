import { useState, useEffect } from "react";

const parseProjects = (mdContent) => {
  const projects = [];
  const lines = mdContent.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      const name = line.substr(3).trim();
      const imageLine = lines[++i];
      const image = imageLine.match(/!\[(.*)\]\((.*)\)/)[2];
      const tags = lines[++i].split(":")[1].trim();
      const badges = [];
      const buttons = [];
      let description = "";
      while (lines[++i] && !lines[i].startsWith("- Buttons:")) {
        description += lines[i].trim() + "\n";
      }
      while (lines[++i] && lines[i].startsWith("  - ")) {
        const buttonLine = lines[i].substr(4).split("[");
        const buttonText = buttonLine[0].trim();
        const buttonHref = buttonLine[1].split("]")[0].trim();
        buttons.push({ text: buttonText, href: buttonHref });
      }

      projects.push({
        name,
        description,
        image,
        tags: [tags],
        badges,
        buttons,
      });
    }
  }

  return projects;
};

const ProjectsArray = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/content/Projects.md")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch markdown content");
        }
        return response.text();
      })
      .then((mdContent) => {
        setProjects(parseProjects(mdContent));
      })
      .catch((error) => {
        console.error("Error fetching markdown content:", error);
      });
  }, []);

  return projects;
};

export default ProjectsArray;
