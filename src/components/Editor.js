const Editor = ({ editValue, setEditValue }) => {
  return (
    <div>
      <h2 className='winHeader'>Editor</h2>
      <textarea
        className='window editor'
        id='editor'
        value={editValue}
        onChange={e => {
          setEditValue(e.target.value);
        }}
      ></textarea>
    </div>
  );
};

export default Editor;
