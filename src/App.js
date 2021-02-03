// the Marked library: https://cdnjs.com/libraries/marked).

// fcc stories still to be fulfilled
// Optional Bonus (you do not need to make this test pass): My markdown previewer interprets carriage returns and renders them as br (line break) elements.

import React, { useState } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import Preview from './components/Preview';

function App() {
  const marked = require('marked');
  marked.setOptions({
    breaks: true
  });
  const initialText = `# a header (H1 size)
  
## a sub header (H2 size)
  
[a link](https://twitter.com/home)

\`inline code\` 

\`\`\`
a code block 
var text = "Hello World!"
console.log(text)
\`\`\`

- a list item

> a blockquote 

![alt text](https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80 "A waving polar bear")

**and bolded text**`;
  const [editValue, setEditValue] = useState(initialText);

  console.log(marked(editValue));
  return (
    <div className='App'>
      <Header />
      <main className='container'>
        <Editor
          marked={marked}
          editValue={editValue}
          setEditValue={setEditValue}
        />
        <Preview marked={marked} editValue={editValue} />
      </main>
    </div>
  );
}

export default App;
