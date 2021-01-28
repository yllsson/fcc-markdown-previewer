// fcc stories still to be fulfilled
// User Story #3: When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.
// User Story #4: When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).
// User Story #5: When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
// User Story #6: When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element.
// Optional Bonus (you do not need to make this test pass): My markdown previewer interprets carriage returns and renders them as br (line break) elements.

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import Preview from './components/Preview';

function App() {
  const [editValue, setEditValue] = useState('Try writing something!');
  const marked = require('marked');
  // const markedHtml = () => {
  //   return ;
  // };
  const [html, setHtml] = useState({
    __html: marked('# Marked in Node.js\n\nRendered by **marked**.')
  });

  return (
    <div className='App'>
      <div dangerouslySetInnerHTML={html}></div>
      <Header />
      <Editor editValue={editValue} setEditValue={setEditValue} />
      <Preview editValue={editValue} setEditValue={setEditValue} />
    </div>
  );
}

export default App;
