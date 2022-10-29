import { marked } from "marked";
import { useState } from "react";
import "./App.css";

const initialMarkdown =
  "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n";

function App() {
  const [editorMarkdown, setEditorMarkdown] = useState(initialMarkdown);
  const [currentMarkdown, setCurrentMarkdown] = useState(initialMarkdown);

  const getMarkdownText = () => {
    marked.setOptions({
      breaks: true,
    });

    const rawMarkup = marked.parse(currentMarkdown);
    return {
      __html: rawMarkup,
    };
  };

  return (
    <div className="App">
      <div className="editor">
        <div className="editor-header">Editor</div>
        <textarea
          id="editor"
          placeholder="Add your markdown here..."
          value={editorMarkdown}
          onChange={(e) => {
            setEditorMarkdown(e.target.value);
            setCurrentMarkdown(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="preview">
        <div className="preview-header">Previewer</div>
        <div
          id="preview"
          className="preview-area"
          placeholder="Markdown preview will appear here..."
          dangerouslySetInnerHTML={getMarkdownText()}
        ></div>
      </div>
    </div>
  );
}

export default App;
