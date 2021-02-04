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
    breaks: true,
    gfm: true
  });

  const initialText = `
##### *Write your markdown in the editor to the left and it'll show up in the previewer on the right!*

<br>

Here are some of the things you can do:
=====
<br>

## Create a header
The hash symbols create headers according to the amount of hash symbols added:
# H1 
## H2 
### H3 
#### H4
##### H5
###### H6 is the max
<br>

## Add a link

You add your [text within the brackets](https://google.com/) and your url within the parentheses. 
This particular one leads to google. :)
<br>

## Add an image
Use an exclamation mark, followed by your alt text wrapped in brackets, followed by the link to your image wrapped in parentheses!
!["A waving polar bear"](https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)
<br>

## Add inline code
Put the code within backticks: \`console.log("Hello World")\` 
<br>

## Add a full block of code
If you want a full block of code you use 3 backticks before and after your block.
\`\`\`
var text = "Hello World!"
console.log(text)
\`\`\`
<br>

## Create lists! 
An unordered list is made with simple hyphens in front of each list item
- a list item
- another list item
- a third list item

<br>

While an ordered list is created by writing numbers
1. a list item
2. another list item
3. a third list item

<br>

## Add a blockquote 
> A blockquote is created using "greater than" signs at the start of your sentence!
> Here's another line of the quote
> ... It's not a very lengthy quote...

<br>

## And last but not least
You add *cursive text* using one asterisk on each side of the selection and **bolded text** using two asterisks.
<br>

## Now it's your turn! Go on - give it a go!
`;

  const [editValue, setEditValue] = useState(initialText);

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
