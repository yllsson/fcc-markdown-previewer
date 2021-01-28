const Editor = ({ editValue, setEditValue, html, setHtml, marked }) => {
  return (
    <textarea
      className='editor'
      id='editor'
      value={marked(editValue)}
      onChange={e => setEditValue(marked(e.target.value))}
    ></textarea>
  );
};

export default Editor;
