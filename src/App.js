import { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [input, setInput] = useState(
    `## markdown preview 
\n # H1 \n ## H2 \n ### H3 
\n **bold text**\n *italicized text*
 \n > blockquote \n 1. First item
 \n 2. Second item \n3. Third item
 \n- First item
\n- Second item
\n- Third item
\n ---
  \n [title](https://www.example.com)
  \n ![image](https://cdn.pixabay.com/photo/2022/11/07/10/13/christmas-7576056_640.jpg)
`
  );

  return (
    <div className="App">
      <textarea
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p className="result">
        <ReactMarkdown>{input}</ReactMarkdown>
      </p>
    </div>
  );
}

export default App;
