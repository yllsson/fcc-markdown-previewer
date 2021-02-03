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

  const initialText = `
Here's how to use this previewer:
===========================
<br>

The hash symbols create headers according to the amount of symbols:
# H1 
## H2 
### H3 
#### H4
##### H5
###### H6 is the max
<br>

#### This is how you add a link

You add your [text within the brackets](https://google.com/) and your url within the parentheses. 
This particular one leads to google. :)
<br>

#### This is how you add inline code
Put the code within backticks: \`console.log("Hello World")\` 
<br>

#### This is how you add a full block of code
If you want a full block of code you use 3 backticks before and after your block.
\`\`\`
var text = "Hello World!"
console.log(text)
\`\`\`
<br>

#### This is how you add an unordered list
- a list item
- another list item
- a third list item

<br>

#### This is how you add an ordered list
1. a list item
2. another list item
3. a third list item

<br>

#### This is how you add a blockquote 
> a blockquote 
> more lines of the quote
> it's not a very lengthy quote
<br>

#### This is how you add an image
![alt text](https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80 "A waving polar bear")
<br>

#### And last but not least
You add *cursive text* using one asterisk on each side of the text and **bolded text** using two asterisks.`;

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
